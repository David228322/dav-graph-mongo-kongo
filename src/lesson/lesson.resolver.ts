import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson(): LessonType {
    return {
      id: 'sdfsdfsdf',
      name: 'sdlfjlsdjflsjdflsdf',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}

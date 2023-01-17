import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { PlatformLevel } from '../entities/platformLevel.entity';

export default class PlatformLevelSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(PlatformLevel);
    await repository.insert([
      {
        platformName: '백준',
        levelName: '브론즈3 이하',
        game: 0,
      },
      {
        platformName: '백준',
        levelName: '브론즈2 이상',
        game: 1,
      },
      {
        platformName: '백준',
        levelName: '실버',
        game: 2,
      },
      {
        platformName: '백준',
        levelName: '골드',
        game: 3,
      },
      {
        platformName: '백준',
        levelName: '플레티넘',
        game: 4,
      },
      {
        platformName: '백준',
        levelName: '다이아',
        game: 5,
      },
      {
        platformName: '백준',
        levelName: '루비',
        game: -1, // 하루 무제한을 어떻게 표시하지..
      },
      {
        platformName: '프로그래머스',
        levelName: 'level0',
        game: 0,
      },
      {
        platformName: '프로그래머스',
        levelName: 'level1',
        game: 1,
      },
      {
        platformName: '프로그래머스',
        levelName: 'level2',
        game: 2,
      },
      {
        platformName: '프로그래머스',
        levelName: 'level3',
        game: 3,
      },
      {
        platformName: '프로그래머스',
        levelName: 'level4',
        game: 4,
      },
      {
        platformName: '프로그래머스',
        levelName: 'level5',
        game: 5,
      },
      {
        platformName: '프로그래머스',
        levelName: 'SQL-level2이하',
        game: 0,
      },
      {
        platformName: '프로그래머스',
        levelName: 'SQL-level3',
        game: 1,
      },
      {
        platformName: '프로그래머스',
        levelName: 'SQL-level4',
        game: 2,
      },
      {
        platformName: '프로그래머스',
        levelName: 'SQL-level5',
        game: 3,
      },
      {
        platformName: '해커랭크',
        levelName: 'Easy',
        game: 1,
      },
      {
        platformName: '해커랭크',
        levelName: 'Medium',
        game: 2,
      },
      {
        platformName: '해커랭크',
        levelName: 'Hard',
        game: 3,
      },
    ]);
  }
}

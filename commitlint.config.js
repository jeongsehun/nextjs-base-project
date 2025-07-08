module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 타입은 소문자만 허용
    'type-case': [2, 'always', 'lower-case'],
    // 제목은 50자 이하
    'subject-max-length': [2, 'always', 50],
    // 본문은 72자에서 줄바꿈
    'body-max-line-length': [2, 'always', 72],
    // 타입은 반드시 포함
    'type-empty': [2, 'never'],
    // 제목은 반드시 포함
    'subject-empty': [2, 'never'],
  },
};

module.exports = {
  name: 'sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sample',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

export default class RepositorySchema {
  static schema = {
    name: 'RepositorySchema',
    primaryKey: {type: 'int', indexed: true},
    properties: {
      name: 'string',
      fullName: 'string',
      descriptions: 'string',
      stars: 'int',
      forks: 'int',
    },
  };
}

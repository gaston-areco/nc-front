export class Api {
  constructor(http, baseUrl, resource, config = {}) {
    this._http = http;
    this._baseUrl = baseUrl;
    this._resource = resource;

    if (Object.keys(config).length) {
      this._config = config;
    }
  }

  /**
   * @param  {string} apiMethod
   * @param  {object} instance - resource to create
   * @param  {object} config - axios' configuration object
   * @return {Promise<resource>}
   */
  async create(apiMethod = '', config = {}, instance) {
    config = {...this._config, ...config};
    const uri = this._uriConstructor('', apiMethod);

    return this._http.post(uri, instance, config);
  }

  /**
   * @param  {string} apiMethod
   * @param  {object} config - axios' configuration object
   * @return {Promise<resource[]>}
   */
  async find(apiMethod = '', config = {}) {
    config = {...this._config, ...config};
    const uri = this._uriConstructor('', apiMethod);

    return this._http.get(uri, config);
  }

  /**
   * @param  {string} id
   * @param  {string} apiMethod
   * @return {string}
   */
  _uriConstructor(id = '', apiMethod = '') {
    let uri = `${this._baseUrl}/${this._resource}`;

    if (id) {
      uri += `/${id}`;
    }

    if (apiMethod) {
      uri += `/${apiMethod}`;
    }

    return uri;
  }
}

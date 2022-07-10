import {Api} from '@/api/api';
import http from '@/plugins/http-client';

export const $api = new Api(http, process.env.VUE_APP_BASE_URL, 'api');

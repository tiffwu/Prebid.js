import { ajax } from 'src/ajax';
import adapter from 'AnalyticsAdapter';

const utils = require('../../utils');

const url = '//eb2.3lift.com/analytics';
const analyticsType = 'endpoint';

export default utils.extend(adapter(
  {
    url,
    analyticsType
  }
  ),
  {
    track({ eventType, args }) {
      ajax(url, null, JSON.stringify({ eventType, args }));
    }
  });

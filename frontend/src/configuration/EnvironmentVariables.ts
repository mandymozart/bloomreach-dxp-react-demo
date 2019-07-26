import BaseUrlsModel from '../models/dxp/BaseUrls.model';
import SPAEnvironmentModel from '../models/dxp/SPAEnvironment.model';

const defaultScheme = 'http';
const defaultCmsHostName = 'localhost';
const defaultCmsPort = '8080';
const defaultCmsContextPath = 'site';
const defaultCmsChannelPath = '';
const defaultCmsPreviewPrefix = '_cmsinternal';
const defaultCmsApiPath = 'resourceapi';
const defaultCmsApiComponentRenderingUrlSuffix = '?_hn:type=component-rendering&_hn:ref=';

const SPAENV: SPAEnvironmentModel = new SPAEnvironmentModel();

let scheme = (SPAENV.scheme) ? SPAENV.scheme : defaultScheme;
let cmsHostName = (SPAENV.cmsHostName) ? SPAENV.cmsHostName : defaultCmsHostName;
let cmsPort = (SPAENV.cmsPort) ? SPAENV.cmsPort : defaultCmsPort;

const cmsContextPath = (SPAENV.cmsContextPath) ? SPAENV.cmsContextPath : defaultCmsContextPath;
const cmsChannelPath = (SPAENV.cmsChannelPath) ? SPAENV.cmsChannelPath : defaultCmsChannelPath;
const cmsPreviewPrefix = (SPAENV.cmsPreviewPrefix) ? SPAENV.cmsPreviewPrefix : defaultCmsPreviewPrefix;
const cmsApiPath = (SPAENV.cmsApiPath) ? SPAENV.cmsApiPath : defaultCmsApiPath;
const cmsApiComponentRenderingUrlSuffix = (SPAENV.cmsApiComponentRenderingUrlSuffix) ?
        SPAENV.cmsApiComponentRenderingUrlSuffix : defaultCmsApiComponentRenderingUrlSuffix;

// detect the host automatically from the hosted page if SPAENV wasn't given.
if (window.location.host !== 'localhost:3000') {
    scheme = (!SPAENV.scheme) ? window.location.protocol.replace(/:$/, '') : scheme;
    cmsHostName = (!SPAENV.cmsHostName) ? window.location.hostname : cmsHostName;
    cmsPort = (!SPAENV.cmsHostName) ? window.location.port : cmsPort;
}

// don't change these
const baseUrls: BaseUrlsModel = new BaseUrlsModel();
baseUrls.cmsBaseUrl = `${ scheme }://${ cmsHostName }:${ cmsPort }`;
baseUrls.cmsContextPath = cmsContextPath;
baseUrls.cmsChannelPath = cmsChannelPath;
baseUrls.cmsPreviewPrefix = cmsPreviewPrefix;
baseUrls.cmsApiPath = cmsApiPath;
baseUrls.cmsApiComponentRenderingUrlSuffix = cmsApiComponentRenderingUrlSuffix;

export default baseUrls;

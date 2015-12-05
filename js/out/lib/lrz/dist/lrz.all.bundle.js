!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(5),n(6),e.exports=n(7)},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(o,this),r(u,this))}function s(e){var t=this;return null===this._state?void this._deferreds.push(e):void c(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void (t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(o,this),r(u,this))}this._state=!0,this._value=e,a.call(this)}catch(n){u.call(this,n)}}function u(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)s.call(this,this._deferreds[e]);this._deferreds=null}function f(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}var c="function"==typeof t&&t||function(e){setTimeout(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){s.call(n,new f(e,t,r,i))})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(s,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var u=o.then;if("function"==typeof u)return void u.call(o,function(e){r(s,e)},n)}e[s]=o,0===--i&&t(e)}catch(a){n(a)}}if(0===e.length)return t([]);for(var i=e.length,s=0;s<e.length;s++)r(s,e[s])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._setImmediateFn=function(e){c=e},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t}var s=n(3).nextTick,o=Function.prototype.apply,u=Array.prototype.slice,a={},f=0;t.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=f++,r=arguments.length<2?!1:u.call(arguments,1);return a[n]=!0,s(function(){a[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete a[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){f=!1,o.length?a=o.concat(a):l=-1,a.length&&r()}function r(){if(!f){var e=setTimeout(n);f=!0;for(var t=a.length;t;){for(o=a,a=[];++l<t;)o&&o[l].run();l=-1,t=a.length}o=null,f=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function s(){}var o,u=e.exports={},a=[],f=!1,l=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new i(e,t)),1!==a.length||f||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,n){var r,i;(function(){function n(e){return!!e.exifdata}function s(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),s=new Uint8Array(i),o=0;r>o;o++)s[o]=n.charCodeAt(o);return i}function o(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function u(e,t){function n(n){var r=a(n),i=f(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=s(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},o(e.src,function(e){i.readAsArrayBuffer(e)})}else{var u=new XMLHttpRequest;u.onload=function(){200==this.status||0===this.status?n(u.response):t(new Error("Could not load image")),u=null},u.open("GET",e.src,!0),u.responseType="arraybuffer",u.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){v&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function a(e){var t=new DataView(e);if(v&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return v&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;i>r;){if(255!=t.getUint8(r))return v&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),v&&console.log(n),225==n)return v&&console.log("Found 0xFFE1 marker"),d(t,r+4,t.getUint16(r+2)-2);r+=2+t.getUint16(r+2)}}function f(e){var t=new DataView(e);if(v&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return v&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>n;){if(i(t,n)){var s=t.getUint8(n+7);s%2!==0&&(s+=1),0===s&&(s=4);var o=n+8+s,u=t.getUint16(n+6+s);return l(e,o,u)}n++}}function l(e,t,n){for(var r,i,s,o,u,a=new DataView(e),f={},l=t;t+n>l;)28===a.getUint8(l)&&2===a.getUint8(l+1)&&(o=a.getUint8(l+2),o in E&&(s=a.getInt16(l+3),u=s+5,i=E[o],r=p(a,l+5,s),f.hasOwnProperty(i)?f[i]instanceof Array?f[i].push(r):f[i]=[f[i],r]:f[i]=r)),l++;return f}function c(e,t,n,r,i){var s,o,u,a=e.getUint16(n,!i),f={};for(u=0;a>u;u++)s=n+12*u+2,o=r[e.getUint16(s,!i)],!o&&v&&console.log("Unknown tag: "+e.getUint16(s,!i)),f[o]=h(e,s,t,n,i);return f}function h(e,t,n,r,i){var s,o,u,a,f,l,c=e.getUint16(t+2,!i),h=e.getUint32(t+4,!i),d=e.getUint32(t+8,!i)+n;switch(c){case 1:case 7:if(1==h)return e.getUint8(t+8,!i);for(s=h>4?d:t+8,o=[],a=0;h>a;a++)o[a]=e.getUint8(s+a);return o;case 2:return s=h>4?d:t+8,p(e,s,h-1);case 3:if(1==h)return e.getUint16(t+8,!i);for(s=h>2?d:t+8,o=[],a=0;h>a;a++)o[a]=e.getUint16(s+2*a,!i);return o;case 4:if(1==h)return e.getUint32(t+8,!i);for(o=[],a=0;h>a;a++)o[a]=e.getUint32(d+4*a,!i);return o;case 5:if(1==h)return f=e.getUint32(d,!i),l=e.getUint32(d+4,!i),u=new Number(f/l),u.numerator=f,u.denominator=l,u;for(o=[],a=0;h>a;a++)f=e.getUint32(d+8*a,!i),l=e.getUint32(d+4+8*a,!i),o[a]=new Number(f/l),o[a].numerator=f,o[a].denominator=l;return o;case 9:if(1==h)return e.getInt32(t+8,!i);for(o=[],a=0;h>a;a++)o[a]=e.getInt32(d+4*a,!i);return o;case 10:if(1==h)return e.getInt32(d,!i)/e.getInt32(d+4,!i);for(o=[],a=0;h>a;a++)o[a]=e.getInt32(d+8*a,!i)/e.getInt32(d+4+8*a,!i);return o}}function p(e,t,n){var r,i="";for(r=t;t+n>r;r++)i+=String.fromCharCode(e.getUint8(r));return i}function d(e,t){if("Exif"!=p(e,t,4))return v&&console.log("Not valid EXIF data! "+p(e,t,4)),!1;var n,r,i,s,o,u=t+6;if(18761==e.getUint16(u))n=!1;else{if(19789!=e.getUint16(u))return v&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(u+2,!n))return v&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var a=e.getUint32(u+4,!n);if(8>a)return v&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(u+4,!n)),!1;if(r=c(e,u,u+a,y,n),r.ExifIFDPointer){s=c(e,u,u+r.ExifIFDPointer,g,n);for(i in s){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":s[i]=w[i][s[i]];break;case"ExifVersion":case"FlashpixVersion":s[i]=String.fromCharCode(s[i][0],s[i][1],s[i][2],s[i][3]);break;case"ComponentsConfiguration":s[i]=w.Components[s[i][0]]+w.Components[s[i][1]]+w.Components[s[i][2]]+w.Components[s[i][3]]}r[i]=s[i]}}if(r.GPSInfoIFDPointer){o=c(e,u,u+r.GPSInfoIFDPointer,b,n);for(i in o){switch(i){case"GPSVersionID":o[i]=o[i][0]+"."+o[i][1]+"."+o[i][2]+"."+o[i][3]}r[i]=o[i]}}return r}var v=!1,m=function(e){return e instanceof m?e:this instanceof m?void (this.EXIFwrapped=e):new m(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=m),t.EXIF=m;var g=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},y=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},b=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},w=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},E={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(e,t){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(n(e)?t&&t.call(e):u(e,t),!0)},m.getTag=function(e,t){return n(e)?e.exifdata[t]:void 0},m.getAllTags=function(e){if(!n(e))return{};var t,r=e.exifdata,i={};for(t in r)r.hasOwnProperty(t)&&(i[t]=r[t]);return i},m.pretty=function(e){if(!n(e))return"";var t,r=e.exifdata,i="";for(t in r)r.hasOwnProperty(t)&&(i+="object"==typeof r[t]?r[t]instanceof Number?t+" : "+r[t]+" ["+r[t].numerator+"/"+r[t].denominator+"]\r\n":t+" : ["+r[t].length+" values]\r\n":t+" : "+r[t]+"\r\n");return i},m.readFromBinaryFile=function(e){return a(e)},r=[],i=function(){return m}.apply(t,r),void 0===i||!(e.exports=i)}).call(this)},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return!1}function s(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var s=i.getImageData(0,0,1,n).data,o=0,u=n,a=n;a>o;){var f=s[4*(a-1)+3];0===f?u=a:o=a,a=u+o>>1}var l=a/n;return 0===l?1:l}function o(e,t,n){var r=document.createElement("canvas");return u(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function u(e,t,r,i){var o=e.naturalWidth,u=e.naturalHeight,f=r.width,l=r.height,h=t.getContext("2d");h.save(),a(t,h,f,l,r.orientation);var p=n(e);p&&(o/=2,u/=2);var d=1024,v=document.createElement("canvas");v.width=v.height=d;for(var m=v.getContext("2d"),g=i?s(e,o,u):1,y=Math.ceil(d*f/o),b=Math.ceil(d*l/u/g),w=0,E=0;u>w;){for(var S=0,x=0;o>S;)m.clearRect(0,0,d,d),m.drawImage(e,-S,-w),h.drawImage(v,0,0,d,d,x,E,y,b),S+=d,x+=y;w+=d,E+=b}h.restore(),v=m=null}function a(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-0.5*Math.PI),t.translate(-n,0)}}function f(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n)throw Error("No createObjectURL function found to create blob url");t.src=n.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}f.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n)})}t=t||{};var i=this.srcImage,s=i.src,a=s.length,f=i.naturalWidth,l=i.naturalHeight,c=t.width,h=t.height,p=t.maxWidth,d=t.maxHeight,v=this.blob&&"image/jpeg"===this.blob.type||0===s.indexOf("data:image/jpeg")||s.indexOf(".jpg")===a-4||s.indexOf(".jpeg")===a-5;c&&!h?h=l*c/f<<0:h&&!c?c=f*h/l<<0:(c=f,h=l),p&&c>p&&(c=p,h=l*c/f<<0),d&&h>d&&(h=d,c=f*h/l<<0);var m={width:c,height:h};for(var g in t)m[g]=t[g];var y=e.tagName.toLowerCase();"img"===y?e.src=o(this.srcImage,m,v):"canvas"===y&&u(this.srcImage,e,m,v),"function"==typeof this.onrender&&this.onrender(e),n&&n()},r=[],i=function(){return f}.apply(t,r),void 0===i||!(e.exports=i)}()},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=T((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),N[R[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],s=0;64>s;s++){var o=T((i[s]*e+50)/100);1>o?o=1:o>255&&(o=255),C[R[s]]=o}for(var u=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],a=0,f=0;8>f;f++)for(var l=0;8>l;l++)k[a]=1/(N[R[a]]*u[f]*u[l]*8),L[a]=1/(C[R[a]]*u[f]*u[l]*8),a++}function n(e,t){for(var n=0,r=0,i=new Array,s=1;16>=s;s++){for(var o=1;o<=e[s];o++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=s,r++,n++;n*=2}return i}function r(){b=n(U,z),w=n(V,$),E=n(W,X),S=n(J,K)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)O[32767+r]=n,A[32767+r]=[],A[32767+r][1]=n,A[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)O[32767+i]=n,A[32767+i]=[],A[32767+i][1]=n,A[32767+i][0]=t-1+i;e<<=1,t<<=1}}function s(){for(var e=0;256>e;e++)q[e]=19595*e,q[e+256>>0]=38470*e,q[e+512>>0]=7471*e+32768,q[e+768>>0]=-11059*e,q[e+1024>>0]=-21709*e,q[e+1280>>0]=32768*e+8421375,q[e+1536>>0]=-27439*e,q[e+1792>>0]=-5329*e}function o(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(P|=1<<H),n--,H--,0>H&&(255==P?(u(255),u(0)):u(P),H=7,P=0)}function u(e){D.push(I[e])}function a(e){u(e>>8&255),u(255&e)}function f(e,t){var n,r,i,s,o,u,a,f,l,c=0;const h=8,p=64;for(l=0;h>l;++l){n=e[c],r=e[c+1],i=e[c+2],s=e[c+3],o=e[c+4],u=e[c+5],a=e[c+6],f=e[c+7];var d=n+f,v=n-f,m=r+a,g=r-a,y=i+u,b=i-u,w=s+o,E=s-o,S=d+w,x=d-w,T=m+y,N=m-y;e[c]=S+T,e[c+4]=S-T;var C=.707106781*(N+x);e[c+2]=x+C,e[c+6]=x-C,S=E+b,T=b+g,N=g+v;var k=.382683433*(S-N),L=.5411961*S+k,A=1.306562965*N+k,O=.707106781*T,_=v+O,D=v-O;e[c+5]=D+L,e[c+3]=D-L,e[c+1]=_+A,e[c+7]=_-A,c+=8}for(c=0,l=0;h>l;++l){n=e[c],r=e[c+8],i=e[c+16],s=e[c+24],o=e[c+32],u=e[c+40],a=e[c+48],f=e[c+56];var P=n+f,H=n-f,B=r+a,j=r-a,F=i+u,I=i-u,q=s+o,R=s-o,U=P+q,z=P-q,W=B+F,X=B-F;e[c]=U+W,e[c+32]=U-W;var V=.707106781*(X+z);e[c+16]=z+V,e[c+48]=z-V,U=R+I,W=I+j,X=j+H;var $=.382683433*(U-X),J=.5411961*U+$,K=1.306562965*X+$,Q=.707106781*W,G=H+Q,Y=H-Q;e[c+40]=Y+J,e[c+24]=Y-J,e[c+8]=G+K,e[c+56]=G-K,c++}var Z;for(l=0;p>l;++l)Z=e[l]*t[l],M[l]=Z>0?Z+.5|0:Z-.5|0;return M}function l(){a(65504),a(16),u(74),u(70),u(73),u(70),u(0),u(1),u(1),u(0),a(1),a(1),u(0),u(0)}function c(e,t){a(65472),a(17),u(8),a(t),a(e),u(3),u(1),u(17),u(0),u(2),u(17),u(1),u(3),u(17),u(1)}function h(){a(65499),a(132),u(0);for(var e=0;64>e;e++)u(N[e]);u(1);for(var t=0;64>t;t++)u(C[t])}function p(){a(65476),a(418),u(0);for(var e=0;16>e;e++)u(U[e+1]);for(var t=0;11>=t;t++)u(z[t]);u(16);for(var n=0;16>n;n++)u(W[n+1]);for(var r=0;161>=r;r++)u(X[r]);u(1);for(var i=0;16>i;i++)u(V[i+1]);for(var s=0;11>=s;s++)u($[s]);u(17);for(var o=0;16>o;o++)u(J[o+1]);for(var f=0;161>=f;f++)u(K[f])}function d(){a(65498),a(12),u(3),u(1),u(0),u(2),u(17),u(3),u(17),u(0),u(63),u(0)}function v(e,t,n,r,i){var s,u=i[0],a=i[240];const l=16,c=63,h=64;for(var p=f(e,t),d=0;h>d;++d)_[R[d]]=p[d];var v=_[0]-n;n=_[0],0==v?o(r[0]):(s=32767+v,o(r[O[s]]),o(A[s]));for(var m=63;m>0&&0==_[m];m--);if(0==m)return o(u),n;for(var g,y=1;m>=y;){for(var b=y;0==_[y]&&m>=y;++y);var w=y-b;if(w>=l){g=w>>4;for(var E=1;g>=E;++E)o(a);w=15&w}s=32767+_[y],o(i[(w<<4)+O[s]]),o(A[s]),y++}return m!=c&&o(u),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++)I[t]=e(t)}function g(e){if(0>=e&&(e=1),e>100&&(e=100),x!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),x=e}}function y(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),s(),g(e),(new Date).getTime()-t}var b,w,E,S,x,T=(Math.round,Math.floor),N=new Array(64),C=new Array(64),k=new Array(64),L=new Array(64),A=new Array(65535),O=new Array(65535),M=new Array(64),_=new Array(64),D=[],P=0,H=7,B=new Array(64),j=new Array(64),F=new Array(64),I=new Array(256),q=new Array(2048),R=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],U=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],z=[0,1,2,3,4,5,6,7,8,9,10,11],W=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],X=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],V=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],$=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],K=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&g(t),D=new Array,P=0,H=7,a(65496),l(),h(),c(e.width,e.height),p(),d();var i=0,s=0,u=0;P=0,H=7,this.encode.displayName="_encode_";for(var f,m,y,x,T,N,C,A,O,M=e.data,_=e.width,I=e.height,R=4*_,U=0;I>U;){for(f=0;R>f;){for(T=R*U+f,N=T,C=-1,A=0,O=0;64>O;O++)A=O>>3,C=4*(7&O),N=T+A*R+C,U+A>=I&&(N-=R*(U+1+A-I)),f+C>=R&&(N-=f+C-R+4),m=M[N++],y=M[N++],x=M[N++],B[O]=(q[m]+q[y+256>>0]+q[x+512>>0]>>16)-128,j[O]=(q[m+768>>0]+q[y+1024>>0]+q[x+1280>>0]>>16)-128,F[O]=(q[m+1280>>0]+q[y+1536>>0]+q[x+1792>>0]>>16)-128;i=v(B,k,i,b,E),s=v(j,L,s,w,S),u=v(F,L,u,w,S),f+=32}U+=8}if(H>=0){var z=[];z[1]=H+1,z[0]=(1<<H+1)-1,o(z)}if(a(65497),n){for(var W=D.length,X=new Uint8Array(W),V=0;W>V;V++)X[V]=D[V].charCodeAt();return D=[],(new Date).getTime()-r,X}var $="data:image/jpeg;base64,"+btoa(D.join(""));return D=[],(new Date).getTime()-r,$},y()}e.exports=n},function(e,t,n){function r(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG4/issues/7");t=t||{},n.defaults={width:null,height:null,quality:.7},n.file=e;for(var r in t)t.hasOwnProperty(r)&&(n.defaults[r]=t[r]);return this.init()}function i(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return-1!==t.src.indexOf(e)})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}n.p=i("lrz")+"/",window.URL=window.URL||window.webkitURL;var s=n(1),o=n(4),u=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return{oldIOS:t?+t.pop()<8:!1,oldAndroid:n?+n.pop().substr(0,3)<4.5:!1,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n=new Image,r=document.createElement("canvas"),i="string"==typeof t?t:URL.createObjectURL(t);if(e.img=n,e.blob=i,e.canvas=r,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new s(function(t,r){n.onerror=function(){throw new Error("加载图片文件失败")},n.onload=function(){e._getBase64().then(function(e){return e.length<10&&r("生成base64失败"),e}).then(function(n){t({origin:e.file,base64:n,base64Len:n.length});for(var r in e)e.hasOwnProperty(r)&&(e[r]=null);URL.revokeObjectURL(e.blob)})},n.crossOrigin="*",n.src=i})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.file,r=e.canvas;return new s(function(i){o.getData("object"==typeof n?n:t,function(){e.orientation=o.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height),u.oldIOS?e._createBase64ForOldIOS().then(i):e._createBase64().then(i)})})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.defaults,o=e.orientation;return new s(function(e){!function(){var s=[n(5)];(function(n){var s=new n(t);"5678".indexOf(o)>-1?s.render(r,{width:r.height,height:r.width,orientation:o}):s.render(r,{width:r.width,height:r.height,orientation:o}),e(r.toDataURL("image/jpeg",i.quality))}).apply(null,s)}()})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,o=e.ctx,a=e.defaults,f=e.orientation;switch(f){case 3:o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(r,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;default:o.drawImage(r,0,0,t.width,t.height)}return new s(function(e){u.oldAndroid||u.mQQBrowser||!navigator.userAgent?!function(){var t=[n(6)];(function(t){var n=new t,r=o.getImageData(0,0,i.width,i.height);e(n.encode(r,100*a.quality))}).apply(null,t)}():e(i.toDataURL("image/jpeg",a.quality))})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,s=e.orientation,o={width:t.width,height:t.height};s&&"5678".indexOf(s)>-1&&(o.width=t.height,o.height=t.width);var u=o.width/o.height;for(r&&i?u>=r/i?o.width>r&&(o.width=r,o.height=Math.ceil(r/u)):o.height>i&&(o.height=i,o.width=Math.ceil(i*u)):r?r<o.width&&(o.width=r,o.height=Math.ceil(r/u)):i&&i<o.height&&(o.width=Math.ceil(i*u),o.height=i);o.width>=3264||o.height>=2448;)o.width*=.8,o.height*=.8;return o},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.2.6",e.exports=window.lrz}]);
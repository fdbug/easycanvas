!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=60)}({11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileLoader=o;var n=r(63),a=r(12),i={};function o(e){this.manager=e!==undefined?e:a.DefaultLoadingManager}Object.assign(o.prototype,{load:function(e,t,r,a){e===undefined&&(e=""),this.path!==undefined&&(e=this.path+e),e=this.manager.resolveURL(e);var o=this,s=n.Cache.get(e);if(s!==undefined)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;if(i[e]===undefined){var u=e.match(/^data:(.*?)(;base64)?,(.*)$/);if(u){var f=u[1],d=!!u[2],l=u[3];l=window.decodeURIComponent(l),d&&(l=window.atob(l));try{var h,c=(this.responseType||"").toLowerCase();switch(c){case"arraybuffer":case"blob":for(var p=new Uint8Array(l.length),A=0;A<l.length;A++)p[A]=l.charCodeAt(A);h="blob"===c?new Blob([p.buffer],{type:f}):p.buffer;break;case"document":var g=new DOMParser;h=g.parseFromString(l,f);break;case"json":h=JSON.parse(l);break;default:h=l}window.setTimeout(function(){t&&t(h),o.manager.itemEnd(e)},0)}catch(y){window.setTimeout(function(){a&&a(y),o.manager.itemEnd(e),o.manager.itemError(e)},0)}}else{i[e]=[],i[e].push({onLoad:t,onProgress:r,onError:a});var m=new XMLHttpRequest;for(var v in m.open("GET",e,!0),m.addEventListener("load",function(t){var r=this.response;n.Cache.add(e,r);var a=i[e];if(delete i[e],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var s=0,u=a.length;s<u;s++){(f=a[s]).onLoad&&f.onLoad(r)}o.manager.itemEnd(e)}else{for(s=0,u=a.length;s<u;s++){var f;(f=a[s]).onError&&f.onError(t)}o.manager.itemEnd(e),o.manager.itemError(e)}},!1),m.addEventListener("progress",function(t){for(var r=i[e],n=0,a=r.length;n<a;n++){var o=r[n];o.onProgress&&o.onProgress(t)}},!1),m.addEventListener("error",function(t){var r=i[e];delete i[e];for(var n=0,a=r.length;n<a;n++){var s=r[n];s.onError&&s.onError(t)}o.manager.itemEnd(e),o.manager.itemError(e)},!1),this.responseType!==undefined&&(m.responseType=this.responseType),this.withCredentials!==undefined&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(this.mimeType!==undefined?this.mimeType:"text/plain"),this.requestHeader)m.setRequestHeader(v,this.requestHeader[v]);m.send(null)}return o.manager.itemStart(e),m}i[e].push({onLoad:t,onProgress:r,onError:a})},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}})},12:function(e,t,r){"use strict";function n(e,t,r){var n=this,a=!1,i=0,o=0,s=undefined;this.onStart=undefined,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(e){o++,!1===a&&n.onStart!==undefined&&n.onStart(e,i,o),a=!0},this.itemEnd=function(e){i++,n.onProgress!==undefined&&n.onProgress(e,i,o),i===o&&(a=!1,n.onLoad!==undefined&&n.onLoad())},this.itemError=function(e){n.onError!==undefined&&n.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this}}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingManager=n,t.DefaultLoadingManager=void 0;var a=new n;t.DefaultLoadingManager=a},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(11),a=r(64),i=r(65),o=r(66),s={FileLoader:n.FileLoader,LoaderUtils:a.LoaderUtils,Interpolant:i.Interpolant,CompressedTextureLoader:o.CompressedTextureLoader,RGB_S3TC_DXT1_Format:33776,RGBA_S3TC_DXT1_Format:33777,RGBA_S3TC_DXT3_Format:33778,RGBA_S3TC_DXT5_Format:33779};t["default"]=s},60:function(e,t,r){e.exports=r(61)},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=o(r(62)),a=o(r(67)),i=o(r(68));function o(e){return e&&e.__esModule?e:{"default":e}}var s="undefined"!=typeof window,u={MMDLoader:function(e,t,r,a){(new n["default"]).load(e,function(e){t(e)},r,a)},FBXLoader:function(e,t,r,n){(new a["default"]).load(e,function(e){for(var r in e.Objects.Geometry){var n=e.Objects.Geometry[r];n.PolygonVertexIndex.a=n.PolygonVertexIndex.a.map(function(e,t){return e<0?-e-1:e})}t(e)},r,n)},DDSLoader:i["default"]},f={onCreate:function(e){if(this.$isWebgl){var t=this.$gl;this.ddsLoader=function(e,r){if(e){var n=t.createTexture(),a=(t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),{width:0,height:0});return(new i["default"]).load(e,function(e){t.bindTexture(t.TEXTURE_2D,n),t.compressedTexImage2D(t.TEXTURE_2D,0,e.format,e.image.width,e.image.height,0,e.mipmaps[0].data),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),a.width=e.image.width,a.height=e.image.height,a.texture=n,r&&r(e)},null,null),a}}}}};s&&window.Easycanvas&&(Easycanvas.loaders=u,Easycanvas.use(f));var d=u;t["default"]=d},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=(n=r(6))&&n.__esModule?n:{"default":n};var i=function(){function e(e){this.manager=e!==undefined?e:a["default"].DefaultLoadingManager,this.loader=new a["default"].FileLoader(this.manager),this.parser=null,this.meshBuilder=new r(this.manager),this.animationBuilder=new o}e.prototype={constructor:e,crossOrigin:undefined,setCrossOrigin:function(e){return this.crossOrigin=e,this},load:function(e,t,r,n){this._getParser();var i=this.meshBuilder.setCrossOrigin(this.crossOrigin),o=a["default"].LoaderUtils.extractUrlBase(e),s=this._extractExtension(e).toLowerCase();"pmd"===s||"pmx"===s?this["pmd"===s?"loadPMD":"loadPMX"](e,function(e){t(i.build(e,o,r,n))},r,n):n&&n(new Error("THREE.MMDLoader: Unknown model file extension ."+s+"."))},loadAnimation:function(e,t,r,n,a){var i=this.animationBuilder;this.loadVMD(e,function(e){r(t.isCamera?i.buildCameraAnimation(e):i.build(e,t))},n,a)},loadWithAnimation:function(e,t,r,n,a){var i=this;this.load(e,function(e){i.loadAnimation(t,e,function(t){r({mesh:e,animation:t})},n,a)},n,a)},loadPMD:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(undefined).setResponseType("arraybuffer").load(e,function(e){t(a.parsePmd(e,!0))},r,n)},loadPMX:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(undefined).setResponseType("arraybuffer").load(e,function(e){t(a.parsePmx(e,!0))},r,n)},loadVMD:function(e,t,r,n){var a=Array.isArray(e)?e:[e],i=[],o=a.length,s=this._getParser();this.loader.setMimeType(undefined).setResponseType("arraybuffer");for(var u=0,f=a.length;u<f;u++)this.loader.load(a[u],function(e){i.push(s.parseVmd(e,!0)),i.length===o&&t(s.mergeVmds(i))},r,n)},loadVPD:function(e,t,r,n,a,i){i=i||{};var o=this._getParser();this.loader.setMimeType(t?undefined:"text/plain; charset=shift_jis").setResponseType("text").load(e,function(e){r(o.parseVpd(e,!0))},n,a)},_extractExtension:function(e){var t=e.lastIndexOf(".");return t<0?"":e.slice(t+1)},_getParser:function(){if(null===this.parser){if("undefined"==typeof MMDParser)throw new Error("THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser");this.parser=new MMDParser.Parser}return this.parser}};var t=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];function r(e){this.geometryBuilder=new n,this.materialBuilder=new i(e)}function n(){}function i(e){this.manager=e,this.tgaLoader=null}function o(){}function s(e,t,r,n,i){a["default"].Interpolant.call(this,e,t,r,n),this.interpolationParams=i}return r.prototype={constructor:r,crossOrigin:undefined,setCrossOrigin:function(e){return this.crossOrigin=e,this},build:function(e,t,r,n){var i=this.geometryBuilder.build(e),o=this.materialBuilder.setCrossOrigin(this.crossOrigin).setTexturePath(t).build(e,i,r,n);return new a["default"].SkinnedMesh(i,o)}},n.prototype={constructor:n,build:function(e){for(var t=[],r=[],n=[],i=[],o=[],s=[],u=[],f=[],d=[],l=[],h=[],c=[],p=[],A=[],g=0,m={},v=0;v<e.metadata.vertexCount;v++){for(var y=e.vertices[v],b=0,C=y.position.length;b<C;b++)t.push(y.position[b]);for(b=0,C=y.normal.length;b<C;b++)n.push(y.normal[b]);for(b=0,C=y.uv.length;b<C;b++)r.push(y.uv[b]);for(b=0;b<4;b++)u.push(y.skinIndices.length-1>=b?y.skinIndices[b]:0);for(b=0;b<4;b++)f.push(y.skinWeights.length-1>=b?y.skinWeights[b]:0)}for(v=0;v<e.metadata.faceCount;v++){var E=e.faces[v];for(b=0,C=E.indices.length;b<C;b++)i.push(E.indices[b])}for(v=0;v<e.metadata.materialCount;v++){var x=e.materials[v];o.push({offset:3*g,count:3*x.faceCount}),g+=x.faceCount}for(v=0;v<e.metadata.rigidBodyCount;v++){var T=e.rigidBodies[v],w=m[T.boneIndex];w=w===undefined?T.type:Math.max(T.type,w),m[T.boneIndex]=w}for(v=0;v<e.metadata.boneCount;v++){-1!==(X={parent:(S=e.bones[v]).parentIndex,name:S.name,pos:S.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:m[v]!==undefined?m[v]:-1}).parent&&(X.pos[0]-=e.bones[X.parent].position[0],X.pos[1]-=e.bones[X.parent].position[1],X.pos[2]-=e.bones[X.parent].position[2]),s.push(X)}if("pmd"===e.metadata.format)for(v=0;v<e.metadata.ikCount;v++){var B={target:(L=e.iks[v]).target,effector:L.effector,iteration:L.iteration,maxAngle:4*L.maxAngle,links:[]};for(b=0,C=L.links.length;b<C;b++){(I={}).index=L.links[b].index,I.enabled=!0,e.bones[I.index].name.indexOf("ひざ")>=0&&(I.limitation=new a["default"].Vector3(1,0,0)),B.links.push(I)}h.push(B)}else for(v=0;v<e.metadata.boneCount;v++){var L;if((L=e.bones[v].ik)!==undefined){for(B={target:v,effector:L.effector,iteration:L.iteration,maxAngle:L.maxAngle,links:[]},b=0,C=L.links.length;b<C;b++){var I;if((I={}).index=L.links[b].index,I.enabled=!0,1===L.links[b].angleLimitation){var _=L.links[b].lowerLimitationAngle,R=L.links[b].upperLimitationAngle,U=-R[0],M=-R[1];R[0]=-_[0],R[1]=-_[1],_[0]=U,_[1]=M,I.rotationMin=(new a["default"].Vector3).fromArray(_),I.rotationMax=(new a["default"].Vector3).fromArray(R)}B.links.push(I)}h.push(B)}}if("pmx"===e.metadata.format){for(v=0;v<e.metadata.boneCount;v++){var S,D=(S=e.bones[v]).grant;if(D!==undefined){B={index:v,parentIndex:D.parentIndex,ratio:D.ratio,isLocal:D.isLocal,affectRotation:D.affectRotation,affectPosition:D.affectPosition,transformationClass:S.transformationClass};c.push(B)}}c.sort(function(e,t){return e.transformationClass-t.transformationClass})}function O(t,r,n){for(var a=0;a<r.elementCount;a++){var i,o=r.elements[a];i="pmd"===e.metadata.format?e.morphs[0].elements[o.index].index:o.index,t.array[3*i+0]+=o.position[0]*n,t.array[3*i+1]+=o.position[1]*n,t.array[3*i+2]+=o.position[2]*n}}for(v=0;v<e.metadata.morphCount;v++){var k=e.morphs[v],P={name:k.name},F=new a["default"].Float32BufferAttribute(3*e.metadata.vertexCount,3);F.name=k.name;for(b=0;b<3*e.metadata.vertexCount;b++)F.array[b]=t[b];if("pmd"===e.metadata.format)0!==v&&O(F,k,1);else if(0===k.type)for(b=0;b<k.elementCount;b++){var Q=e.morphs[k.elements[b].index],V=k.elements[b].ratio;1===Q.type&&O(F,Q,V)}else 1===k.type?O(F,k,1):2===k.type||3===k.type||4===k.type||5===k.type||6===k.type||7===k.type||k.type;d.push(P),l.push(F)}for(v=0;v<e.metadata.rigidBodyCount;v++){var N=e.rigidBodies[v];P={};for(var j in N)P[j]=N[j];if("pmx"===e.metadata.format&&-1!==P.boneIndex){var X=e.bones[P.boneIndex];P.position[0]-=X.position[0],P.position[1]-=X.position[1],P.position[2]-=X.position[2]}p.push(P)}for(v=0;v<e.metadata.constraintCount;v++){var z=e.constraints[v];P={};for(var j in z)P[j]=z[j];var G=p[P.rigidBodyIndex1],H=p[P.rigidBodyIndex2];0!==G.type&&2===H.type&&-1!==G.boneIndex&&-1!==H.boneIndex&&e.bones[H.boneIndex].parentIndex===G.boneIndex&&(H.type=1),A.push(P)}var Y=new a["default"].BufferGeometry;Y.addAttribute("position",new a["default"].Float32BufferAttribute(t,3)),Y.addAttribute("normal",new a["default"].Float32BufferAttribute(n,3)),Y.addAttribute("uv",new a["default"].Float32BufferAttribute(r,2)),Y.addAttribute("skinIndex",new a["default"].Uint16BufferAttribute(u,4)),Y.addAttribute("skinWeight",new a["default"].Float32BufferAttribute(f,4)),Y.setIndex(i);v=0;for(var K=o.length;v<K;v++)Y.addGroup(o[v].offset,o[v].count,v);return Y.bones=s,Y.morphTargets=d,Y.morphAttributes.position=l,Y.userData.MMD={bones:s,iks:h,grants:c,rigidBodies:p,constraints:A,format:e.metadata.format},Y.computeBoundingSphere(),Y}},i.prototype={constructor:i,crossOrigin:undefined,texturePath:undefined,setCrossOrigin:function(e){return this.crossOrigin=e,this},setTexturePath:function(e){return this.texturePath=e,this},build:function(e,t,r,n){var i=[],o={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(var s=0;s<e.metadata.materialCount;s++){var u=e.materials[s],f={userData:{}};if(u.name!==undefined&&(f.name=u.name),f.color=(new a["default"].Color).fromArray(u.diffuse),f.opacity=u.diffuse[3],f.specular=(new a["default"].Color).fromArray(u.specular),f.emissive=(new a["default"].Color).fromArray(u.ambient),f.shininess=Math.max(u.shininess,1e-4),f.transparent=1!==f.opacity,f.skinning=t.bones.length>0,f.morphTargets=t.morphTargets.length>0,f.lights=!0,f.fog=!0,f.blending=a["default"].CustomBlending,f.blendSrc=a["default"].SrcAlphaFactor,f.blendDst=a["default"].OneMinusSrcAlphaFactor,f.blendSrcAlpha=a["default"].SrcAlphaFactor,f.blendDstAlpha=a["default"].DstAlphaFactor,"pmx"===e.metadata.format&&1==(1&u.flag)?f.side=a["default"].DoubleSide:f.side=1===f.opacity?a["default"].FrontSide:a["default"].DoubleSide,"pmd"===e.metadata.format){if(u.fileName){var d=u.fileName.split("*");if(f.map=this._loadTexture(d[0],o),d.length>1){var l=d[1].slice(-4).toLowerCase();f.envMap=this._loadTexture(d[1],o,{sphericalReflectionMapping:!0}),f.combine=".sph"===l?a["default"].MultiplyOperation:a["default"].AddOperation}}var h=-1===u.toonIndex?"toon00.bmp":e.toonTextures[u.toonIndex].fileName;f.gradientMap=this._loadTexture(h,o,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(h)}),f.userData.outlineParameters={thickness:1===u.edgeFlag?.003:0,color:[0,0,0],alpha:1,visible:1===u.edgeFlag}}else{var c;-1!==u.textureIndex&&(f.map=this._loadTexture(e.textures[u.textureIndex],o)),-1===u.envTextureIndex||1!==u.envFlag&&2!=u.envFlag||(f.envMap=this._loadTexture(e.textures[u.envTextureIndex],o,{sphericalReflectionMapping:!0}),f.combine=1===u.envFlag?a["default"].MultiplyOperation:a["default"].AddOperation),-1===u.toonIndex||0!==u.toonFlag?(h="toon"+("0"+(u.toonIndex+1)).slice(-2)+".bmp",c=!0):(h=e.textures[u.toonIndex],c=!1),f.gradientMap=this._loadTexture(h,o,{isToonTexture:!0,isDefaultToonTexture:c}),f.userData.outlineParameters={thickness:u.edgeSize/300,color:u.edgeColor.slice(0,3),alpha:u.edgeColor[3],visible:0!=(16&u.flag)&&u.edgeSize>0}}f.map!==undefined&&(f.transparent||this._checkImageTransparency(f.map,t,s),f.emissive.multiplyScalar(.2)),i.push(new a["default"].MeshToonMaterial(f))}if("pmx"===e.metadata.format)for(var p=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r];if(-1!==a.index){var i=t[a.index];i.opacity!==a.diffuse[3]&&(i.transparent=!0)}}},A=(s=0,e.morphs.length);s<A;s++){var g=e.morphs[s],m=g.elements;if(0===g.type)for(var v=0,y=m.length;v<y;v++){var b=e.morphs[m[v].index];8===b.type&&p(b.elements,i)}else 8===g.type&&p(m,i)}return i},_getTGALoader:function(){if(null===this.tgaLoader){if(a["default"].TGALoader===undefined)throw new Error("THREE.MMDLoader: Import THREE.TGALoader");this.tgaLoader=new a["default"].TGALoader(this.manager)}return this.tgaLoader},_isDefaultToonTexture:function(e){return 10===e.length&&/toon(10|0[0-9])\.bmp/.test(e)},_loadTexture:function(e,r,n,i,o){var s,u=this;if(!0===(n=n||{}).isDefaultToonTexture){var f;try{f=parseInt(e.match("toon([0-9]{2}).bmp$")[1])}catch(h){console.warn("THREE.MMDLoader: "+e+" seems like a not right default texture path. Using toon00.bmp instead."),f=0}s=t[f]}else s=this.texturePath+e;if(r[s]!==undefined)return r[s];var d=a["default"].Loader.Handlers.get(s);null===d&&(d=".tga"===e.slice(-4).toLowerCase()?this._getTGALoader():this.textureLoader);var l=d.load(s,function(e){!0===n.isToonTexture&&(e.image=u._getRotatedImage(e.image)),e.flipY=!1,e.wrapS=a["default"].RepeatWrapping,e.wrapT=a["default"].RepeatWrapping;for(var t=0;t<l.readyCallbacks.length;t++)l.readyCallbacks[t](l);delete l.readyCallbacks},i,o);return!0===n.sphericalReflectionMapping&&(l.mapping=a["default"].SphericalReflectionMapping),l.readyCallbacks=[],r[s]=l,l},_getRotatedImage:function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,a=e.height;return t.width=n,t.height=a,r.clearRect(0,0,n,a),r.translate(n/2,a/2),r.rotate(.5*Math.PI),r.translate(-n/2,-a/2),r.drawImage(e,0,0),r.getImageData(0,0,n,a)},_checkImageTransparency:function(e,t,r){e.readyCallbacks.push(function(n){function a(e,t){var r=e.width,n=e.height,a=Math.round(t.x*r)%r,i=Math.round(t.y*n)%n;a<0&&(a+=r),i<0&&(i+=n);var o=i*r+a;return e.data[4*o+3]}var i=n.image.data!==undefined?n.image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}(n.image),o=t.groups[r];(function(e,t,r){var n=e.width,i=e.height;if(e.data.length/(n*i)!=4)return!1;for(var o=0;o<r.length;o+=3){for(var s={x:0,y:0},u=0;u<3;u++){var f=r[3*o+u],d={x:t[2*f+0],y:t[2*f+1]};if(a(e,d)<253)return!0;s.x+=d.x,s.y+=d.y}if(s.x/=3,s.y/=3,a(e,s)<253)return!0}return!1})(i,t.attributes.uv.array,t.index.array.slice(o.start,o.start+o.count))&&(e.transparent=!0)})}},o.prototype={constructor:o,build:function(e,t){for(var r=this.buildSkeletalAnimation(e,t).tracks,n=this.buildMorphAnimation(e,t).tracks,i=0,o=n.length;i<o;i++)r.push(n[i]);return new a["default"].AnimationClip("",-1,r)},buildSkeletalAnimation:function(e,t){function r(e,t,r){e.push(t[r+0]/127),e.push(t[r+8]/127),e.push(t[r+4]/127),e.push(t[r+12]/127)}for(var n=[],i={},o=t.skeleton.bones,s={},u=0,f=o.length;u<f;u++)s[o[u].name]=!0;for(u=0;u<e.metadata.motionCount;u++){var d=e.motions[u],l=d.boneName;s[l]!==undefined&&(i[l]=i[l]||[],i[l].push(d))}for(var h in i){var c=i[h];c.sort(function(e,t){return e.frameNum-t.frameNum});var p=[],A=[],g=[],m=[],v=[],y=t.skeleton.getBoneByName(h).position.toArray();for(u=0,f=c.length;u<f;u++){var b=c[u].frameNum/30,C=c[u].position,E=c[u].rotation,x=c[u].interpolation;p.push(b);for(var T=0;T<3;T++)A.push(y[T]+C[T]);for(T=0;T<4;T++)g.push(E[T]);for(T=0;T<3;T++)r(m,x,T);r(v,x,3)}var w=".bones["+h+"]";n.push(this._createTrack(w+".position",a["default"].VectorKeyframeTrack,p,A,m)),n.push(this._createTrack(w+".quaternion",a["default"].QuaternionKeyframeTrack,p,g,v))}return new a["default"].AnimationClip("",-1,n)},buildMorphAnimation:function(e,t){for(var r=[],n={},i=t.morphTargetDictionary,o=0;o<e.metadata.morphCount;o++){var s=e.morphs[o],u=s.morphName;i[u]!==undefined&&(n[u]=n[u]||[],n[u].push(s))}for(var f in n){var d=n[f];d.sort(function(e,t){return e.frameNum-t.frameNum});for(var l=[],h=[],c=(o=0,d.length);o<c;o++)l.push(d[o].frameNum/30),h.push(d[o].weight);r.push(new a["default"].NumberKeyframeTrack(".morphTargetInfluences["+i[f]+"]",l,h))}return new a["default"].AnimationClip("",-1,r)},buildCameraAnimation:function(e){function t(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function r(e,t,r){e.push(t[4*r+0]/127),e.push(t[4*r+1]/127),e.push(t[4*r+2]/127),e.push(t[4*r+3]/127)}var n=[],i=e.cameras===undefined?[]:e.cameras.slice();i.sort(function(e,t){return e.frameNum-t.frameNum});for(var o,s,u=[],f=[],d=[],l=[],h=[],c=[],p=[],A=[],g=[],m=new a["default"].Quaternion,v=new a["default"].Euler,y=new a["default"].Vector3,b=new a["default"].Vector3,C=0,E=i.length;C<E;C++){var x=i[C],T=x.frameNum/30,w=x.position,B=x.rotation,L=x.distance,I=x.fov,_=x.interpolation;u.push(T),y.set(0,0,-L),b.set(w[0],w[1],w[2]),v.set(-B[0],-B[1],-B[2]),m.setFromEuler(v),y.add(b),y.applyQuaternion(m),t(f,b),(o=d).push((s=m).x),o.push(s.y),o.push(s.z),o.push(s.w),t(l,y),h.push(I);for(var R=0;R<3;R++)r(c,_,R);r(p,_,3);for(R=0;R<3;R++)r(A,_,4);r(g,_,5)}return(n=[]).push(this._createTrack("target.position",a["default"].VectorKeyframeTrack,u,f,c)),n.push(this._createTrack(".quaternion",a["default"].QuaternionKeyframeTrack,u,d,p)),n.push(this._createTrack(".position",a["default"].VectorKeyframeTrack,u,l,A)),n.push(this._createTrack(".fov",a["default"].NumberKeyframeTrack,u,h,g)),new a["default"].AnimationClip("",-1,n)},_createTrack:function(e,t,r,n,a){if(r.length>2){r=r.slice(),n=n.slice(),a=a.slice();for(var i=n.length/r.length,o=a.length/r.length,u=1,f=2,d=r.length;f<d;f++){for(var l=0;l<i;l++)if(n[u*i+l]!==n[(u-1)*i+l]||n[u*i+l]!==n[f*i+l]){u++;break}if(f>u){r[u]=r[f];for(l=0;l<i;l++)n[u*i+l]=n[f*i+l];for(l=0;l<o;l++)a[u*o+l]=a[f*o+l]}}r.length=u+1,n.length=(u+1)*i,a.length=(u+1)*o}var h=new t(e,r,n);return h.createInterpolant=function(e){return new s(this.times,this.values,this.getValueSize(),e,new Float32Array(a))},h}},s.prototype=Object.assign(Object.create(a["default"].Interpolant.prototype),{constructor:s,interpolate_:function(e,t,r,n){var i=this.resultBuffer,o=this.sampleValues,s=this.valueSize,u=this.interpolationParams,f=e*s,d=f-s,l=n-t<.05?0:(r-t)/(n-t);if(4===s){var h=u[4*e+0],c=u[4*e+1],p=u[4*e+2],A=u[4*e+3],g=this._calculate(h,c,p,A,l);a["default"].Quaternion.slerpFlat(i,0,o,d,o,f,g)}else if(3===s)for(var m=0;m!==s;++m){h=u[12*e+4*m+0],c=u[12*e+4*m+1],p=u[12*e+4*m+2],A=u[12*e+4*m+3],g=this._calculate(h,c,p,A,l);i[m]=o[d+m]*(1-g)+o[f+m]*g}else{h=u[4*e+0],c=u[4*e+1],p=u[4*e+2],A=u[4*e+3],g=this._calculate(h,c,p,A,l);i[0]=o[d]*(1-g)+o[f]*g}return i},_calculate:function(e,t,r,n,a){for(var i,o,s,u=.5,f=u,d=1-f,l=Math,h=0;h<15;h++){var c=(i=3*d*d*f)*e+(o=3*d*f*f)*t+(s=f*f*f)-a;if(l.abs(c)<1e-5)break;u/=2,d=1-(f+=c<0?u:-u)}return i*r+o*n+s}}),e}();t["default"]=i},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Cache=void 0;t.Cache={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}}},64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoaderUtils=void 0;var n={decodeText:function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var t="",r=0,n=e.length;r<n;r++)t+=String.fromCharCode(e[r]);return decodeURIComponent(escape(t))},extractUrlBase:function(e){var t=e.lastIndexOf("/");return-1===t?"./":e.substr(0,t+1)}};t.LoaderUtils=n},65:function(e,t,r){"use strict";function n(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==undefined?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r}Object.defineProperty(t,"__esModule",{value:!0}),t.Interpolant=n,Object.assign(n.prototype,{evaluate:function(e){var t=this.parameterPositions,r=this._cachedIndex,n=t[r],a=t[r-1];e:{t:{var i;r:{n:if(!(e<n)){for(var o=r+2;;){if(n===undefined){if(e<a)break n;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,a)}if(r===o)break;if(a=n,e<(n=t[++r]))break t}i=t.length;break r}if(e>=a)break e;var s=t[1];e<s&&(r=2,a=s);for(o=r-2;;){if(a===undefined)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(r===o)break;if(n=a,e>=(a=t[--r-1]))break t}i=r,r=0}for(;r<i;){var u=r+i>>>1;e<t[u]?i=u:r=u+1}if(n=t[r],(a=t[r-1])===undefined)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===undefined)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,a,e)}this._cachedIndex=r,this.intervalChanged_(r,a,n)}return this.interpolate_(r,a,e,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n,i=0;i!==n;++i)t[i]=r[a+i];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(n.prototype,{beforeStart_:n.prototype.copySampleValue_,afterEnd_:n.prototype.copySampleValue_})},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompressedTextureLoader=o;var n=r(11),a=r(12),i=1006;function o(e){this.manager=e!==undefined?e:a.DefaultLoadingManager,this._parser=null}Object.assign(o.prototype,{load:function(e,t,r,a){var o=this,s=[],u={};u.image=s;var f=new n.FileLoader(this.manager);function d(n){f.load(e[n],function(e){var r=o._parser(e,!0);s[n]={width:r.width,height:r.height,format:r.format,mipmaps:r.mipmaps},6===(l+=1)&&(1===r.mipmapCount&&(u.minFilter=i),u.format=r.format,u.needsUpdate=!0,t&&t(u))},r,a)}if(f.setPath(this.path),f.setResponseType("arraybuffer"),Array.isArray(e))for(var l=0,h=0,c=e.length;h<c;++h)d(h);else f.load(e,function(e){var r=o._parser(e,!0);if(r.isCubemap)for(var n=r.mipmaps.length/r.mipmapCount,a=0;a<n;a++){s[a]={mipmaps:[]};for(var f=0;f<r.mipmapCount;f++)s[a].mipmaps.push(r.mipmaps[a*r.mipmapCount+f]),s[a].format=r.format,s[a].width=r.width,s[a].height=r.height}else u.image.width=r.width,u.image.height=r.height,u.mipmaps=r.mipmaps;1===r.mipmapCount&&(u.minFilter=i),u.format=r.format,u.needsUpdate=!0,t&&t(u)},r,a);return u},setPath:function(e){return this.path=e,this}})},67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=(n=r(6))&&n.__esModule?n:{"default":n};var i=function(){function e(){}function t(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t===undefined||t}function r(){}function n(e){var t=e.match(/FBXVersion: (\d+)/);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function i(e,t,r){return t===undefined&&(t=0),r===undefined&&(r=e.byteLength),a["default"].LoaderUtils.decodeText(new Uint8Array(e,t,r))}return a["default"].FBXLoader=function(e){this.manager=e!==undefined?e:a["default"].DefaultLoadingManager},Object.assign(a["default"].FBXLoader.prototype,{load:function(e,t,r,n){var i=this,o=a["default"].LoaderUtils.extractUrlBase(e),s=new a["default"].FileLoader(this.manager);s.setResponseType("arraybuffer"),s.load(e,function(e){var r=i.parse(e,o);t(r)},r,n)},parse:function(t,r){var a,o,s;if(s="Kaydara FBX Binary  \0",(o=t).byteLength>=s.length&&s===i(o,0,s.length))a=(new e).parse(t);else{var u=i(t);if(!function(e){var t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],r=0;for(var n=0;n<t.length;++n){if((i=void 0,i=e[(a=1)-1],e=e.slice(r+a),r++,i)===t[n])return!1}var a,i;return!0}(u))throw new Error("THREE.FBXLoader: Unknown format.");if(n(u)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n(u));a=(new TextParser).parse(u)}return a}}),Object.assign(e.prototype,{parse:function(e){var n=new t(e);n.skip(23);var a=n.getUint32();console.log("THREE.FBXLoader: FBX binary version: "+a);for(var i=new r;!this.endOfContent(n);){var o=this.parseNode(n,a);null!==o&&i.add(o.name,o)}return i},endOfContent:function(e){return e.size()%16==0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()},parseNode:function(e,t){var r={},n=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32(),i=(t>=7500?e.getUint64():e.getUint32(),e.getUint8()),o=e.getString(i);if(0===n)return null;for(var s=[],u=0;u<a;u++)s.push(this.parseProperty(e));var f=s.length>0?s[0]:"",d=s.length>1?s[1]:"",l=s.length>2?s[2]:"";for(r.singleProperty=1===a&&e.getOffset()===n;n>e.getOffset();){var h=this.parseNode(e,t);null!==h&&this.parseSubNode(o,r,h)}return r.propertyList=s,"number"==typeof f&&(r.id=f),""!==d&&(r.attrName=d),""!==l&&(r.attrType=l),""!==o&&(r.name=o),r},parseSubNode:function(e,t,r){if(!0===r.singleProperty){var n=r.propertyList[0];Array.isArray(n)?(t[r.name]=r,r.a=n):t[r.name]=n}else if("Connections"===e&&"C"===r.name){var a=[];r.propertyList.forEach(function(e,t){0!==t&&a.push(e)}),t.connections===undefined&&(t.connections=[]),t.connections.push(a)}else if("Properties70"===r.name){Object.keys(r).forEach(function(e){t[e]=r[e]})}else if("Properties70"===e&&"P"===r.name){var i,o=r.propertyList[0],s=r.propertyList[1],u=r.propertyList[2],f=r.propertyList[3];0===o.indexOf("Lcl ")&&(o=o.replace("Lcl ","Lcl_")),0===s.indexOf("Lcl ")&&(s=s.replace("Lcl ","Lcl_")),i="Color"===s||"ColorRGB"===s||"Vector"===s||"Vector3D"===s||0===s.indexOf("Lcl_")?[r.propertyList[4],r.propertyList[5],r.propertyList[6]]:r.propertyList[4],t[o]={type:s,type2:u,flag:f,value:i}}else t[r.name]===undefined?"number"==typeof r.id?(t[r.name]={},t[r.name][r.id]=r):t[r.name]=r:"PoseNode"===r.name?(Array.isArray(t[r.name])||(t[r.name]=[t[r.name]]),t[r.name].push(r)):t[r.name][r.id]===undefined&&(t[r.name][r.id]=r)},parseProperty:function(e){var r=e.getString(1);switch(r){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":var n=e.getUint32();return e.getArrayBuffer(n);case"S":n=e.getUint32();return e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var a=e.getUint32(),i=e.getUint32(),o=e.getUint32();if(0===i)switch(r){case"b":case"c":return e.getBooleanArray(a);case"d":return e.getFloat64Array(a);case"f":return e.getFloat32Array(a);case"i":return e.getInt32Array(a);case"l":return e.getInt64Array(a)}window.Zlib===undefined&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var s=new t(new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(o))).decompress().buffer);switch(r){case"b":case"c":return s.getBooleanArray(a);case"d":return s.getFloat64Array(a);case"f":return s.getFloat32Array(a);case"i":return s.getInt32Array(a);case"l":return s.getInt64Array(a)}default:throw new Error("THREE.FBXLoader: Unknown property type "+r)}}}),Object.assign(t.prototype,{getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(e){this.offset+=e},getBoolean:function(){return 1==(1&this.getUint8())},getBooleanArray:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getBoolean());return t},getUint8:function(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e},getInt16:function(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e},getInt32:function(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e},getInt32Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getInt32());return t},getUint32:function(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e},getInt64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),2147483648&t?(t=4294967295&~t,4294967295===(e=4294967295&~e)&&(t=t+1&4294967295),-(4294967296*t+(e=e+1&4294967295))):4294967296*t+e},getInt64Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getInt64());return t},getUint64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),4294967296*t+e},getFloat32:function(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e},getFloat32Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getFloat32());return t},getFloat64:function(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e},getFloat64Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getFloat64());return t},getArrayBuffer:function(e){var t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t},getString:function(e){for(var t=new Uint8Array(e),r=0;r<e;r++)t[r]=this.getUint8();var n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),a["default"].LoaderUtils.decodeText(t)}}),Object.assign(r.prototype,{add:function(e,t){this[e]=t}}),a["default"].FBXLoader}();t["default"]=i},68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=(n=r(6))&&n.__esModule?n:{"default":n};var i=a["default"].DDSLoader=function(){this._parser=a["default"].DDSLoader.parse};t["default"]=i,a["default"].DDSLoader.prototype=Object.create(a["default"].CompressedTextureLoader.prototype),a["default"].DDSLoader.prototype.constructor=a["default"].DDSLoader,a["default"].DDSLoader.parse=function(e,t){var r={mipmaps:[],width:0,height:0,format:null,mipmapCount:1};function n(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function i(e,t,r,n){for(var a=r*n*4,i=new Uint8Array(e,t,a),o=new Uint8Array(a),s=0,u=0,f=0;f<n;f++)for(var d=0;d<r;d++){var l=i[u],h=i[++u],c=i[++u],p=i[++u];u++,o[s]=c,o[++s]=h,o[++s]=l,o[++s]=p,s++}return o}var o,s=n("DXT1"),u=n("DXT3"),f=n("DXT5"),d=n("ETC1"),l=new Int32Array(e,0,31);if(542327876!==l[0])return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."),r;if(4&!l[20])return console.error("THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code."),r;var h,c=l[21],p=!1;switch(c){case s:o=8,r.format=a["default"].RGB_S3TC_DXT1_Format;break;case u:o=16,r.format=a["default"].RGBA_S3TC_DXT3_Format;break;case f:o=16,r.format=a["default"].RGBA_S3TC_DXT5_Format;break;case d:o=8,r.format=a["default"].RGB_ETC1_Format;break;default:if(!(32===l[22]&&16711680&l[23]&&65280&l[24]&&255&l[25]&&4278190080&l[26]))return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ",(h=c,String.fromCharCode(255&h,h>>8&255,h>>16&255,h>>24&255))),r;p=!0,o=64,r.format=a["default"].RGBAFormat}r.mipmapCount=1,131072&l[2]&&!1!==t&&(r.mipmapCount=Math.max(1,l[7]));var A=l[28];if(r.isCubemap=!!(512&A),r.isCubemap&&(!(1024&A)||!(2048&A)||!(4096&A)||!(8192&A)||!(16384&A)||!(32768&A)))return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"),r;r.width=l[4],r.height=l[3];for(var g=l[1]+4,m=r.isCubemap?6:1,v=0;v<m;v++)for(var y=r.width,b=r.height,C=0;C<r.mipmapCount;C++){if(p)var E=(x=i(e,g,y,b)).length;else{E=Math.max(4,y)/4*Math.max(4,b)/4*o;var x=new Uint8Array(e,g,E)}var T={data:x,width:y,height:b};r.mipmaps.push(T),g+=E,y=Math.max(y>>1,1),b=Math.max(b>>1,1)}return r}}}));
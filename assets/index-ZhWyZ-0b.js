(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const An={x:37,z:39},Tn={x:-12,z:-9.2},bn={x:12,z:-9.2},wo={x:-26,z:-25.5},Ja=[{x:-24,z:-30,name:"PROCONVET · PREGUNTAS",color:"#087d86"},{x:24,z:-30,name:"EXPLORA · CREA · COMPARTE",color:"#7354a5"}];const rl="180",Od=0,Gl=1,Fd=2,jf=1,Kf=2,Vn=3,qn=0,Xt=1,Wt=2,li=0,ur=1,Wl=2,Xl=3,ql=4,Bd=5,Ai=100,kd=101,zd=102,Hd=103,Vd=104,Gd=200,Wd=201,Xd=202,qd=203,Qa=204,ec=205,Yd=206,jd=207,Kd=208,$d=209,Zd=210,Jd=211,Qd=212,ep=213,tp=214,tc=0,nc=1,ic=2,mr=3,rc=4,sc=5,oc=6,ac=7,$f=0,np=1,ip=2,ui=0,rp=1,sp=2,op=3,ap=4,cp=5,lp=6,up=7,Yl="attached",fp="detached",Zf=300,gr=301,_r=302,cc=303,lc=304,zo=306,Di=1e3,ri=1001,Ao=1002,zt=1003,Jf=1004,es=1005,$t=1006,_o=1007,Gn=1008,Cn=1009,Qf=1010,eh=1011,fs=1012,sl=1013,Ui=1014,mn=1015,As=1016,ol=1017,al=1018,hs=1020,th=35902,nh=35899,ih=1021,rh=1022,an=1023,ds=1026,ps=1027,cl=1028,ll=1029,sh=1030,ul=1031,fl=1033,xo=33776,vo=33777,yo=33778,Mo=33779,uc=35840,fc=35841,hc=35842,dc=35843,pc=36196,mc=37492,gc=37496,_c=37808,xc=37809,vc=37810,yc=37811,Mc=37812,Sc=37813,Ec=37814,Tc=37815,bc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,Lc=36492,Ic=36494,Dc=36495,Uc=36283,Nc=36284,Oc=36285,Fc=36286,ms=2300,gs=2301,Qo=2302,jl=2400,Kl=2401,$l=2402,hp=2500,dp=0,oh=1,Bc=2,pp=3200,mp=3201,ah=0,gp=1,ii="",_t="srgb",Vt="srgb-linear",Ro="linear",ct="srgb",Vi=7680,Zl=519,_p=512,xp=513,vp=514,ch=515,yp=516,Mp=517,Sp=518,Ep=519,kc=35044,Jl="300 es",Rn=2e3,Co=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const is=Math.PI/180,xr=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function hl(i,e){return(i%e+e)%e}function Tp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bp(i,e,t){return i!==e?(t-i)/(e-i):0}function rs(i,e,t){return(1-t)*i+t*e}function wp(i,e,t,n){return rs(i,e,1-Math.exp(-t*n))}function Ap(i,e=1){return e-Math.abs(hl(i,e*2)-e)}function Rp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lp(i,e){return i+Math.random()*(e-i)}function Ip(i){return i*(.5-Math.random())}function Dp(i){i!==void 0&&(Ql=i);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(i){return i*is}function Np(i){return i*xr}function Op(i){return(i&i-1)===0&&i!==0}function Fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),f=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*f,c*u,c*h,a*l);break;case"YZY":i.set(c*h,a*f,c*u,a*l);break;case"ZXZ":i.set(c*u,c*h,a*f,a*l);break;case"XZX":i.set(a*f,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*f,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:is,RAD2DEG:xr,generateUUID:_n,clamp:qe,euclideanModulo:hl,mapLinear:Tp,inverseLerp:bp,lerp:rs,damp:wp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Lp,randFloatSpread:Ip,seededRandom:Dp,degToRad:Up,radToDeg:Np,isPowerOfTwo:Op,ceilPowerOfTwo:Fp,floorPowerOfTwo:Bp,setQuaternionFromProperEuler:kp,normalize:it,denormalize:pn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],f=n[r+2],u=n[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==h||l!==d||f!==m){let g=1-a;const p=c*h+l*d+f*m+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),b=Math.atan2(M,p*v);g=Math.sin(g*b)/M,a=Math.sin(a*b)/M}const x=a*v;if(c=c*g+h*x,l=l*g+d*x,f=f*g+m*x,u=u*g+_*x,g===1-a){const M=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=M,l*=M,f*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],f=n[r+3],u=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+f*u+c*d-l*h,e[t+1]=c*m+f*h+l*u-a*d,e[t+2]=l*m+f*d+a*h-c*u,e[t+3]=f*m-a*u-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(r/2),u=a(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*f*u+l*d*m,this._y=l*d*u-h*f*m,this._z=l*f*m+h*d*u,this._w=l*f*u-h*d*m;break;case"YXZ":this._x=h*f*u+l*d*m,this._y=l*d*u-h*f*m,this._z=l*f*m-h*d*u,this._w=l*f*u+h*d*m;break;case"ZXY":this._x=h*f*u-l*d*m,this._y=l*d*u+h*f*m,this._z=l*f*m+h*d*u,this._w=l*f*u-h*d*m;break;case"ZYX":this._x=h*f*u-l*d*m,this._y=l*d*u+h*f*m,this._z=l*f*m-h*d*u,this._w=l*f*u+h*d*m;break;case"YZX":this._x=h*f*u+l*d*m,this._y=l*d*u+h*f*m,this._z=l*f*m-h*d*u,this._w=l*f*u-h*d*m;break;case"XZY":this._x=h*f*u-l*d*m,this._y=l*d*u-h*f*m,this._z=l*f*m+h*d*u,this._w=l*f*u+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=n+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(f-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-r*a,this._w=o*f-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),f=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*f,this.y=n+c*f+a*l-s*u,this.z=r+c*u+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new B,eu=new Ln;class Ge{constructor(e,t,n,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],d=n[5],m=n[8],_=r[0],g=r[3],p=r[6],v=r[1],y=r[4],x=r[7],M=r[2],b=r[5],C=r[8];return s[0]=o*_+a*v+c*M,s[3]=o*g+a*y+c*b,s[6]=o*p+a*x+c*C,s[1]=l*_+f*v+u*M,s[4]=l*g+f*y+u*b,s[7]=l*p+f*x+u*C,s[2]=h*_+d*v+m*M,s[5]=h*g+d*y+m*b,s[8]=h*p+d*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*s*f+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*s,d=l*s-o*c,m=t*u+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(r*l-f*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(f*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ge;function lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){const i=_s("canvas");return i.style.display="block",i}const tu={};function xs(i){i in tu||(tu[i]=!0,console.warn(i))}function Hp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const nu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const i={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?Ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vt]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const $e=Vp();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class Gp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=_s("canvas")),Gi.width=e.width,Gi.height=e.height;const r=Gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wp=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(na(r[o].image)):s.push(na(r[o]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xp=0;const ia=new B;class wt extends Cr{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=ri,r=ri,s=$t,o=Gn,a=an,c=Cn,l=wt.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=_n(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Zf;wt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,M=(p+1)/2,b=(f+h)/4,C=(u+_)/4,A=(m+g)/4;return y>x&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=C/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=A/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=A/s),this.set(n,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(h-f)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends Cr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends qp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Bs.subVectors(this.max,Br),Wi.subVectors(e.a,Br),Xi.subVectors(e.b,Br),qi.subVectors(e.c,Br),Kn.subVectors(Xi,Wi),$n.subVectors(qi,Xi),gi.subVectors(Wi,qi);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-gi.y,gi.x,0];return!ra(t,Wi,Xi,qi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Wi,Xi,qi,Bs))?!1:(ks.crossVectors(Kn,$n),t=[ks.x,ks.y,ks.z],ra(t,Wi,Xi,qi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,Fs=new In,Wi=new B,Xi=new B,qi=new B,Kn=new B,$n=new B,gi=new B,Br=new B,Bs=new B,ks=new B,_i=new B;function ra(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){_i.fromArray(i,s);const a=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),f=n.dot(_i);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const jp=new In,kr=new B,sa=new B;class Dn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(sa)),this.expandByPoint(kr.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new B,oa=new B,zs=new B,Zn=new B,aa=new B,Hs=new B,ca=new B;class Rs{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oa.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(oa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=Zn.dot(this.direction),c=-Zn.dot(zs),l=Zn.lengthSq(),f=Math.abs(1-o*o);let u,h,d,m;if(f>0)if(u=o*c-a,h=o*a-c,m=s*f,u>=0)if(h>=-m)if(h<=m){const _=1/f;u*=_,h*=_,d=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oa).addScaledVector(zs,h),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){aa.subVectors(t,e),Hs.subVectors(n,e),ca.crossVectors(aa,Hs);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const c=a*this.direction.dot(Hs.crossVectors(Zn,Hs));if(c<0)return null;const l=a*this.direction.dot(aa.cross(Zn));if(l<0||c+l>o)return null;const f=-a*Zn.dot(ca);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,r,s,o,a,c,l,f,u,h,d,m,_,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,f,u,h,d,m,_,g)}set(e,t,n,r,s,o,a,c,l,f,u,h,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,d=o*u,m=a*f,_=a*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,d=c*u,m=l*f,_=l*u;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,d=c*u,m=l*f,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,d=o*u,m=a*f,_=a*u;t[0]=c*f,t[4]=m*l-d,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*f,t[4]=_-h*u,t[8]=m*u+d,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=d*u+m,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+_,t[5]=o*f,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,$p)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Jn.crossVectors(n,jt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Jn.crossVectors(n,jt)),Jn.normalize(),Vs.crossVectors(jt,Jn),r[0]=Jn.x,r[4]=Vs.x,r[8]=jt.x,r[1]=Jn.y,r[5]=Vs.y,r[9]=jt.y,r[2]=Jn.z,r[6]=Vs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],M=n[15],b=r[0],C=r[4],A=r[8],E=r[12],S=r[1],D=r[5],k=r[9],G=r[13],R=r[2],I=r[6],P=r[10],N=r[14],U=r[3],X=r[7],te=r[11],O=r[15];return s[0]=o*b+a*S+c*R+l*U,s[4]=o*C+a*D+c*I+l*X,s[8]=o*A+a*k+c*P+l*te,s[12]=o*E+a*G+c*N+l*O,s[1]=f*b+u*S+h*R+d*U,s[5]=f*C+u*D+h*I+d*X,s[9]=f*A+u*k+h*P+d*te,s[13]=f*E+u*G+h*N+d*O,s[2]=m*b+_*S+g*R+p*U,s[6]=m*C+_*D+g*I+p*X,s[10]=m*A+_*k+g*P+p*te,s[14]=m*E+_*G+g*N+p*O,s[3]=v*b+y*S+x*R+M*U,s[7]=v*C+y*D+x*I+M*X,s[11]=v*A+y*k+x*P+M*te,s[15]=v*E+y*G+x*N+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*u-r*l*u-s*a*h+n*l*h+r*a*d-n*c*d)+_*(+t*c*d-t*l*h+s*o*h-r*o*d+r*l*f-s*c*f)+g*(+t*l*u-t*a*d-s*o*u+n*o*d+s*a*f-n*l*f)+p*(-r*a*f-t*c*u+t*a*h+r*o*u-n*o*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=u*g*l-_*h*l+_*c*d-a*g*d-u*c*p+a*h*p,y=m*h*l-f*g*l-m*c*d+o*g*d+f*c*p-o*h*p,x=f*_*l-m*u*l+m*a*d-o*_*d-f*a*p+o*u*p,M=m*u*c-f*_*c-m*a*h+o*_*h+f*a*g-o*u*g,b=t*v+n*y+r*x+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(_*h*s-u*g*s-_*r*d+n*g*d+u*r*p-n*h*p)*C,e[2]=(a*g*s-_*c*s+_*r*l-n*g*l-a*r*p+n*c*p)*C,e[3]=(u*c*s-a*h*s-u*r*l+n*h*l+a*r*d-n*c*d)*C,e[4]=y*C,e[5]=(f*g*s-m*h*s+m*r*d-t*g*d-f*r*p+t*h*p)*C,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*C,e[7]=(o*h*s-f*c*s+f*r*l-t*h*l-o*r*d+t*c*d)*C,e[8]=x*C,e[9]=(m*u*s-f*_*s-m*n*d+t*_*d+f*n*p-t*u*p)*C,e[10]=(o*_*s-m*a*s+m*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(f*a*s-o*u*s-f*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=M*C,e[13]=(f*_*r-m*u*r+m*n*h-t*_*h-f*n*g+t*u*g)*C,e[14]=(m*a*r-o*_*r-m*n*c+t*_*c+o*n*g-t*a*g)*C,e[15]=(o*u*r-f*a*r+f*n*c-t*u*c-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+n,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,u=a+a,h=s*l,d=s*f,m=s*u,_=o*f,g=o*u,p=a*u,v=c*l,y=c*f,x=c*u,M=n.x,b=n.y,C=n.z;return r[0]=(1-(_+p))*M,r[1]=(d+x)*M,r[2]=(m-y)*M,r[3]=0,r[4]=(d-x)*b,r[5]=(1-(h+p))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(m+y)*C,r[9]=(g-v)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const l=1/s,f=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=f,hn.elements[5]*=f,hn.elements[6]*=f,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Rn,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===Rn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Co)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Rn,c=!1){const l=this.elements,f=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===Rn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Co)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new B,hn=new Ve,Kp=new B(0,0,0),$p=new B(1,1,1),Jn=new B,Vs=new B,jt=new B,ru=new Ve,su=new Ln;class Pn{constructor(e=0,t=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const ou=new B,ji=new Ln,Bn=new Ve,Gs=new B,zr=new B,Jp=new B,Qp=new Ln,au=new B(1,0,0),cu=new B(0,1,0),lu=new B(0,0,1),uu={type:"added"},em={type:"removed"},Ki={type:"childadded",child:null},la={type:"childremoved",child:null};class dt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new Pn,n=new Ln,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(zr,Gs,this.up):Bn.lookAt(Gs,zr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new B,kn=new B,ua=new B,zn=new B,$i=new B,Zi=new B,fu=new B,fa=new B,ha=new B,da=new B,pa=new Qe,ma=new Qe,ga=new Qe;class rn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){dn.subVectors(r,t),kn.subVectors(n,t),ua.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(kn),c=dn.dot(ua),l=kn.dot(kn),f=kn.dot(ua),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,d=(l*c-a*f)*h,m=(o*f-a*c)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pa,s.x),o.addScaledVector(ma,s.y),o.addScaledVector(ga,s.z),o}static isFrontFacing(e,t,n,r){return dn.subVectors(n,t),kn.subVectors(e,t),dn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),dn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;$i.subVectors(r,n),Zi.subVectors(s,n),fa.subVectors(e,n);const c=$i.dot(fa),l=Zi.dot(fa);if(c<=0&&l<=0)return t.copy(n);ha.subVectors(e,r);const f=$i.dot(ha),u=Zi.dot(ha);if(f>=0&&u<=f)return t.copy(r);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector($i,o);da.subVectors(e,s);const d=$i.dot(da),m=Zi.dot(da);if(m>=0&&d<=m)return t.copy(s);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Zi,a);const g=f*m-d*u;if(g<=0&&u-f>=0&&d-m>=0)return fu.subVectors(s,r),a=(u-f)/(u-f+(d-m)),t.copy(r).addScaledVector(fu,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=hl(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_a(o,s,e+1/3),this.g=_a(o,s,e),this.b=_a(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return $e.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(It.copy(this),t);const n=It.r,r=It.g,s=It.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=_t){$e.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Ws);const n=rs(Qn.h,Ws.h,t),r=rs(Qn.s,Ws.s,t),s=rs(Qn.l,Ws.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Fe;Fe.NAMES=fh;let tm=0;class xn extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=ur,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=ec,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dt extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,Xs=new Oe;let nm=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class hh extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let im=0;const tn=new Ve,xa=new dt,Ji=new B,Kt=new In,Hr=new In,Pt=new B;class Ct extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?dh:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Kt.min,Hr.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,Hr.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(Hr.min),Kt.expandByPoint(Hr.max))}Kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Pt.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(e,l),Pt.add(Ji)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new B,c[A]=new B;const l=new B,f=new B,u=new B,h=new Oe,d=new Oe,m=new Oe,_=new B,g=new B;function p(A,E,S){l.fromBufferAttribute(n,A),f.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),h.fromBufferAttribute(s,A),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,S),f.sub(l),u.sub(l),d.sub(h),m.sub(h);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(D),a[A].add(_),a[E].add(_),a[S].add(_),c[A].add(g),c[E].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,E=v.length;A<E;++A){const S=v[A],D=S.start,k=S.count;for(let G=D,R=D+k;G<R;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new B,x=new B,M=new B,b=new B;function C(A){M.fromBufferAttribute(r,A),b.copy(M);const E=a[A];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(b,E);const D=x.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,D)}for(let A=0,E=v.length;A<E;++A){const S=v[A],D=S.start,k=S.count;for(let G=D,R=D+k;G<R;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,c=new B,l=new B,f=new B,u=new B;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(f),c.add(f),l.add(f),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*f;for(let p=0;p<f;p++)h[m++]=l[d++]}return new Ut(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,u=l.length;f<u;f++){const h=l[f],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];f.push(d.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new Ve,xi=new Rs,qs=new Dn,du=new B,Ys=new B,js=new B,Ks=new B,va=new B,$s=new B,pu=new B,Zs=new B;class Ze extends dt{constructor(e=new Ct,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],u=s[c];f!==0&&(va.fromBufferAttribute(u,e),o?$s.addScaledVector(va,f):$s.addScaledVector(va.sub(t),f))}t.add($s)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(qs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(qs,du)===null||xi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),xi.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){const b=a.getX(x),C=a.getX(x+1),A=a.getX(x+2);r=Js(this,p,e,n,l,f,u,b,C,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=Js(this,o,e,n,l,f,u,v,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){const b=x,C=x+1,A=x+2;r=Js(this,p,e,n,l,f,u,b,C,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;r=Js(this,o,e,n,l,f,u,v,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function rm(i,e,t,n,r,s,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===qn,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zs);return l<t.near||l>t.far?null:{distance:l,point:Zs.clone(),object:i}}function Js(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Ys),i.getVertexPosition(c,js),i.getVertexPosition(l,Ks);const f=rm(i,e,t,n,Ys,js,Ks,pu);if(f){const u=new B;rn.getBarycoord(pu,Ys,js,Ks,u),r&&(f.uv=rn.getInterpolatedAttribute(r,a,c,l,u,new Oe)),s&&(f.uv1=rn.getInterpolatedAttribute(s,a,c,l,u,new Oe)),o&&(f.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new B),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new B,materialIndex:0};rn.getNormal(Ys,js,Ks,h.normal),f.face=h,f.barycoord=u}return f}class cn extends Ct{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],u=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(u,2));function m(_,g,p,v,y,x,M,b,C,A,E){const S=x/C,D=M/A,k=x/2,G=M/2,R=b/2,I=C+1,P=A+1;let N=0,U=0;const X=new B;for(let te=0;te<P;te++){const O=te*D-G;for(let j=0;j<I;j++){const ie=j*S-k;X[_]=ie*v,X[g]=O*y,X[p]=R,l.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[p]=b>0?1:-1,f.push(X.x,X.y,X.z),u.push(j/C),u.push(1-te/A),N+=1}}for(let te=0;te<A;te++)for(let O=0;O<C;O++){const j=h+O+I*te,ie=h+O+I*(te+1),_e=h+(O+1)+I*(te+1),Pe=h+(O+1)+I*te;c.push(j,ie,Pe),c.push(ie,_e,Pe),U+=6}a.addGroup(d,U,E),d+=U,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=vr(i[t]);for(const r in n)e[r]=n[r]}return e}function sm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const om={clone:vr,merge:Ft};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new B,mu=new Oe,gu=new Oe;class Bt extends mh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class lm extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(Qi,er,e,t);r.layers=this.layers,this.add(r);const s=new Bt(Qi,er,e,t);s.layers=this.layers,this.add(s);const o=new Bt(Qi,er,e,t);o.layers=this.layers,this.add(o);const a=new Bt(Qi,er,e,t);a.layers=this.layers,this.add(a);const c=new Bt(Qi,er,e,t);c.layers=this.layers,this.add(c);const l=new Bt(Qi,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class gh extends wt{constructor(e=[],t=gr,n,r,s,o,a,c,l,f){super(e,t,n,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class um extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new gh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cn(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:li});s.uniforms.tEquirect.value=t;const o=new Ze(r,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=$t),new lm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class gn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ml{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hm extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _h{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new B;class vs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xh extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let tr;const Vr=new B,nr=new B,ir=new B,rr=new Oe,Gr=new Oe,vh=new Ve,Qs=new B,Wr=new B,eo=new B,_u=new Oe,Ma=new Oe,xu=new Oe;class dm extends dt{constructor(e=new xh){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _h(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new vs(n,3,0,!1)),tr.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;to(Qs.set(-.5,-.5,0),ir,o,nr,r,s),to(Wr.set(.5,-.5,0),ir,o,nr,r,s),to(eo.set(.5,.5,0),ir,o,nr,r,s),_u.set(0,0),Ma.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(Qs,Wr,eo,!1,Vr);if(a===null&&(to(Wr.set(-.5,.5,0),ir,o,nr,r,s),Ma.set(0,1),a=e.ray.intersectTriangle(Qs,eo,Wr,!1,Vr),a===null))return;const c=e.ray.origin.distanceTo(Vr);c<e.near||c>e.far||t.push({distance:c,point:Vr.clone(),uv:rn.getInterpolation(Vr,Qs,Wr,eo,_u,Ma,xu,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function to(i,e,t,n,r,s){rr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Gr.x=s*rr.x-r*rr.y,Gr.y=r*rr.x+s*rr.y):Gr.copy(rr),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(vh)}const vu=new B,yu=new Qe,Mu=new Qe,pm=new B,Su=new Ve,no=new B,Sa=new Dn,Eu=new Ve,Ea=new Rs;class mm extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(r),e.ray.intersectsSphere(Sa)!==!1&&(Eu.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(Eu),!(this.boundingBox!==null&&Ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;yu.fromBufferAttribute(r.attributes.skinIndex,e),Mu.fromBufferAttribute(r.attributes.skinWeight,e),vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mu.getComponent(s);if(o!==0){const a=yu.getComponent(s);Su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pm.copy(vu).applyMatrix4(Su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mh extends wt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=zt,f=zt,u,h){super(null,o,a,c,l,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Ve,gm=new Ve;class gl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gm;Tu.multiplyMatrices(a,t[s]),Tu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mh(t,e,e,an,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new yh),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class zc extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new Ve,bu=new Ve,io=[],wu=new In,_m=new Ve,Xr=new Ze,qr=new Dn;class Sh extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,_m)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),wu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),qr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sr),bu.multiplyMatrices(n,sr),Xr.matrixWorld=bu,Xr.raycast(e,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=s,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mh(new Float32Array(r*this.count),r,this.count,cl,mn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ta=new B,xm=new B,vm=new Ge;class bi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ta.subVectors(n,t).cross(xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vm.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Dn,ym=new Oe(.5,.5),ro=new B;class _l{constructor(e=new bi,t=new bi,n=new bi,r=new bi,s=new bi,o=new bi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],f=s[4],u=s[5],h=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],v=s[12],y=s[13],x=s[14],M=s[15];if(r[0].setComponents(l-o,d-f,p-m,M-v).normalize(),r[1].setComponents(l+o,d+f,p+m,M+v).normalize(),r[2].setComponents(l+a,d+u,p+_,M+y).normalize(),r[3].setComponents(l-a,d-u,p-_,M-y).normalize(),n)r[4].setComponents(c,h,g,x).normalize(),r[5].setComponents(l-c,d-h,p-g,M-x).normalize();else if(r[4].setComponents(l-c,d-h,p-g,M-x).normalize(),t===Rn)r[5].setComponents(l+c,d+h,p+g,M+x).normalize();else if(t===Co)r[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=ym.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xl extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new B,Lo=new B,Au=new Ve,Yr=new Rs,so=new Dn,ba=new B,Ru=new B;class Ho extends dt{constructor(e=new Ct,t=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Po.fromBufferAttribute(t,r-1),Lo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Po.distanceTo(Lo);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=s,e.ray.intersectsSphere(so)===!1)return;Au.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(Au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=f.getX(_),v=f.getX(_+1),y=oo(this,e,Yr,c,p,v,_);y&&t.push(y)}if(this.isLineLoop){const _=f.getX(m-1),g=f.getX(d),p=oo(this,e,Yr,c,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=oo(this,e,Yr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=oo(this,e,Yr,c,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oo(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Po.fromBufferAttribute(a,r),Lo.fromBufferAttribute(a,s),t.distanceSqToSegment(Po,Lo,ba,Ru)>n)return;ba.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ba);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Cu=new B,Pu=new B;class Mm extends Ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Cu.fromBufferAttribute(t,r),Pu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cu.distanceTo(Pu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sm extends Ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eh extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new Ve,Hc=new Rs,ao=new Dn,co=new B;class Em extends dt{constructor(e=new Ct,t=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;Lu.copy(r).invert(),Hc.copy(e.ray).applyMatrix4(Lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const g=l.getX(m);co.fromBufferAttribute(u,g),Iu(co,g,c,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=h,_=d;m<_;m++)co.fromBufferAttribute(u,m),Iu(co,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Iu(i,e,t,n,r,s,o){const a=Hc.distanceSqToPoint(i);if(a<t){const c=new B;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yr extends wt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Th extends wt{constructor(e,t,n=Ui,r,s,o,a=zt,c=zt,l,f=ds,u=1){if(f!==ds&&f!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bh extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Ct{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],f=t/2,u=Math.PI/2*e,h=t,d=2*u+h,m=n*2+s,_=r+1,g=new B,p=new B;for(let v=0;v<=m;v++){let y=0,x=0,M=0,b=0;if(v<=n){const E=v/n,S=E*Math.PI/2;x=-f-e*Math.cos(S),M=e*Math.sin(S),b=-e*Math.cos(S),y=E*u}else if(v<=n+s){const E=(v-n)/s;x=-f+E*t,M=e,b=0,y=u+E*h}else{const E=(v-n-s)/n,S=E*Math.PI/2;x=f+e*Math.sin(S),M=e*Math.cos(S),b=e*Math.sin(S),y=u+h+E*u}const C=Math.max(0,Math.min(1,y/d));let A=0;v===0?A=.5/r:v===m&&(A=-.5/r);for(let E=0;E<=r;E++){const S=E/r,D=S*Math.PI*2,k=Math.sin(D),G=Math.cos(D);p.x=-M*G,p.y=x,p.z=M*k,a.push(p.x,p.y,p.z),g.set(-M*G,b,M*k),g.normalize(),c.push(g.x,g.y,g.z),l.push(S+A,C)}if(v>0){const E=(v-1)*_;for(let S=0;S<r;S++){const D=E+S,k=E+S+1,G=v*_+S,R=v*_+S+1;o.push(D,k,G),o.push(k,R,G)}}}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Oi extends Ct{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],d=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function v(){const x=new B,M=new B;let b=0;const C=(t-e)/n;for(let A=0;A<=s;A++){const E=[],S=A/s,D=S*(t-e)+e;for(let k=0;k<=r;k++){const G=k/r,R=G*c+a,I=Math.sin(R),P=Math.cos(R);M.x=D*I,M.y=-S*n+g,M.z=D*P,u.push(M.x,M.y,M.z),x.set(I,C,P).normalize(),h.push(x.x,x.y,x.z),d.push(G,1-S),E.push(m++)}_.push(E)}for(let A=0;A<r;A++)for(let E=0;E<s;E++){const S=_[E][A],D=_[E+1][A],k=_[E+1][A+1],G=_[E][A+1];(e>0||E!==0)&&(f.push(S,D,G),b+=3),(t>0||E!==s-1)&&(f.push(D,k,G),b+=3)}l.addGroup(p,b,0),p+=b}function y(x){const M=m,b=new Oe,C=new B;let A=0;const E=x===!0?e:t,S=x===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,g*S,0),h.push(0,S,0),d.push(.5,.5),m++;const D=m;for(let k=0;k<=r;k++){const R=k/r*c+a,I=Math.cos(R),P=Math.sin(R);C.x=E*P,C.y=g*S,C.z=E*I,u.push(C.x,C.y,C.z),h.push(0,S,0),b.x=I*.5+.5,b.y=P*.5*S+.5,d.push(b.x,b.y),m++}for(let k=0;k<r;k++){const G=M+k,R=D+k;x===!0?f.push(R,R+1,G):f.push(R+1,R,G),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Oi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),f(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new B,x=new B,M=new B;for(let b=0;b<t.length;b+=3)d(t[b+0],y),d(t[b+1],x),d(t[b+2],M),c(y,x,M,v)}function c(v,y,x,M){const b=M+1,C=[];for(let A=0;A<=b;A++){C[A]=[];const E=v.clone().lerp(x,A/b),S=y.clone().lerp(x,A/b),D=b-A;for(let k=0;k<=D;k++)k===0&&A===b?C[A][k]=E:C[A][k]=E.clone().lerp(S,k/D)}for(let A=0;A<b;A++)for(let E=0;E<2*(b-A)-1;E++){const S=Math.floor(E/2);E%2===0?(h(C[A][S+1]),h(C[A+1][S]),h(C[A][S])):(h(C[A][S+1]),h(C[A+1][S+1]),h(C[A+1][S]))}}function l(v){const y=new B;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function f(){const v=new B;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=g(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(x,1-M)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],M=o[v+4],b=Math.max(y,x,M),C=Math.min(y,x,M);b>.9&&C<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){const v=new B,y=new B,x=new B,M=new B,b=new Oe,C=new Oe,A=new Oe;for(let E=0,S=0;E<s.length;E+=9,S+=6){v.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),b.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),M.copy(v).add(y).add(x).divideScalar(3);const D=g(M);_(b,S+0,v,D),_(C,S+2,y,D),_(A,S+4,x,D)}}function _(v,y,x,M){M<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=M/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.vertices,e.indices,e.radius,e.details)}}class Ml extends yl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ml(e.radius,e.detail)}}class jn extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,f=c+1,u=e/a,h=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<f;p++){const v=p*h-o;for(let y=0;y<l;y++){const x=y*u-s;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),M=v+1+l*(p+1),b=v+1+l*p;d.push(y,x,b),d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sl extends Ct{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],f=[];let u=e;const h=(t-e)/r,d=new B,m=new Oe;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,f.push(m.x,m.y)}u+=h}for(let _=0;_<r;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,x=v+n+1,M=v+n+2,b=v+1;a.push(y,x,b),a.push(x,M,b)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class si extends Ct{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const f=[],u=new B,h=new B,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const b=M/t;u.x=-e*Math.cos(r+b*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+b*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(b+x,1-y),v.push(l++)}f.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=f[p][v+1],x=f[p][v],M=f[p+1][v],b=f[p+1][v+1];(p!==0||o>0)&&d.push(y,x,b),(p!==n-1||c<Math.PI)&&d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cs extends Ct{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],f=new B,u=new B,h=new B;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){const _=m/r*s,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),h.subVectors(u,f).normalize(),c.push(h.x,h.y,h.z),l.push(m/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){const _=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,v=(r+1)*d+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class St extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tm extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Am(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Du(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function wh(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ps{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rm extends Ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:s=e,a=2*t-n;break;case $l:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:o=e,c=2*n-t;break;case $l:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,x=d*g-d*_;for(let M=0;M!==a;++M)s[M]=p*o[f+M]+v*o[l+M]+y*o[c+M]+x*o[u+M];return s}}class Cm extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(n-t)/(r-t),u=1-f;for(let h=0;h!==a;++h)s[h]=o[l+h]*u+o[c+h]*f;return s}}class Pm extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&wm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Qo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(r)c=!0;else{const u=a*n,h=u-n,d=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[h+m]||_!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=gs;class Pr extends Mn{constructor(e,t,n){super(e,t,n)}}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ms;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ah extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}Ah.prototype.ValueTypeName="color";class Mr extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}Mr.prototype.ValueTypeName="number";class Lm extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let f=l+a;l!==f;l+=4)Ln.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Sr extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Lm(this.times,this.values,this.getValueSize(),e)}}Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Mn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=ms;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}Er.prototype.ValueTypeName="vector";class Im{constructor(e="",t=-1,n=[],r=hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Um(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const f=Am(c);c=Du(c,1,f),l=Du(l,1,f),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Mr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],f=l.name.match(s);if(f&&f.length>1){const u=f[1];let h=r[u];h||(r[u]=h=[]),h.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,m,_){if(d.length!==0){const g=[],p=[];wh(d,g,p,m),g.length!==0&&_.push(new u(h,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const h=l[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)d[h[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let v=0;v!==h[m].morphTargets.length;++v){const y=h[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new Mr(".morphTargetInfluence["+_+"]",g,p))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Er,d+".position",h,"pos",r),n(Sr,d+".quaternion",h,"rot",r),n(Er,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Dm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return Ah;case"quaternion":return Sr;case"bool":case"boolean":return Pr;case"string":return Lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Um(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dm(i.type);if(i.times===void 0){const t=[],n=[];wh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nm{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Om=new Nm;class Ir{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Fm extends Error{constructor(e,t){super(e),this.response=t}}class Rh extends Ir{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:r});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=Hn[e],u=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let b=0,C=f.length;b<C;b++){const A=f[b];A.onProgress&&A.onProgress(M)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Fm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Wn.add(`file:${e}`,l);const f=Hn[e];delete Hn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const f=Hn[e];if(f===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const or=new WeakMap;class Bm extends Ir{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=or.get(o);u===void 0&&(u=[],or.set(o,u)),u.push({onLoad:t,onError:r})}return o}const a=_s("img");function c(){f(),t&&t(this);const u=or.get(this)||[];for(let h=0;h<u.length;h++){const d=u[h];d.onLoad&&d.onLoad(this)}or.delete(this),s.manager.itemEnd(e)}function l(u){f(),r&&r(u),Wn.remove(`image:${e}`);const h=or.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(u)}or.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class km extends Ir{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new Bm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Vo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zm extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new Ve,Uu=new B,Nu=new B;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hm extends El{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vm extends Vo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ou=new Ve,jr=new B,Aa=new B;class Gm extends El{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),r.makeTranslation(-jr.x,-jr.y,-jr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou,n.coordinateSystem,n.reversedDepth)}}class Wm extends Vo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Gm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tl extends mh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xm extends El{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Xm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ss{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ra=new WeakMap;class qm extends Ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Ra.has(o)===!0)r&&r(Ra.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Ra.set(c,l),Wn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ym extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const bl="\\[\\]\\.:\\/",Km=new RegExp("["+bl+"]","g"),wl="[^"+bl+"]",$m="[^"+bl.replace("\\.","")+"]",Zm=/((?:WC+[\/:])*)/.source.replace("WC",wl),Jm=/(WCOD+)?/.source.replace("WCOD",$m),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),tg=new RegExp("^"+Zm+Jm+Qm+eg+"$"),ng=["material","materials","bones","map"];class ig{constructor(e,t,n){const r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(e){const t=tg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);ng.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=ig;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fu=new Ve;class Ls{constructor(e,t,n=0,r=1/0){this.ray=new Rs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return Vc(e,this,n,t),n.sort(Bu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Vc(e[r],this,n,t);return n.sort(Bu),n}}function Bu(i,e){return i.distance-e.distance}function Vc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Vc(s[o],e,t,!0)}}function ku(i,e,t,n){const r=rg(n);switch(t){case ih:return i*e;case cl:return i*e/r.components*r.byteLength;case ll:return i*e/r.components*r.byteLength;case sh:return i*e*2/r.components*r.byteLength;case ul:return i*e*2/r.components*r.byteLength;case rh:return i*e*3/r.components*r.byteLength;case an:return i*e*4/r.components*r.byteLength;case fl:return i*e*4/r.components*r.byteLength;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case uc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Ic:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(i){switch(i){case Cn:case Qf:return{byteLength:1,components:1};case fs:case eh:case As:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Ui:case sl:case mn:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function Ph(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function sg(i){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,f);else{u.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<u.length;d++){const m=u[h],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];i.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:cg,alphamap_pars_fragment:lg,alphatest_fragment:ug,alphatest_pars_fragment:fg,aomap_fragment:hg,aomap_pars_fragment:dg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:vg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Tg,color_fragment:bg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Dg,emissivemap_fragment:Ug,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:kg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Jg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:jg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:$g,lights_pars_begin:Zg,lights_toon_fragment:Qg,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:r_,lights_fragment_begin:s_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:f_,map_fragment:h_,map_pars_fragment:d_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:__,morphinstance_vertex:x_,morphcolor_vertex:v_,morphnormal_vertex:y_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:b_,normal_pars_vertex:w_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:I_,opaque_fragment:D_,packing:U_,premultiplied_alpha_fragment:N_,project_vertex:O_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:j_,specularmap_fragment:K_,specularmap_pars_fragment:$_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:Q_,transmission_pars_fragment:e0,uv_pars_fragment:t0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:r0,background_vert:s0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:c0,cube_vert:l0,cube_frag:u0,depth_vert:f0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:_0,linedashed_frag:x0,meshbasic_vert:v0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:b0,meshnormal_frag:w0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:I0,points_vert:D0,points_frag:U0,shadow_vert:N0,shadow_frag:O0,sprite_vert:F0,sprite_frag:B0},pe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wn={basic:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ft([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ft([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ft([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ft([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ft([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ft([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ft([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ft([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ft([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ft([pe.lights,pe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wn.physical={uniforms:Ft([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const uo={r:0,b:0,g:0},yi=new Pn,k0=new Ve;function z0(i,e,t,n,r,s,o){const a=new Fe(0);let c=s===!0?0:1,l,f,u=null,h=0,d=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const M=m(y);M===null?p(a,c):M&&M.isColor&&(p(M,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===zo)?(f===void 0&&(f=new Ze(new cn(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:vr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(yi)),f.material.toneMapped=$e.getTransfer(M.colorSpace)!==ct,(u!==M||h!==M.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ze(new jn(2,2),new di({name:"BackgroundMaterial",uniforms:vr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(uo,ph(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,x,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:v}}function H0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(S,D,k,G,R){let I=!1;const P=u(G,k,D);s!==P&&(s=P,l(s.object)),I=d(S,G,k,R),I&&m(S,G,k,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(S,D,k,G),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function u(S,D,k){const G=k.wireframe===!0;let R=n[S.id];R===void 0&&(R={},n[S.id]=R);let I=R[D.id];I===void 0&&(I={},R[D.id]=I);let P=I[G];return P===void 0&&(P=h(c()),I[G]=P),P}function h(S){const D=[],k=[],G=[];for(let R=0;R<t;R++)D[R]=0,k[R]=0,G[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:S,attributes:{},index:null}}function d(S,D,k,G){const R=s.attributes,I=D.attributes;let P=0;const N=k.getAttributes();for(const U in N)if(N[U].location>=0){const te=R[U];let O=I[U];if(O===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;P++}return s.attributesNum!==P||s.index!==G}function m(S,D,k,G){const R={},I=D.attributes;let P=0;const N=k.getAttributes();for(const U in N)if(N[U].location>=0){let te=I[U];te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),R[U]=O,P++}s.attributes=R,s.attributesNum=P,s.index=G}function _(){const S=s.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){const k=s.newAttributes,G=s.enabledAttributes,R=s.attributeDivisors;k[S]=1,G[S]===0&&(i.enableVertexAttribArray(S),G[S]=1),R[S]!==D&&(i.vertexAttribDivisor(S,D),R[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==S[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function y(S,D,k,G,R,I,P){P===!0?i.vertexAttribIPointer(S,D,k,R,I):i.vertexAttribPointer(S,D,k,G,R,I)}function x(S,D,k,G){_();const R=G.attributes,I=k.getAttributes(),P=D.defaultAttributeValues;for(const N in I){const U=I[N];if(U.location>=0){let X=R[N];if(X===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const te=X.normalized,O=X.itemSize,j=e.get(X);if(j===void 0)continue;const ie=j.buffer,_e=j.type,Pe=j.bytesPerElement,K=_e===i.INT||_e===i.UNSIGNED_INT||X.gpuType===sl;if(X.isInterleavedBufferAttribute){const ee=X.data,xe=ee.stride,Ue=X.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<U.locationSize;me++)p(U.location+me,ee.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<U.locationSize;me++)g(U.location+me);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let me=0;me<U.locationSize;me++)y(U.location+me,O/U.locationSize,_e,te,xe*Pe,(Ue+O/U.locationSize*me)*Pe,K)}else{if(X.isInstancedBufferAttribute){for(let ee=0;ee<U.locationSize;ee++)p(U.location+ee,X.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ee=0;ee<U.locationSize;ee++)g(U.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ee=0;ee<U.locationSize;ee++)y(U.location+ee,O/U.locationSize,_e,te,O*Pe,O/U.locationSize*ee*Pe,K)}}else if(P!==void 0){const te=P[N];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(U.location,te);break;case 3:i.vertexAttrib3fv(U.location,te);break;case 4:i.vertexAttrib4fv(U.location,te);break;default:i.vertexAttrib1fv(U.location,te)}}}}v()}function M(){A();for(const S in n){const D=n[S];for(const k in D){const G=D[k];for(const R in G)f(G[R].object),delete G[R];delete D[k]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const k in D){const G=D[k];for(const R in G)f(G[R].object),delete G[R];delete D[k]}delete n[S.id]}function C(S){for(const D in n){const k=n[D];if(k[S.id]===void 0)continue;const G=k[S.id];for(const R in G)f(G[R].object),delete G[R];delete k[S.id]}}function A(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function V0(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function o(l,f,u){u!==0&&(i.drawArraysInstanced(n,l,f,u),t.update(f,n,u))}function a(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,u);let d=0;for(let m=0;m<u;m++)d+=f[m];t.update(d,n,1)}function c(l,f,u,h){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],f[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,f,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=f[_]*h[_];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function G0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!A)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:b}}function W0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new bi,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||r;return r=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||s&&!g)s?f(null):l();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=f(m,h,y,d);for(let M=0;M!==y;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function X0(i){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=gr:a===lc&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===lc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new um(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const lr=4,zu=[.125,.215,.35,.446,.526,.582],Ri=20,Ca=new Tl,Hu=new Fe;let Pa=null,La=0,Ia=0,Da=!1;const wi=(1+Math.sqrt(5))/2,ar=1/wi,Vu=[new B(-wi,ar,0),new B(wi,ar,0),new B(-ar,0,wi),new B(ar,0,wi),new B(0,wi,-ar),new B(0,wi,ar),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],q0=new B;class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=q0}=s;Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Ia),this._renderer.xr.enabled=Da,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:As,format:an,colorSpace:Vt,depthBuffer:!1},r=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=j0(s,e,t)}return r}_compileMaterial(e){const t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,r,s){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Hu),u.toneMapping=ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Dt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Ze(new cn,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Hu),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[y]));const M=this._cubeSize;fo(r,x*M,y>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vu[(r-s-1)%Vu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Ze(this._lodPlanes[r],l),h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),_=s/m,g=isFinite(s)?1+Math.floor(f*_):Ri;g>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);const p=[];let v=0;for(let C=0;C<Ri;++C){const A=C/_,E=Math.exp(-A*A/2);p.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const x=this._sizeLods[r],M=3*x*(r>y-lr?r-y+lr:0),b=4*(this._cubeSize-x);fo(t,M,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Ca)}}function Y0(i){const e=[],t=[],n=[];let r=i;const s=i-lr+1+zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-lr?c=zu[o-i+lr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,A=b>2?0:-1,E=[C,A,0,C+2/3,A,0,C+2/3,A+1,0,C,A,0,C+2/3,A+1,0,C,A+1,0];v.set(E,_*m*b),y.set(h,g*m*b);const S=[b,b,b,b,b,b];x.set(S,p*m*b)}const M=new Ct;M.setAttribute("position",new Ut(v,_)),M.setAttribute("uv",new Ut(y,g)),M.setAttribute("faceIndex",new Ut(x,p)),e.push(M),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function j0(i,e,t){const n=new Float32Array(Ri),r=new B(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function qu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===cc||c===lc,f=c===gr||c===_r;if(l||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Gu(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||f&&d&&r(d)?(t===null&&(t=new Gu(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Z0(i,e,t,n){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function l(u){const h=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const M=v[y+0],b=v[y+1],C=v[y+2];h.push(M,b,b,C,C,M)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const M=y+0,b=y+1,C=y+2;h.push(M,b,b,C,C,M)}}else return;const g=new(lh(h)?dh:hh)(h,1);g.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function J0(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function l(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,s,h*o,m),t.update(d,n,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(h,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Q0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ex(i,e,t){const n=new WeakMap,r=new Qe;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let M=a.attributes.position.count*x,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*b*4*u),A=new uh(C,M,b,u);A.type=mn,A.needsUpdate=!0;const E=x*4;for(let D=0;D<u;D++){const k=p[D],G=v[D],R=y[D],I=M*b*4*D;for(let P=0;P<k.count;P++){const N=P*E;m===!0&&(r.fromBufferAttribute(k,P),C[I+N+0]=r.x,C[I+N+1]=r.y,C[I+N+2]=r.z,C[I+N+3]=0),_===!0&&(r.fromBufferAttribute(G,P),C[I+N+4]=r.x,C[I+N+5]=r.y,C[I+N+6]=r.z,C[I+N+7]=0),g===!0&&(r.fromBufferAttribute(R,P),C[I+N+8]=r.x,C[I+N+9]=r.y,C[I+N+10]=r.z,C[I+N+11]=R.itemSize===4?r.w:1)}}h={count:u,texture:A,size:new Oe(M,b)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function tx(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Lh=new wt,Yu=new Th(1,1),Ih=new uh,Dh=new Yp,Uh=new gh,ju=[],Ku=[],$u=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function Dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ju[r];if(s===void 0&&(s=new Float32Array(r),ju[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Ju.set(n),i.uniformMatrix2fv(this.addr,!1,Ju),Rt(t,n)}}function ax(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Rt(t,n)}}function cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),Rt(t,n)}}function lx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function dx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function _x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yu.compareFunction=ch,s=Yu):s=Lh,t.setTexture2D(e||s,r)}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dh,r)}function vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Uh,r)}function yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ih,r)}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return ux;case 35668:case 35672:return fx;case 35669:case 35673:return hx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return yx}}function Sx(i,e){i.uniform1fv(this.addr,e)}function Ex(i,e){const t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Tx(i,e){const t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function bx(i,e){const t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function wx(i,e){const t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ax(i,e){const t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rx(i,e){const t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cx(i,e){i.uniform1iv(this.addr,e)}function Px(i,e){i.uniform2iv(this.addr,e)}function Lx(i,e){i.uniform3iv(this.addr,e)}function Ix(i,e){i.uniform4iv(this.addr,e)}function Dx(i,e){i.uniform1uiv(this.addr,e)}function Ux(i,e){i.uniform2uiv(this.addr,e)}function Nx(i,e){i.uniform3uiv(this.addr,e)}function Ox(i,e){i.uniform4uiv(this.addr,e)}function Fx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lh,s[o])}function Bx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dh,s[o])}function kx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Uh,s[o])}function zx(i,e,t){const n=this.cache,r=e.length,s=Go(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function Hx(i){switch(i){case 5126:return Sx;case 35664:return Ex;case 35665:return Tx;case 35666:return bx;case 35674:return wx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Lx;case 35669:case 35673:return Ix;case 5125:return Dx;case 36294:return Ux;case 36295:return Nx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return zx}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Qu(i,e){i.seq.push(e),i.map[e.id]=e}function Xx(i,e,t){const n=i.name,r=n.length;for(Ua.lastIndex=0;;){const s=Ua.exec(n),o=Ua.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Qu(t,l===void 0?new Vx(a,i,e):new Gx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Wx(a),Qu(t,u)),t=u}}}class So{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Xx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ef(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qx=37297;let Yx=0;function jx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tf=new Ge;function Kx(i){$e._getMatrix(tf,$e.workingColorSpace,i);const e=`mat3( ${tf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+jx(i.getShaderSource(e),a)}else return s}function $x(i,e){const t=Kx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zx(i,e){let t;switch(e){case rp:t="Linear";break;case sp:t="Reinhard";break;case op:t="Cineon";break;case ap:t="ACESFilmic";break;case lp:t="AgX";break;case up:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new B;function Jx(){$e.getLuminanceCoefficients(ho);const i=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ts(i){return i!==""}function rf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(nv,rv)}const iv=new Map;function rv(i,e){let t=We[e];if(t===void 0){const n=iv.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace(sv,ov)}function ov(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function af(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function av(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function cv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_r&&(e="ENVMAP_MODE_REFRACTION"),e}function uv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $f:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function fv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=av(t),l=cv(t),f=lv(t),u=uv(t),h=fv(t),d=Qx(t),m=ev(s),_=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(g=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?We.tonemapping_pars_fragment:"",t.toneMapping!==ui?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,$x("linearToOutputTexel",t.outputColorSpace),Jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),o=Gc(o),o=rf(o,t),o=sf(o,t),a=Gc(a),a=rf(a,t),a=sf(a,t),o=of(o),a=of(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,x=v+p+a,M=ef(r,r.VERTEX_SHADER,y),b=ef(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(M)||"",R=r.getShaderInfoLog(b)||"",I=k.trim(),P=G.trim(),N=R.trim();let U=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,b);else{const te=nf(r,M,"vertex"),O=nf(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+te+`
`+O)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(P===""||N==="")&&(X=!1);X&&(D.diagnostics={runnable:U,programLog:I,vertexShader:{log:P,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(M),r.deleteShader(b),A=new So(r,_),E=tv(r,_)}let A;this.getUniforms=function(){return A===void 0&&C(this),A};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,qx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let dv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mv(e),t.set(e,n)),n}}class mv{constructor(e){this.id=dv++,this.code=e,this.usedTimes=0}}function gv(i,e,t,n,r,s,o){const a=new pl,c=new pv,l=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,D,k,G){const R=k.fog,I=G.geometry,P=E.isMeshStandardMaterial?k.environment:null,N=(E.isMeshStandardMaterial?t:e).get(E.envMap||P),U=N&&N.mapping===zo?N.image.height:null,X=m[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,O=te!==void 0?te.length:0;let j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let ie,_e,Pe,K;if(X){const et=wn[X];ie=et.vertexShader,_e=et.fragmentShader}else ie=E.vertexShader,_e=E.fragmentShader,c.update(E),Pe=c.getVertexShaderID(E),K=c.getFragmentShaderID(E);const ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,me=G.isBatchedMesh===!0,Te=!!E.map,Ke=!!E.matcap,F=!!N,nt=!!E.aoMap,ye=!!E.lightMap,Ie=!!E.bumpMap,be=!!E.normalMap,ot=!!E.displacementMap,Me=!!E.emissiveMap,ke=!!E.metalnessMap,pt=!!E.roughnessMap,gt=E.anisotropy>0,L=E.clearcoat>0,T=E.dispersion>0,W=E.iridescence>0,Q=E.sheen>0,oe=E.transmission>0,Z=gt&&!!E.anisotropyMap,re=L&&!!E.clearcoatMap,$=L&&!!E.clearcoatNormalMap,se=L&&!!E.clearcoatRoughnessMap,de=W&&!!E.iridescenceMap,J=W&&!!E.iridescenceThicknessMap,ue=Q&&!!E.sheenColorMap,Se=Q&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,he=!!E.specularColorMap,ze=!!E.specularIntensityMap,z=oe&&!!E.transmissionMap,ae=oe&&!!E.thicknessMap,fe=!!E.gradientMap,Ee=!!E.alphaMap,ce=E.alphaTest>0,ne=!!E.alphaHash,Re=!!E.extensions;let He=ui;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=i.toneMapping);const ft={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:_e,defines:E.defines,customVertexShaderID:Pe,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:me,batchingColor:me&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Vt,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:Ke,envMap:F,envMapMode:F&&N.mapping,envMapCubeUVHeight:U,aoMap:nt,lightMap:ye,bumpMap:Ie,normalMap:be,displacementMap:h&&ot,emissiveMap:Me,normalMapObjectSpace:be&&E.normalMapType===gp,normalMapTangentSpace:be&&E.normalMapType===ah,metalnessMap:ke,roughnessMap:pt,anisotropy:gt,anisotropyMap:Z,clearcoat:L,clearcoatMap:re,clearcoatNormalMap:$,clearcoatRoughnessMap:se,dispersion:T,iridescence:W,iridescenceMap:de,iridescenceThicknessMap:J,sheen:Q,sheenColorMap:ue,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:he,specularIntensityMap:ze,transmission:oe,transmissionMap:z,thicknessMap:ae,gradientMap:fe,opaque:E.transparent===!1&&E.blending===ur&&E.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ce,alphaHash:ne,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:nt&&_(E.aoMap.channel),lightMapUv:ye&&_(E.lightMap.channel),bumpMapUv:Ie&&_(E.bumpMap.channel),normalMapUv:be&&_(E.normalMap.channel),displacementMapUv:ot&&_(E.displacementMap.channel),emissiveMapUv:Me&&_(E.emissiveMap.channel),metalnessMapUv:ke&&_(E.metalnessMap.channel),roughnessMapUv:pt&&_(E.roughnessMap.channel),anisotropyMapUv:Z&&_(E.anisotropyMap.channel),clearcoatMapUv:re&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(E.sheenRoughnessMap.channel),specularMapUv:Ae&&_(E.specularMap.channel),specularColorMapUv:he&&_(E.specularColorMap.channel),specularIntensityMapUv:ze&&_(E.specularIntensityMap.channel),transmissionMapUv:z&&_(E.transmissionMap.channel),thicknessMapUv:ae&&_(E.thicknessMap.channel),alphaMapUv:Ee&&_(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(be||gt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(Te||Ee),fog:!!R,useFog:E.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wt,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=m[E.type];let D;if(S){const k=wn[S];D=om.clone(k.uniforms)}else D=E.uniforms;return D}function M(E,S){let D;for(let k=0,G=f.length;k<G;k++){const R=f[k];if(R.cacheKey===S){D=R,++D.usedTimes;break}}return D===void 0&&(D=new hv(i,S,E,s),f.push(D)),D}function b(E){if(--E.usedTimes===0){const S=f.indexOf(E);f[S]=f[f.length-1],f.pop(),E.destroy()}}function C(E){c.remove(E)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:f,dispose:A}}function _v(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,h,d,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,h,d,m,_,g){const p=o(u,h,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,h,d,m,_,g){const p=o(u,h,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,h){t.length>1&&t.sort(u||xv),n.length>1&&n.sort(h||cf),r.length>1&&r.sort(h||cf)}function f(){for(let u=e,h=i.length;u<h;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function vv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new lf,i.set(n,[o])):r>=s.length?(o=new lf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Fe};break;case"SpotLight":t={position:new B,direction:new B,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tv(i){const e=new yv,t=Mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const r=new B,s=new Ve,o=new Ve;function a(l){let f=0,u=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,M=0,b=0,C=0;l.sort(Ev);for(let E=0,S=l.length;E<S;E++){const D=l[E],k=D.color,G=D.intensity,R=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=k.r*G,u+=k.g*G,h+=k.b*G;else if(D.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(D.sh.coefficients[P],G);C++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,U=t.get(D);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=P,d++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(k).multiplyScalar(G),P.distance=R,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,n.spot[_]=P;const N=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,N.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=N.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=I,x++}_++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(k).multiplyScalar(G),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=P,g++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){const N=D.shadow,U=t.get(D);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=I,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=P,m++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(G),P.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[p]=P,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const A=n.hash;(A.directionalLength!==d||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==M||A.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,A.directionalLength=d,A.pointLength=m,A.spotLength=_,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=M,A.numLightProbes=C,n.version=Sv++)}function c(l,f){let u=0,h=0,d=0,m=0,_=0;const g=f.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function uf(i){const e=new Tv(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function bv(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new uf(i),e.set(r,[a])):s>=o.length?(a=new uf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rv(i,e,t){let n=new _l;const r=new Oe,s=new Oe,o=new Qe,a=new Tm({depthPacking:mp}),c=new bm,l={},f=t.maxTextureSize,u={[qn]:Xt,[Xt]:qn,[Wt]:Wt},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:wv,fragmentShader:Av}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ct;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ze(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jf;let p=this.type;this.render=function(b,C,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=p!==Vn&&this.type===Vn,R=p===Vn&&this.type!==Vn;for(let I=0,P=b.length;I<P;I++){const N=b[I],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const X=U.getFrameExtents();if(r.multiply(X),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,U.mapSize.y=s.y)),U.map===null||G===!0||R===!0){const O=this.type!==Vn?{minFilter:zt,magFilter:zt}:{};U.map!==null&&U.map.dispose(),U.map=new Ni(r.x,r.y,O),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const te=U.getViewportCount();for(let O=0;O<te;O++){const j=U.getViewport(O);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),k.viewport(o),U.updateMatrices(N,O),n=U.getFrustum(),x(C,A,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===Vn&&v(U,A),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,D)};function v(b,C){const A=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ni(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,A,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,A,d,_,null)}function y(b,C,A,E){let S=null;const D=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=A.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=S.uuid,G=C.uuid;let R=l[k];R===void 0&&(R={},l[k]=R);let I=R[G];I===void 0&&(I=S.clone(),R[G]=I,C.addEventListener("dispose",M)),S=I}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Vn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=A}return S}function x(b,C,A,E,S){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const G=e.update(b),R=b.material;if(Array.isArray(R)){const I=G.groups;for(let P=0,N=I.length;P<N;P++){const U=I[P],X=R[U.materialIndex];if(X&&X.visible){const te=y(b,X,E,S);b.onBeforeShadow(i,b,C,A,G,te,U),i.renderBufferDirect(A,null,G,te,b,U),b.onAfterShadow(i,b,C,A,G,te,U)}}}else if(R.visible){const I=y(b,R,E,S);b.onBeforeShadow(i,b,C,A,G,I,null),i.renderBufferDirect(A,null,G,I,b,null),b.onAfterShadow(i,b,C,A,G,I,null)}}const k=b.children;for(let G=0,R=k.length;G<R;G++)x(k[G],C,A,E,S)}function M(b){b.target.removeEventListener("dispose",M);for(const A in l){const E=l[A],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Cv={[tc]:nc,[ic]:oc,[rc]:ac,[mr]:sc,[nc]:tc,[oc]:ic,[ac]:rc,[sc]:mr};function Pv(i,e){function t(){let z=!1;const ae=new Qe;let fe=null;const Ee=new Qe(0,0,0,0);return{setMask:function(ce){fe!==ce&&!z&&(i.colorMask(ce,ce,ce,ce),fe=ce)},setLocked:function(ce){z=ce},setClear:function(ce,ne,Re,He,ft){ft===!0&&(ce*=He,ne*=He,Re*=He),ae.set(ce,ne,Re,He),Ee.equals(ae)===!1&&(i.clearColor(ce,ne,Re,He),Ee.copy(ae))},reset:function(){z=!1,fe=null,Ee.set(-1,0,0,0)}}}function n(){let z=!1,ae=!1,fe=null,Ee=null,ce=null;return{setReversed:function(ne){if(ae!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ae=ne;const He=ce;ce=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(ne){ne?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ne){fe!==ne&&!z&&(i.depthMask(ne),fe=ne)},setFunc:function(ne){if(ae&&(ne=Cv[ne]),Ee!==ne){switch(ne){case tc:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case oc:i.depthFunc(i.GREATER);break;case ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ne}},setLocked:function(ne){z=ne},setClear:function(ne){ce!==ne&&(ae&&(ne=1-ne),i.clearDepth(ne),ce=ne)},reset:function(){z=!1,fe=null,Ee=null,ce=null,ae=!1}}}function r(){let z=!1,ae=null,fe=null,Ee=null,ce=null,ne=null,Re=null,He=null,ft=null;return{setTest:function(et){z||(et?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(et){ae!==et&&!z&&(i.stencilMask(et),ae=et)},setFunc:function(et,Nn,Sn){(fe!==et||Ee!==Nn||ce!==Sn)&&(i.stencilFunc(et,Nn,Sn),fe=et,Ee=Nn,ce=Sn)},setOp:function(et,Nn,Sn){(ne!==et||Re!==Nn||He!==Sn)&&(i.stencilOp(et,Nn,Sn),ne=et,Re=Nn,He=Sn)},setLocked:function(et){z=et},setClear:function(et){ft!==et&&(i.clearStencil(et),ft=et)},reset:function(){z=!1,ae=null,fe=null,Ee=null,ce=null,ne=null,Re=null,He=null,ft=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let f={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,M=null,b=null,C=new Fe(0,0,0),A=0,E=!1,S=null,D=null,k=null,G=null,R=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,N=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),P=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),P=N>=2);let X=null,te={};const O=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ie=new Qe().fromArray(O),_e=new Qe().fromArray(j);function Pe(z,ae,fe,Ee){const ce=new Uint8Array(4),ne=i.createTexture();i.bindTexture(z,ne),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<fe;Re++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ae+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ne}const K={};K[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(mr),Ie(!1),be(Gl),ee(i.CULL_FACE),nt(li);function ee(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function xe(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Ue(z,ae){return u[z]!==ae?(i.bindFramebuffer(z,ae),u[z]=ae,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function me(z,ae){let fe=d,Ee=!1;if(z){fe=h.get(ae),fe===void 0&&(fe=[],h.set(ae,fe));const ce=z.textures;if(fe.length!==ce.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=ce.length;ne<Re;ne++)fe[ne]=i.COLOR_ATTACHMENT0+ne;fe.length=ce.length,Ee=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(fe)}function Te(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const Ke={[Ai]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[zd]:i.FUNC_REVERSE_SUBTRACT};Ke[Hd]=i.MIN,Ke[Vd]=i.MAX;const F={[Gd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[qd]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[jd]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(z,ae,fe,Ee,ce,ne,Re,He,ft,et){if(z===li){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),z!==Bd){if(z!==g||et!==E){if((p!==Ai||x!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,x=Ai),et)switch(z){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,M=null,b=null,C.set(0,0,0),A=0,g=z,E=et}return}ce=ce||ae,ne=ne||fe,Re=Re||Ee,(ae!==p||ce!==x)&&(i.blendEquationSeparate(Ke[ae],Ke[ce]),p=ae,x=ce),(fe!==v||Ee!==y||ne!==M||Re!==b)&&(i.blendFuncSeparate(F[fe],F[Ee],F[ne],F[Re]),v=fe,y=Ee,M=ne,b=Re),(He.equals(C)===!1||ft!==A)&&(i.blendColor(He.r,He.g,He.b,ft),C.copy(He),A=ft),g=z,E=!1}function ye(z,ae){z.side===Wt?xe(i.CULL_FACE):ee(i.CULL_FACE);let fe=z.side===Xt;ae&&(fe=!fe),Ie(fe),z.blending===ur&&z.transparent===!1?nt(li):nt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ee=z.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Me(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function be(z){z!==Od?(ee(i.CULL_FACE),z!==D&&(z===Gl?i.cullFace(i.BACK):z===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=z}function ot(z){z!==k&&(P&&i.lineWidth(z),k=z)}function Me(z,ae,fe){z?(ee(i.POLYGON_OFFSET_FILL),(G!==ae||R!==fe)&&(i.polygonOffset(ae,fe),G=ae,R=fe)):xe(i.POLYGON_OFFSET_FILL)}function ke(z){z?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(z){z===void 0&&(z=i.TEXTURE0+I-1),X!==z&&(i.activeTexture(z),X=z)}function gt(z,ae,fe){fe===void 0&&(X===null?fe=i.TEXTURE0+I-1:fe=X);let Ee=te[fe];Ee===void 0&&(Ee={type:void 0,texture:void 0},te[fe]=Ee),(Ee.type!==z||Ee.texture!==ae)&&(X!==fe&&(i.activeTexture(fe),X=fe),i.bindTexture(z,ae||K[z]),Ee.type=z,Ee.texture=ae)}function L(){const z=te[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(z){ie.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function Se(z){_e.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),_e.copy(z))}function Ae(z,ae){let fe=l.get(ae);fe===void 0&&(fe=new WeakMap,l.set(ae,fe));let Ee=fe.get(z);Ee===void 0&&(Ee=i.getUniformBlockIndex(ae,z.name),fe.set(z,Ee))}function he(z,ae){const Ee=l.get(ae).get(z);c.get(ae)!==Ee&&(i.uniformBlockBinding(ae,Ee,z.__bindingPointIndex),c.set(ae,Ee))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},X=null,te={},u={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,M=null,b=null,C=new Fe(0,0,0),A=0,E=!1,S=null,D=null,k=null,G=null,R=null,ie.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:xe,bindFramebuffer:Ue,drawBuffers:me,useProgram:Te,setBlending:nt,setMaterial:ye,setFlipSided:Ie,setCullFace:be,setLineWidth:ot,setPolygonOffset:Me,setScissorTest:ke,activeTexture:pt,bindTexture:gt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:de,texImage3D:J,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:$,texStorage3D:se,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:re,scissor:ue,viewport:Se,reset:ze}}function Lv(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,f=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,T){return d?new OffscreenCanvas(L,T):_s("canvas")}function _(L,T,W){let Q=1;const oe=gt(L);if((oe.width>W||oe.height>W)&&(Q=W/Math.max(oe.width,oe.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(Q*oe.width),re=Math.floor(Q*oe.height);u===void 0&&(u=m(Z,re));const $=T?m(Z,re):u;return $.width=Z,$.height=re,$.getContext("2d").drawImage(L,0,0,Z,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+re+")."),$}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,W,Q,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=T;if(T===i.RED&&(W===i.FLOAT&&(Z=i.R32F),W===i.HALF_FLOAT&&(Z=i.R16F),W===i.UNSIGNED_BYTE&&(Z=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.R8UI),W===i.UNSIGNED_SHORT&&(Z=i.R16UI),W===i.UNSIGNED_INT&&(Z=i.R32UI),W===i.BYTE&&(Z=i.R8I),W===i.SHORT&&(Z=i.R16I),W===i.INT&&(Z=i.R32I)),T===i.RG&&(W===i.FLOAT&&(Z=i.RG32F),W===i.HALF_FLOAT&&(Z=i.RG16F),W===i.UNSIGNED_BYTE&&(Z=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RG8UI),W===i.UNSIGNED_SHORT&&(Z=i.RG16UI),W===i.UNSIGNED_INT&&(Z=i.RG32UI),W===i.BYTE&&(Z=i.RG8I),W===i.SHORT&&(Z=i.RG16I),W===i.INT&&(Z=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),W===i.UNSIGNED_INT&&(Z=i.RGB32UI),W===i.BYTE&&(Z=i.RGB8I),W===i.SHORT&&(Z=i.RGB16I),W===i.INT&&(Z=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),W===i.UNSIGNED_INT&&(Z=i.RGBA32UI),W===i.BYTE&&(Z=i.RGBA8I),W===i.SHORT&&(Z=i.RGBA16I),W===i.INT&&(Z=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),T===i.RGBA){const re=oe?Ro:$e.getTransfer(Q);W===i.FLOAT&&(Z=i.RGBA32F),W===i.HALF_FLOAT&&(Z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Z=re===ct?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(L,T){let W;return L?T===null||T===Ui||T===hs?W=i.DEPTH24_STENCIL8:T===mn?W=i.DEPTH32F_STENCIL8:T===fs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ui||T===hs?W=i.DEPTH_COMPONENT24:T===mn?W=i.DEPTH_COMPONENT32F:T===fs&&(W=i.DEPTH_COMPONENT16),W}function M(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==zt&&L.minFilter!==$t?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&f.delete(T)}function C(L){const T=L.target;T.removeEventListener("dispose",C),S(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const W=L.source,Q=h.get(W);if(Q){const oe=Q[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(L),Object.keys(Q).length===0&&h.delete(W)}n.remove(L)}function E(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const W=L.source,Q=h.get(W);delete Q[T.__cacheKey],o.memory.textures--}function S(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let oe=0;oe<T.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(T.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=L.textures;for(let Q=0,oe=W.length;Q<oe;Q++){const Z=n.get(W[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(L)}let D=0;function k(){D=0}function G(){const L=D;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),D+=1,L}function R(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function I(L,T){const W=n.get(L);if(L.isVideoTexture&&ke(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,L,T);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function P(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){K(W,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function N(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){K(W,L,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function U(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){ee(W,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const X={[Di]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},te={[zt]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},O={[_p]:i.NEVER,[Ep]:i.ALWAYS,[xp]:i.LESS,[ch]:i.LEQUAL,[vp]:i.EQUAL,[Sp]:i.GEQUAL,[yp]:i.GREATER,[Mp]:i.NOTEQUAL};function j(L,T){if(T.type===mn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$t||T.magFilter===_o||T.magFilter===es||T.magFilter===Gn||T.minFilter===$t||T.minFilter===_o||T.minFilter===es||T.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,X[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,X[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,X[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,te[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zt||T.minFilter!==es&&T.minFilter!==Gn||T.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ie(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const Q=T.source;let oe=h.get(Q);oe===void 0&&(oe={},h.set(Q,oe));const Z=R(T);if(Z!==L.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[Z].usedTimes++;const re=oe[L.__cacheKey];re!==void 0&&(oe[L.__cacheKey].usedTimes--,re.usedTimes===0&&E(T)),L.__cacheKey=Z,L.__webglTexture=oe[Z].texture}return W}function _e(L,T,W){return Math.floor(Math.floor(L/W)/T)}function Pe(L,T,W,Q){const Z=L.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,Q,T.data);else{Z.sort((J,ue)=>J.start-ue.start);let re=0;for(let J=1;J<Z.length;J++){const ue=Z[re],Se=Z[J],Ae=ue.start+ue.count,he=_e(Se.start,T.width,4),ze=_e(ue.start,T.width,4);Se.start<=Ae+1&&he===ze&&_e(Se.start+Se.count-1,T.width,4)===he?ue.count=Math.max(ue.count,Se.start+Se.count-ue.start):(++re,Z[re]=Se)}Z.length=re+1;const $=i.getParameter(i.UNPACK_ROW_LENGTH),se=i.getParameter(i.UNPACK_SKIP_PIXELS),de=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let J=0,ue=Z.length;J<ue;J++){const Se=Z[J],Ae=Math.floor(Se.start/4),he=Math.ceil(Se.count/4),ze=Ae%T.width,z=Math.floor(Ae/T.width),ae=he,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,ze,z,ae,fe,W,Q,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,$),i.pixelStorei(i.UNPACK_SKIP_PIXELS,se),i.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function K(L,T,W){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const oe=ie(L,T),Z=T.source;t.bindTexture(Q,L.__webglTexture,i.TEXTURE0+W);const re=n.get(Z);if(Z.version!==re.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);const $=$e.getPrimaries($e.workingColorSpace),se=T.colorSpace===ii?null:$e.getPrimaries(T.colorSpace),de=T.colorSpace===ii||$===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let J=_(T.image,!1,r.maxTextureSize);J=pt(T,J);const ue=s.convert(T.format,T.colorSpace),Se=s.convert(T.type);let Ae=y(T.internalFormat,ue,Se,T.colorSpace,T.isVideoTexture);j(Q,T);let he;const ze=T.mipmaps,z=T.isVideoTexture!==!0,ae=re.__version===void 0||oe===!0,fe=Z.dataReady,Ee=M(T,J);if(T.isDepthTexture)Ae=x(T.format===ps,T.type),ae&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Se,null));else if(T.isDataTexture)if(ze.length>0){z&&ae&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ze[0].width,ze[0].height);for(let ce=0,ne=ze.length;ce<ne;ce++)he=ze[ce],z?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,he.width,he.height,ue,Se,he.data):t.texImage2D(i.TEXTURE_2D,ce,Ae,he.width,he.height,0,ue,Se,he.data);T.generateMipmaps=!1}else z?(ae&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,J.width,J.height),fe&&Pe(T,J,ue,Se)):t.texImage2D(i.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Se,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,ze[0].width,ze[0].height,J.depth);for(let ce=0,ne=ze.length;ce<ne;ce++)if(he=ze[ce],T.format!==an)if(ue!==null)if(z){if(fe)if(T.layerUpdates.size>0){const Re=ku(he.width,he.height,T.format,T.type);for(const He of T.layerUpdates){const ft=he.data.subarray(He*Re/he.data.BYTES_PER_ELEMENT,(He+1)*Re/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,He,he.width,he.height,1,ue,ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,he.width,he.height,J.depth,ue,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ae,he.width,he.height,J.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,he.width,he.height,J.depth,ue,Se,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ae,he.width,he.height,J.depth,0,ue,Se,he.data)}else{z&&ae&&t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ze[0].width,ze[0].height);for(let ce=0,ne=ze.length;ce<ne;ce++)he=ze[ce],T.format!==an?ue!==null?z?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,he.width,he.height,ue,Se,he.data):t.texImage2D(i.TEXTURE_2D,ce,Ae,he.width,he.height,0,ue,Se,he.data)}else if(T.isDataArrayTexture)if(z){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ae,J.width,J.height,J.depth),fe)if(T.layerUpdates.size>0){const ce=ku(J.width,J.height,T.format,T.type);for(const ne of T.layerUpdates){const Re=J.data.subarray(ne*ce/J.data.BYTES_PER_ELEMENT,(ne+1)*ce/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,J.width,J.height,1,ue,Se,Re)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Se,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,ue,Se,J.data);else if(T.isData3DTexture)z?(ae&&t.texStorage3D(i.TEXTURE_3D,Ee,Ae,J.width,J.height,J.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Se,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,ue,Se,J.data);else if(T.isFramebufferTexture){if(ae)if(z)t.texStorage2D(i.TEXTURE_2D,Ee,Ae,J.width,J.height);else{let ce=J.width,ne=J.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ae,ce,ne,0,ue,Se,null),ce>>=1,ne>>=1}}else if(ze.length>0){if(z&&ae){const ce=gt(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ce.width,ce.height)}for(let ce=0,ne=ze.length;ce<ne;ce++)he=ze[ce],z?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ue,Se,he):t.texImage2D(i.TEXTURE_2D,ce,Ae,ue,Se,he);T.generateMipmaps=!1}else if(z){if(ae){const ce=gt(J);t.texStorage2D(i.TEXTURE_2D,Ee,Ae,ce.width,ce.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Se,J)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ue,Se,J);g(T)&&p(Q),re.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ee(L,T,W){if(T.image.length!==6)return;const Q=ie(L,T),oe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const Z=n.get(oe);if(oe.version!==Z.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);const re=$e.getPrimaries($e.workingColorSpace),$=T.colorSpace===ii?null:$e.getPrimaries(T.colorSpace),se=T.colorSpace===ii||re===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,J=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!de&&!J?ue[ne]=_(T.image[ne],!0,r.maxCubemapSize):ue[ne]=J?T.image[ne].image:T.image[ne],ue[ne]=pt(T,ue[ne]);const Se=ue[0],Ae=s.convert(T.format,T.colorSpace),he=s.convert(T.type),ze=y(T.internalFormat,Ae,he,T.colorSpace),z=T.isVideoTexture!==!0,ae=Z.__version===void 0||Q===!0,fe=oe.dataReady;let Ee=M(T,Se);j(i.TEXTURE_CUBE_MAP,T);let ce;if(de){z&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ze,Se.width,Se.height);for(let ne=0;ne<6;ne++){ce=ue[ne].mipmaps;for(let Re=0;Re<ce.length;Re++){const He=ce[Re];T.format!==an?Ae!==null?z?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,He.width,He.height,Ae,he,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,He.width,He.height,0,Ae,he,He.data)}}}else{if(ce=T.mipmaps,z&&ae){ce.length>0&&Ee++;const ne=gt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(J){z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ae,he,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,ue[ne].width,ue[ne].height,0,Ae,he,ue[ne].data);for(let Re=0;Re<ce.length;Re++){const ft=ce[Re].image[ne].image;z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ft.width,ft.height,Ae,he,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,ft.width,ft.height,0,Ae,he,ft.data)}}else{z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,he,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Ae,he,ue[ne]);for(let Re=0;Re<ce.length;Re++){const He=ce[Re];z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ae,he,He.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,Ae,he,He.image[ne])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),Z.__version=oe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xe(L,T,W,Q,oe,Z){const re=s.convert(W.format,W.colorSpace),$=s.convert(W.type),se=y(W.internalFormat,re,$,W.colorSpace),de=n.get(T),J=n.get(W);if(J.__renderTarget=T,!de.__hasExternalTextures){const ue=Math.max(1,T.width>>Z),Se=Math.max(1,T.height>>Z);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,se,ue,Se,T.depth,0,re,$,null):t.texImage2D(oe,Z,se,ue,Se,0,re,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Me(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,oe,J.__webglTexture,0,ot(T)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,oe,J.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(L,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const Q=T.depthTexture,oe=Q&&Q.isDepthTexture?Q.type:null,Z=x(T.stencilBuffer,oe),re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=ot(T);Me(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,Z,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,L)}else{const Q=T.textures;for(let oe=0;oe<Q.length;oe++){const Z=Q[oe],re=s.convert(Z.format,Z.colorSpace),$=s.convert(Z.type),se=y(Z.internalFormat,re,$,Z.colorSpace),de=ot(T);W&&Me(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,se,T.width,T.height):Me(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,se,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,se,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const oe=Q.__webglTexture,Z=ot(T);if(T.depthTexture.format===ds)Me(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(T.depthTexture.format===ps)Me(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Te(L){const T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const oe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",oe)};Q.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=Q}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Q=L.texture.mipmaps;Q&&Q.length>0?me(T.__webglFramebuffer[0],L):me(T.__webglFramebuffer,L)}else if(W){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ue(T.__webglDepthbuffer[Q],L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Z)}}else{const Q=L.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ue(T.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(L,T,W){const Q=n.get(L);T!==void 0&&xe(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Te(L)}function F(L){const T=L.texture,W=n.get(L),Q=n.get(T);L.addEventListener("dispose",C);const oe=L.textures,Z=L.isWebGLCubeRenderTarget===!0,re=oe.length>1;if(re||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,o.memory.textures++),Z){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let se=0;se<T.mipmaps.length;se++)W.__webglFramebuffer[$][se]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<T.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(re)for(let $=0,se=oe.length;$<se;$++){const de=n.get(oe[$]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<oe.length;$++){const se=oe[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);const de=s.convert(se.format,se.colorSpace),J=s.convert(se.type),ue=y(se.internalFormat,de,J,se.colorSpace,L.isXRRenderTarget===!0),Se=ot(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ue,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),j(i.TEXTURE_CUBE_MAP,T);for(let $=0;$<6;$++)if(T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)xe(W.__webglFramebuffer[$][se],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,se);else xe(W.__webglFramebuffer[$],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let $=0,se=oe.length;$<se;$++){const de=oe[$],J=n.get(de);let ue=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),j(ue,de),xe(W.__webglFramebuffer,L,de,i.COLOR_ATTACHMENT0+$,ue,0),g(de)&&p(ue)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,Q.__webglTexture),j($,T),T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)xe(W.__webglFramebuffer[se],L,T,i.COLOR_ATTACHMENT0,$,se);else xe(W.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,$,0);g(T)&&p($),t.unbindTexture()}L.depthBuffer&&Te(L)}function nt(L){const T=L.textures;for(let W=0,Q=T.length;W<Q;W++){const oe=T[W];if(g(oe)){const Z=v(L),re=n.get(oe).__webglTexture;t.bindTexture(Z,re),p(Z),t.unbindTexture()}}}const ye=[],Ie=[];function be(L){if(L.samples>0){if(Me(L)===!1){const T=L.textures,W=L.width,Q=L.height;let oe=i.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(L),$=T.length>1;if($)for(let de=0;de<T.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const se=L.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let de=0;de<T.length;de++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[de]);const J=n.get(T[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,oe,i.NEAREST),c===!0&&(ye.length=0,Ie.length=0,ye.push(i.COLOR_ATTACHMENT0+de),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ye.push(Z),Ie.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<T.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,re.__webglColorRenderbuffer[de]);const J=n.get(T[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ot(L){return Math.min(r.maxSamples,L.samples)}function Me(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(L){const T=o.render.frame;f.get(L)!==T&&(f.set(L,T),L.update())}function pt(L,T){const W=L.colorSpace,Q=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Vt&&W!==ii&&($e.getTransfer(W)===ct?(Q!==an||oe!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=I,this.setTexture2DArray=P,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=Ke,this.setupRenderTarget=F,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me}function Iv(i,e){function t(n,r=ii){let s;const o=$e.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qf)return i.BYTE;if(n===eh)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===As)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===rh)return i.RGB;if(n===an)return i.RGBA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===sh)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===Mo)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===fc||n===hc||n===dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===uc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pc||n===mc)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===Ec||n===Tc||n===bc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_c)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===Ic||n===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lc)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Nc||n===Oc||n===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Dv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ov extends Cr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Nv,p={},v=t.getContextAttributes();let y=null,x=null;const M=[],b=[],C=new Oe;let A=null;const E=new Bt;E.viewport=new Qe;const S=new Bt;S.viewport=new Qe;const D=[E,S],k=new Ym;let G=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=M[K];return ee===void 0&&(ee=new ya,M[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=M[K];return ee===void 0&&(ee=new ya,M[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=M[K];return ee===void 0&&(ee=new ya,M[K]=ee),ee.getHandSpace()};function I(K){const ee=b.indexOf(K.inputSource);if(ee===-1)return;const xe=M[ee];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let K=0;K<M.length;K++){const ee=b[K];ee!==null&&(b[K]=null,M[K].disconnect(ee))}G=null,R=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(y),d=null,h=null,u=null,r=null,x=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?ps:ds,Ue=v.stencil?hs:Ui);const Te={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ni(h.textureWidth,h.textureHeight,{format:an,type:Cn,depthTexture:new Th(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ni(d.framebufferWidth,d.framebufferHeight,{format:an,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(K){for(let ee=0;ee<K.removed.length;ee++){const xe=K.removed[ee],Ue=b.indexOf(xe);Ue>=0&&(b[Ue]=null,M[Ue].disconnect(xe))}for(let ee=0;ee<K.added.length;ee++){const xe=K.added[ee];let Ue=b.indexOf(xe);if(Ue===-1){for(let Te=0;Te<M.length;Te++)if(Te>=b.length){b.push(xe),Ue=Te;break}else if(b[Te]===null){b[Te]=xe,Ue=Te;break}if(Ue===-1)break}const me=M[Ue];me&&me.connect(xe)}}const U=new B,X=new B;function te(K,ee,xe){U.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);const Ue=U.distanceTo(X),me=ee.projectionMatrix.elements,Te=xe.projectionMatrix.elements,Ke=me[14]/(me[10]-1),F=me[14]/(me[10]+1),nt=(me[9]+1)/me[5],ye=(me[9]-1)/me[5],Ie=(me[8]-1)/me[0],be=(Te[8]+1)/Te[0],ot=Ke*Ie,Me=Ke*be,ke=Ue/(-Ie+be),pt=ke*-Ie;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const gt=Ke+ke,L=F+ke,T=ot-pt,W=Me+(Ue-pt),Q=nt*F/L*gt,oe=ye*F/L*gt;K.projectionMatrix.makePerspective(T,W,Q,oe,gt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function O(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,xe=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),k.near=S.near=E.near=ee,k.far=S.far=E.far=xe,(G!==k.near||R!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,R=k.far),k.layers.mask=K.layers.mask|6,E.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;const Ue=K.parent,me=k.cameras;O(k,Ue);for(let Te=0;Te<me.length;Te++)O(me[Te],Ue);me.length===2?te(k,E,S):k.projectionMatrix.copy(E.projectionMatrix),j(K,k,Ue)};function j(K,ee,xe){xe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let ie=null;function _e(K,ee){if(f=ee.getViewerPose(l||o),m=ee,f!==null){const xe=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ue=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let F=0;F<xe.length;F++){const nt=xe[F];let ye=null;if(d!==null)ye=d.getViewport(nt);else{const be=u.getViewSubImage(h,nt);ye=be.viewport,F===0&&(e.setRenderTargetTextures(x,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(x))}let Ie=D[F];Ie===void 0&&(Ie=new Bt,Ie.layers.enable(F),Ie.viewport=new Qe,D[F]=Ie),Ie.matrix.fromArray(nt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(nt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ye.x,ye.y,ye.width,ye.height),F===0&&(k.matrix.copy(Ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(Ie)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const F=u.getDepthInformation(xe[0]);F&&F.isValid&&F.texture&&g.init(F,r.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let F=0;F<xe.length;F++){const nt=xe[F].camera;if(nt){let ye=p[nt];ye||(ye=new bh,p[nt]=ye);const Ie=u.getCameraImage(nt);ye.sourceTexture=Ie}}}}for(let xe=0;xe<M.length;xe++){const Ue=b[xe],me=M[xe];Ue!==null&&me!==void 0&&me.update(Ue,ee,l||o)}ie&&ie(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Pe=new Ph;Pe.setAnimationLoop(_e),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}const Mi=new Pn,Fv=new Ve;function Bv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(Mi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kv(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=r[v.id];x===void 0&&(m(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",g));const M=y.program;n.updateUBOMapping(v,M);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function f(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),M=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],x=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,C=x.length;b<C;b++){const A=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,S=A.length;E<S;E++){const D=A[E];if(d(D,b,E,M)===!0){const k=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let R=0;for(let I=0;I<G.length;I++){const P=G[I],N=_(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,k+R,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,R),R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,M){const b=v.value,C=y+"_"+x;if(M[C]===void 0)return typeof b=="number"||typeof b=="boolean"?M[C]=b:M[C]=b.clone(),!0;{const A=M[C];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return M[C]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function m(v){const y=v.uniforms;let x=0;const M=16;for(let C=0,A=y.length;C<A;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,D=E.length;S<D;S++){const k=E[S],G=Array.isArray(k.value)?k.value:[k.value];for(let R=0,I=G.length;R<I;R++){const P=G[R],N=_(P),U=x%M,X=U%N.boundary,te=U+X;x+=X,te!==0&&M-te<N.storage&&(x+=M-te),k.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=N.storage}}}const b=x%M;return b>0&&(x+=M-b),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class zv{constructor(e={}){const{canvas:t=zp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=_t;let b=0,C=0,A=null,E=-1,S=null;const D=new Qe,k=new Qe;let G=null;const R=new Fe(0);let I=0,P=t.width,N=t.height,U=1,X=null,te=null;const O=new Qe(0,0,P,N),j=new Qe(0,0,P,N);let ie=!1;const _e=new _l;let Pe=!1,K=!1;const ee=new Ve,xe=new B,Ue=new Qe,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Ke(){return A===null?U:1}let F=n;function nt(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const H="webgl2";if(F=nt(H,w),F===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Ie,be,ot,Me,ke,pt,gt,L,T,W,Q,oe,Z,re,$,se,de,J,ue,Se,Ae,he,ze;function z(){ye=new $0(F),ye.init(),Ae=new Iv(F,ye),Ie=new G0(F,ye,e,Ae),be=new Pv(F,ye),Ie.reversedDepthBuffer&&h&&be.buffers.depth.setReversed(!0),ot=new Q0(F),Me=new _v,ke=new Lv(F,ye,be,Me,Ie,Ae,ot),pt=new X0(x),gt=new K0(x),L=new sg(F),he=new H0(F,L),T=new Z0(F,L,ot,he),W=new tx(F,T,L,ot),J=new ex(F,Ie,ke),$=new W0(Me),Q=new gv(x,pt,gt,ye,Ie,he,$),oe=new Bv(x,Me),Z=new vv,re=new bv(ye),de=new z0(x,pt,gt,be,W,d,c),se=new Rv(x,W,Ie),ze=new kv(F,ot,Ie,be),ue=new V0(F,ye,ot),Se=new J0(F,ye,ot),ot.programs=Q.programs,x.capabilities=Ie,x.extensions=ye,x.properties=Me,x.renderLists=Z,x.shadowMap=se,x.state=be,x.info=ot}z();const ae=new Ov(x,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(P,N,!1))},this.getSize=function(w){return w.set(P,N)},this.setSize=function(w,H,q=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,N=H,t.width=Math.floor(w*U),t.height=Math.floor(H*U),q===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(P*U,N*U).floor()},this.setDrawingBufferSize=function(w,H,q){P=w,N=H,U=q,t.width=Math.floor(w*q),t.height=Math.floor(H*q),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,H,q,Y){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,H,q,Y),be.viewport(D.copy(O).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,H,q,Y){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,H,q,Y),be.scissor(k.copy(j).multiplyScalar(U).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){be.setScissorTest(ie=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,q=!0){let Y=0;if(w){let V=!1;if(A!==null){const le=A.texture.format;V=le===fl||le===ul||le===ll}if(V){const le=A.texture.type,ge=le===Cn||le===Ui||le===fs||le===hs||le===ol||le===al,we=de.getClearColor(),ve=de.getClearAlpha(),Ne=we.r,Be=we.g,Le=we.b;ge?(m[0]=Ne,m[1]=Be,m[2]=Le,m[3]=ve,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Ne,_[1]=Be,_[2]=Le,_[3]=ve,F.clearBufferiv(F.COLOR,0,_))}else Y|=F.COLOR_BUFFER_BIT}H&&(Y|=F.DEPTH_BUFFER_BIT),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),Z.dispose(),re.dispose(),Me.dispose(),pt.dispose(),gt.dispose(),W.dispose(),he.dispose(),ze.dispose(),Q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Sn),ae.removeEventListener("sessionend",Fl),pi.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ot.autoReset,H=se.enabled,q=se.autoUpdate,Y=se.needsUpdate,V=se.type;z(),ot.autoReset=w,se.enabled=H,se.autoUpdate=q,se.needsUpdate=Y,se.type=V}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const H=w.target;H.removeEventListener("dispose",ne),Re(H)}function Re(w){He(w),Me.remove(w)}function He(w){const H=Me.get(w).programs;H!==void 0&&(H.forEach(function(q){Q.releaseProgram(q)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,q,Y,V,le){H===null&&(H=me);const ge=V.isMesh&&V.matrixWorld.determinant()<0,we=Pd(w,H,q,Y,V);be.setMaterial(Y,ge);let ve=q.index,Ne=1;if(Y.wireframe===!0){if(ve=T.getWireframeAttribute(q),ve===void 0)return;Ne=2}const Be=q.drawRange,Le=q.attributes.position;let je=Be.start*Ne,at=(Be.start+Be.count)*Ne;le!==null&&(je=Math.max(je,le.start*Ne),at=Math.min(at,(le.start+le.count)*Ne)),ve!==null?(je=Math.max(je,0),at=Math.min(at,ve.count)):Le!=null&&(je=Math.max(je,0),at=Math.min(at,Le.count));const yt=at-je;if(yt<0||yt===1/0)return;he.setup(V,Y,we,q,ve);let mt,lt=ue;if(ve!==null&&(mt=L.get(ve),lt=Se,lt.setIndex(mt)),V.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*Ke()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(V.isLine){let De=Y.linewidth;De===void 0&&(De=1),be.setLineWidth(De*Ke()),V.isLineSegments?lt.setMode(F.LINES):V.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else V.isPoints?lt.setMode(F.POINTS):V.isSprite&&lt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,xt=V._multiDrawCounts,Je=V._multiDrawCount,qt=ve?L.get(ve).bytesPerElement:1,Hi=Me.get(Y).currentProgram.getUniforms();for(let Yt=0;Yt<Je;Yt++)Hi.setValue(F,"_gl_DrawID",Yt),lt.render(De[Yt]/qt,xt[Yt])}else if(V.isInstancedMesh)lt.renderInstances(je,yt,V.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xt=Math.min(q.instanceCount,De);lt.renderInstances(je,yt,xt)}else lt.render(je,yt)};function ft(w,H,q){w.transparent===!0&&w.side===Wt&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,Os(w,H,q),w.side=qn,w.needsUpdate=!0,Os(w,H,q),w.side=Wt):Os(w,H,q)}this.compile=function(w,H,q=null){q===null&&(q=w),p=re.get(q),p.init(H),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const we=le[ge];ft(we,q,V),Y.add(we)}else ft(le,q,V),Y.add(le)}),p=y.pop(),Y},this.compileAsync=function(w,H,q=null){const Y=this.compile(w,H,q);return new Promise(V=>{function le(){if(Y.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&Y.delete(ge)}),Y.size===0){V(w);return}setTimeout(le,10)}ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let et=null;function Nn(w){et&&et(w)}function Sn(){pi.stop()}function Fl(){pi.start()}const pi=new Ph;pi.setAnimationLoop(Nn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){et=w,ae.setAnimationLoop(w),w===null?pi.stop():pi.start()},ae.addEventListener("sessionstart",Sn),ae.addEventListener("sessionend",Fl),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,A),p=re.get(w,y.length),p.init(H),y.push(p),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),_e.setFromProjectionMatrix(ee,Rn,H.reversedDepth),K=this.localClippingEnabled,Pe=$.init(this.clippingPlanes,K),g=Z.get(w,v.length),g.init(),v.push(g),ae.enabled===!0&&ae.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Zo(le,H,-1/0,x.sortObjects)}Zo(w,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,te),Te=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Te&&de.addToRenderList(g,w),this.info.render.frame++,Pe===!0&&$.beginShadows();const q=p.state.shadowsArray;se.render(q,w,H),Pe===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){const le=H.cameras;if(V.length>0)for(let ge=0,we=le.length;ge<we;ge++){const ve=le[ge];kl(Y,V,w,ve)}Te&&de.render(w);for(let ge=0,we=le.length;ge<we;ge++){const ve=le[ge];Bl(g,w,ve,ve.viewport)}}else V.length>0&&kl(Y,V,w,H),Te&&de.render(w),Bl(g,w,H);A!==null&&C===0&&(ke.updateMultisampleRenderTarget(A),ke.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,H),he.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Pe===!0&&$.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Zo(w,H,q,Y){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_e.intersectsSprite(w)){Y&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const ge=W.update(w),we=w.material;we.visible&&g.push(w,ge,we,q,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_e.intersectsObject(w))){const ge=W.update(w),we=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(we)){const ve=ge.groups;for(let Ne=0,Be=ve.length;Ne<Be;Ne++){const Le=ve[Ne],je=we[Le.materialIndex];je&&je.visible&&g.push(w,ge,je,q,Ue.z,Le)}}else we.visible&&g.push(w,ge,we,q,Ue.z,null)}}const le=w.children;for(let ge=0,we=le.length;ge<we;ge++)Zo(le[ge],H,q,Y)}function Bl(w,H,q,Y){const V=w.opaque,le=w.transmissive,ge=w.transparent;p.setupLightsView(q),Pe===!0&&$.setGlobalState(x.clippingPlanes,q),Y&&be.viewport(D.copy(Y)),V.length>0&&Ns(V,H,q),le.length>0&&Ns(le,H,q),ge.length>0&&Ns(ge,H,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function kl(w,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?As:Cn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const le=p.state.transmissionRenderTarget[Y.id],ge=Y.viewport||D;le.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),ve=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(R),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Te&&de.render(q);const Be=x.toneMapping;x.toneMapping=ui;const Le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Pe===!0&&$.setGlobalState(x.clippingPlanes,Y),Ns(w,q,Y),ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le),ye.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let at=0,yt=H.length;at<yt;at++){const mt=H[at],lt=mt.object,De=mt.geometry,xt=mt.material,Je=mt.group;if(xt.side===Wt&&lt.layers.test(Y.layers)){const qt=xt.side;xt.side=Xt,xt.needsUpdate=!0,zl(lt,q,Y,De,xt,Je),xt.side=qt,xt.needsUpdate=!0,je=!0}}je===!0&&(ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le))}x.setRenderTarget(we,ve,Ne),x.setClearColor(R,I),Le!==void 0&&(Y.viewport=Le),x.toneMapping=Be}function Ns(w,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,le=w.length;V<le;V++){const ge=w[V],we=ge.object,ve=ge.geometry,Ne=ge.group;let Be=ge.material;Be.allowOverride===!0&&Y!==null&&(Be=Y),we.layers.test(q.layers)&&zl(we,H,q,ve,Be,Ne)}}function zl(w,H,q,Y,V,le){w.onBeforeRender(x,H,q,Y,V,le),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,H,q,Y,w,le),V.transparent===!0&&V.side===Wt&&V.forceSinglePass===!1?(V.side=Xt,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,w,le),V.side=qn,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,w,le),V.side=Wt):x.renderBufferDirect(q,H,Y,V,w,le),w.onAfterRender(x,H,q,Y,V,le)}function Os(w,H,q){H.isScene!==!0&&(H=me);const Y=Me.get(w),V=p.state.lights,le=p.state.shadowsArray,ge=V.state.version,we=Q.getParameters(w,V.state,le,H,q),ve=Q.getProgramCacheKey(we);let Ne=Y.programs;Y.environment=w.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(w.isMeshStandardMaterial?gt:pt).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",ne),Ne=new Map,Y.programs=Ne);let Be=Ne.get(ve);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===ge)return Vl(w,we),Be}else we.uniforms=Q.getUniforms(w),w.onBeforeCompile(we,x),Be=Q.acquireProgram(we,ve),Ne.set(ve,Be),Y.uniforms=we.uniforms;const Le=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=$.uniform),Vl(w,we),Y.needsLights=Id(w),Y.lightsStateVersion=ge,Y.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function Hl(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=So.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Vl(w,H){const q=Me.get(w);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Pd(w,H,q,Y,V){H.isScene!==!0&&(H=me),ke.resetTextureUnits();const le=H.fog,ge=Y.isMeshStandardMaterial?H.environment:null,we=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vt,ve=(Y.isMeshStandardMaterial?gt:pt).get(Y.envMap||ge),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,at=!!q.morphAttributes.color;let yt=ui;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=x.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=mt!==void 0?mt.length:0,De=Me.get(Y),xt=p.state.lights;if(Pe===!0&&(K===!0||w!==S)){const Nt=w===S&&Y.id===E;$.setState(Y,w,Nt)}let Je=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==xt.state.version||De.outputColorSpace!==we||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==ve||Y.fog===!0&&De.fog!==le||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==$.numPlanes||De.numIntersection!==$.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==je||De.morphColors!==at||De.toneMapping!==yt||De.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,De.__version=Y.version);let qt=De.currentProgram;Je===!0&&(qt=Os(Y,H,V));let Hi=!1,Yt=!1,Fr=!1;const vt=qt.getUniforms(),Qt=De.uniforms;if(be.useProgram(qt.program)&&(Hi=!0,Yt=!0,Fr=!0),Y.id!==E&&(E=Y.id,Yt=!0),Hi||S!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",w.projectionMatrix),vt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Gt=vt.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,xe.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Yt=!0,Fr=!0)}if(V.isSkinnedMesh){vt.setOptional(F,V,"bindMatrix"),vt.setOptional(F,V,"bindMatrixInverse");const Nt=V.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),vt.setValue(F,"boneTexture",Nt.boneTexture,ke))}V.isBatchedMesh&&(vt.setOptional(F,V,"batchingTexture"),vt.setValue(F,"batchingTexture",V._matricesTexture,ke),vt.setOptional(F,V,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",V._indirectTexture,ke),vt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",V._colorsTexture,ke));const en=q.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&J.update(V,q,qt),(Yt||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,vt.setValue(F,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qt.envMap.value=ve,Qt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Qt.envMapIntensity.value=H.environmentIntensity),Yt&&(vt.setValue(F,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Ld(Qt,Fr),le&&Y.fog===!0&&oe.refreshFogUniforms(Qt,le),oe.refreshMaterialUniforms(Qt,Y,U,N,p.state.transmissionRenderTarget[w.id]),So.upload(F,Hl(De),Qt,ke)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(So.upload(F,Hl(De),Qt,ke),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(F,"center",V.center),vt.setValue(F,"modelViewMatrix",V.modelViewMatrix),vt.setValue(F,"normalMatrix",V.normalMatrix),vt.setValue(F,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nt=Y.uniformsGroups;for(let Gt=0,Jo=Nt.length;Gt<Jo;Gt++){const mi=Nt[Gt];ze.update(mi,qt),ze.bind(mi,qt)}}return qt}function Ld(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Id(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,H,q){const Y=Me.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Me.get(w.texture).__webglTexture=H,Me.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const q=Me.get(w);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Dd=F.createFramebuffer();this.setRenderTarget=function(w,H=0,q=0){A=w,b=H,C=q;let Y=!0,V=null,le=!1,ge=!1;if(w){const ve=Me.get(w);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(ve.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(ve.__hasExternalTextures)ke.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&Me.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ge=!0);const Be=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?V=Be[H][q]:V=Be[H],le=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?V=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[q]:V=Be,D.copy(w.viewport),k.copy(w.scissor),G=w.scissorTest}else D.copy(O).multiplyScalar(U).floor(),k.copy(j).multiplyScalar(U).floor(),G=ie;if(q!==0&&(V=Dd),be.bindFramebuffer(F.FRAMEBUFFER,V)&&Y&&be.drawBuffers(w,V),be.viewport(D),be.scissor(k),be.setScissorTest(G),le){const ve=Me.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,q)}else if(ge){const ve=H;for(let Ne=0;Ne<w.textures.length;Ne++){const Be=Me.get(w.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,q,ve)}}else if(w!==null&&q!==0){const ve=Me.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(w,H,q,Y,V,le,ge,we=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){be.bindFramebuffer(F.FRAMEBUFFER,ve);try{const Ne=w.textures[we],Be=Ne.format,Le=Ne.type;if(!Ie.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Y&&q>=0&&q<=w.height-V&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(H,q,Y,V,Ae.convert(Be),Ae.convert(Le),le))}finally{const Ne=A!==null?Me.get(A).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,H,q,Y,V,le,ge,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(H>=0&&H<=w.width-Y&&q>=0&&q<=w.height-V){be.bindFramebuffer(F.FRAMEBUFFER,ve);const Ne=w.textures[we],Be=Ne.format,Le=Ne.type;if(!Ie.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,le.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+we),F.readPixels(H,q,Y,V,Ae.convert(Be),Ae.convert(Le),0);const at=A!==null?Me.get(A).__webglFramebuffer:null;be.bindFramebuffer(F.FRAMEBUFFER,at);const yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hp(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,le),F.deleteBuffer(je),F.deleteSync(yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(w.image.width*Y),le=Math.floor(w.image.height*Y),ge=H!==null?H.x:0,we=H!==null?H.y:0;ke.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ge,we,V,le),be.unbindTexture()};const Ud=F.createFramebuffer(),Nd=F.createFramebuffer();this.copyTextureToTexture=function(w,H,q=null,Y=null,V=0,le=null){le===null&&(V!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let ge,we,ve,Ne,Be,Le,je,at,yt;const mt=w.isCompressedTexture?w.mipmaps[le]:w.image;if(q!==null)ge=q.max.x-q.min.x,we=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Be=q.min.y,Le=q.isBox3?q.min.z:0;else{const en=Math.pow(2,-V);ge=Math.floor(mt.width*en),we=Math.floor(mt.height*en),w.isDataArrayTexture?ve=mt.depth:w.isData3DTexture?ve=Math.floor(mt.depth*en):ve=1,Ne=0,Be=0,Le=0}Y!==null?(je=Y.x,at=Y.y,yt=Y.z):(je=0,at=0,yt=0);const lt=Ae.convert(H.format),De=Ae.convert(H.type);let xt;H.isData3DTexture?(ke.setTexture3D(H,0),xt=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ke.setTexture2DArray(H,0),xt=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(H,0),xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Je=F.getParameter(F.UNPACK_ROW_LENGTH),qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hi=F.getParameter(F.UNPACK_SKIP_PIXELS),Yt=F.getParameter(F.UNPACK_SKIP_ROWS),Fr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Be),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);const vt=w.isDataArrayTexture||w.isData3DTexture,Qt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const en=Me.get(w),Nt=Me.get(H),Gt=Me.get(en.__renderTarget),Jo=Me.get(Nt.__renderTarget);be.bindFramebuffer(F.READ_FRAMEBUFFER,Gt.__webglFramebuffer),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let mi=0;mi<ve;mi++)vt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,V,Le+mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Me.get(H).__webglTexture,le,yt+mi)),F.blitFramebuffer(Ne,Be,ge,we,je,at,ge,we,F.DEPTH_BUFFER_BIT,F.NEAREST);be.bindFramebuffer(F.READ_FRAMEBUFFER,null),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Me.has(w)){const en=Me.get(w),Nt=Me.get(H);be.bindFramebuffer(F.READ_FRAMEBUFFER,Ud),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nd);for(let Gt=0;Gt<ve;Gt++)vt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,V,Le+Gt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,V),Qt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,le,yt+Gt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,le),V!==0?F.blitFramebuffer(Ne,Be,ge,we,je,at,ge,we,F.COLOR_BUFFER_BIT,F.NEAREST):Qt?F.copyTexSubImage3D(xt,le,je,at,yt+Gt,Ne,Be,ge,we):F.copyTexSubImage2D(xt,le,je,at,Ne,Be,ge,we);be.bindFramebuffer(F.READ_FRAMEBUFFER,null),be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Qt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(xt,le,je,at,yt,ge,we,ve,lt,De,mt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(xt,le,je,at,yt,ge,we,ve,lt,mt.data):F.texSubImage3D(xt,le,je,at,yt,ge,we,ve,lt,De,mt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,le,je,at,ge,we,lt,De,mt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,le,je,at,mt.width,mt.height,lt,mt.data):F.texSubImage2D(F.TEXTURE_2D,le,je,at,ge,we,lt,De,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fr),le===0&&H.generateMipmaps&&F.generateMipmap(xt),be.unbindTexture()},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){b=0,C=0,A=null,be.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class Tr{static createButton(e,t={}){const n=document.createElement("button");function r(){let l=null;async function f(d){d.addEventListener("end",u),await e.xr.setSession(d),n.textContent="EXIT VR",l=d}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",h).then(f):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(f).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(f).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():o(),l&&Tr.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Tr.xrSessionIsGranted=!0})}}}Tr.xrSessionIsGranted=!1;Tr.registerSessionGrantedListener();const Rl=Object.freeze,fi=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Is=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Nh=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Oh=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Hv=Rl({p:fi,n:Is,h:1n,a:0n,b:7n,Gx:Nh,Gy:Oh}),vn=32,ff=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,un=(i,e,t="")=>{if(ff(i)&&(e===void 0||i.length===e))return i;const n=ff(i),r=e!==void 0?` of length ${e}`:"",s=n?`length=${i.length}`:`type=${typeof i}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw n?new RangeError(o):new TypeError(o)},Vv=i=>Uint8Array.from(i),Gv=(i,e,t)=>Vv(un(i,t,e)),Fh=(i,e)=>i.toString(16).padStart(e,"0"),Bh=i=>{let e="";for(const t of un(i))e+=Fh(t,2);return e},kh=i=>{const e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);const t=new Uint8Array(i.length/2);for(let n=0,r=0;n<t.length;n++,r+=2){const s=i.charCodeAt(r),o=i.charCodeAt(r+1);t[n]=((s&15)+(s>>6)*9)*16+(o&15)+(o>>6)*9}return t},hf=()=>{const i=globalThis?.crypto?.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},br=(...i)=>{let e=0;for(const r of i)e+=un(r).length;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.length;return t},Cl=(i=vn)=>{const e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},Wv=BigInt,Ds=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},Ce=(i,e=fi)=>(i%=e)>=0n?i:e+i,Wo=i=>Ce(i,Is),Xv=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Ce(i,e),n=e,r=0n,s=1n;for(;t!==0n;){const a=n/t,c=n-t*a,l=r-s*a;n=t,t=c,r=s,s=l}if(n!==1n)throw new Error("invert: does not exist");return Ce(r,e)},zh=i=>{const e=Kv[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},df=(i,e,t)=>un(zh(i)(e,t),vn,"digest"),pf=async(i,e,t)=>un(await zh(i)(e,t),vn,"digest"),Na=i=>{if(i instanceof sn)return i;throw new TypeError("Point expected")},Oa="bad point: not on curve",Hh=i=>Ce(Ce(i*i)*i+7n),mf=i=>Ds(i,0n,fi),os=i=>Ds(i,1n,fi),Vh=i=>Ds(i,1n,Is),Xo=i=>!(i&1n),qv=i=>Uint8Array.of(Xo(i)?2:3),Gh=i=>{const e=Hh(os(i));let t=1n;for(let n=e,r=(fi+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*n%fi),n=n*n%fi;if(Ce(t*t)!==e)throw new Error("sqrt invalid");return new sn(i,Xo(t)?t:Ce(-t),1n)};class sn{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=mf(e),this.Y=os(t),this.Z=mf(n),Rl(this)}static CURVE(){return Hv}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?as:new sn(t,n,1n)}static fromBytes(e){un(e);const t=e.length,n=e[0],r=Do(e,1,33);try{if(t===33&&(n===2||n===3)){const s=Gh(r);return n===3?s.negate():s}if(t===65&&n===4)return new sn(r,Do(e,33,65),1n).assertValidity()}catch{throw new Error(Oa)}throw new Error(Oa)}static fromHex(e){return sn.fromBytes(kh(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=Na(e);return Ce(t*a)===Ce(s*r)&&Ce(n*a)===Ce(o*r)}is0(){return this.Z===0n}negate(){return new sn(this.X,Ce(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=Na(e),c=0n,l=7n;let f=0n,u=0n,h=0n;const d=Ce(l*3n);let m=Ce(t*s),_=Ce(n*o),g=Ce(r*a),p=Ce(t+n),v=Ce(s+o);p=Ce(p*v),v=Ce(m+_),p=Ce(p-v),v=Ce(t+r);let y=Ce(s+a);return v=Ce(v*y),y=Ce(m+g),v=Ce(v-y),y=Ce(n+r),f=Ce(o+a),y=Ce(y*f),f=Ce(_+g),y=Ce(y-f),h=Ce(c*v),f=Ce(d*g),h=Ce(f+h),f=Ce(_-h),h=Ce(_+h),u=Ce(f*h),_=Ce(m+m),_=Ce(_+m),g=Ce(c*g),v=Ce(d*v),_=Ce(_+g),g=Ce(m-g),g=Ce(c*g),v=Ce(v+g),m=Ce(_*v),u=Ce(u+m),m=Ce(y*v),f=Ce(p*f),f=Ce(f-m),m=Ce(p*_),h=Ce(y*h),h=Ce(h+m),new sn(f,u,h)}subtract(e){return this.add(Na(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return as;if(Vh(e),e===1n)return this;if(this.equals(Fi))return iy(e).p;let n=as,r=Fi,s=this;for(let o=0;t?o<256:e>0n;o++)e&1n?n=n.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const r=Xv(n,fi);if(Ce(n*r)!==1n)throw new Error("inverse invalid");return{x:Ce(e*r),y:Ce(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(os(e),os(t),Ce(t*t)!==Hh(e))throw new Error(Oa);return this}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),r=Yn(t);return e?br(qv(n),r):br(Uint8Array.of(4),r,Yn(n))}toHex(e){return Bh(this.toBytes(e))}}const Fi=new sn(Nh,Oh,1n),as=new sn(0n,1n,0n);sn.BASE=Fi;sn.ZERO=as;const Yv=(i,e,t)=>Fi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),ki=i=>Wv("0x"+(Bh(i)||"0")),Do=(i,e,t)=>ki(i.subarray(e,t)),Yn=i=>kh(Fh(Ds(i,0n,2n**256n),vn*2)),jv=i=>{const e=ki(un(i,vn,"secret key"));return Ds(e,1n,Is,"invalid secret key: outside of range")},gf="SHA-256",Kv={hmacSha256Async:async(i,e)=>{const t=hf(),n=await t.importKey("raw",i,{name:"HMAC",hash:gf},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await hf().digest(gf,i)),sha256:void 0},$v=i=>{if(i=i===void 0?Cl(48):i,un(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");const e=Ce(ki(i),Is-1n);return Yn(e+1n)},Zv=i=>e=>{const t=$v(e);return{secretKey:t,publicKey:i(t)}},Wh=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),Wc=(i,...e)=>{const t=df("sha256",Wh(i));return df("sha256",br(t,t,...e))},Xc=(i,...e)=>pf("sha256Async",Wh(i)).then(t=>pf("sha256Async",br(t,t,...e))),Pl=i=>{const e=jv(i),t=Fi.multiply(e),{x:n,y:r}=t.assertValidity().toAffine(),s=Xo(r)?e:Wo(-e),o=Yn(n);return{d:s,px:o}},Ll=i=>Wo(ki(i)),Xh=(...i)=>Ll(Wc("challenge",...i)),qh=async(...i)=>Ll(await Xc("challenge",...i)),Yh=i=>Pl(i).px,Jv=Zv(Yh),jh=(i,e,t)=>{const n=Gv(i,"message"),{px:r,d:s}=Pl(e);return{m:n,px:r,d:s,a:un(t,vn)}},Kh=i=>{const e=Ll(i);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:n}=Pl(Yn(e));return{rx:t,k:n}},$h=(i,e,t,n)=>br(e,Yn(Wo(i+t*n))),Zh="invalid signature produced",Qv=(i,e,t=Cl(vn))=>{const{m:n,px:r,d:s,a:o}=jh(i,e,t),a=Yn(s^ki(Wc("aux",o))),{rx:c,k:l}=Kh(Wc("nonce",a,r,n)),f=$h(l,c,Xh(c,r,n),s);if(!Qh(f,n,r))throw new Error(Zh);return f},ey=async(i,e,t=Cl(vn))=>{const{m:n,px:r,d:s,a:o}=jh(i,e,t),a=Yn(s^ki(await Xc("aux",o))),{rx:c,k:l}=Kh(await Xc("nonce",a,r,n)),f=$h(l,c,await qh(c,r,n),s);if(!await ed(f,n,r))throw new Error(Zh);return f},ty=(i,e)=>i instanceof Promise?i.then(e):e(i),Jh=(i,e,t,n)=>{const r=un(i,64,"signature"),s=un(e,void 0,"message"),o=un(t,vn,"publicKey");let a,c,l,f;try{const u=ki(o);a=Gh(u),c=os(Do(r,0,vn)),l=Vh(Do(r,vn,64)),f=br(Yn(c),o,s)}catch{return!1}return ty(n(f),u=>{try{const{x:h,y:d}=Yv(a,l,Wo(-u)).toAffine();return!(!Xo(d)||h!==c)}catch{return!1}})},Qh=(i,e,t)=>Jh(i,e,t,Xh),ed=async(i,e,t)=>Jh(i,e,t,qh),td=Rl({keygen:Jv,getPublicKey:Yh,sign:Qv,verify:Qh,signAsync:ey,verifyAsync:ed}),ny=()=>{const i=[];let e=Fi,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let r=1;r<128;r++)t=t.add(e),i.push(t);e=t.double()}return i};let _f;const xf=(i,e)=>{const t=e.negate();return i?t:e},iy=i=>{const e=_f||(_f=ny());let t=as,n=Fi;for(let r=0;r<33;r++){let s=Number(i&255n);i>>=8n,s>128&&(s-=256,i+=1n);const o=r*128,a=o+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?n=n.add(xf(c,e[o])):t=t.add(xf(l,e[a]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}},{floor:qc,min:ry,sin:sy}=Math,yn="Trystero",ys=(i,e)=>Array(i).fill(void 0).map(e),oy="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Ur=i=>ys(i,()=>oy[qc(Math.random()*62)]??"").join(""),Ht=Ur(20),zi=Promise.all.bind(Promise),nd=typeof window<"u",{entries:Pi,fromEntries:id,keys:on,values:hr}=Object,kt=()=>{},rd="candidate",st=i=>(i!==null&&clearTimeout(i),null),tt=i=>new Error(`${yn}: ${i}`),wr=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:Zt(i??e),oi=(i,e)=>i instanceof Error?i:tt(wr(i,e)),ay=new TextEncoder,cy=new TextDecoder,hi=i=>ay.encode(i),Ci=i=>cy.decode(i),Ms=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ss=(...i)=>i.join("@"),ly=(i,e)=>{const t=[...i],n=()=>{const s=sy(e++)*1e4;return s-qc(s)};let r=t.length;for(;r;){const s=qc(n()*r--),o=t[r];t[r]=t[s],t[s]=o}return t},uy=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?ly(e,sd(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),Zt=JSON.stringify,Ar=i=>{try{return JSON.parse(i)}catch{throw tt(`failed to parse JSON: ${i}`)}},sd=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,vf=3333,yf=6e4,Fa={};let cs=null,Yc=null;const fy=()=>{cs||(cs=new Promise(i=>{Yc=i}).finally(()=>{Yc=null,cs=null}))},hy=()=>{Yc?.()},dy=(i,e,t)=>{const n={};let r=!1,s=!1,o,a=kt;n.isClosed=!1,n.ready=new Promise(l=>a=l);const c=()=>{if(n.isClosed)return;o=void 0,s=!1;const l=new WebSocket(i);l.onclose=()=>{if(n.isClosed||s)return;if(s=!0,cs){cs.then(c);return}const f=Fa[i]??=vf;if(f>=yf){n.isClosed=!0;return}o=setTimeout(c,Math.random()*f),Fa[i]=ry(f*2,yf)},l.onmessage=f=>e(String(f.data)),n.socket=l,n.url=l.url,l.onopen=()=>{const f=r;r=!0,a(n),Fa[i]=vf,f&&t?.()},n.send=f=>{l.readyState===1&&l.send(f)}};return n.close=()=>{n.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),n.socket.close()},c(),n},py=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw tt("relay bookkeeping missing registration for relay client");return a},r=()=>{const o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(n(c))}},s=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||s(o,a())},keyOf:n,scoped:r,getSockets:()=>id(Pi(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},my=()=>{if(nd){const i=new AbortController;return addEventListener("online",hy,{signal:i.signal}),addEventListener("offline",fy,{signal:i.signal}),()=>i.abort()}return kt},Il="AES-GCM",gy={},_y=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),xy=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},qo=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,hi(e))),Es=async i=>gy[i]??=Array.from(await qo("SHA-1",i)).map(e=>e.toString(36)).join(""),vy=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},hi(`${i}:${e}:${t}`)),{name:Il},!1,["encrypt","decrypt"]),yy=async(i,e)=>Ms(await qo("SHA-256",`${yn}:${i}:${e}`)),od="$",ad=",",My=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(ad)+od+_y(await crypto.subtle.encrypt({name:Il,iv:t},await i,hi(e)))},Sy=async(i,e)=>{const[t,n]=e.split(od);return Ci(await crypto.subtle.decrypt({name:Il,iv:new Uint8Array(t?.split(ad).map(Number)??[])},await i,xy(n??"")))},Dl=57333,Ey=18e4,Ty=20;var by=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(i){this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),ys(Ty,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},Dl)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(st(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:kt,close:kt,error:kt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(st(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},Ey))}checkout(i,e,t){const n=this.shift(i),r=Math.max(0,i-n.length);r>0&&n.push(...ys(r,this.makeOffer));const s=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return s(this.makeOffer(),!0);throw c}};return zi(n.map(o=>s(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{st(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const Ba=tt("incorrect password for overlapping room"),wy=(i,e,t)=>{const n=o=>qo("SHA-256",`${o}:${i}:${e}:${t}`).then(Ms),r=async(o,a,c)=>{if(!i)return;if(c){const f=Ur(36);await o({__trystero_pw:"challenge",c:f});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw Ba;const h=await n(f);if(u.h!==h)throw Ba;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Ba;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:r,compose:o=>i||o?async(a,c,l,f)=>{await r(c,l,f),await o?.(a,c,l,f)}:void 0}},Ay=i=>{const e=wr(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Ry=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:r,onActivate:s,onFailure:o})=>{const a={},c=(u,h)=>{const d=a[u];!d||h&&d.peer!==h||d.isActive||!d.didLocalHandshakePass||!d.didReceiveRemoteReady||(d.isActive=!0,d.handshakeTimer=st(d.handshakeTimer),s(u,d.peer))},l=(u,h,d)=>{const m=a[u];if(!m||m.peer!==h)return;const _=Ay(d);e?.(u,_),o(u,h,tt(_))},f=(u,h)=>{const d=a[u];!d||d.peer!==h||d.isActive||(d.didLocalHandshakePass=!0,r("",u).catch(m=>l(u,h,tt(`failed sending handshake readiness: ${wr(m,"unknown send failure")}`))),c(u,h))};return{addPeer:(u,h)=>{a[u]={peer:h,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,h)=>{const d=a[u];d&&(d.handshakeTimer=st(d.handshakeTimer),d.pendingHandshakePayloads.length=0,d.handshakeWaiters.splice(0).forEach(m=>m.reject(h)),delete a[u])},canReceiveFromPeer:(u,h)=>{const d=a[u];return!!(d&&(d.isActive||h))},start:(u,h)=>{const d=a[u];if(!d||d.peer!==h)return;d.handshakeTimer=setTimeout(()=>l(u,h,tt(`handshake timed out after ${t}ms`)),t);const m=async(p,v)=>{await n(p,u,v)},_=()=>new Promise((p,v)=>{const y=a[u];if(!y||y.peer!==h){v(tt("peer disconnected during handshake"));return}const x=y.pendingHandshakePayloads.shift();if(x){p(x);return}y.handshakeWaiters.push({resolve:p,reject:M=>v(M)})}),g=Ht<u;Promise.resolve(i?.(u,m,_,g)).then(()=>f(u,h)).catch(p=>l(u,h,oi(p,"handshake failed")))},receiveHandshakeData:(u,h,d)=>{const m=a[h];if(!m||m.isActive)return;const _=d===void 0?{data:u}:{data:u,metadata:d},g=m.handshakeWaiters.shift();if(g){g.resolve(_);return}m.pendingHandshakePayloads.push(_)},receiveHandshakeReady:u=>{const h=a[u];!h||h.isActive||(h.didReceiveRemoteReady=!0,c(u))}}},Cy=15e3,Py=5e3,Mf="icegatheringstatechange",Ly="iceconnectionstatechange",Kr="offer",Iy="answer",Dy=/out of range/i,Sf=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Ef=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const o=new(n??RTCPeerConnection)({iceServers:Uy.concat(r??[]),...t}),a={},c=[],l=[],f=e!==!1,u=[],h=[];let d=!1,m=!1,_=null,g=null,p=!1;const v=()=>g=st(g),y=()=>{p||(p=!0,v(),a.close?.())},x=O=>{a.signal?a.signal(O):c.push(O)},M=O=>{const j=a.signal;a.signal=ie=>{j?.(ie),O(ie)},c.length>0&&c.splice(0).forEach(ie=>a.signal?.(ie))},b=O=>s?Sf(O):O,C=O=>{if(!s||typeof O.candidate!="string")return O;const j=Sf(O.candidate);return j===O.candidate?O:{...O,candidate:j}},A=O=>({type:O.localDescription?.type??Kr,sdp:b(O.localDescription?.sdp??"")}),E=()=>{const O=o.remoteDescription?.sdp;return O?O.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},S=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,D=O=>{if(!o.remoteDescription)return!1;const j=S();if(typeof O.sdpMLineIndex=="number"&&j>0&&O.sdpMLineIndex>=j)return!1;const ie=E();return!(ie&&O.usernameFragment&&O.usernameFragment!==ie)},k=async O=>{try{return await o.addIceCandidate(O),!0}catch(j){if(j instanceof Error&&Dy.test(j.message)&&typeof O.sdpMLineIndex=="number")return!1;throw j}},G=async()=>{if(!o.remoteDescription||u.length===0)return;const O=u.splice(0),j=[];for(const ie of O){if(!D(ie)){j.push(ie);continue}await k(ie)||j.push(ie)}j.length>0&&u.push(...j)},R=async O=>{if(D(O)){await k(O)||u.push(O);return}u.push(O)},I=O=>{O.binaryType="arraybuffer",O.bufferedAmountLowThreshold=65535,O.onmessage=j=>{const ie=j.data;a.data?a.data(ie):l.push(ie)},O.onopen=()=>a.connect?.(),O.onclose=y,O.onerror=({error:j})=>a.error?.(oi(j,"data channel error"))},P=async O=>{let j=null;try{await Promise.race([new Promise(ie=>{const _e=()=>{O.iceGatheringState==="complete"&&(O.removeEventListener(Mf,_e),ie())};O.addEventListener(Mf,_e),_e()}),new Promise(ie=>{j=setTimeout(ie,Cy)})])}finally{st(j)}return A(O)},N=async()=>{const O=f?A(o):await P(o);return x(O),O};i?(_=o.createDataChannel("data"),I(_)):o.ondatachannel=({channel:O})=>{_=O,I(O)};const U=async(O=!1)=>{if(o.connectionState!=="closed")try{return d=!0,O&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Kr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(O?await o.createOffer({iceRestart:!0}):void 0),await N()}catch(j){a.error?.(oi(j,"failed to create local offer"))}finally{d=!1}};o.onnegotiationneeded=async()=>U(!1),o.onicecandidate=({candidate:O})=>{if(!f||!O)return;const j=C(typeof O.toJSON=="function"?O.toJSON():{candidate:O.candidate,sdpMid:O.sdpMid,sdpMLineIndex:O.sdpMLineIndex,usernameFragment:O.usernameFragment});x({type:rd,sdp:JSON.stringify(j)})};const X=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){y();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){v();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){g||(g=setTimeout(()=>{g=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&y()},Py));return}};o.onconnectionstatechange=X,o.addEventListener(Ly,X),o.ontrack=O=>{const j=O.streams[0];if(j){if(!a.track&&!a.stream){h.push({track:O.track,stream:j});return}a.track?.(O.track,j),a.stream?.(j)}},o.onremovestream=O=>a.stream?.(O.stream);const te=i?new Promise(O=>M(j=>{j.type===Kr&&O(j)})):Promise.resolve();return i&&queueMicrotask(()=>{!d&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return _},get isDead(){return o.connectionState==="closed"},getOffer:async(O=!1)=>{if(i)return O?U(!0):o.localDescription?.type===Kr?f?A(o):P(o):te},async signal(O){if(O.type==="candidate"){try{const j=JSON.parse(O.sdp);j&&typeof j=="object"&&await R(C(j))}catch(j){a.error?.(oi(j,"failed to parse remote candidate"))}return}if(!(_?.readyState==="open"&&!O.sdp?.includes("a=rtpmap")))try{const j={...O,sdp:b(O.sdp)};if(O.type===Kr){if(d||o.signalingState!=="stable"&&!m){if(i)return;await zi([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(j)])}else await o.setRemoteDescription(j);return await G(),await o.setLocalDescription(),await N()}if(O.type===Iy){m=!0;try{await o.setRemoteDescription(j),await G()}finally{m=!1}}}catch(j){a.error?.(oi(j,"failed to apply remote signal"))}},sendData:O=>_?.send(O),destroy:()=>{v(),_?.close(),o.close(),d=!1,m=!1,y()},setHandlers:O=>{const{signal:j,...ie}=O;Object.assign(a,ie),a.data&&l.length>0&&l.splice(0).forEach(_e=>a.data?.(_e)),j&&M(j),(a.track||a.stream)&&h.length>0&&h.splice(0).forEach(({track:_e,stream:Pe})=>{a.track?.(_e,Pe),a.stream?.(Pe)})},offerPromise:te,addStream:O=>O.getTracks().forEach(j=>o.addTrack(j,O)),removeStream:O=>o.getSenders().filter(j=>j.track&&O.getTracks().includes(j.track)).forEach(j=>o.removeTrack(j)),addTrack:(O,j)=>o.addTrack(O,j),removeTrack:O=>{const j=o.getSenders().find(ie=>ie.track===O);j&&o.removeTrack(j)},replaceTrack:(O,j)=>{const ie=o.getSenders().find(_e=>_e.track===O);if(ie)return ie.replaceTrack(j)}}};const Uy=[...ys(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),Ny=Object.getPrototypeOf(Uint8Array),ka=32,Oy=0,za=32,Tf=34,Ha=35,Eo=36,Si=16*2**10-Eo,$r=255,Fy=65535,bf="bufferedamountlow",wf="close",Af="error",By=1e4,ky=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),zy=(i,e=By)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,r=null;const s=c=>{n||(n=!0,i.removeEventListener(bf,o),i.removeEventListener(wf,a),i.removeEventListener(Af,a),st(r),t(c))},o=()=>s(!0),a=()=>s(!1);if(i.addEventListener(bf,o),i.addEventListener(wf,a),i.addEventListener(Af,a),r=setTimeout(()=>s(!1),e),i.readyState!=="open"){s(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&s(!0)}),Hy=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const r={},s={},o={},a={},c=(u,h,{includePending:d=!1}={})=>(u?Array.isArray(u)?u:[u]:e(d)).flatMap(m=>{const _=i(m,d);return _?[Promise.resolve(h(m,_))]:(console.warn(`${yn}: no peer with id ${m} found`),[])});return{makeInternalAction:(u,h={})=>{const d=s[u];if(r[u]&&d){const v=r[u].options;if(v.sendToPending!==!!h.sendToPending||v.receiveWhilePending!==!!h.receiveWhilePending)throw tt(`action type "${u}" cannot be redefined`);return d}if(!u)throw tt("action type argument is required");const m=hi(u);if(m.byteLength>ka)throw tt(`action type string "${u}" (${m.byteLength}b) exceeds byte limit (${ka}). Hint: choose a shorter name.`);const _={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},g=new Uint8Array(ka);g.set(m);let p=0;return r[u]={onComplete:kt,onProgress:kt,setOnComplete:v=>{r[u].onComplete=v;const y=a[u];y?.length&&(delete a[u],y.forEach(({payload:x,peerId:M,metadata:b})=>v(x,M,b)))},setOnProgress:v=>{r[u].onProgress=v},send:async(v,y,x,M,b)=>{n(b);const C=typeof v;if(C==="undefined")throw tt("action data cannot be undefined");const A=C!=="string",E=v instanceof Blob,S=E||v instanceof ArrayBuffer||v instanceof Ny,D=x!==void 0,k=S?ky(E?await v.arrayBuffer():v):hi(A?Zt(v):v),G=D?hi(Zt(x)):null,R=Math.ceil(k.byteLength/Si)+(D?1:0)||1,I=ys(R,(P,N)=>{const U=N===R-1,X=!!(D&&N===0),te=new Uint8Array(Eo+(X?G?.byteLength??0:U?k.byteLength-Si*(R-(D?2:1)):Si));return te.set(g),te.set([p>>8,p&$r],za),te.set([Number(U)|Number(X)<<1|Number(S)<<2|Number(A)<<3],Tf),te.set([Math.round((N+1)/R*$r)],Ha),te.set(D?X?G??new Uint8Array:k.subarray((N-1)*Si,N*Si):k.subarray(N*Si,(N+1)*Si),Eo),te});return p=p+1&Fy,await zi(c(y,async(P,N)=>{const{channel:U}=N;let X=0;for(;X<R;){n(b);const te=I[X];if(!te)break;if(U&&U.bufferedAmount>U.bufferedAmountLowThreshold){const ie=await zy(U);if(n(b),!ie)break}const O=i(P,_.sendToPending);if(!O||O!==N)break;N.sendData(te),X++;const j=te[Ha]??$r;M?.(j/$r,P,x)}},{includePending:_.sendToPending})),[]},options:_},s[u]={send:r[u].send,onMessage:r[u].setOnComplete,onProgress:r[u].setOnProgress}},handleData:(u,h)=>{const d=new Uint8Array(h),m=Ci(d.subarray(Oy,za)).replaceAll("\0",""),_=r[m];if(!t(u,!!_?.options.receiveWhilePending))return;const g=(d[za]??0)<<8|(d[33]??0),p=d[Tf]??0,v=d[Ha]??0,y=d.subarray(Eo),x=!!(p&1),M=!!(p&2),b=!!(p&4),C=!!(p&8);o[u]??={},o[u][m]??={};const A=o[u][m][g]??={chunks:[]};if(M?A.meta=Ar(Ci(y)):A.chunks.push(y),_?.onProgress(v/$r,u,A.meta),!x)return;const E=new Uint8Array(A.chunks.reduce((D,k)=>D+k.byteLength,0));A.chunks.reduce((D,k)=>(E.set(k,D),D+k.byteLength),0),delete o[u][m][g];const S=b?E:C?Ar(Ci(E)):Ci(E);if(_){_.onComplete(S,u,A.meta);return}(a[m]??=[]).push({payload:S,peerId:u,...A.meta===void 0?{}:{metadata:A.meta}})},clearPeer:u=>{delete o[u]}}},Vy=500,cr=(i,e)=>{const t=tt(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},Va=i=>{if(i?.aborted)throw cr("aborted","operation aborted")},Rf=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,Gy=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,po=(i,e)=>e===void 0?i:{...i,metadata:e},Wy=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},r={},s=Hy({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Va}),o=s.makeInternalAction,a=s.handleData,c=d=>{const m=r[d];m&&(st(m.timer),m.signal&&m.abortHandler&&m.signal.removeEventListener("abort",m.abortHandler),delete r[d])},l=(d,m)=>{Pi(r).forEach(([_,g])=>{g.peerId===d&&(c(_),g.reject(m))})},f=(d,m)=>{s.clearPeer(d),l(d,cr("disconnected",wr(m,"peer disconnected")))},u=o("@_response");return u.onMessage((d,m,_)=>{const g=Gy(_);if(!g)return;const p=r[g.r];if(!(!p||p.peerId!==m)){if(c(g.r),g.e!==void 0){p.reject(cr("rejected",g.e));return}p.resolve(d)}}),{makeAction:(d,m)=>{if(m&&"onRequest"in m&&m.kind!=="request")throw tt('request actions must use kind: "request"');const _=m?.kind??"message",g=o(d),p=n[d];if(p){if(p.kind!==_)throw tt(`action type "${d}" cannot be redefined`);return p.action}const v={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:m?.onReceiveProgress??null},y=(R,I)=>R?(P,N)=>R(P,po({peerId:N},I)):void 0,x=R=>{v.onReceiveProgress=R},M=(R,I,P)=>{const N=v.kind==="request"?Rf(P):null;v.onReceiveProgress?.(R,po({peerId:I},N?N.m:P))};if(g.onProgress(M),_==="message"){let R=m?.onMessage??null;const I=()=>{if(!R)return;const N=R;v.pendingMessages.splice(0).forEach(({payload:U,peerId:X,metadata:te})=>{Promise.resolve().then(()=>N(U,po({peerId:X},te))).catch(O=>console.error(`${yn} action handler error:`,O))})},P={send:async(N,U={})=>{await g.send(N,U.target,U.metadata,y(U.onProgress,U.metadata),U.signal)},get onMessage(){return R},set onMessage(N){R=N,I()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(N){x(N)}};return g.onMessage((N,U,X)=>{if(!R){v.pendingMessages.push(X===void 0?{payload:N,peerId:U}:{payload:N,peerId:U,metadata:X});return}const te=R;Promise.resolve().then(()=>te(N,po({peerId:U},X))).catch(O=>console.error(`${yn} action handler error:`,O))}),v.action=P,n[d]=v,I(),P}let b=m?.onRequest??null;const C=R=>{st(R.timer);const I=v.pendingRequests.indexOf(R);I>-1&&v.pendingRequests.splice(I,1)},A=(R,I,P)=>{u.send(null,R,{r:I,e:wr(P,"request failed")})},E=(R,I)=>{C(R),Promise.resolve().then(()=>I(R.payload,{peerId:R.peerId,...R.metadata===void 0?{}:{metadata:R.metadata},signal:R.controller.signal})).then(async P=>{if(P===void 0)throw tt("request handler returned undefined");await u.send(P,R.peerId,{r:R.requestId})}).catch(P=>A(R.peerId,R.requestId,P)).finally(()=>R.controller.abort())},S=()=>{b&&v.pendingRequests.slice().forEach(R=>E(R,b))},D=(R,I,P,N)=>{if(b){const X={payload:R,peerId:I,...P===void 0?{}:{metadata:P},requestId:N,controller:new AbortController,timer:null};E(X,b);return}const U={payload:R,peerId:I,...P===void 0?{}:{metadata:P},requestId:N,controller:new AbortController,timer:setTimeout(()=>{C(U),U.controller.abort(),A(I,N,"request handler unavailable")},Vy)};v.pendingRequests.push(U)},k=async(R,I)=>{const{target:P,metadata:N,onProgress:U,signal:X,timeoutMs:te}=I;if(Va(X),!i(P,!1))throw cr("disconnected",`no active peer with id ${P}`);const O=Ur(20),j=new Promise((ie,_e)=>{const Pe={peerId:P,resolve:ie,reject:_e,timer:null,...X===void 0?{}:{signal:X}},K=()=>{c(O),_e(cr("aborted","operation aborted"))};X&&(Pe.abortHandler=K,X.addEventListener("abort",K,{once:!0})),r[O]=Pe}).catch(ie=>{throw ie});try{await g.send(R,P,N===void 0?{r:O}:{r:O,m:N},y(U,N),X);const ie=r[O];return ie&&te!==void 0&&(ie.timer=setTimeout(()=>{c(O),ie.reject(cr("timeout","request timed out"))},te)),await j}catch(ie){throw c(O),ie}},G={request:k,requestMany:async(R,I)=>(Va(I.signal),await zi(I.targets.map(async P=>{try{const N={peerId:P,status:"fulfilled",value:await k(R,{target:P,...I.metadata===void 0?{}:{metadata:I.metadata},...I.timeoutMs===void 0?{}:{timeoutMs:I.timeoutMs},...I.onProgress===void 0?{}:{onProgress:I.onProgress},...I.signal===void 0?{}:{signal:I.signal}})};return I.onResult?.(N),N}catch(N){const U=oi(N,"request failed");if(U.kind==="aborted"||!U.kind)throw U;const X=U.kind==="timeout"?{peerId:P,status:"timeout"}:U.kind==="disconnected"?{peerId:P,status:"disconnected"}:{peerId:P,status:"rejected",error:U};return I.onResult?.(X),X}}))),get onRequest(){return b},set onRequest(R){b=R,S()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(R){x(R)}};return g.onMessage((R,I,P)=>{const N=Rf(P);N&&D(R,I,N.m,N.r)}),v.action=G,n[d]=v,S(),G},makeInternalAction:o,handleData:a,clearPeer:f}},Cf=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,Pf=i=>e=>{let t=i.get(e);return t||(t=Ur(20),i.set(e,t)),t},cd=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,r=new Map,s=new Map;return{getStreamKey:Pf(i),getTrackKey:Pf(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,f)=>{const u={track:a,stream:c};r.set(o,u),l&&s.set(l,u),f&&n.set(f,c)},getRemoteTrack:(o,a)=>r.get(o)??(a?s.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),r.clear(),s.clear()}}},Xy=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},r={},s=cd(),o={onPeerStream:null,onPeerTrack:null},a=(f,u,h,d)=>{e(f)&&(t(f)?.__trysteroMedia?.rememberRemoteStream(u,h,typeof h.id=="string"?h.id:void 0),o.onPeerStream?.(h,f,d))},c=(f,u,h,d,m)=>{e(f)&&(t(f)?.__trysteroMedia?.rememberRemoteTrack(u,h,d,typeof h.id=="string"?h.id:void 0,typeof d.id=="string"?d.id:void 0),o.onPeerTrack?.(h,d,f,m))},l=(f,u,h,d,m,_={})=>{const g={k:u,..._,...h===void 0?{}:{m:h}};return i(f,async(p,v)=>{await d(g,p),m(v)})};return{addStream:(f,u,h)=>l(u.target,s.getStreamKey(f),u.metadata,h,d=>d.addStream(f),{s:f.id}),removeStream:(f,u)=>{i(u,(h,d)=>d.removeStream(f))},addTrack:(f,u,h,d)=>l(h.target,s.getTrackKey(f),h.metadata,d,m=>m.addTrack(f,u),{s:u.id,t:f.id}),removeTrack:(f,u)=>{i(u,(h,d)=>d.removeTrack(f))},replaceTrack:(f,u,h,d)=>l(h.target,s.getTrackKey(u),h.metadata,d,m=>m.replaceTrack(f,u),{t:f.id}),receiveStreamMeta:(f,u)=>{if(!e(u))return;const h=Cf(f);if(!h)return;const d=t(u)?.__trysteroMedia?.getRemoteStream(h.key,h.streamId);if(d){a(u,h.key,d,h.metadata);return}(n[u]??=[]).push(h)},receiveTrackMeta:(f,u)=>{if(!e(u))return;const h=Cf(f);if(!h)return;const d=t(u)?.__trysteroMedia?.getRemoteTrack(h.key,h.trackId);if(d){c(u,h.key,d.track,d.stream,h.metadata);return}(r[u]??=[]).push(h)},receiveRemoteStream:(f,u)=>{if(!e(f))return;const h=n[f]?.shift();h&&a(f,h.key,u,h.metadata)},receiveRemoteTrack:(f,u,h)=>{if(!e(f))return;const d=r[f]?.shift();d&&c(f,d.key,u,h,d.metadata)},clearPeer:f=>{delete n[f],delete r[f]},get onPeerStream(){return o.onPeerStream},set onPeerStream(f){o.onPeerStream=f},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(f){o.onPeerTrack=f}}},Lf="beforeunload",qy=1e4,ti=i=>"@_"+i,ns=new Set,If=()=>ns.forEach(i=>i()),Yy=i=>(ns.add(i),ns.size===1&&addEventListener(Lf,If),()=>{ns.delete(i),ns.size||removeEventListener(Lf,If)});var jy=(i,e,t,{onPeerHandshake:n,onHandshakeError:r,handshakeTimeoutMs:s=qy,isPassive:o=!1}={})=>{const a={},c={},l={},f={onPeerJoin:null,onPeerLeave:null};let u=kt,h=null;const d=(R,I,{includePending:P=!1}={})=>(R?Array.isArray(R)?R:[R]:on(P?a:c)).flatMap(N=>{const U=P?a[N]:c[N];return U?[Promise.resolve(I(N,U))]:(console.warn(`${yn}: no peer with id ${N} found`),[])}),m=Xy({iterate:(R,I)=>d(R,(P,N)=>I(P,N)),isActive:R=>!!c[R],getSharedMediaPeer:R=>a[R]??null}),_=Wy({getPeer:(R,I)=>(I?a:c)[R],getPeerIds:R=>on(R?a:c),canReceiveFromPeer:(R,I)=>!!h?.canReceiveFromPeer(R,I)}),g=_.makeInternalAction,p=_.handleData,v=_.makeAction,y=(R,I=tt("peer disconnected"))=>{const P=oi(I,"peer disconnected");h?.clearPeer(R,P),delete a[R],delete c[R],_.clearPeer(R,P),l[R]?.splice(0).forEach(N=>N.reject(P)),delete l[R],m.clearPeer(R)},x=(R,I,P)=>{const N=a[R];if(!N||I&&N!==I)return;const U=!!c[R];y(R,P),N.destroy(),U&&f.onPeerLeave?.(R),e(R)},M=async()=>{await D.send(""),await new Promise(R=>setTimeout(R,99)),Pi(a).forEach(([R,I])=>{I.destroy(),y(R,tt("room left"))}),u(),t()},b=g(ti("ping")),C=g(ti("pong")),A=g(ti("signal")),E=g(ti("stream")),S=g(ti("track")),D=g(ti("leave"),{sendToPending:!0,receiveWhilePending:!0}),k=g(ti("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),G=g(ti("hsready"),{sendToPending:!0,receiveWhilePending:!0});return h=Ry({...n===void 0?{}:{onPeerHandshake:n},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:k.send,sendHandshakeReady:G.send,onActivate:(R,I)=>{c[R]=I,f.onPeerJoin?.(R)},onFailure:(R,I,P)=>x(R,I,P)}),b.onMessage((R,I)=>C.send("",I)),C.onMessage((R,I)=>{const P=l[I];P?.shift()?.resolve(),P&&!P.length&&delete l[I]}),A.onMessage((R,I)=>{c[I]&&a[I]?.signal(R)}),E.onMessage((R,I)=>m.receiveStreamMeta(R,I)),S.onMessage((R,I)=>m.receiveTrackMeta(R,I)),D.onMessage((R,I)=>x(I,void 0,tt("peer left room"))),k.onMessage((R,I,P)=>h?.receiveHandshakeData(R,I,P)),G.onMessage((R,I)=>h?.receiveHandshakeReady(I)),i((R,I)=>{const P=a[I];if(P){if(P===R)return;P.destroy(),y(I,tt("peer replaced"))}a[I]=R,h?.addPeer(I,R),R.setHandlers({data:N=>p(I,N),stream:N=>m.receiveRemoteStream(I,N),track:(N,U)=>m.receiveRemoteTrack(I,N,U),signal:N=>{c[I]&&A.send(N,I)},close:()=>x(I,R,tt("peer disconnected")),error:N=>{console.error(`${yn} peer error:`,N),x(I,R,N)}}),h?.start(I,R)}),nd&&(u=Yy(()=>M().catch(kt))),{makeAction:v,leave:M,ping:async R=>{if(!c[R])throw tt(`no active peer with id ${R}`);const I=Date.now();return await new Promise((P,N)=>{const U=l[R]??=[],X=()=>{const O=l[R];if(!O)return;const j=O.indexOf(te);j>-1&&O.splice(j,1),O.length||delete l[R]},te={resolve:()=>{X(),P()},reject:O=>{X(),N(O)}};U.push(te),b.send("",R).catch(O=>te.reject(oi(O,"peer disconnected")))}),Date.now()-I},isPassive:()=>o,getPeers:()=>id(Pi(c).map(([R,I])=>[R,I.connection])),addStream:(R,I={})=>m.addStream(R,I,E.send),removeStream:(R,I={})=>{m.removeStream(R,I.target)},addTrack:(R,I,P={})=>m.addTrack(R,I,P,S.send),removeTrack:(R,I={})=>{m.removeTrack(R,I.target)},replaceTrack:(R,I,P={})=>m.replaceTrack(R,I,P,S.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(R){f.onPeerJoin=R,R&&on(c).forEach(I=>R(I))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(R){f.onPeerLeave=R},get onPeerStream(){return m.onPeerStream},set onPeerStream(R){m.onPeerStream=R},get onPeerTrack(){return m.onPeerTrack},set onPeerTrack(R){m.onPeerTrack=R}}};const ld=1,ud=2,Df=(i,e)=>{const t=hi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=ld,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},Ky=(i,e)=>{const t=hi(i),n=new Uint8Array(4+t.byteLength);return n[0]=ud,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},$y=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===ld){const r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:Ci(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==ud||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Ci(e.subarray(4,n)),isPresent:e[1]===1}},fd=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},Zy=i=>{if(fd(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var Jy=class{byApp={};roomPresenceHandlers={};getMap(i){return this.byApp[i]??={}}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return fd(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(Ky(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],r=n?.[e];if(!r||r.isClosing)return;r.idleTimer=st(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=hr(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete n[e],s.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),on(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const r=this.getMap(i),s=r[e];if(s){if(s.idleTimer=st(s.idleTimer),s.peer===t)return s;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:cd(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${yn} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),r[e]=o,o}bind(i,e,t,{onDetach:n}){const r=t.bindings[i];if(r)return t.idleTimer=st(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:kt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===i&&(t.controlRoomId=on(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Df(s.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...f}=c;Object.assign(s.handlers,f),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,f=l.size===0;l.add(i),t.streamOwners.set(c,l),f&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const f=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=f.rooms.size===0;return f.stream=l,f.rooms.add(i),t.trackOwners.set(c,f),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(h=>h.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const f=t.trackOwners.get(c);if(f){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:f.stream,rooms:new Set};f.rooms.forEach(h=>u.rooms.add(h)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=a,s.detach=o,t.bindings[i]=s,t.controlRoomId??=i,t.idleTimer=st(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l?.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(f=>t.peer.sendData(Df(c,f))),this.flushBindingQueues(s)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||on(i.bindings).length>0||(i.idleTimer=st(i.idleTimer),i.idleTimer=setTimeout(()=>{const e=this.byApp[i.appId]?.[i.peerId];!e||on(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}const e=hr(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){const t=$y(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const r=i.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),i.pendingDataByToken.set(t.roomToken,r);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){hr(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}};const Qy=23333,eM=12,tM=7533,nM=23333,jc="__legacy__",Uo="offer-placeholder",iM=["offer","answer","candidate"],rM=i=>{if(typeof i=="string")try{const e=Ar(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},Zr=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,sM=i=>iM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),hd=(i,e,t,n,r,s)=>{i.toCipher(e).then(o=>{i.isLeaving()||!s()||n(t,Zt(r(o.sdp)))})},oM=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),aM=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),cM=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${aM(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Yo=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:cM(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},Ts=(i,e)=>i[e]??=oM(),ln=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},To=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=st(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,ln(i))},Kc=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,ln(i))},Ul=(i,e)=>{i.offerRelayTimers[e]=st(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,ln(i))},Uf=(i,e)=>{i?.offerRelays[e]===Uo&&Ul(i,e)},lM=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},bs=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=st(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,r)=>Ul(i,r)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||lM(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,ln(i)},uM=(i,e,t,n)=>{st(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==n||(r.answerSent&&Yo(i,r,t),n.destroy(),To(r,n),i.checkDeactivate())},nM)},fM=async(i,e,t)=>{const n=t?[t,jc]:[jc];for(const r of n){const s=i.pendingCandidates[r];if(s?.length){delete i.pendingCandidates[r];for(const o of s)await e.signal(o)}}},dd=(i,e,t,n=Dl)=>{st(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Yo(i,s,t),bs(s,i.offerPool),i.checkDeactivate())},n)},hM=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const r=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!r)throw tt("failed to allocate offer peer");const{peer:s,offer:o}=r;e.offerPeer=s,e.offerId=Ur(eM),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],ln(e);const a=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Yo(i,e,t),bs(e,i.offerPool)),i.disconnectPeer(s,t),i.checkDeactivate()};return s.setHandlers({connect:()=>i.connectPeer(s,t,n),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),dd(i,e,t),{peer:s,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),dM=async(i,e,t,n,r)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const s=i.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Uf(s,e);return}if(s.offerRelays[e]!==Uo)return;const[o,a]=await zi([Es(Ss(i.rootTopicPlaintext,t)),hM(i,s,t,e)]);if(i.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==Uo){Uf(s,e);return}s.offerRelayTimers[e]=st(s.offerRelayTimers[e]),s.offerRelays[e]=!0,ln(s),s.offerRelayTimers[e]=setTimeout(()=>_M(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||s.connectedPeer||s.offerPeer!==a.peer||s.offerId!==a.offerId||l.type!=="candidate"||hd(i,l,o,r,f=>({peerId:Ht,offerId:a.offerId,candidate:f,...i.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===a.peer&&s.offerId===a.offerId))},r(o,Zt({peerId:Ht,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>s.offerSignalRelays[e]?.(l))},pM=async(i,e,t,n,r,s,o)=>{const a=Ts(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||s)&&Ht<t)return;c&&bs(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,uM(i,a,t,l),ln(a);const f=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&Yo(i,a,t),To(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:f,error:f});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{To(a,l),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){To(a,l);return}const h=await Es(Ss(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:d=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||d.type!=="answer"&&d.type!=="candidate"||hd(i,d,h,o,m=>{const _={peerId:Ht};return d.type==="answer"?(a.answerSent=!0,_.answer=m):_.candidate=m,r&&(_.offerId=r),i.isPassive&&(_.passive=!0),_},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await fM(a,l,r))},mM=async(i,e,t,n,r)=>{let s;try{s=await i.toPlain({type:rd,sdp:t})}catch{return}const o=Ts(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,c=o?.answeringPeer??null,l=!n&&o?.offerPeer?o.offerPeer:null,f=r&&!r.isDead?r:a??c??l;if(!f||f.isDead){const u=n??jc;(o.pendingCandidates[u]??=[]).push(s);return}f.signal(s)},gM=async(i,e,t,n,r,s)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(s)i.offerPool.claimLeased(s),s.setHandlers({connect:()=>i.connectPeer(s,t,e),close:()=>i.disconnectPeer(s,t)}),s.signal(o);else{const a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||r&&a.offerId&&r!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,dd(i,a,t,Qy),a.offerPeer.signal(o)}},_M=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(Ul(n,t),i.checkDeactivate())},xM=i=>e=>async(t,n,r)=>{if(i.isLeaving())return;const s=rM(n);if(!s||sM(s))return;const o=Zr(s,"peerId")??"",a=Zr(s,"offer"),c=Zr(s,"answer"),l=Zr(s,"candidate"),f=Zr(s,"offerId"),u=s.peer,h=s.hasOutgoingOffer===!0,d=s.passive===!0;if(!o||o===Ht)return;const[m,_]=await zi([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==m&&t!==_||i.isPassive&&d||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;const g=i.peerStates[o],p=g?.connectedPeer;if(p&&g){const x=Zy(p);if(x==="live"){g.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")Kc(g);else{const M=Date.now(),b=g.connectedPeerUnhealthySinceMs??M;if(g.connectedPeerUnhealthySinceMs=b,M-b<tM)return;Kc(g)}}let v=i.sharedPeers.get(i.appId,o);v&&i.sharedPeers.getHealth(v.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),v=void 0);const y=!!(o&&!a&&!c&&!l);if(y&&!v){const x=Ts(i.peerStates,o),M=Ht<o;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!M&&!x.offerPeer){const b=await Es(Ss(i.rootTopicPlaintext,o));!i.isLeaving()&&!x.connectedPeer&&r(b,Zt({peerId:Ht}));return}if(x.offerRelays[e])return;x.offerRelays[e]=Uo,ln(x)}if(v&&(a||c||l)){if(v.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,v);return}if(y)return dM(i,e,o,v,r);if(a)return pM(i,e,o,a,f,h,r);if(l)return mM(i,o,l,f,u);if(c)return gM(i,e,o,c,f,u)},mo=5333,vM=[233,533,1333],yM=7533,MM=123333;var SM=({init:i,subscribe:e,announce:t,deactivate:n})=>{const r={},s={},o={},a={},c=new Jy,l=()=>hr(r).some(M=>on(M).length>0),f=M=>s[M]??={},u=M=>o[M]??={},h=(M,b,C)=>{c.getHealth(M.peer)==="live"&&c.sendRoomPresence(M,b,C)},d=(M,b)=>{Pi(s[M]??{}).forEach(([C,A])=>{if(!A.shouldAdvertise())return;const{roomToken:E,roomTokenPromise:S}=A;if(E){h(b,E,!0);return}S.then(D=>{s[M]?.[C]===A&&A.roomToken===D&&(c.get(M,b.peerId)!==b||b.isClosing||A.shouldAdvertise()&&h(b,D,!0))})})},m=(M,b,C)=>hr(c.getMap(M)).forEach(A=>h(A,b,C)),_=M=>{a[M]||(a[M]=c.setRoomPresenceHandler(M,(b,C,A)=>{if(!A)return;const E=c.get(M,b),S=o[M]?.[C];!E||!S||s[M]?.[S]?.attachSharedPeerToRoom(b,E)}))},g=M=>{r[M]&&on(r[M]).length>0||(a[M]?.(),delete a[M],delete s[M],delete o[M])};let p=!1,v=[],y=null,x=kt;return(M,b,C)=>{if(!M)throw tt("requires a config map as the first argument");if(C&&typeof C!="object")throw tt("third argument must be a callbacks object");const{appId:A}=M,E=C?.onJoinError,S=C?.onPeerHandshake,D=C?.handshakeTimeoutMs;if(!A)throw tt("config map is missing appId field");if(!b)throw tt("roomId argument required");if(D!==void 0&&(!Number.isFinite(D)||D<=0))throw tt("handshakeTimeoutMs must be a positive number");if(r[A]?.[b])return r[A][b];_(A);const k=Ss(yn,A,b),G=Es(k),R=Es(Ss(k,Ht)),I=vy(M.password??"",A,b),P=yy(A,b),N=M._test_only_sharedPeerIdleMs??MM;let U=!1;const X=re=>async $=>({type:$.type,sdp:await re(I,$.sdp)}),te=X(Sy),O=X(My),j=c.getMap(A),ie=()=>Ef(!0,M);let _e=!1;y||=new by(ie);const Pe=y,K=async re=>{const $=await re.getOffer(Date.now()-re.created>Dl);if(!$||$.type!=="offer")throw tt("failed to get offer for peer");return(await O($)).sdp},ee=(re,$)=>{const se=Ts(ye.peerStates,re);se.answeringExpiryTimer=st(se.answeringExpiryTimer),se.answeringPeer=null;const{proxy:de,isNew:J}=c.bind(b,P,$,{onDetach:()=>{const ue=ye.peerStates[re];ue?.connectedPeer===$.peer&&(ue.connectedPeer=null,ue.connectedPeerUnhealthySinceMs=null,ln(ue))}});se.connectedPeer=$.peer,se.connectedPeerUnhealthySinceMs=null,ln(se),J&&L(de,re),bs(se,Pe)},xe=(re,$,se)=>{if(U){re.destroy();return}const de=Ts(ye.peerStates,$);if(de.connectedPeer){const Se=j[$];if(Se&&de.connectedPeer===Se.peer&&Se.bindings[b])return;de.connectedPeer!==re&&!re.isDead&&re.destroy();return}let J=j[$];if(J&&c.getHealth(J.peer)==="stale"&&(c.clear(A,$,{destroyPeer:!0}),J=void 0),J&&J.peer!==re){re.isDead||re.destroy(),ee($,J);return}const ue=!J;J||=c.register(A,$,re,N),ee($,J),ue&&d(A,J)},Ue=(re,$)=>{if(U)return;const se=ye.peerStates[$];se?.connectedPeer===re&&(Kc(se),nt(),!me&&_e&&ye.requeueAnnounce?.())},me=!!M.passive;let Te=null,Ke,F=kt;const nt=()=>{if(!me||!ye.isActive)return;let re=!1;Pi(ye.peerStates).forEach(([$,se])=>{se.connectedPeer||se.answeringPeer||se.offerInitPromise||se.offerPeer||se.offerRelays.some(Boolean)?re=!0:se.status==="idle"&&delete ye.peerStates[$]}),re||(ye.isActive=!1,Ke=st(Ke),pt.forEach(st),pt.length=0,F(),Te?.roomToken&&m(A,Te.roomToken,!1))},ye={appId:A,roomId:b,config:M,peerStates:{},rootTopicPlaintext:k,rootTopicP:G,selfTopicP:R,toPlain:te,toCipher:O,isLeaving:()=>U,isPassive:me,isActive:!me,onJoinError:E,sharedPeers:c,offerPool:Pe,encryptOffer:K,initPeer:Ef,connectPeer:xe,disconnectPeer:Ue,attachSharedPeerToRoom:ee,checkDeactivate:nt,announceIntervals:[],announceIntervalMs:mo},Ie={config:M,appId:A,roomId:b,isPassive:me},be=xM(ye);if(!p){const re=i(M);v=(Array.isArray(re)?re:[re]).map($=>Promise.resolve($)),p=!0,x=M.relayConfig?.manualReconnection?kt:my()}!me&&!Pe.isActive&&Pe.warmup(),ye.announceIntervals=v.map(()=>mo);const ot=v.map(()=>mo),Me=v.map(()=>0),ke=v.map(()=>0),pt=[],gt=v.map(async(re,$)=>e(await re,await G,await R,be($),se=>Pe.getOffers(se,K),Ie));zi([G,R]).then(([re,$])=>{if(U)return;const se=async(de,J)=>{if(U||me&&!ye.isActive)return;const ue=me?{passive:!0}:void 0;let Se;try{Se=await t(de,re,$,ue,Ie),ke[J]=0}catch(z){const ae=ke[J]??0;ae===0&&M.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${yn}: announce failed - ${wr(z,"")}`),ke[J]=ae+1}if(U||me&&!ye.isActive||Se&&typeof Se!="number"&&"stopAnnouncing"in Se)return;typeof Se=="number"?(ye.announceIntervals[J]=Se,ot[J]=Se):Se&&(ot[J]=Se.nextAnnounceMs,_e||=Se.reannounceOnDisconnect===!0);const Ae=Me[J]??0;Me[J]=Ae+1;const he=ot[J]??mo,ze=vM[Ae];pt[J]=setTimeout(()=>{se(de,J)},typeof ze=="number"?Math.min(he,ze):he)};F=()=>{n&&v.forEach(async de=>{const J=await de;U||n(J,re,$,Ie)})},ye.requeueAnnounce=()=>{pt.forEach(st),pt.length=0,Ke=st(Ke),Pe.isActive||Pe.warmup(),Te?.roomToken&&m(A,Te.roomToken,!0),Ke=setTimeout(nt,yM),v.forEach(async(de,J)=>{const ue=await de;ue&&!U&&(Me[J]=0,se(ue,J))})},gt.forEach(async(de,J)=>{if(await de,U)return;const ue=await v[J];ue&&!U&&(!me||ye.isActive)&&se(ue,J)})});let L=kt;const{compose:T}=wy(M.password??"",A,b),W=T(S),Q={...W?{onPeerHandshake:W}:{},...D===void 0?{}:{handshakeTimeoutMs:D},isPassive:me,onHandshakeError:(re,$)=>E?.({error:$.replace(/^handshake failed: /,""),appId:A,peerId:re,roomId:b})};r[A]??={};const oe=f(A),Z=jy(re=>L=re,re=>{if(U)return;const $=ye.peerStates[re];$?.connectedPeer&&($.connectedPeer=null,ln($),nt())},()=>{U=!0,L=kt;const re=s[A]?.[b];re?.roomToken&&(m(A,re.roomToken,!1),delete o[A]?.[re.roomToken],o[A]&&!on(o[A]).length&&delete o[A]),s[A]&&(delete s[A][b],on(s[A]).length||delete s[A]),Pi(ye.peerStates).forEach(([$,se])=>{if(se.answeringExpiryTimer=st(se.answeringExpiryTimer),se.connectedPeer&&!se.connectedPeer.isDead){const de=j[$];(!de||de.peer!==se.connectedPeer)&&se.connectedPeer.destroy()}se.answeringPeer&&!se.answeringPeer.isDead&&se.answeringPeer.destroy(),bs(se,Pe),se.connectedPeer=null,se.answeringPeer=null,ln(se)}),r[A]&&(delete r[A][b],on(r[A]).length===0&&delete r[A]),pt.forEach(st),Ke=st(Ke),gt.forEach(async $=>{(await $)()}),!l()&&(p=!1,Pe.destroy(),y=null,x(),g(A))},Q);return Te={roomToken:null,roomTokenPromise:P,attachSharedPeerToRoom:ee,shouldAdvertise:()=>!me||ye.isActive},oe[b]=Te,P.then(re=>{const $=Te;!$||U||s[A]?.[b]!==$||($.roomToken=re,u(A)[re]=b,hr(j).forEach(se=>{se.remoteRoomTokens.has(re)&&ee(se.peerId,se)}),(!me||ye.isActive)&&m(A,re,!0))}),r[A][b]=Z}};const EM=["offer","answer","candidate"],TM=6e4,bM=i=>{if(typeof i=="string")try{const e=Ar(i);return e&&typeof e=="object"?e:null}catch{return null}return i},Ga=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,wM=i=>EM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),AM=i=>{const e=bM(i);if(!e||wM(e))return!1;const t=Ga(e,"peerId");return!!(t&&t!==Ht&&e.passive!==!0&&!Ga(e,"answer")&&!Ga(e,"candidate"))},Wa=i=>{if(!i)throw tt("topic strategy missing room context");return i},Nf=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),Xa=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var RM=({steadyAnnounceIntervalMs:i=TM,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:r,unpublishTopic:s})=>SM({init:t,subscribe:async(o,a,c,l,f,u)=>{const h=Wa(u),d=(M,b)=>{r(o,M,b,Xa(h,"signal",a,c))};let m=null,_=!1,g=null,p=!1;const v=M=>{_||(_=!0,M())},y=()=>(g||(g=Promise.resolve(n(o,c,(M,b)=>{p||l(M,b,d)},Nf(h,"self",a,c))).then(M=>{m=M,p&&v(M)})),g);h.isPassive||await y();const x=await n(o,a,async(M,b)=>{p||(h.isPassive&&AM(b)&&await y(),p||await l(M,b,d))},Nf(h,"root",a,c));return()=>{p=!0,m&&v(m),x()}},announce:async(o,a,c,l,f)=>{const u=Wa(f),h=await r(o,a,Zt({peerId:Ht,...l}),Xa(u,"announce",a,c));return typeof h=="number"||h!==void 0&&"stopAnnouncing"in h?h:{nextAnnounceMs:h?.nextAnnounceMs??i,reannounceOnDisconnect:h?.reannounceOnDisconnect??e}},...s?{deactivate:(o,a,c,l)=>{const f=Wa(l);return s(o,a,Xa(f,"announce",a,c))}}:{}});const CM=py(i=>i.socket),PM=5,pd="x",md="EVENT",{secretKey:LM,publicKey:IM}=td.keygen(),DM=Ms(IM),UM={},NM={},OM={},Of=250,No=6e4,FM=15*6e4,BM=5333,ws=new WeakMap,$c=new WeakSet,Li=new WeakMap,Ff=i=>{const e=ws.get(i),t=Math.min(e?.delayMs?Math.max(No,e.delayMs*2):No,FM);return ws.set(i,{delayMs:t,untilMs:Date.now()+t}),t},kM=i=>{const e=ws.get(i);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},qa=i=>({nextAnnounceMs:i}),zM={stopAnnouncing:!0},HM=i=>{if($c.has(i))return!1;const e=Li.get(i);return e&&(clearTimeout(e.timer),Li.delete(i)),$c.add(i),ws.delete(i),i.close?.(),!0},VM=(i,e)=>{const t=Li.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));const n=t?.eventIds??new Set([e]),r=setTimeout(()=>{Li.delete(i)},BM);Li.set(i,{eventIds:n,timer:r})},GM=(i,e)=>{const t=Li.get(i);return t?.eventIds.has(e)?(clearTimeout(t.timer),Li.delete(i),!0):!1},gd=()=>Math.floor(Date.now()/1e3),_d=i=>OM[i]??=sd(i,1e4)+2e4,WM=async(i,e)=>{const t={kind:_d(i),tags:[[pd,i]],created_at:gd(),content:e,pubkey:DM},n=await qo("SHA-256",Zt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Zt([md,{...t,id:Ms(n),sig:Ms(await td.signAsync(n,LM))}])},Bi={},xd=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},XM=(i,e,t)=>{const n=Bi[i.url]??={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set};n.topics.set(e,t),vd(i,n)},qM=(i,e)=>{const t=Bi[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),xd(t),t.subIds.forEach(n=>i.send(Zt(["CLOSE",n]))),delete Bi[i.url]):vd(i,t))},vd=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{yd(i)}finally{xd(e)}},0))},YM=i=>{const e=Bi[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},yd=i=>{const e=Bi[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],r=gd();for(let s=0;s<t.length;s+=Of)n.push(t.slice(s,s+Of));for(;e.subIds.length>n.length;){const s=e.subIds.pop();s&&i.send(Zt(["CLOSE",s]))}n.forEach((s,o)=>{const a=e.subIds[o]??=Ur(64);i.send(Zt(["REQ",a,{kinds:[...new Set(s.map(_d))],since:r,"#x":s}]))})},jM=i=>{const e=Bi[i.url];e&&e.topics.size>0&&yd(i)},KM=RM({init:i=>uy(i,$M,PM,!0).map(e=>{const t=CM.register(e,()=>dy(e,n=>{const[r,s,o,a]=Ar(n);if(r!==md){const c=`${yn}: relay failure from ${t.url} - `,l=r==="CLOSED"&&typeof o=="string"?o:a,f=r==="OK"&&o===!1,u=f&&l?.startsWith("rate-limited:"),h=f&&l?.startsWith("duplicate:"),d=r==="CLOSED"||f&&!u&&!h,m=r==="OK"&&GM(t,s);if(d&&!HM(t))return;u?Ff(t):m&&ws.delete(t),!h&&i.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(c+s):(f||r==="CLOSED")&&console.warn(c+l));return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=NM[s];if(l){l(UM[s]??"",c);return}const f=Bi[t.url];if(f?.subIds.includes(s)&&o.tags){const u=o.tags.find(h=>h[0]===pd);u?.[1]&&f.topics.get(u[1])?.(u[1],c)}}},()=>jM(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{XM(i,e,(o,a)=>{t(o,a)});const s=()=>{qM(i,e)};return n.kind==="root"?YM(i).then(()=>s):s},publishTopic:async(i,e,t,n)=>{if($c.has(i)||i.isClosed)return n.kind==="announce"?zM:void 0;if(n.kind==="announce"){const a=kM(i);if(a>0)return qa(Math.max(No,a))}const r=await WM(e,typeof t=="string"?t:Zt(t)),s=i.socket.readyState===1;if(i.send(r),n.kind!=="announce")return;if(!s)return qa(Ff(i));const o=Ar(r)[1].id;return VM(i,o),qa(No)}}),$M=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i);function ZM({self:i,neighbors:e,send:t,deliver:n,nonce:r=Math.random().toString(36).slice(2)}){const s=new Set;let o=0;function a(u){return s.has(u)?!1:(s.add(u),s.size>4096&&s.delete(s.values().next().value),!0)}function c(u){if(!(u.path.length>=4))for(const h of e())u.path.includes(h)||t(u,h)}function l(u,h){const d={id:`${i}:${r}:${++o}`,origin:i,kind:u,data:h,path:[i]};a(d.id),c(d)}function f(u,h){!u||!["pose","objects"].includes(u.kind)||typeof u.id!="string"||u.id.length>180||typeof u.origin!="string"||u.origin.length>100||u.origin===i||!Array.isArray(u.path)||u.path.length<1||u.path.length>4||u.path[0]!==u.origin||u.path.at(-1)!==h||u.path.includes(i)||u.path.some(d=>typeof d!="string"||d.length>100)||new Set(u.path).size!==u.path.length||JSON.stringify(u).length>24e3||!a(u.id)||(n(u.kind,u.data,u.origin),c({...u,path:[...u.path,i]}))}return{publish:l,receive:f}}const Oo=i=>i==="dog"?"dog":"cat";function Zc(i,e=15964831,t="cat"){t=Oo(t);const n=new gn,r=new St({color:t==="cat"?15708281:14260849,roughness:.48,metalness:0}),s=new St({color:16777215,roughness:.65}),o=new St({color:2198161,roughness:.6}),a=new St({color:t==="cat"?15047280:10771779,roughness:.6});function c(y,x,M=r){const b=new Ze(y,M);return b.position.set(...x),b.castShadow=!0,n.add(b),b}const l=c(new vl(.25,.32,6,20),[0,.88,0],s);function f(y,x,M=s){const b=new Ze(y,M);return b.position.set(...x),l.add(b),b}f(new cn(.012,.49,.018),[0,-.04,-.252],new St({color:12966362})),f(new cn(.105,.035,.022),[-.12,.09,-.234],o),f(new cn(.035,.105,.022),[-.12,.09,-.234],o);for(const y of[-1,1]){const x=f(new cn(.12,.18,.025),[y*.075,.25,-.21]);x.rotation.z=y*-.45}const u=c(new si(.43,24,16),[0,1.65,0]);for(const y of[-1,1]){const x=new Ze(t==="cat"?new Io(.16,.32,4,1):new si(1,16,12),t==="cat"?r:a);if(x.position.set(y*(t==="cat"?.28:.41),t==="cat"?.34:.055,0),t==="cat"?(x.rotation.z=y*-.25,x.rotation.y=Math.PI/4,x.scale.z=.6):(x.scale.set(.12,.31,.13),x.rotation.z=y*.35),u.add(x),t==="cat"){const M=new Ze(new Io(.105,.21,3),a);M.position.set(0,-.02,-.066),x.add(M)}}const h=new St({color:3152675,roughness:.6});for(const y of[-.15,.15]){const x=new Ze(new si(.072,12,10),h);x.position.set(y,.045,-.386),x.scale.set(.85,1.5,.48),u.add(x)}const d=[-.56,.56].map(y=>c(new si(.14,16,12),[y,.8,-.06])),m=document.createElement("canvas");m.width=512,m.height=80;const _=m.getContext("2d");_.fillStyle="#123142dd",_.fillRect(0,0,512,80),_.fillStyle="#fff",_.font="bold 36px Arial",_.textAlign="center",_.textBaseline="middle",_.fillText(i,256,40,490);const g=new yr(m);g.colorSpace=_t;const p=new dm(new xh({map:g}));p.position.y=2.3,p.scale.set(1.9,.3,1),n.add(p),n.userData.texture=g,n.userData.character=t;const v=new Set;return n.traverse(y=>{y.isMesh&&v.add(y.material)}),n.userData.proximity=y=>{const x=Mt.clamp(y/.9,.08,1);for(const M of v){const b=x<1;M.transparent!==b&&(M.transparent=b,M.needsUpdate=!0),M.opacity=x,M.depthWrite=!b}},n.userData.animate=(y,x=0,M=null,b=1.65,C=0)=>{const A=Math.sin(y*(x>.1?9:2.4))*(x>.1?.035:.014);u.position.y=Mt.clamp(b,.9,2.25)+A,u.rotation.x=C,l.position.y=u.position.y-.77,d.forEach((E,S)=>{M?.[S]?E.position.copy(n.worldToLocal(new B(...M[S]))):E.position.set(S?.56:-.56,l.position.y-.08+A,-.06+Math.sin(y*8+S*Math.PI)*Math.min(x,1)*.15)})},n}function Bf(i){i.removeFromParent();const e=new Set,t=new Set;i.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),i.userData.texture.dispose()}function JM({scene:i,renderer:e,camera:t,controllers:n,objects:r,menu:s,say:o,welcome:a,myColor:c,getCharacter:l}){const f=new Map,u=new Set,h=document.querySelector("#player-name"),d=document.querySelector("#room-code"),m=document.querySelector("#room-message"),_=document.querySelector("#people-count"),g=document.querySelector("#connection-state"),p=document.querySelector("#participant-list");let v,y,x,M="",b=0,C=0,A=0,E=-1/0,S=0,D=Promise.resolve();function k(){const O=v;return v=null,x=null,y=null,O&&(D=D.then(()=>O.leave()).catch(()=>{})),D}h.value=localStorage.getItem("oseoverse-name")||`Visitante ${Math.floor(100+Math.random()*900)}`;const G=O=>{const j=f.get(O);j&&Bf(j.group),f.delete(O)};function R(){if(!M)return;const O=Object.keys(v?.getPeers()||{});_.textContent=String(f.size+1),g.textContent=navigator.onLine?`${f.size+1} participantes recibidos · ${O.length} conexiones directas${u.size?" · Conexiones pendientes":""}`:"Sin Internet. Esperando reconexión…",p.replaceChildren();for(const j of[`${h.value||"Visitante"} (tú)`,...[...f].map(([ie,_e])=>`${_e.name} · ${_e.group.userData.character==="dog"?"Perro":"Gato"}${O.includes(ie)?"":" · conexión compartida"}`)]){const ie=document.createElement("li");ie.textContent=j,p.appendChild(ie)}}function I(){const O=e.xr.isPresenting?e.xr.getCamera():t,j=O.getWorldDirection(new B),ie=O.getWorldPosition(new B),_e=["left","right"].map(Pe=>{const K=n.find(ee=>ee.userData.handedness===Pe&&ee.userData.connected);return e.xr.isPresenting&&K?K.getWorldPosition(new B).toArray():null});return{character:l(),seq:++C,x:ie.x,z:ie.z,yaw:Math.atan2(-j.x,-j.z),pitch:Math.asin(Mt.clamp(j.y,-1,1)),headY:ie.y,hands:_e,name:h.value.trim().slice(0,18)||"Visitante",color:c}}function P(O,j=!1){if(!y)return;const ie=I();x?.publish("pose",ie),(O||j)&&y.send(ie,O?{target:O}:void 0).catch(()=>{})}function N(O,j){if(j===Ht||!O||![O.x,O.z,O.yaw].every(Number.isFinite))return;let ie=f.get(j);if(!(ie&&Number.isSafeInteger(O.seq)&&O.seq<=ie.seq)){if(ie&&ie.group.userData.character!==Oo(O.character)){const _e=Zc(ie.name,O.color,O.character);_e.position.copy(ie.group.position),_e.rotation.copy(ie.group.rotation),Bf(ie.group),ie.group=_e,i.add(_e)}if(!ie){const _e=Number.isInteger(O.color)&&O.color>=0&&O.color<=16777215?O.color:15964831,Pe=String(O.name||"Visitante").slice(0,18),K=Zc(Pe,_e,O.character);i.add(K),K.position.set(Mt.clamp(O.x,-37,An.x),0,Mt.clamp(O.z,-39,An.z)),ie={group:K,name:Pe,destination:K.position.clone(),yaw:0,headY:1.65,pitch:0,hands:null,seq:-1},f.set(j,ie)}ie.seq=Number.isSafeInteger(O.seq)?O.seq:ie.seq,ie.lastSeen=performance.now(),u.delete(j),ie.destination.set(Mt.clamp(O.x,-37,An.x),0,Mt.clamp(O.z,-39,An.z)),ie.yaw=O.yaw,ie.headY=Number.isFinite(O.headY)?Mt.clamp(O.headY,.9,2.25):1.65,ie.pitch=Number.isFinite(O.pitch)?Mt.clamp(O.pitch,-1.4,1.4):0,ie.hands=Array.isArray(O.hands)&&O.hands.length===2?O.hands.map(_e=>Array.isArray(_e)&&_e.length===3&&_e.every(Pe=>Number.isFinite(Pe)&&Math.abs(Pe)<=90)?_e:null):null,_.textContent=String(f.size+1)}}async function U(O,j=!1){const ie=O.trim().toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);if(!ie){m.textContent="Escribe el código de sala.";return}const _e=++b;r.release();const Pe=k();for(const ee of f.keys())G(ee);u.clear(),M=ie,E=performance.now(),localStorage.setItem("oseoverse-name",h.value.trim().slice(0,18)),d.value=M;const K=new URL(location.href);K.searchParams.set("room",M),history.replaceState(null,"",K),R();try{if(await Pe,_e!==b)return;const ee=KM({appId:"oseoverse-campus-v3",relayConfig:{redundancy:3}},M,{onJoinError:Te=>{_e===b&&(u.add(Te.peerId),R(),m.textContent="Una conexión no pudo completarse. Intentando rutas entre participantes; también puedes pulsar Reconectar.")}});v=ee,y=ee.makeAction("pose");const xe=ee.makeAction("objects"),Ue=ee.makeAction("mesh"),me=ZM({self:Ht,neighbors:()=>Object.keys(ee.getPeers()),send:(Te,Ke)=>{_e===b&&Ue.send(Te,{target:Ke}).catch(()=>{})},deliver:(Te,Ke,F)=>{_e===b&&(Te==="pose"?N(Ke,F):r.receive(Ke,F))}});x=me,Ue.onMessage=(Te,{peerId:Ke})=>{_e===b&&me.receive(Te,Ke)},y.onMessage=(Te,{peerId:Ke})=>{_e===b&&N(Te,Ke)},xe.onMessage=(Te,{peerId:Ke})=>{_e===b&&r.receive(Te,Ke)},r.setNetwork(Te=>(me.publish("objects",Te),xe.send(Te).catch(()=>{})),j),ee.onPeerJoin=Te=>{_e===b&&(u.delete(Te),P(Te),me.publish("objects",r.snapshot()),xe.send(r.snapshot(),{target:Te}).catch(()=>{}),m.textContent=`Sala ${M} · conectada`,R(),o("Se conectó otro participante."))},ee.onPeerLeave=()=>{_e===b&&R()},document.querySelector("#copy-link").hidden=!1,document.querySelector("#reconnect").hidden=!1,m.textContent=`Sala ${M}. Comparte el enlace; la lista muestra a quienes recibes.`,s.open=!1,R(),j?o("Restableciendo la conexión de la sala…"):a.show(M)}catch(ee){++b,k(),r.setNetwork(null,j),m.textContent=`No se pudo conectar: ${ee.message}`,R()}}function X(){M&&navigator.onLine&&(!v||performance.now()-E>3e3)&&U(M,!0)}document.querySelector("#join-room").addEventListener("click",()=>U(d.value)),document.querySelector("#create-room").addEventListener("click",()=>U(Math.random().toString(36).slice(2,8))),document.querySelector("#reconnect").addEventListener("click",X),d.addEventListener("keydown",O=>{O.key==="Enter"&&U(d.value)}),document.querySelector("#copy-link").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),m.textContent="Enlace copiado."}catch{m.textContent=location.href}}),window.addEventListener("pagehide",()=>{r.release(),++b,k()}),window.addEventListener("pageshow",O=>{O.persisted&&X()}),window.addEventListener("online",X),window.addEventListener("offline",R),document.addEventListener("visibilitychange",()=>{document.hidden?(S=performance.now(),r.release()):(S&&performance.now()-S>1e4?X():P(void 0,!0),S=0)}),setInterval(()=>{if(v){P(void 0,!0);for(const[O,j]of f)performance.now()-j.lastSeen>2e4&&(G(O),r.peerLeft(O));R()}},1e3);const te=new URLSearchParams(location.search).get("room");return te?U(te):a.show("OSEOVERSE"),{peers:f,sessionStarted:()=>{a.show(M||"OSEOVERSE"),P(void 0,!0)},update:()=>{v&&performance.now()-A>150&&(P(),A=performance.now())}}}function QM(i,e,t){const n=document.querySelector("#welcome"),r=document.querySelector("#welcome-room"),s=document.createElement("canvas");s.width=1024,s.height=320;const o=s.getContext("2d"),a=new yr(s);a.colorSpace=_t;const c=new Ze(new jn(1.5,.47),new Dt({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));c.renderOrder=100,c.visible=!1,i.add(c);let l=0,f="OSEOVERSE";function u(d=f){f=d,l=performance.now()+5e3,r.textContent=d,n.hidden=!1,o.fillStyle="#102e3cf2",o.fillRect(0,0,1024,320),o.textAlign="center",o.fillStyle="#8ff0d5",o.font="bold 48px Arial",o.fillText("BIENVENIDO A LA SALA",512,85),o.fillStyle="#fff",o.font="bold 70px Arial",o.fillText(d,512,182,950),o.font="32px Arial",o.fillText("Explora · participa · comparte",512,260),a.needsUpdate=!0}function h(){const d=l-performance.now(),m=Math.min(1,Math.max(0,d/600));if(n.hidden=d<=0||e.xr.isPresenting,n.style.opacity=m,c.visible=d>0&&e.xr.isPresenting,c.visible){const _=e.xr.getCamera();_.getWorldPosition(c.position),_.getWorldQuaternion(c.quaternion),c.position.add(new B(0,.25,-2).applyQuaternion(c.quaternion)),c.material.opacity=m}}return{show:u,update:h}}function eS(i,e,t,n=.24){const r=(a,c)=>t.some(l=>a>l.minX-n&&a<l.maxX+n&&c>l.minZ-n&&c<l.maxZ+n),s=r(e.x,i.z)?i.x:e.x,o=r(s,e.z)?i.z:e.z;return{x:s,z:o}}function tS(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Ct;let l=0;for(let f=0;f<i.length;++f){const u=i[f];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,f),l+=d}}if(t){let f=0;const u=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+f);f+=i[h].attributes.position.count}c.setIndex(u)}for(const f in s){const u=kf(s[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(const f in o){const u=o[f][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let h=0;h<u;++h){const d=[];for(let _=0;_<o[f].length;++_)d.push(o[f][_][h]);const m=kf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(m)}}return c}function kf(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const f=i[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const o=new e(s),a=new Ut(o,t,n);let c=0;for(let l=0;l<i.length;++l){const f=i[l];if(f.isInterleavedBufferAttribute){const u=c/t;for(let h=0,d=f.count;h<d;h++)for(let m=0;m<t;m++){const _=f.getComponent(h,m);a.setComponent(h+u,m,_)}}else o.set(f.array,c);c+=f.count*t}return r!==void 0&&(a.gpuType=r),a}function zf(i,e){if(e===dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bc||e===oh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Bc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function nS(i){const e=new gn;e.name="Dermagatos Campus Original",i.add(e);let t=72831;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296;function r(h){const d=document.createElement("canvas");d.width=d.height=512;const m=d.getContext("2d");if(h==="wood"){m.fillStyle="#b59370",m.fillRect(0,0,512,512);for(let g=0;g<8;g++){const p=g%2*128;for(let v=-1;v<3;v++){const y=v*256+p,x=g*64;m.fillStyle=`hsl(31 28% ${54+n()*12}%)`,m.fillRect(y+1,x+1,254,62);for(let M=0;M<28;M++){m.strokeStyle=`rgba(65,40,20,${.025+n()*.08})`,m.beginPath();const b=x+n()*62;m.moveTo(y+3,b),m.bezierCurveTo(y+90,b-3,y+160,b+4,y+250,b),m.stroke()}}}}else{m.fillStyle="#c9c9c0",m.fillRect(0,0,512,512);for(let g=0;g<5200;g++)m.fillStyle=["#a6aca5","#e6e1d5","#bbc0b8","#969f99"][Math.floor(n()*4)],m.beginPath(),m.ellipse(n()*512,n()*512,.5+n()*2,.5+n()*3,n()*6,0,Math.PI*2),m.fill()}const _=new yr(d);return _.colorSpace=_t,_.wrapS=_.wrapT=Di,_.anisotropy=4,_}const s={wall:new St({color:15198691,roughness:.9}),dark:new St({color:2440514,roughness:.8}),wood:new St({map:r("wood"),roughness:.85}),stone:new St({map:r("stone"),roughness:.92}),teal:new St({color:2918792,roughness:.7}),light:new Dt({color:15335416}),ceiling:new Dt({color:14936291}),leaf:new St({color:4353104,roughness:1})},o=new Map,a=[];function c(h,d,m,_,g,p,v,y=!1){const x=new cn(g,p,v);if(h==="wood"||h==="stone"){const M=x.attributes.position,b=x.attributes.normal,C=x.attributes.uv;for(let A=0;A<M.count;A++){const E=Math.abs(b.getY(A))>.5?[M.getX(A),M.getZ(A)]:Math.abs(b.getX(A))>.5?[M.getZ(A),M.getY(A)]:[M.getX(A),M.getY(A)];C.setXY(A,E[0]/3,E[1]/3)}}x.translate(d,m,_),o.has(h)||o.set(h,[]),o.get(h).push(x),y&&a.push({minX:d-g/2,maxX:d+g/2,minZ:_-v/2,maxZ:_+v/2})}function l(h,d,m,_,g=4,p="#24484c"){const v=document.createElement("canvas");v.width=1024,v.height=192;const y=v.getContext("2d");y.fillStyle=p,y.fillRect(0,0,1024,192),y.fillStyle="#f2faf4",y.font="bold 58px Arial",y.textAlign="center",y.textBaseline="middle",y.fillText(h,512,96,940);const x=new yr(v);x.colorSpace=_t;const M=new Ze(new jn(g,g*.11),new Dt({map:x,side:Wt}));M.position.set(d,m,_),e.add(M)}c("stone",0,-.13,0,76,.25,80),c("ceiling",0,4.85,-12,74,.18,52);for(const h of[0,-20]){c("wood",0,.015,h,68,.025,7),c("ceiling",0,4.45,h,70,.2,8);for(const d of[-30,-18,-6,6,18,30])c("light",d,4.32,h,5.5,.025,.13)}for(const h of[-34,0,34])c("wood",h,.035,-13,h===0?7:4,.025,33),c("ceiling",h,4.5,-14,h===0?8:5,.15,35);const f=[];for(const h of[-9.2,-30])for(const d of[-24,-12,12,24]){f.push({x:d,z:h}),c("wood",d,.06,h,10,.05,8.8),c("wall",d-5,2.1,h,.22,4.2,8.8,!0),c("wall",d+5,2.1,h,.22,4.2,8.8,!0),c("wall",d,2.1,h-4.4,10,4.2,.22,!0),c("wood",d,.8,h-4.26,9.75,1.5,.04),c("dark",d,.13,h-4.23,9.75,.12,.04),c("ceiling",d,4.24,h,10.2,.18,8.9);for(const _ of[-1,1])c("dark",d+_*4.85,2.1,h+4.4,.26,4.2,.26,!0);c("dark",d,3.94,h+4.4,10,.45,.28),c("light",d,4.12,h,5,.025,.2),l(h===-9.2?d===-12?"LABORATORIO INTERACTIVO":d===12?"EQUIPO VETERINARIO":"SALA DE EXPOSICIÓN":d===-24?"PROCONVET":d===24?"EXPERIENCIAS":"SALA DE ENCUENTRO",d,3.88,h+4.57,5.5)}c("wood",0,.56,.4,3.6,1.12,1.25,!0),c("ceiling",0,1.14,.4,4,.12,1.55),c("teal",0,.6,1.04,3.3,.65,.035),l("DERMAGATOS",0,.67,1.065,2.8);for(const h of[-1.8,1.8]){const d=new Ze(new Oi(.63,.63,1.1,24),s.wood);d.position.set(h,.55,.4),e.add(d)}c("ceiling",0,4.65,5.3,15,.2,15);const u=new Ze(new Cs(2.7,.045,8,56),s.light);u.rotation.x=Math.PI/2,u.position.set(0,4.3,1),e.add(u),l("CAMPUS VETERINARIO · EXPLORA Y PARTICIPA",0,3.1,-3.7,6);for(const h of[-6,6])for(const d of[5,-19])c("dark",h,.2,d,2.9,.38,.8,!0),c("wood",h,.43,d,3.1,.12,.95),c("wall",h,.78,d-.38,3.1,.65,.12);c("wall",0,2.45,-38,74,4.9,.3,!0);for(const h of[-37,37])c("wall",h,2.45,-12,.3,4.9,52,!0);c("wall",0,1,14,74,2,.3,!0);for(const h of[-7,7,-32,32])for(const d of[9,-22]){c("dark",h,.3,d,.9,.6,.9,!0);const m=new Ze(new Ml(.7,1),s.leaf);m.scale.y=1.35,m.position.set(h,1.2,d),e.add(m)}for(const[h,d]of o){const m=tS(d,!1);d.forEach(g=>g.dispose());const _=new Ze(m,s[h]);_.receiveShadow=!0,e.add(_)}return{group:e,walls:a,rooms:f}}class iS extends Ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new SS(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ss.extractUrlBase(e);o=ss.resolveURL(l,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Rh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Md){try{o[Ye.KHR_BINARY_GLTF]=new ES(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new OS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const u=this.pluginCallbacks[f](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const u=s.extensionsUsed[f],h=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new oS;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new TS(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new bS;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new wS;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function rS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const f=new Fe(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],Vt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ch(f),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wm(f),l.distance=u;break;case"spot":l=new Vm(f),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class oS{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class aS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class cS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class lS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Vt),Promise.all(s)}}class pS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class mS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class _S{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class xS{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class vS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class yS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class MS{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,f=r.count,u=r.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,u,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(f*u);return o.decodeGltfBuffer(new Uint8Array(d),f,u,h,r.mode,r.filter),d})})}else return null}}class SS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==nn.TRIANGLES&&l.mode!==nn.TRIANGLE_STRIP&&l.mode!==nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(f=>(c[l]=f,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const f=l.pop(),u=f.isGroup?f.children:[f],h=l[0].count,d=[];for(const m of u){const _=new Ve,g=new B,p=new Ln,v=new B(1,1,1),y=new Sh(m.geometry,m.material,h);for(let x=0;x<h;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,v));for(const x in c)if(x==="_COLOR_0"){const M=c[x];y.instanceColor=new zc(M.array,M.itemSize,M.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);dt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const Md="glTF",Jr=12,Hf={JSON:1313821514,BIN:5130562};class ES{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Jr,s=new DataView(e,Jr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Hf.JSON){const l=new Uint8Array(e,Jr+o,a);this.content=n.decode(l)}else if(c===Hf.BIN){const l=Jr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const f in o){const u=Jc[f]||f.toLowerCase();a[u]=o[f]}for(const f in e.attributes){const u=Jc[f]||f.toLowerCase();if(o[f]!==void 0){const h=n.accessors[e.attributes[f]],d=dr[h.componentType];l[u]=d.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(u,h){r.decodeDracoFile(f,function(d){for(const m in d.attributes){const _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(d)},a,l,Vt,h)})})}}class bS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wS{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Sd extends Ps{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,f=r-t,u=(n-t)/f,h=u*u,d=h*u,m=e*l,_=m-l,g=-2*d+3*h,p=d-h,v=1-g,y=p-h+u;for(let x=0;x!==a;x++){const M=o[_+x+a],b=o[_+x+c]*f,C=o[m+x+a],A=o[m+x]*f;s[x]=v*M+y*b+g*C+p*A}return s}}const AS=new Ln;class RS extends Sd{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return AS.fromArray(s).normalize().toArray(s),s}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vf={9728:zt,9729:$t,9984:Jf,9985:_o,9986:es,9987:Gn},Gf={33071:ri,33648:Ao,10497:Di},Ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CS={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new St({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function Ei(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LS(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,f=e.length;l<f;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,f=e.length;l<f;l++){const u=e[l];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(h)}if(r){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const f=l[0],u=l[1],h=l[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function IS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function DS(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ka(t.attributes):e=i.indices+":"+Ka(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Ka(i.targets[n]);return e}function Ka(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Qc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function US(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const NS=new Ve;class OS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new km(this.options.manager):this.textureLoader=new qm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ei(s,a,r),En(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,f]of o.children.entries())s(f,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(ss.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ya[r.type],a=dr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Ut(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ya[r.type],l=dr[r.componentType],f=l.BYTES_PER_ELEMENT,u=f*c,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(h/d),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(v);y||(_=new l(a,p*d,r.count*d/f),y=new _h(_,d/f),t.cache.add(v,y)),g=new vs(y,c,h%d/f,m)}else a===null?_=new l(r.count*c):_=new l(a,h,r.count*c),g=new Ut(_,c,m);if(r.sparse!==void 0){const p=Ya.SCALAR,v=dr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,M=new v(o[1],y,r.sparse.count*p),b=new l(o[2],x,r.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,A=M.length;C<A;C++){const E=M[C];if(g.setX(E,b[C*c]),c>=2&&g.setY(E,b[C*c+1]),c>=3&&g.setZ(E,b[C*c+2]),c>=4&&g.setW(E,b[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return f.magFilter=Vf[h.magFilter]||$t,f.minFilter=Vf[h.minFilter]||Gn,f.wrapS=Gf[h.wrapS]||Di,f.wrapT=Gf[h.wrapT]||Di,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==zt&&f.minFilter!==$t,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const h=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(u){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){const g=new wt(_);g.needsUpdate=!0,h(g)}),t.load(ss.resolveURL(u,s.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),En(u,o),u.userData.mimeType=o.mimeType||US(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Eh,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xl,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return St}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=r[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Vt),a.opacity=h[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,_t)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Wt);const f=s.alphaMode||ja.OPAQUE;if(f===ja.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===ja.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Dt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Dt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Dt){const u=s.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],Vt)}return s.emissiveTexture!==void 0&&o!==Dt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,_t)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),En(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ei(r,u,s),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],f=DS(l),u=r[f];if(u)o.push(u.promise);else{let h;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Wf(new Ct,l,t),r[f]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const f=o[c].material===void 0?PS(this.cache):this.getDependency("material",o[c].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),f=c[c.length-1],u=[];for(let d=0,m=f.length;d<m;d++){const _=f[d],g=o[d];let p;const v=l[d];if(g.mode===nn.TRIANGLES||g.mode===nn.TRIANGLE_STRIP||g.mode===nn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new mm(_,v):new Ze(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===nn.TRIANGLE_STRIP?p.geometry=zf(p.geometry,oh):g.mode===nn.TRIANGLE_FAN&&(p.geometry=zf(p.geometry,Bc));else if(g.mode===nn.LINES)p=new Mm(_,v);else if(g.mode===nn.LINE_STRIP)p=new Ho(_,v);else if(g.mode===nn.LINE_LOOP)p=new Sm(_,v);else if(g.mode===nn.POINTS)p=new Em(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&IS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),En(p,s),g.extensions&&Ei(r,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Ei(r,u[0],s),u[0];const h=new gn;s.extensions&&Ei(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Mt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Tl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,f=o.length;l<f;l++){const u=o[l];if(u){a.push(u);const h=new Ve;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gl(a,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],f=[];for(let u=0,h=r.channels.length;u<h;u++){const d=r.channels[u],m=r.samplers[d.sampler],_=d.target,g=_.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,v=r.parameters!==void 0?r.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),f.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(f)]).then(function(u){const h=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let y=0,x=h.length;y<x;y++){const M=h[y],b=d[y],C=m[y],A=_[y],E=g[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const S=n._createAnimationTracks(M,b,C,A,E);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const v=new Im(s,void 0,p);return En(v,r),v})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,f=a.length;l<f;l++)o.push(n.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const f=l[0],u=l[1],h=l[2];h!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(h,NS)});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let f;if(s.isBone===!0?f=new yh:l.length>1?f=new gn:l.length===1?f=l[0]:f=new dt,f!==l[0])for(let u=0,h=l.length;u<h;u++)f.add(l[u]);if(s.name&&(f.userData.name=s.name,f.name=o),En(f,s),s.extensions&&Ei(n,f,s),s.matrix!==void 0){const u=new Ve;u.fromArray(s.matrix),f.applyMatrix4(u)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!r.associations.has(f))r.associations.set(f,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(f);r.associations.set(f,{...u})}return r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new gn;n.name&&(s.name=r.createUniqueName(n.name)),En(s,n),n.extensions&&Ei(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let f=0,u=c.length;f<u;f++)s.add(c[f]);const l=f=>{const u=new Map;for(const[h,d]of r.associations)(h instanceof xn||h instanceof wt)&&u.set(h,d);return f.traverse(h=>{const d=r.associations.get(h);d!=null&&u.set(h,d)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];ni[s.path]===ni.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(ni[s.path]){case ni.weights:l=Mr;break;case ni.rotation:l=Sr;break;case ni.translation:case ni.scale:l=Er;break;default:n.itemSize===1?l=Mr:l=Er;break}const f=r.interpolation!==void 0?CS[r.interpolation]:gs,u=this._getArrayFromAccessor(n);for(let h=0,d=c.length;h<d;h++){const m=new l(c[h]+"."+ni[s.path],t.array,u,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Sr?RS:Sd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FS(i,e,t){const n=e.attributes,r=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),a.normalized){const f=Qc(dr[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,c=new B;for(let l=0,f=s.length;l<f;l++){const u=s[l];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const _=Qc(dr[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Wf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Jc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return $e.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),En(i,e),FS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?LS(i,e.targets,t):i})}function el(i,e=3,t="#0e394b"){const n=document.createElement("canvas");n.width=1024,n.height=160;const r=n.getContext("2d");r.fillStyle=t,r.fillRect(0,0,1024,160),r.fillStyle="#ffffff",r.font="bold 58px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(i,512,80,970);const s=new yr(n);return s.colorSpace=_t,new Ze(new jn(e,e*160/1024),new Dt({map:s,side:Wt}))}async function BS(i,e,t){const n=new Ze(new Oi(1.1,1.2,.16,32),new St({color:2311772}));n.position.set(bn.x,.08,bn.z),i.add(n);for(const a of[-1.5,0,1.5]){const c=new Ze(new Oi(.55,.62,.75,20),new St({color:15791346}));c.position.set(Tn.x+a,.375,Tn.z),c.receiveShadow=!0,i.add(c)}const r=el("TOCA LAS FIGURAS PARA AGARRAR",3.8);r.position.set(Tn.x,.12,Tn.z+1.4),r.rotation.x=-Math.PI/2,i.add(r);const s=el("VR: gatillo = tomar/soltar · joystick derecho = tamaño",3.8);s.position.set(Tn.x,2.8,Tn.z-1),i.add(s);const o=nS(i);i.userData.campusWalls=o.walls,t("Campus Dermagatos listo. Cargando stands…");try{const a=await new iS().loadAsync("./models/stand.glb");a.scene.traverse(u=>{if(u.isMesh){u.castShadow=!1,u.receiveShadow=!0;for(const h of Array.isArray(u.material)?u.material:[u.material])h.map&&(h.map.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()))}});const c=new gn;c.add(a.scene),a.scene.scale.setScalar(.03),c.updateMatrixWorld(!0);const l=new In().setFromObject(c),f=l.getCenter(new B);a.scene.position.set(-f.x,-l.min.y,-f.z);for(const{x:u,z:h,name:d,color:m}of Ja){const _=c.clone(!0);_.rotation.y=Math.PI,_.position.set(u,.11,h),i.add(_)}document.querySelector("#load-state").textContent="Dermagatos · campus original · 8 salas · 2 stands",t("Stands listos. Explora, responde y mueve los objetos.")}catch(a){document.querySelector("#load-state").textContent="No se pudo cargar el modelo",t("El modelo no pudo cargar. Recarga para volver a intentarlo."),console.error("Carga de stand:",a)}}function kS(i,e){const n=new Dt({side:Wt,transparent:!0,depthWrite:!1}),r=new Sh(new jn(.07,.12),n,84);r.frustumCulled=!1,r.visible=!1,i.add(r);const s=new dt,o=Array.from({length:84},()=>({p:new B,v:new B,r:new B,spin:new B})),a=new Ze(new Sl(.85,.89,48),new Dt({color:5963694,transparent:!0,depthWrite:!1,side:Wt}));a.position.copy(e).add(new B(0,0,.04)),a.visible=!1,i.add(a);let c=3,l=!0;function f(h){c=0,l=h,r.count=h?84:28,r.visible=!0,a.visible=!0,a.material.color.set(h?5963694:16740990);const d=h?[5566394,16766828,16748500,7264767,15988991]:[16739453,16759148];o.forEach((m,_)=>{const g=_%2?1:-1;m.p.copy(e).add(new B(g*1.2,-.85,.2)),m.v.set(g*(.2+Math.random()*.8),h?2.4+Math.random()*2:.7+Math.random()*1.4,.2+Math.random()*.7),m.r.set(Math.random()*6,Math.random()*6,Math.random()*6),m.spin.set(Math.random()*7,Math.random()*9,Math.random()*6),r.setColorAt(_,new Fe(d[_%d.length]))}),r.instanceColor.needsUpdate=!0,u(0)}function u(h){if(c>2.5)return;c+=h;const d=l?2.2:1.3;if(c>=d){r.visible=!1,a.visible=!1;return}for(let m=0;m<r.count;m++){const _=o[m];_.v.y-=2.8*h,_.p.addScaledVector(_.v,h),_.r.addScaledVector(_.spin,h),s.position.copy(_.p),s.rotation.set(_.r.x,_.r.y,_.r.z),s.scale.setScalar(Math.min(1,(d-c)*2.5)),s.updateMatrix(),r.setMatrixAt(m,s.matrix)}r.instanceMatrix.needsUpdate=!0,n.opacity=Math.min(1,(d-c)*1.6),a.scale.setScalar(.5+c*1.8),a.material.opacity=Math.max(0,.7-c*1.6)}return{burst:f,update:u}}const $a=[{prompt:"¿Cuál producto de Proconvet cuida la higiene oral?",options:["PeroxyPROC","NaturPROC oral","HepatoPET"],correct:1},{prompt:"¿Cuál es un champú antiséptico y antiseborreico?",options:["PeroxyPROC","NaturPROC oral","GastroPET"],correct:0},{prompt:"¿Cuál es un champú dermatológico antifúngico?",options:["MiclorPROC","HepatoPET","NaturPROC oral"],correct:0}],Ti=new B(wo.x,1.95,wo.z),go=[430,555,680],Za=96;function zS({scene:i,camera:e,renderer:t,status:n}){const r=document.createElement("canvas");r.width=900,r.height=960;const s=r.getContext("2d"),o=new yr(r);o.colorSpace=_t,o.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy());const a=new Ze(new jn(2.7,2.88),new Dt({map:o,transparent:!0}));a.position.copy(Ti),a.name="Preguntas Proconvet",i.add(a);const c=new Ze(new cn(2.82,3,.12),new St({color:1587271,roughness:.5}));c.position.copy(Ti).add(new B(0,0,-.08)),i.add(c);const l=new Ze(new Oi(.12,.16,.55,12),new St({color:1587271}));l.position.set(Ti.x,.275,Ti.z),i.add(l);const f=kS(i,Ti),u=new Ls;let h=0,d=0,m=null,_=-1,g=-1,p=0,v=-1/0,y=performance.now(),x;const M=document.querySelector("#quiz-progress");function b(I,P){const N=[];let U="";for(const X of I.split(" ")){const te=U?`${U} ${X}`:X;U&&s.measureText(te).width>P?(N.push(U),U=X):U=te}return U&&N.push(U),N}function C(){s.fillStyle="#092932",s.fillRect(0,0,900,960),s.strokeStyle=m==="correct"?"#66ffc0":m==="wrong"?"#ff7a90":"#72dfe7",s.lineWidth=12,s.strokeRect(10,10,880,940),s.fillStyle="#39bdcb",s.fillRect(22,22,856,115),s.fillStyle="#062e36",s.font="bold 50px Arial",s.fillText("PROCONVET",55,95),s.fillStyle="#baf4e6",s.font="28px Arial",s.fillText(`${Math.min(h+1,3)} / 3    ·    ${d} puntos de prueba`,55,185),s.fillStyle="#fff",s.font="bold 48px Arial",b(h<3?$a[h].prompt:"¡Completaste el reto!",780).forEach((P,N)=>s.fillText(P,55,260+N*58)),h<3?$a[h].options.forEach((P,N)=>{s.fillStyle=N===_?m==="correct"?"#236d51":"#782f45":N===g?"#27758b":"#173f4d",s.fillRect(50,go[N],800,Za),s.strokeStyle=N===g?"#fff":"#70c5d0",s.lineWidth=3,s.strokeRect(50,go[N],800,Za),s.fillStyle="#fff",s.font="bold 43px Arial",s.fillText(`${"ABC"[N]}. ${P}`,78,go[N]+62,750)}):(s.fillStyle="#a4ffce",s.font="bold 64px Arial",s.fillText(`${d} puntos`,55,540)),s.fillStyle=m==="wrong"?"#ffabbc":"#aaf4cc",s.font="bold 31px Arial";const I=m==="wrong"?"Inténtalo otra vez":m==="correct"?"¡Correcto! +10 puntos":h<3?"Toca una opción · VR: gatillo":"Recarga para repetir la prueba";s.fillText(I,55,855,790),s.fillStyle="#b1c8ce",s.font="24px Arial",s.fillText("Explora · descubre · responde",55,913),o.needsUpdate=!0,M.textContent=`${Math.min(h+(m==="correct"?1:0),3)}/3 · ${d} pts`}function A(I){try{x||=new(window.AudioContext||window.webkitAudioContext),x.state==="suspended"&&x.resume(),(I?[523,659,784,1046]:[330,247]).forEach((P,N)=>{const U=x.createOscillator(),X=x.createGain(),te=x.currentTime+N*.09;U.type=I?"sine":"triangle",U.frequency.setValueAtTime(P,te),X.gain.setValueAtTime(1e-4,te),X.gain.exponentialRampToValueAtTime(.08,te+.015),X.gain.exponentialRampToValueAtTime(1e-4,te+.22),U.connect(X).connect(x.destination),U.start(te),U.stop(te+.23)})}catch{}}function E(){return(t.xr.isPresenting?t.xr.getCamera():e).getWorldPosition(new B).distanceTo(Ti)<6.5}function S(I){return a.updateWorldMatrix(!0,!1),u.ray.copy(I),u.far=18,u.intersectObject(a)[0]||null}function D(I){if(!I)return-1;const P=I.uv.x*900,N=(1-I.uv.y)*960;return P>=50&&P<=850?go.findIndex(U=>N>=U&&N<=U+Za):-1}function k(I){const P=S(I);if(!P)return!1;if(!E())return n.textContent="Acércate al panel para responder.",!0;const N=D(P),U=performance.now();if(h>=3||p||N<0||U-v<550)return!0;const X=N===$a[h].correct;return _=N,m=X?"correct":"wrong",v=U,X&&(d+=10,p=U+1900),n.textContent=X?"¡Correcto! +10 puntos de prueba.":"Incorrecto. Puedes volver a intentarlo.",A(X),f.burst(X),C(),!0}function G(I){const P=E()&&h<3&&!p?D(S(I)):-1;P!==g&&(g=P,C())}function R(I){const P=performance.now();p&&P>=p&&(h++,p=0,m=null,_=-1,y=P,C());const N=(P-v)/1e3,U=Math.min(1,(P-y)/450);a.material.opacity=.4+.6*U,a.scale.setScalar(1-(1-U)*.06+(m==="correct"&&N<.6?Math.sin(N*Math.PI/.6)*.022:0)),a.position.x=Ti.x+(m==="wrong"&&N<.4?Math.sin(N*55)*(.4-N)*.1:0),f.update(I)}return C(),{hit:S,answerFromRay:k,hoverRay:G,update:R}}function HS(i,e){let t=Oo(localStorage.getItem("oseoverse-character"));const n=[],r=[],s=new Ls;for(const[c,l,f]of[["cat",-1.05,"Gato veterinario"],["dog",1.05,"Perro veterinario"]]){const u=Zc(f,void 0,c);u.position.set(bn.x+l,.1,bn.z),u.rotation.y=Math.PI,i.add(u);const h=el(`ELEGIR ${c==="cat"?"GATO":"PERRO"}`,1.65);h.position.set(bn.x+l,.34,bn.z+.62),h.userData.kind=c,i.add(h),r.push(h);const d=new Ze(new Cs(.65,.035,8,40),new Dt({color:6614994}));d.rotation.x=-Math.PI/2,d.position.set(bn.x+l,.12,bn.z),i.add(d),u.traverse(m=>{m.isMesh&&(m.userData.kind=c,r.push(m))}),n.push({avatar:u,ring:d,kind:c})}function o(){document.querySelectorAll("[data-character]").forEach(c=>c.setAttribute("aria-pressed",String(c.dataset.character===t))),document.querySelector("#selected-character").textContent=t==="cat"?"Gato veterinario":"Perro veterinario",n.forEach(c=>{c.ring.visible=c.kind===t})}function a(c){t=Oo(c),localStorage.setItem("oseoverse-character",t),o(),e(`Tu personaje: ${t==="cat"?"gato":"perro"} veterinario con bata blanca.`),document.querySelector("#character-picker").hidden=!0}return document.querySelectorAll("[data-character]").forEach(c=>c.addEventListener("click",()=>a(c.dataset.character))),document.querySelector("#close-characters").addEventListener("click",()=>{document.querySelector("#character-picker").hidden=!0}),o(),{selected:()=>t,hit:c=>(s.ray.copy(c),s.far=6,r.forEach(l=>l.updateWorldMatrix(!0,!1)),s.intersectObjects(r,!1)[0]),chooseHit:c=>a(c.object.userData.kind),update:c=>n.forEach(l=>l.avatar.userData.animate(c))}}const VS=["cube","ball","ring"];function GS(i){return i&&VS.includes(i.id)&&Array.isArray(i.p)&&i.p.length===3&&i.p.every(Number.isFinite)&&Math.abs(i.p[0])<=An.x&&i.p[1]>=0&&i.p[1]<=6&&Math.abs(i.p[2])<=An.z&&Number.isFinite(i.r)&&Math.abs(i.r)<1e3&&Number.isFinite(i.s)&&i.s>=.4&&i.s<=2.5&&(i.owner===null||typeof i.owner=="string"&&i.owner.length<=100)&&Number.isSafeInteger(i.clock)&&i.clock>=0&&typeof i.actor=="string"&&i.actor.length<=100}function WS(i,e){return i.clock>e.clock||i.clock===e.clock&&i.actor>e.actor}function XS(i,e,t,n=!1){return!GS(e)||!n&&e.actor!==t?i:WS(e,i)?structuredClone(e):i}function qS({scene:i,camera:e,renderer:t,status:n,actor:r}){const s=document.querySelector("#object-tools"),o=document.querySelector("#held-name"),a=document.querySelector("#held-scale"),c=[new cn(.62,.62,.62),new si(.36,24,16),new Cs(.3,.1,10,28)],l=["cube","ball","ring"].map((P,N)=>{const U=new Ze(c[N],new St({color:[4443104,16423852,16764770][N],metalness:.16,roughness:.28,emissive:0}));U.castShadow=!0,U.name=["Cubo","Esfera","Aro"][N];const X={id:P,p:[Tn.x+(N-1)*1.5,1.18,Tn.z],r:0,s:1,owner:null,clock:0,actor:""};return U.position.fromArray(X.p),i.add(U),{id:P,mesh:U,initial:X,state:structuredClone(X),seenAt:0}});let f=null,u=null,h=null,d=0,m=0,_=0;const g=new Ls,p=new B,v=new B;function y(){s.hidden=!f||t.xr.isPresenting,document.body.classList.toggle("holding",!!f),f&&(o.textContent=f.mesh.name,a.textContent=`${f.state.s.toFixed(2)}×`)}function x(P){P.state.clock=++d,P.state.actor=r,P.seenAt=performance.now(),h&&h({kind:"update",states:[structuredClone(P.state)]})}function M(P,N=!1,U=.1){const X=N?1:Math.min(1,U*15);P.mesh.position.lerp(p.fromArray(P.state.p),X),P.mesh.scale.lerp(new B().setScalar(P.state.s),X),P.mesh.rotation.y+=(Mt.euclideanModulo(P.state.r-P.mesh.rotation.y+Math.PI,Math.PI*2)-Math.PI)*X,P.mesh.material.emissive.set(P===f?1193010:P.state.owner?3347743:0)}function b(P){return g.ray.copy(P),g.far=6,l.forEach(N=>N.mesh.updateWorldMatrix(!0,!1)),g.intersectObjects(l.map(N=>N.mesh))[0]||null}function C(P=!1){if(!f)return;const N=f;P&&(N.state.p=[...N.initial.p],N.state.s=1,N.state.r=0),N.state.owner=null,x(N),f=null,u=null,M(N,!0),y(),n.textContent=P?"Objeto devuelto a su pedestal.":"Objeto colocado. Los demás ven su posición y tamaño."}function A(P,N=null){if(f)return C(),!0;if(!P)return!1;const U=l.find(X=>X.mesh===P.object);return U?U.state.owner&&U.state.owner!==r&&performance.now()-U.seenAt<4e3?(n.textContent="Otra persona tiene ese objeto. Espera a que lo suelte.",!0):(f=U,u=N,_=U.state.r,U.state.owner=r,x(U),y(),n.textContent=`Sostienes ${U.mesh.name}. Mueve la vista; usa +/− para el tamaño y Soltar para colocarlo.`,!0):!1}function E(P){f&&(f.state.s=Mt.clamp(f.state.s*P,.4,2.5),M(f,!0),y())}function S(P=Math.PI/6){f&&(_+=P,f.state.r+=P,M(f,!0))}document.querySelector("#scale-up").addEventListener("click",()=>E(1.15)),document.querySelector("#scale-down").addEventListener("click",()=>E(1/1.15)),document.querySelector("#rotate-object").addEventListener("click",()=>S()),document.querySelector("#release-object").addEventListener("click",()=>C()),document.querySelector("#reset-object").addEventListener("click",()=>C(!0));function D(P,N){if(!(!P||!["update","snapshot"].includes(P.kind)||!Array.isArray(P.states)||P.states.length>3))for(const U of P.states){const X=l.find(O=>O.id===U?.id);if(!X)continue;const te=XS(X.state,U,N,P.kind==="snapshot");te!==X.state&&(X.state=te,d=Math.max(d,te.clock),X.seenAt=performance.now(),f===X&&X.state.owner!==r&&(f=null,u=null,y(),n.textContent="Otra persona tomó el objeto primero."))}}function k(){return{kind:"snapshot",states:l.map(P=>structuredClone(P.state))}}function G(P,N=!1){f=null,u=null,h=P,d=0,l.forEach(U=>{N||(U.state=structuredClone(U.initial),U.seenAt=0),d=Math.max(d,U.state.clock),M(U,!0)}),y()}function R(P){for(const N of l)N.state.owner===P&&(N.state.owner=null,x(N))}function I(P){if(f){const N=u||(t.xr.isPresenting?t.xr.getCamera():e);N.getWorldPosition(p),v.set(0,0,-1).applyQuaternion(N.getWorldQuaternion(new Ln)),p.addScaledVector(v,u?.9:1.9),u||(p.y-=.22),p.x=Mt.clamp(p.x,-37,An.x),p.z=Mt.clamp(p.z,-39,An.z),p.y=Mt.clamp(p.y,.4*f.state.s,5),f.state.p=p.toArray(),f.state.r=Math.atan2(-v.x,-v.z)+_,f.state.r=Mt.euclideanModulo(f.state.r,Math.PI*2),performance.now()-m>100&&(x(f),m=performance.now())}for(const N of l)M(N,N===f,P);y()}return{hit:b,grab:A,release:C,scaleBy:E,rotate:S,receive:D,snapshot:k,setNetwork:G,peerLeft:R,update:I,isHolding:()=>!!f,heldBy:()=>u}}const pr=document.querySelector("#status"),jo=document.querySelector("#menu");let Xf;new MutationObserver(()=>{pr.classList.add("visible"),clearTimeout(Xf),Xf=setTimeout(()=>pr.classList.remove("visible"),4200)}).observe(pr,{childList:!0});const Nr=i=>{pr.textContent=i},Xe=new zv({antialias:!0,powerPreference:"high-performance"});Xe.setPixelRatio(Math.min(devicePixelRatio||1,1.5));Xe.setSize(innerWidth,innerHeight);Xe.outputColorSpace=_t;Xe.shadowMap.enabled=!0;Xe.shadowMap.type=Kf;Xe.xr.enabled=!0;document.querySelector("#app").appendChild(Xe.domElement);const Fo=Tr.createButton(Xe);document.body.appendChild(Fo);const Ed=()=>Fo.classList.toggle("unsupported",Fo.textContent.includes("NOT SUPPORTED"));new MutationObserver(Ed).observe(Fo,{childList:!0,subtree:!0,characterData:!0});Ed();const Jt=new hm;Jt.background=new Fe(10994900);Jt.fog=new ml(10994900,90,180);const bt=new gn;bt.position.set(Math.random()*2-1,0,10);Jt.add(bt);const Et=new Bt(70,innerWidth/innerHeight,.05,220);Et.position.y=1.65;Et.rotation.order="YXZ";bt.add(Et);const Td=QM(Jt,Xe),bd=[...Ht].reduce((i,e)=>i*31+e.charCodeAt(0)>>>0,0)%12,tl=(bd%4-1.5)*1.1,nl=Math.floor(bd/4)*1.2;bt.position.set(tl,0,4.8+nl*.4);Jt.add(new zm(15792895,9142128,2.3));const Or=new Ch(16774631,2.1);Or.position.set(-8,15,9);Or.castShadow=!0;Or.shadow.mapSize.set(1024,1024);Object.assign(Or.shadow.camera,{left:-17,right:17,top:17,bottom:-17});Or.shadow.bias=-5e-4;Jt.add(Or);BS(Jt,Xe,Nr);const ls=zS({scene:Jt,camera:Et,renderer:Xe,status:pr}),ht=qS({scene:Jt,camera:Et,renderer:Xe,status:pr,actor:Ht}),Bo=HS(Jt,Nr);function Us(i,e,t=0){ht.release(),bt.position.set(i+tl*.65,0,e+nl*.4),bt.rotation.y=t+Math.atan2(tl*.65,4.6+nl*.4),Et.rotation.x=0,jo.open=!1}document.querySelector("#go-stand").addEventListener("click",()=>{Us(wo.x,wo.z+4.6),Nr("Toca directamente una respuesta del panel.")});document.querySelector("#go-objects").addEventListener("click",()=>{Us(Tn.x,Tn.z+4.6),Nr("Toca una figura para tomarla. Mueve la vista y usa +/− o la rueda.")});document.querySelector("#go-lobby").addEventListener("click",()=>Us(0,5.5));document.querySelector("#go-second").addEventListener("click",()=>Us(Ja[1].x,Ja[1].z+7.6));document.querySelector("#go-characters").addEventListener("click",()=>{Us(bn.x,bn.z+4.6),document.querySelector("#character-picker").hidden=!1});document.querySelector("#lock-pointer").addEventListener("click",()=>{jo.open=!1,Xe.domElement.requestPointerLock()});const Nl=[Xe.xr.getController(0),Xe.xr.getController(1)],wd=[15964831,9886184,12954864,16764033,10674108][Math.floor(Math.random()*5)],Ol=JM({scene:Jt,renderer:Xe,camera:Et,controllers:Nl,objects:ht,menu:jo,say:Nr,welcome:Td,myColor:wd,getCharacter:Bo.selected}),YS=Ol.peers,bo=new Oe(0,0),ko=new Ls,qf=new Ls;function Ko(i,e){const t=Xe.domElement.getBoundingClientRect();return document.pointerLockElement===Xe.domElement||i===void 0?bo.set(0,0):bo.set((i-t.left)/t.width*2-1,-(e-t.top)/t.height*2+1),Et.updateWorldMatrix(!0,!1),ko.setFromCamera(bo,Et),ko.ray}function $o(i,e=null){if(ht.isHolding()){ht.release();return}const t=ht.hit(i),n=ls.hit(i),r=Bo.hit(i);if(r&&(!t||r.distance<t.distance)&&(!n||r.distance<n.distance)){Bo.chooseHit(r);return}t&&(!n||t.distance<n.distance)?ht.grab(t,e):n?ls.answerFromRay(i):Nr("Acércate y apunta al panel o a una de las tres figuras.")}document.querySelector("#interact").addEventListener("click",()=>$o(Ko()));const ai=new Set;window.addEventListener("keydown",i=>{i.target.matches("input, textarea")||(ai.add(i.code),!i.repeat&&(i.code==="KeyE"&&$o(Ko()),(i.code==="Equal"||i.code==="NumpadAdd")&&ht.scaleBy(1.15),(i.code==="Minus"||i.code==="NumpadSubtract")&&ht.scaleBy(1/1.15),i.code==="KeyR"&&ht.rotate()))});window.addEventListener("keyup",i=>ai.delete(i.code));window.addEventListener("blur",()=>{ai.clear(),Cd()});Xe.domElement.addEventListener("wheel",i=>{ht.isHolding()&&(i.preventDefault(),ht.scaleBy(Math.exp(-i.deltaY*.001)))},{passive:!1});const Ii=new Map;let us=0;Xe.domElement.addEventListener("pointerdown",i=>{Ii.set(i.pointerId,{x:i.clientX,y:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1}),Xe.domElement.setPointerCapture(i.pointerId)});Xe.domElement.addEventListener("pointermove",i=>{if(Xe.xr.isPresenting)return;const e=Ii.get(i.pointerId);if(document.pointerLockElement===Xe.domElement){bt.rotation.y-=i.movementX*.0025,Et.rotation.x=Mt.clamp(Et.rotation.x-i.movementY*.0025,-1.3,1.3);return}if(!e){Ko(i.clientX,i.clientY);return}const t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,e.moved||=Math.hypot(e.x-e.startX,e.y-e.startY)>8,Ii.size===2&&ht.isHolding()){const[r,s]=[...Ii.values()];r.moved=s.moved=!0;const o=Math.hypot(r.x-s.x,r.y-s.y);us>0&&ht.scaleBy(o/us),us=o}else e.moved&&(bt.rotation.y-=t*.004,Et.rotation.x=Mt.clamp(Et.rotation.x-n*.004,-1.3,1.3))});Xe.domElement.addEventListener("pointerup",i=>{const e=Ii.get(i.pointerId);Ii.delete(i.pointerId),us=0,e&&!e.moved&&!Xe.xr.isPresenting&&$o(Ko(i.clientX,i.clientY))});Xe.domElement.addEventListener("pointercancel",i=>{Ii.delete(i.pointerId),us=0});const ci={x:0,y:0},Rr=document.querySelector("#move-pad"),Ad=document.querySelector("#move-knob");function Rd(i){const e=Rr.getBoundingClientRect(),t=e.width*.34,n=i.clientX-e.left-e.width/2,r=i.clientY-e.top-e.height/2,s=Math.max(1,Math.hypot(n,r)/t);ci.x=n/t/s,ci.y=r/t/s,Ad.style.transform=`translate(${ci.x*t}px, ${ci.y*t}px)`}function Cd(){ci.x=ci.y=0,Ad.style.transform=""}Rr.addEventListener("pointerdown",i=>{Rr.setPointerCapture(i.pointerId),Rd(i)});Rr.addEventListener("pointermove",i=>{Rr.hasPointerCapture(i.pointerId)&&Rd(i)});["pointerup","pointercancel","lostpointercapture"].forEach(i=>Rr.addEventListener(i,Cd));function il(i){return i.updateWorldMatrix(!0,!1),qf.set(i.getWorldPosition(new B),new B(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Ln))),qf.ray}for(const i of Nl){bt.add(i);const e=new Ze(new si(.07,12,8),new St({color:wd}));i.add(e);const t=new Ho(new Ct().setFromPoints([new B,new B(0,0,-6)]),new xl({color:9105112,transparent:!0,opacity:.6}));i.add(t),i.addEventListener("connected",n=>{i.userData.handedness=n.data.handedness,i.userData.connected=!0}),i.addEventListener("disconnected",()=>{ht.heldBy()===i&&ht.release(),i.userData.connected=!1}),i.addEventListener("selectstart",()=>$o(il(i),i)),i.addEventListener("squeezestart",()=>{ht.isHolding()||ht.grab(ht.hit(il(i)),i)}),i.addEventListener("squeezeend",()=>{ht.heldBy()===i&&ht.release()})}Xe.xr.addEventListener("sessionstart",()=>{document.body.classList.add("in-vr"),jo.open=!1,ai.clear(),Ol.sessionStarted()});Xe.xr.addEventListener("sessionend",()=>{ht.release(),document.body.classList.remove("in-vr"),Et.rotation.x=0});const jS=new jm;let Qr=0,Yf=0;Xe.setAnimationLoop(()=>{const i=Math.min(jS.getDelta(),.05);Qr+=i;let e=Number(ai.has("KeyD"))-Number(ai.has("KeyA"))+ci.x,t=Number(ai.has("KeyS"))-Number(ai.has("KeyW"))+ci.y;if(Xe.xr.isPresenting)for(const a of Xe.xr.getSession()?.inputSources||[]){const c=a.gamepad?.axes;if(!c)continue;const l=c.length>=4?c[2]:c[0],f=c.length>=4?c[3]:c[1];a.handedness==="right"?ht.isHolding()?(Math.abs(f)>.2&&ht.scaleBy(Math.exp(-f*i)),Math.abs(l)>.2&&ht.rotate(l*i*1.5)):Math.abs(l)>.6&&Qr-Yf>.3&&(bt.rotation.y-=Math.sign(l)*Math.PI/6,Yf=Qr):(e+=Math.abs(l)>.18?l:0,t+=Math.abs(f)>.18?f:0)}const n=Math.max(1,Math.hypot(e,t));e/=n,t/=n;const r=(Xe.xr.isPresenting?Xe.xr.getCamera():Et).getWorldDirection(new B);r.y=0,r.normalize();const s={x:bt.position.x,z:bt.position.z};bt.position.addScaledVector(new B(-r.z,0,r.x),e*3*i).addScaledVector(r,-t*3*i);const o=eS(s,bt.position,Jt.userData.campusWalls||[]);bt.position.x=o.x,bt.position.z=o.z,bt.position.x=Mt.clamp(bt.position.x,-37,An.x),bt.position.z=Mt.clamp(bt.position.z,-39,An.z);for(const a of YS.values()){const c=a.group.position.distanceTo(a.destination);a.group.position.lerp(a.destination,Math.min(1,i*10));const l=(Xe.xr.isPresenting?Xe.xr.getCamera():Et).getWorldPosition(new B);a.group.userData.proximity(Math.hypot(a.group.position.x-l.x,a.group.position.z-l.z));const f=Mt.euclideanModulo(a.yaw-a.group.rotation.y+Math.PI,Math.PI*2)-Math.PI;a.group.rotation.y+=f*Math.min(1,i*12),a.group.updateWorldMatrix(!0,!1),a.group.userData.animate(Qr,Math.min(c*8,1),a.hands,a.headY,a.pitch)}if(Bo.update(Qr),Ol.update(),!Xe.xr.isPresenting)Et.updateWorldMatrix(!0,!1),ko.setFromCamera(document.pointerLockElement?new Oe:bo,Et),ls.hoverRay(ko.ray);else{const a=Nl.find(c=>c.userData.handedness==="right"&&c.userData.connected);a&&ls.hoverRay(il(a))}ls.update(i),ht.update(i),Td.update(),document.querySelector("#interact").textContent=ht.isHolding()?"Soltar":"Agarrar",Xe.render(Jt,Et)});window.addEventListener("resize",()=>{Et.aspect=innerWidth/innerHeight,Et.updateProjectionMatrix(),Xe.setSize(innerWidth,innerHeight)});

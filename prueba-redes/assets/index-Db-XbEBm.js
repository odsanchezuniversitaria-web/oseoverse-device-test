(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const un={x:37,z:39},An={x:-12,z:-9.2},Rn={x:12,z:-9.2},Ho={x:-26,z:-25.5},vc=[{x:-24,z:-30,name:"PROCONVET · PREGUNTAS",color:"#087d86"},{x:24,z:-30,name:"EXPLORA · CREA · COMPARTE",color:"#7354a5"}];const Al="180",wp=0,mu=1,Ap=2,bf=1,wf=2,Wn=3,$n=0,Gt=1,Yt=2,pi=0,gr=1,gu=2,_u=3,vu=4,Rp=5,Ii=100,Cp=101,Pp=102,Lp=103,Ip=104,Dp=200,Np=201,Up=202,Op=203,xc=204,yc=205,Fp=206,Bp=207,kp=208,zp=209,Hp=210,Vp=211,Gp=212,Wp=213,Xp=214,Mc=0,Sc=1,Ec=2,Mr=3,Tc=4,bc=5,wc=6,Ac=7,Af=0,qp=1,Yp=2,mi=0,Kp=1,jp=2,$p=3,Jp=4,Zp=5,Qp=6,em=7,xu="attached",tm="detached",Rf=300,Sr=301,Er=302,Rc=303,Cc=304,na=306,Bi=1e3,ui=1001,Vo=1002,Wt=1003,Cf=1004,os=1005,Qt=1006,Io=1007,Xn=1008,Ln=1009,Pf=1010,Lf=1011,ys=1012,Rl=1013,ki=1014,xn=1015,ks=1016,Cl=1017,Pl=1018,Ms=1020,If=35902,Df=35899,Nf=1021,Uf=1022,hn=1023,Ss=1026,Es=1027,Ll=1028,Il=1029,Of=1030,Dl=1031,Nl=1033,Do=33776,No=33777,Uo=33778,Oo=33779,Pc=35840,Lc=35841,Ic=35842,Dc=35843,Nc=36196,Uc=37492,Oc=37496,Fc=37808,Bc=37809,kc=37810,zc=37811,Hc=37812,Vc=37813,Gc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Kc=37819,jc=37820,$c=37821,Jc=36492,Zc=36494,Qc=36495,el=36283,tl=36284,nl=36285,il=36286,Ts=2300,bs=2301,ma=2302,yu=2400,Mu=2401,Su=2402,nm=2500,im=0,Ff=1,rl=2,rm=3200,sm=3201,Bf=0,om=1,li="",vt="srgb",Xt="srgb-linear",Go="linear",ht="srgb",Yi=7680,Eu=519,am=512,cm=513,lm=514,kf=515,um=516,hm=517,fm=518,dm=519,sl=35044,Tu="300 es",Pn=2e3,Wo=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const us=Math.PI/180,Tr=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function pm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function mm(i,e,t){return i!==e?(t-i)/(e-i):0}function hs(i,e,t){return(1-t)*i+t*e}function gm(i,e,t,n){return hs(i,e,1-Math.exp(-t*n))}function _m(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ym(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mm(i,e){return i+Math.random()*(e-i)}function Sm(i){return i*(.5-Math.random())}function Em(i){i!==void 0&&(bu=i);let e=bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tm(i){return i*us}function bm(i){return i*Tr}function wm(i){return(i&i-1)===0&&i!==0}function Am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:us,RAD2DEG:Tr,generateUUID:dn,clamp:Je,euclideanModulo:Ul,mapLinear:pm,inverseLerp:mm,lerp:hs,damp:gm,pingpong:_m,smoothstep:vm,smootherstep:xm,randInt:ym,randFloat:Mm,randFloatSpread:Sm,seededRandom:Em,degToRad:Tm,radToDeg:bm,isPowerOfTwo:wm,ceilPowerOfTwo:Am,floorPowerOfTwo:Rm,setQuaternionFromProperEuler:Cm,normalize:ot,denormalize:vn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class En{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let g=1-a;const m=c*f+l*d+h*p+u*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),b=Math.atan2(E,m*x);g=Math.sin(g*b)/E,a=Math.sin(a*b)/E}const v=a*x;if(c=c*g+f*v,l=l*g+d*v,h=h*g+p*v,u=u*g+_*v,g===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),d=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new U,wu=new En;class Ke{constructor(e,t,n,r,s,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=r[0],g=r[3],m=r[6],x=r[1],y=r[4],v=r[7],E=r[2],b=r[5],w=r[8];return s[0]=o*_+a*x+c*E,s[3]=o*g+a*y+c*b,s[6]=o*m+a*v+c*w,s[1]=l*_+h*x+u*E,s[4]=l*g+h*y+u*b,s[7]=l*m+h*v+u*w,s[2]=f*_+d*x+p*E,s[5]=f*g+d*y+p*b,s[8]=f*m+d*v+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,p=t*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Ke;function zf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pm(){const i=ws("canvas");return i.style.display="block",i}const Au={};function As(i){i in Au||(Au[i]=!0,console.warn(i))}function Lm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ru=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Im(){const i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Go:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}const tt=Im();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class Dm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=ws("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nm=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;const xa=new U;class Ct extends Or{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=ui,r=ui,s=Qt,o=Xn,a=hn,c=Ln,l=Ct.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=dn(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Rf;Ct.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(d+1)/2,E=(m+1)/2,b=(h+f)/4,w=(u+_)/4,R=(p+g)/4;return y>v&&y>E?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=w/n):v>E?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=R/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=R/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Om extends Or{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ct(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),$s.subVectors(this.max,Wr),ji.subVectors(e.a,Wr),$i.subVectors(e.b,Wr),Ji.subVectors(e.c,Wr),ti.subVectors($i,ji),ni.subVectors(Ji,$i),Mi.subVectors(ji,Ji);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!ya(t,ji,$i,Ji,$s)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,ji,$i,Ji,$s))?!1:(Js.crossVectors(ti,ni),t=[Js.x,Js.y,Js.z],ya(t,ji,$i,Ji,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new U,new U,new U,new U,new U,new U,new U,new U],mn=new U,js=new Dn,ji=new U,$i=new U,Ji=new U,ti=new U,ni=new U,Mi=new U,Wr=new U,$s=new U,Js=new U,Si=new U;function ya(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bm=new Dn,Xr=new U,Ma=new U;class Nn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Ma)),this.expandByPoint(Xr.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new U,Sa=new U,Zs=new U,ii=new U,Ea=new U,Qs=new U,Ta=new U;class zs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=ii.dot(this.direction),c=-ii.dot(Zs),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Sa).addScaledVector(Zs,f),d}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),Qs.subVectors(n,e),Ta.crossVectors(Ea,Qs);let o=this.direction.dot(Ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(Qs.crossVectors(ii,Qs));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(Ta);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,r,s,o,a,c,l,h,u,f,d,p,_,g){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,f,d,p,_,g)}set(e,t,n,r,s,o,a,c,l,h,u,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(km,e,zm)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ri.crossVectors(n,Jt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ri.crossVectors(n,Jt)),ri.normalize(),eo.crossVectors(Jt,ri),r[0]=ri.x,r[4]=eo.x,r[8]=Jt.x,r[1]=ri.y,r[5]=eo.y,r[9]=Jt.y,r[2]=ri.z,r[6]=eo.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],b=r[0],w=r[4],R=r[8],S=r[12],M=r[1],D=r[5],k=r[9],X=r[13],P=r[2],O=r[6],L=r[10],F=r[14],N=r[3],W=r[7],ie=r[11],B=r[15];return s[0]=o*b+a*M+c*P+l*N,s[4]=o*w+a*D+c*O+l*W,s[8]=o*R+a*k+c*L+l*ie,s[12]=o*S+a*X+c*F+l*B,s[1]=h*b+u*M+f*P+d*N,s[5]=h*w+u*D+f*O+d*W,s[9]=h*R+u*k+f*L+d*ie,s[13]=h*S+u*X+f*F+d*B,s[2]=p*b+_*M+g*P+m*N,s[6]=p*w+_*D+g*O+m*W,s[10]=p*R+_*k+g*L+m*ie,s[14]=p*S+_*X+g*F+m*B,s[3]=x*b+y*M+v*P+E*N,s[7]=x*w+y*D+v*O+E*W,s[11]=x*R+y*k+v*L+E*ie,s[15]=x*S+y*X+v*F+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+g*(+t*l*u-t*a*d-s*o*u+n*o*d+s*a*h-n*l*h)+m*(-r*a*h-t*c*u+t*a*f+r*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=u*g*l-_*f*l+_*c*d-a*g*d-u*c*m+a*f*m,y=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,v=h*_*l-p*u*l+p*a*d-o*_*d-h*a*m+o*u*m,E=p*u*c-h*_*c-p*a*f+o*_*f+h*a*g-o*u*g,b=t*x+n*y+r*v+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(_*f*s-u*g*s-_*r*d+n*g*d+u*r*m-n*f*m)*w,e[2]=(a*g*s-_*c*s+_*r*l-n*g*l-a*r*m+n*c*m)*w,e[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*d-n*c*d)*w,e[4]=y*w,e[5]=(h*g*s-p*f*s+p*r*d-t*g*d-h*r*m+t*f*m)*w,e[6]=(p*c*s-o*g*s-p*r*l+t*g*l+o*r*m-t*c*m)*w,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*d+t*c*d)*w,e[8]=v*w,e[9]=(p*u*s-h*_*s-p*n*d+t*_*d+h*n*m-t*u*m)*w,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*m+t*a*m)*w,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*d-t*a*d)*w,e[12]=E*w,e[13]=(h*_*r-p*u*r+p*n*f-t*_*f-h*n*g+t*u*g)*w,e[14]=(p*a*r-o*_*r-p*n*c+t*_*c+o*n*g-t*a*g)*w,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,p=s*u,_=o*h,g=o*u,m=a*u,x=c*l,y=c*h,v=c*u,E=n.x,b=n.y,w=n.z;return r[0]=(1-(_+m))*E,r[1]=(d+v)*E,r[2]=(p-y)*E,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(f+m))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(p+y)*w,r[9]=(g-x)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const l=1/s,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Pn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let p,_;if(c)p=s/(o-s),_=o*s/(o-s);else if(a===Pn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Pn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r);let p,_;if(c)p=1/(o-s),_=o/(o-s);else if(a===Pn)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Wo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new U,gn=new Ye,km=new U(0,0,0),zm=new U(1,1,1),ri=new U,eo=new U,Jt=new U,Pu=new Ye,Lu=new En;class In{constructor(e=0,t=0,n=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hm=0;const Iu=new U,Qi=new En,zn=new Ye,to=new U,qr=new U,Vm=new U,Gm=new En,Du=new U(1,0,0),Nu=new U(0,1,0),Uu=new U(0,0,1),Ou={type:"added"},Wm={type:"removed"},er={type:"childadded",child:null},ba={type:"childremoved",child:null};class mt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new In,n=new En,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(qr,to,this.up):zn.lookAt(to,qr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(zn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wm),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new U,Hn=new U,wa=new U,Vn=new U,tr=new U,nr=new U,Fu=new U,Aa=new U,Ra=new U,Ca=new U,Pa=new it,La=new it,Ia=new it;class an{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_n.subVectors(r,t),Hn.subVectors(n,t),wa.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Hn),c=_n.dot(wa),l=Hn.dot(Hn),h=Hn.dot(wa),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pa.setScalar(0),La.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pa,s.x),o.addScaledVector(La,s.y),o.addScaledVector(Ia,s.z),o}static isFrontFacing(e,t,n,r){return _n.subVectors(n,t),Hn.subVectors(e,t),_n.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),nr.subVectors(s,n),Aa.subVectors(e,n);const c=tr.dot(Aa),l=nr.dot(Aa);if(c<=0&&l<=0)return t.copy(n);Ra.subVectors(e,r);const h=tr.dot(Ra),u=nr.dot(Ra);if(h>=0&&u<=h)return t.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);Ca.subVectors(e,s);const d=tr.dot(Ca),p=nr.dot(Ca);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(nr,a);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Fu.subVectors(s,r),a=(u-h)/(u-h+(d-p)),t.copy(r).addScaledVector(Fu,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},no={h:0,s:0,l:0};function Da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Ul(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Da(o,s,e+1/3),this.g=Da(o,s,e),this.b=Da(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return tt.workingToColorSpace(Nt.copy(this),e),Math.round(Je(Nt.r*255,0,255))*65536+Math.round(Je(Nt.g*255,0,255))*256+Math.round(Je(Nt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=vt){tt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(no);const n=hs(si.h,no.h,t),r=hs(si.s,no.s,t),s=hs(si.l,no.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ge;Ge.NAMES=Vf;let Xm=0;class yn extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=gr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Et extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,io=new _e;let qm=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Gf extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wf extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ym=0;const sn=new Ye,Na=new mt,ir=new U,Zt=new Dn,Yr=new Dn,It=new U;class Rt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?Wf:Gf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Zt.min,Yr.min),Zt.expandByPoint(It),It.addVectors(Zt.max,Yr.max),Zt.expandByPoint(It)):(Zt.expandByPoint(Yr.min),Zt.expandByPoint(Yr.max))}Zt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)It.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),It.add(ir)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new U,c[R]=new U;const l=new U,h=new U,u=new U,f=new _e,d=new _e,p=new _e,_=new U,g=new U;function m(R,S,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,M),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),a[R].add(_),a[S].add(_),a[M].add(_),c[R].add(g),c[S].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],D=M.start,k=M.count;for(let X=D,P=D+k;X<P;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new U,v=new U,E=new U,b=new U;function w(R){E.fromBufferAttribute(r,R),b.copy(E);const S=a[R];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(b,S);const D=v.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,S=x.length;R<S;++R){const M=x[R],D=M.start,k=M.count;for(let X=D,P=D+k;X<P;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new Ye,Ei=new zs,ro=new Nn,ku=new U,so=new U,oo=new U,ao=new U,Ua=new U,co=new U,zu=new U,lo=new U;class Qe extends mt{constructor(e=new Rt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){co.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Ua.fromBufferAttribute(u,e),o?co.addScaledVector(Ua,h):co.addScaledVector(Ua.sub(t),h))}t.add(co)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(ro.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ro,ku)===null||Ei.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Bu.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const b=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);r=uo(this,m,e,n,l,h,u,b,w,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=uo(this,o,e,n,l,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const b=v,w=v+1,R=v+2;r=uo(this,m,e,n,l,h,u,b,w,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=g,y=g+1,v=g+2;r=uo(this,o,e,n,l,h,u,x,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Km(i,e,t,n,r,s,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===$n,a),c===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:i}}function uo(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,so),i.getVertexPosition(c,oo),i.getVertexPosition(l,ao);const h=Km(i,e,t,n,so,oo,ao,zu);if(h){const u=new U;an.getBarycoord(zu,so,oo,ao,u),r&&(h.uv=an.getInterpolatedAttribute(r,a,c,l,u,new _e)),s&&(h.uv1=an.getInterpolatedAttribute(s,a,c,l,u,new _e)),o&&(h.normal=an.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};an.getNormal(so,oo,ao,f.normal),h.face=f,h.barycoord=u}return h}class Kt extends Rt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function p(_,g,m,x,y,v,E,b,w,R,S){const M=v/w,D=E/R,k=v/2,X=E/2,P=b/2,O=w+1,L=R+1;let F=0,N=0;const W=new U;for(let ie=0;ie<L;ie++){const B=ie*D-X;for(let te=0;te<O;te++){const ye=te*M-k;W[_]=ye*x,W[g]=B*y,W[m]=P,l.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=b>0?1:-1,h.push(W.x,W.y,W.z),u.push(te/w),u.push(1-ie/R),F+=1}}for(let ie=0;ie<R;ie++)for(let B=0;B<w;B++){const te=f+B+O*ie,ye=f+B+O*(ie+1),Ve=f+(B+1)+O*(ie+1),Fe=f+(B+1)+O*ie;c.push(te,ye,Fe),c.push(ye,Ve,Fe),N+=6}a.addGroup(d,N,S),d+=N,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const r in n)e[r]=n[r]}return e}function jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const $m={clone:br,merge:zt};var Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new U,Hu=new _e,Vu=new _e;class Ht extends qf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Vu),t.subVectors(Vu,Hu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Qm extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Ht(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new Ht(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new Ht(rr,sr,e,t);a.layers=this.layers,this.add(a);const c=new Ht(rr,sr,e,t);c.layers=this.layers,this.add(c);const l=new Ht(rr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yf extends Ct{constructor(e=[],t=Sr,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eg extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kt(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:pi});s.uniforms.tEquirect.value=t;const o=new Qe(r,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Qt),new Qm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class en extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Bl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ng extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new U;class Rs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jf extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let or;const Kr=new U,ar=new U,cr=new U,lr=new _e,jr=new _e,$f=new Ye,ho=new U,$r=new U,fo=new U,Gu=new _e,Fa=new _e,Wu=new _e;class ig extends mt{constructor(e=new jf){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kf(t,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new Rs(n,3,0,!1)),or.setAttribute("uv",new Rs(n,2,3,!1))}this.geometry=or,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),$f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-cr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;po(ho.set(-.5,-.5,0),cr,o,ar,r,s),po($r.set(.5,-.5,0),cr,o,ar,r,s),po(fo.set(.5,.5,0),cr,o,ar,r,s),Gu.set(0,0),Fa.set(1,0),Wu.set(1,1);let a=e.ray.intersectTriangle(ho,$r,fo,!1,Kr);if(a===null&&(po($r.set(-.5,.5,0),cr,o,ar,r,s),Fa.set(0,1),a=e.ray.intersectTriangle(ho,fo,$r,!1,Kr),a===null))return;const c=e.ray.origin.distanceTo(Kr);c<e.near||c>e.far||t.push({distance:c,point:Kr.clone(),uv:an.getInterpolation(Kr,ho,$r,fo,Gu,Fa,Wu,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function po(i,e,t,n,r,s){lr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(jr.x=s*lr.x-r*lr.y,jr.y=r*lr.x+s*lr.y):jr.copy(lr),i.copy(e),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4($f)}const Xu=new U,qu=new it,Yu=new it,rg=new U,Ku=new Ye,mo=new U,Ba=new Nn,ju=new Ye,ka=new zs;class sg extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xu,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(r),e.ray.intersectsSphere(Ba)!==!1&&(ju.copy(r).invert(),ka.copy(e.ray).applyMatrix4(ju),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;qu.fromBufferAttribute(r.attributes.skinIndex,e),Yu.fromBufferAttribute(r.attributes.skinWeight,e),Xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Yu.getComponent(s);if(o!==0){const a=qu.getComponent(s);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rg.copy(Xu).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zf extends Ct{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Wt,h=Wt,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=new Ye,og=new Ye;class kl{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:og;$u.multiplyMatrices(a,t[s]),$u.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zf(t,e,e,hn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Jf),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class ol extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ur=new Ye,Ju=new Ye,go=[],Zu=new Dn,ag=new Ye,Jr=new Qe,Zr=new Nn;class Qf extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ag)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Zu.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Zu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Zr.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ur),Ju.multiplyMatrices(n,ur),Jr.matrixWorld=Ju,Jr.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=s,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zf(new Float32Array(r*this.count),r,this.count,Ll,xn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new U,cg=new U,lg=new Ke;class Pi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=za.subVectors(n,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lg.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Nn,ug=new _e(.5,.5),_o=new U;class zl{constructor(e=new Pi,t=new Pi,n=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],x=s[12],y=s[13],v=s[14],E=s[15];if(r[0].setComponents(l-o,d-h,m-p,E-x).normalize(),r[1].setComponents(l+o,d+h,m+p,E+x).normalize(),r[2].setComponents(l+a,d+u,m+_,E+y).normalize(),r[3].setComponents(l-a,d-u,m-_,E-y).normalize(),n)r[4].setComponents(c,f,g,v).normalize(),r[5].setComponents(l-c,d-f,m-g,E-v).normalize();else if(r[4].setComponents(l-c,d-f,m-g,E-v).normalize(),t===Pn)r[5].setComponents(l+c,d+f,m+g,E+v).normalize();else if(t===Wo)r[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=ug.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_o.x=r.normal.x>0?e.max.x:e.min.x,_o.y=r.normal.y>0?e.max.y:e.min.y,_o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new U,qo=new U,Qu=new Ye,Qr=new zs,vo=new Nn,Ha=new U,eh=new U;class ia extends mt{constructor(e=new Rt,t=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Xo.fromBufferAttribute(t,r-1),qo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Xo.distanceTo(qo);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Qu.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(Qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){const m=h.getX(_),x=h.getX(_+1),y=xo(this,e,Qr,c,m,x,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=xo(this,e,Qr,c,_,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){const m=xo(this,e,Qr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=xo(this,e,Qr,c,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xo(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Xo.fromBufferAttribute(a,r),qo.fromBufferAttribute(a,s),t.distanceSqToSegment(Xo,qo,Ha,eh)>n)return;Ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const th=new U,nh=new U;class hg extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)th.fromBufferAttribute(t,r),nh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+th.distanceTo(nh);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fg extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ed extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new Ye,al=new zs,yo=new Nn,Mo=new U;class dg extends mt{constructor(e=new Rt,t=new ed){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;ih.copy(r).invert(),al.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);Mo.fromBufferAttribute(u,g),rh(Mo,g,c,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Mo.fromBufferAttribute(u,p),rh(Mo,p,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(i,e,t,n,r,s,o){const a=al.distanceSqToPoint(i);if(a<t){const c=new U;al.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wr extends Ct{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class td extends Ct{constructor(e,t,n=ki,r,s,o,a=Wt,c=Wt,l,h=Ss,u=1){if(h!==Ss&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nd extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vl extends Rt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+s,_=r+1,g=new U,m=new U;for(let x=0;x<=p;x++){let y=0,v=0,E=0,b=0;if(x<=n){const S=x/n,M=S*Math.PI/2;v=-h-e*Math.cos(M),E=e*Math.sin(M),b=-e*Math.cos(M),y=S*u}else if(x<=n+s){const S=(x-n)/s;v=-h+S*t,E=e,b=0,y=u+S*f}else{const S=(x-n-s)/n,M=S*Math.PI/2;v=h+e*Math.sin(M),E=e*Math.cos(M),b=e*Math.sin(M),y=u+f+S*u}const w=Math.max(0,Math.min(1,y/d));let R=0;x===0?R=.5/r:x===p&&(R=-.5/r);for(let S=0;S<=r;S++){const M=S/r,D=M*Math.PI*2,k=Math.sin(D),X=Math.cos(D);m.x=-E*X,m.y=v,m.z=E*k,a.push(m.x,m.y,m.z),g.set(-E*X,b,E*k),g.normalize(),c.push(g.x,g.y,g.z),l.push(M+R,w)}if(x>0){const S=(x-1)*_;for(let M=0;M<r;M++){const D=S+M,k=S+M+1,X=x*_+M,P=x*_+M+1;o.push(D,k,X),o.push(k,P,X)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class vi extends Rt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function x(){const v=new U,E=new U;let b=0;const w=(t-e)/n;for(let R=0;R<=s;R++){const S=[],M=R/s,D=M*(t-e)+e;for(let k=0;k<=r;k++){const X=k/r,P=X*c+a,O=Math.sin(P),L=Math.cos(P);E.x=D*O,E.y=-M*n+g,E.z=D*L,u.push(E.x,E.y,E.z),v.set(O,w,L).normalize(),f.push(v.x,v.y,v.z),d.push(X,1-M),S.push(p++)}_.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=_[S][R],D=_[S+1][R],k=_[S+1][R+1],X=_[S][R+1];(e>0||S!==0)&&(h.push(M,D,X),b+=3),(t>0||S!==s-1)&&(h.push(D,k,X),b+=3)}l.addGroup(m,b,0),m+=b}function y(v){const E=p,b=new _e,w=new U;let R=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;const D=p;for(let k=0;k<=r;k++){const P=k/r*c+a,O=Math.cos(P),L=Math.sin(P);w.x=S*L,w.y=g*M,w.z=S*O,u.push(w.x,w.y,w.z),f.push(0,M,0),b.x=O*.5+.5,b.y=L*.5*M+.5,d.push(b.x,b.y),p++}for(let k=0;k<r;k++){const X=E+k,P=D+k;v===!0?h.push(P,P+1,X):h.push(P+1,P,X),R+=3}l.addGroup(m,R,v===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends vi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Rt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new U,v=new U,E=new U;for(let b=0;b<t.length;b+=3)d(t[b+0],y),d(t[b+1],v),d(t[b+2],E),c(y,v,E,x)}function c(x,y,v,E){const b=E+1,w=[];for(let R=0;R<=b;R++){w[R]=[];const S=x.clone().lerp(v,R/b),M=y.clone().lerp(v,R/b),D=b-R;for(let k=0;k<=D;k++)k===0&&R===b?w[R][k]=S:w[R][k]=S.clone().lerp(M,k/D)}for(let R=0;R<b;R++)for(let S=0;S<2*(b-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(w[R][M+1]),f(w[R+1][M]),f(w[R][M])):(f(w[R][M+1]),f(w[R+1][M+1]),f(w[R+1][M]))}}function l(x){const y=new U;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new U;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=g(x)/2/Math.PI+.5,E=m(x)/Math.PI+.5;o.push(v,1-E)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],E=o[x+4],b=Math.max(y,v,E),w=Math.min(y,v,E);b>.9&&w<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){const x=new U,y=new U,v=new U,E=new U,b=new _e,w=new _e,R=new _e;for(let S=0,M=0;S<s.length;S+=9,M+=6){x.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),b.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),E.copy(x).add(y).add(v).divideScalar(3);const D=g(E);_(b,M+0,x,D),_(w,M+2,y,D),_(R,M+4,v,D)}}function _(x,y,v,E){E<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.vertices,e.indices,e.radius,e.details)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new _e:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,r=[],s=[],o=[],a=new U,c=new Ye;for(let d=0;d<=e;d++){const p=d/e;r[d]=this.getTangentAt(p,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Je(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wl extends Un{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new _e){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pg extends Wl{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const So=new U,Va=new Xl,Ga=new Xl,Wa=new Xl;class mg extends Un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(So.subVectors(r[0],r[1]).add(r[0]),l=So);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(So.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Va.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,g),Ga.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,g),Wa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ga.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Wa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Va.calc(c),Ga.calc(c),Wa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sh(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function gg(i,e){const t=1-i;return t*t*e}function _g(i,e){return 2*(1-i)*i*e}function vg(i,e){return i*i*e}function fs(i,e,t,n){return gg(i,e)+_g(i,t)+vg(i,n)}function xg(i,e){const t=1-i;return t*t*t*e}function yg(i,e){const t=1-i;return 3*t*t*i*e}function Mg(i,e){return 3*(1-i)*i*i*e}function Sg(i,e){return i*i*i*e}function ds(i,e,t,n,r){return xg(i,e)+yg(i,t)+Mg(i,n)+Sg(i,r)}class id extends Un{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(e,r.x,s.x,o.x,a.x),ds(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eg extends Un{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(e,r.x,s.x,o.x,a.x),ds(e,r.y,s.y,o.y,a.y),ds(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rd extends Un{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tg extends Un{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Un{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fs(e,r.x,s.x,o.x),fs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bg extends Un{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(fs(e,r.x,s.x,o.x),fs(e,r.y,s.y,o.y),fs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class od extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(sh(a,c.x,l.x,h.x,u.x),sh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:pg,CatmullRomCurve3:mg,CubicBezierCurve:id,CubicBezierCurve3:Eg,EllipseCurve:Wl,LineCurve:rd,LineCurve3:Tg,QuadraticBezierCurve:sd,QuadraticBezierCurve3:bg,SplineCurve:od});class wg extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new cl[r.type]().fromJSON(r))}return this}}class oh extends wg{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rd(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new sd(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new id(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new od(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new Wl(e,t,n,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ad extends oh{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new oh().fromJSON(r))}return this}}function Ag(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=cd(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Ig(i,e,s,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<r;f+=t){const d=i[f],p=i[f+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Cs(s,o,t,a,c,l,0),o}function cd(i,e,t,n,r){let s;if(r===Gg(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=ah(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=ah(o/n|0,i[o],i[o+1],s);return s&&Ar(s,s.next)&&(Ls(s),s=s.next),s}function Hi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ar(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Ls(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Fg(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Cg(i,n,r,s):Rg(i)){e.push(c.i,i.i,l.i),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Pg(Hi(i),e),Cs(i,e,t,n,r,s,2)):o===2&&Lg(i,e,t,n,r,s):Cs(Hi(i),e,t,n,r,s,1);break}}}function Rg(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(r,s,o),u=Math.min(a,c,l),f=Math.max(r,s,o),d=Math.max(a,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&as(r,a,s,c,o,l,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Cg(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Tt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,c,l),p=Math.min(h,u,f),_=Math.max(a,c,l),g=Math.max(h,u,f),m=ll(d,p,e,t,n),x=ll(_,g,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&as(a,h,c,u,l,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&as(a,h,c,u,l,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&as(a,h,c,u,l,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&as(a,h,c,u,l,f,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pg(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ar(n,r)&&ud(n,t,t.next,r)&&Ps(n,r)&&Ps(r,n)&&(e.push(n.i,t.i,r.i),Ls(t),Ls(t.next),t=i=r),t=t.next}while(t!==i);return Hi(t)}function Lg(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zg(o,a)){let c=hd(o,a);o=Hi(o,o.next),c=Hi(c,c.next),Cs(o,e,t,n,r,s,0),Cs(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ig(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=cd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(kg(l))}r.sort(Dg);for(let s=0;s<r.length;s++)t=Ng(r[s],t);return t}function Dg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Ng(i,e){const t=Ug(i,e);if(!t)return e;const n=hd(t,i);return Hi(n,n.next),Hi(t,t.next)}function Ug(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(Ar(i,t))return t;do{if(Ar(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ld(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const u=Math.abs(r-t.y)/(n-t.x);Ps(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Og(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Og(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function Fg(i,e,t,n){let r=i;do r.z===0&&(r.z=ll(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Bg(r)}function Bg(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function ll(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ld(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function as(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&ld(i,e,t,n,r,s,o,a)}function zg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hg(i,e)&&(Ps(i,e)&&Ps(e,i)&&Vg(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Ar(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ar(i,e){return i.x===e.x&&i.y===e.y}function ud(i,e,t,n){const r=To(Tt(i,e,t)),s=To(Tt(i,e,n)),o=To(Tt(t,n,i)),a=To(Tt(t,n,e));return!!(r!==s&&o!==a||r===0&&Eo(i,t,e)||s===0&&Eo(i,n,e)||o===0&&Eo(t,i,n)||a===0&&Eo(t,e,n))}function Eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function To(i){return i>0?1:i<0?-1:0}function Hg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ps(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Vg(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){const t=ul(i.i,i.x,i.y),n=ul(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ah(i,e,t,n){const r=ul(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gg(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Wg{static triangulate(e,t,n=2){return Ag(e,t,n)}}class pr{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return pr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ch(e),lh(n,e);let o=e.length;t.forEach(ch);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,lh(n,t[c]);const a=Wg.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ch(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ql extends Rt{constructor(e=new ad([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new lt(r,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Xg;let y,v=!1,E,b,w,R;m&&(y=m.getSpacedPoints(h),v=!0,f=!1,E=m.computeFrenetFrames(h,!1),b=new U,w=new U,R=new U),f||(g=0,d=0,p=0,_=0);const S=a.extractPoints(l);let M=S.shape;const D=S.holes;if(!pr.isClockWise(M)){M=M.reverse();for(let Y=0,q=D.length;Y<q;Y++){const ne=D[Y];pr.isClockWise(ne)&&(D[Y]=ne.reverse())}}function X(Y){const ne=10000000000000001e-36;let $=Y[0];for(let se=1;se<=Y.length;se++){const oe=se%Y.length,de=Y[oe],Oe=de.x-$.x,Te=de.y-$.y,C=Oe*Oe+Te*Te,T=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs($.x),Math.abs($.y)),G=ne*T*T;if(C<=G){Y.splice(oe,1),se--;continue}$=de}}X(M),D.forEach(X);const P=D.length,O=M;for(let Y=0;Y<P;Y++){const q=D[Y];M=M.concat(q)}function L(Y,q,ne){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(q,ne)}const F=M.length;function N(Y,q,ne){let $,se,oe;const de=Y.x-q.x,Oe=Y.y-q.y,Te=ne.x-Y.x,C=ne.y-Y.y,T=de*de+Oe*Oe,G=de*C-Oe*Te;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(T),ue=Math.sqrt(Te*Te+C*C),Q=q.x-Oe/J,le=q.y+de/J,ee=ne.x-C/ue,he=ne.y+Te/ue,Se=((ee-Q)*C-(he-le)*Te)/(de*C-Oe*Te);$=Q+de*Se-Y.x,se=le+Oe*Se-Y.y;const re=$*$+se*se;if(re<=2)return new _e($,se);oe=Math.sqrt(re/2)}else{let J=!1;de>Number.EPSILON?Te>Number.EPSILON&&(J=!0):de<-Number.EPSILON?Te<-Number.EPSILON&&(J=!0):Math.sign(Oe)===Math.sign(C)&&(J=!0),J?($=-Oe,se=de,oe=Math.sqrt(T)):($=de,se=Oe,oe=Math.sqrt(T/2))}return new _e($/oe,se/oe)}const W=[];for(let Y=0,q=O.length,ne=q-1,$=Y+1;Y<q;Y++,ne++,$++)ne===q&&(ne=0),$===q&&($=0),W[Y]=N(O[Y],O[ne],O[$]);const ie=[];let B,te=W.concat();for(let Y=0,q=P;Y<q;Y++){const ne=D[Y];B=[];for(let $=0,se=ne.length,oe=se-1,de=$+1;$<se;$++,oe++,de++)oe===se&&(oe=0),de===se&&(de=0),B[$]=N(ne[$],ne[oe],ne[de]);ie.push(B),te=te.concat(B)}let ye;if(g===0)ye=pr.triangulateShape(O,D);else{const Y=[],q=[];for(let ne=0;ne<g;ne++){const $=ne/g,se=d*Math.cos($*Math.PI/2),oe=p*Math.sin($*Math.PI/2)+_;for(let de=0,Oe=O.length;de<Oe;de++){const Te=L(O[de],W[de],oe);Ie(Te.x,Te.y,-se),$===0&&Y.push(Te)}for(let de=0,Oe=P;de<Oe;de++){const Te=D[de];B=ie[de];const C=[];for(let T=0,G=Te.length;T<G;T++){const J=L(Te[T],B[T],oe);Ie(J.x,J.y,-se),$===0&&C.push(J)}$===0&&q.push(C)}}ye=pr.triangulateShape(Y,q)}const Ve=ye.length,Fe=p+_;for(let Y=0;Y<F;Y++){const q=f?L(M[Y],te[Y],Fe):M[Y];v?(w.copy(E.normals[0]).multiplyScalar(q.x),b.copy(E.binormals[0]).multiplyScalar(q.y),R.copy(y[0]).add(w).add(b),Ie(R.x,R.y,R.z)):Ie(q.x,q.y,0)}for(let Y=1;Y<=h;Y++)for(let q=0;q<F;q++){const ne=f?L(M[q],te[q],Fe):M[q];v?(w.copy(E.normals[Y]).multiplyScalar(ne.x),b.copy(E.binormals[Y]).multiplyScalar(ne.y),R.copy(y[Y]).add(w).add(b),Ie(R.x,R.y,R.z)):Ie(ne.x,ne.y,u/h*Y)}for(let Y=g-1;Y>=0;Y--){const q=Y/g,ne=d*Math.cos(q*Math.PI/2),$=p*Math.sin(q*Math.PI/2)+_;for(let se=0,oe=O.length;se<oe;se++){const de=L(O[se],W[se],$);Ie(de.x,de.y,u+ne)}for(let se=0,oe=D.length;se<oe;se++){const de=D[se];B=ie[se];for(let Oe=0,Te=de.length;Oe<Te;Oe++){const C=L(de[Oe],B[Oe],$);v?Ie(C.x,C.y+y[h-1].y,y[h-1].x+ne):Ie(C.x,C.y,u+ne)}}}Z(),ce();function Z(){const Y=r.length/3;if(f){let q=0,ne=F*q;for(let $=0;$<Ve;$++){const se=ye[$];xe(se[2]+ne,se[1]+ne,se[0]+ne)}q=h+g*2,ne=F*q;for(let $=0;$<Ve;$++){const se=ye[$];xe(se[0]+ne,se[1]+ne,se[2]+ne)}}else{for(let q=0;q<Ve;q++){const ne=ye[q];xe(ne[2],ne[1],ne[0])}for(let q=0;q<Ve;q++){const ne=ye[q];xe(ne[0]+F*h,ne[1]+F*h,ne[2]+F*h)}}n.addGroup(Y,r.length/3-Y,0)}function ce(){const Y=r.length/3;let q=0;we(O,q),q+=O.length;for(let ne=0,$=D.length;ne<$;ne++){const se=D[ne];we(se,q),q+=se.length}n.addGroup(Y,r.length/3-Y,1)}function we(Y,q){let ne=Y.length;for(;--ne>=0;){const $=ne;let se=ne-1;se<0&&(se=Y.length-1);for(let oe=0,de=h+g*2;oe<de;oe++){const Oe=F*oe,Te=F*(oe+1),C=q+$+Oe,T=q+se+Oe,G=q+se+Te,J=q+$+Te;ze(C,T,G,J)}}}function Ie(Y,q,ne){c.push(Y),c.push(q),c.push(ne)}function xe(Y,q,ne){fe(Y),fe(q),fe(ne);const $=r.length/3,se=x.generateTopUV(n,r,$-3,$-2,$-1);I(se[0]),I(se[1]),I(se[2])}function ze(Y,q,ne,$){fe(Y),fe(q),fe($),fe(q),fe(ne),fe($);const se=r.length/3,oe=x.generateSideWallUV(n,r,se-6,se-3,se-2,se-1);I(oe[0]),I(oe[1]),I(oe[3]),I(oe[1]),I(oe[2]),I(oe[3])}function fe(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function I(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new cl[r.type]().fromJSON(r)),new ql(n,e.options)}}const Xg={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new _e(s,o),new _e(a,c),new _e(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[r*3],d=e[r*3+1],p=e[r*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-u),new _e(f,1-p),new _e(_,1-m)]:[new _e(a,1-c),new _e(h,1-u),new _e(d,1-p),new _e(g,1-m)]}};function qg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ko extends Gl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ko(e.radius,e.detail)}}class ei extends Rt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*f-o;for(let y=0;y<l;y++){const v=y*u-s;p.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const y=x+l*m,v=x+l*(m+1),E=x+1+l*(m+1),b=x+1+l*m;d.push(y,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yl extends Rt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/r,d=new U,p=new _e;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const m=s+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<r;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,y=x,v=x+n+1,E=x+n+2,b=x+1;a.push(y,v,b),a.push(v,E,b)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qn extends Rt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,f=new U,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const b=E/t;u.x=-e*Math.cos(r+b*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+b*s)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(b+v,1-y),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const y=h[m][x+1],v=h[m][x],E=h[m+1][x],b=h[m+1][x+1];(m!==0||o>0)&&d.push(y,v,b),(m!==n-1||c<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ra extends Rt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let p=0;p<=r;p++){const _=p/r*s,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=r;p++){const _=(r+1)*d+p-1,g=(r+1)*(d-1)+p-1,m=(r+1)*(d-1)+p,x=(r+1)*d+p;o.push(_,g,x),o.push(g,m,x)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xt extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bf,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yg extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $g(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function uh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function fd(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Hs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jg extends Hs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mu:s=e,a=2*t-n;break;case Su:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mu:o=e,c=2*n-t;break;case Su:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(r-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*_+.5*p,v=d*g-d*_;for(let E=0;E!==a;++E)s[E]=m*o[h+E]+x*o[l+E]+y*o[c+E]+v*o[u+E];return s}}class Zg extends Hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}}class Qg extends Hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&jg(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ma,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=bs;class Fr extends Tn{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Ts;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends Tn{constructor(e,t,n,r){super(e,t,n,r)}}dd.prototype.ValueTypeName="color";class Rr extends Tn{constructor(e,t,n,r){super(e,t,n,r)}}Rr.prototype.ValueTypeName="number";class e0 extends Hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Cr extends Tn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new e0(this.times,this.values,this.getValueSize(),e)}}Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends Tn{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Ts;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends Tn{constructor(e,t,n,r){super(e,t,n,r)}}Pr.prototype.ValueTypeName="vector";class t0{constructor(e="",t=-1,n=[],r=nm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(i0(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Tn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=$g(c);c=uh(c,1,h),l=uh(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Rr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const g=[],m=[];fd(d,g,m,p),g.length!==0&&_.push(new u(f,g,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const y=f[p];g.push(y.time),m.push(y.morphTarget===_?1:0)}r.push(new Rr(".morphTargetInfluence["+_+"]",g,m))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Pr,d+".position",f,"pos",r),n(Cr,d+".quaternion",f,"rot",r),n(Pr,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function n0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return dd;case"quaternion":return Cr;case"bool":case"boolean":return Fr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function i0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=n0(i.type);if(i.times===void 0){const t=[],n=[];fd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Yn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const s0=new r0;class kr{constructor(e){this.manager=e!==void 0?e:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class o0 extends Error{constructor(e,t){super(e),this.response=t}}class pd extends kr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){x();function x(){u.read().then(({done:y,value:v})=>{if(y)m.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let b=0,w=h.length;b<w;b++){const R=h[b];R.onProgress&&R.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new o0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Yn.add(`file:${e}`,l);const h=Gn[e];delete Gn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=new WeakMap;class a0 extends kr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=hr.get(o);u===void 0&&(u=[],hr.set(o,u)),u.push({onLoad:t,onError:r})}return o}const a=ws("img");function c(){h(),t&&t(this);const u=hr.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}hr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),Yn.remove(`image:${e}`);const f=hr.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}hr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class c0 extends kr{constructor(e){super(e)}load(e,t,n,r){const s=new Ct,o=new a0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class sa extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class l0 extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Ye,hh=new U,fh=new U;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class u0 extends Kl{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class h0 extends sa{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new u0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dh=new Ye,es=new U,qa=new U;class f0 extends Kl{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),r.makeTranslation(-es.x,-es.y,-es.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh,n.coordinateSystem,n.reversedDepth)}}class d0 extends sa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jl extends qf{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class p0 extends Kl{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ps{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ya=new WeakMap;class m0 extends kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Ya.has(o)===!0)r&&r(Ya.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Yn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Ya.set(c,l),Yn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class g0 extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $l="\\[\\]\\.:\\/",v0=new RegExp("["+$l+"]","g"),Jl="[^"+$l+"]",x0="[^"+$l.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",Jl),M0=/(WCOD+)?/.source.replace("WCOD",x0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),E0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),T0=new RegExp("^"+y0+M0+S0+E0+"$"),b0=["material","materials","bones","map"];class w0{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){const t=T0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);b0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=w0;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ph=new Ye;class Vs{constructor(e,t,n=0,r=1/0){this.ray=new zs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(mh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)hl(e[r],this,n,t);return n.sort(mh),n}}function mh(i,e){return i.distance-e.distance}function hl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)hl(s[o],e,t,!0)}}function gh(i,e,t,n){const r=A0(n);switch(t){case Nf:return i*e;case Ll:return i*e/r.components*r.byteLength;case Il:return i*e/r.components*r.byteLength;case Of:return i*e*2/r.components*r.byteLength;case Dl:return i*e*2/r.components*r.byteLength;case Uf:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case Nl:return i*e*4/r.components*r.byteLength;case Do:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Pc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Nc:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jc:case Zc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A0(i){switch(i){case Ln:case Pf:return{byteLength:1,components:1};case ys:case Lf:case ks:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case ki:case Rl:case xn:return{byteLength:4,components:1};case If:case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function gd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function R0(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e_=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,A_=`struct PhysicalMaterial {
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
}`,R_=`
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,X_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
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
}`,Uv=`#if DEPTH_PACKING == 3200
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
}`,Ov=`#define DISTANCE
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
}`,Fv=`#define DISTANCE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Kv=`#define NORMAL
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
}`,jv=`#define NORMAL
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
}`,$v=`#define PHONG
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
}`,Jv=`#define PHONG
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
}`,Zv=`#define STANDARD
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
}`,Qv=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:I0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:U0,aomap_pars_fragment:O0,batching_pars_vertex:F0,batching_vertex:B0,begin_vertex:k0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:K0,color_pars_fragment:j0,color_pars_vertex:$0,color_vertex:J0,common:Z0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:e_,displacementmap_pars_vertex:t_,displacementmap_vertex:n_,emissivemap_fragment:i_,emissivemap_pars_fragment:r_,colorspace_fragment:s_,colorspace_pars_fragment:o_,envmap_fragment:a_,envmap_common_pars_fragment:c_,envmap_pars_fragment:l_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:M_,envmap_vertex:h_,fog_vertex:f_,fog_pars_vertex:d_,fog_fragment:p_,fog_pars_fragment:m_,gradientmap_pars_fragment:g_,lightmap_pars_fragment:__,lights_lambert_fragment:v_,lights_lambert_pars_fragment:x_,lights_pars_begin:y_,lights_toon_fragment:S_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:b_,lights_physical_fragment:w_,lights_physical_pars_fragment:A_,lights_fragment_begin:R_,lights_fragment_maps:C_,lights_fragment_end:P_,logdepthbuf_fragment:L_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:N_,map_fragment:U_,map_pars_fragment:O_,map_particle_fragment:F_,map_particle_pars_fragment:B_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:z_,morphinstance_vertex:H_,morphcolor_vertex:V_,morphnormal_vertex:G_,morphtarget_pars_vertex:W_,morphtarget_vertex:X_,normal_fragment_begin:q_,normal_fragment_maps:Y_,normal_pars_fragment:K_,normal_pars_vertex:j_,normal_vertex:$_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:ev,iridescence_pars_fragment:tv,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:rv,project_vertex:sv,dithering_fragment:ov,dithering_pars_fragment:av,roughnessmap_fragment:cv,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:hv,shadowmap_vertex:fv,shadowmask_pars_fragment:dv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:_v,specularmap_fragment:vv,specularmap_pars_fragment:xv,tonemapping_fragment:yv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:Ev,uv_pars_fragment:Tv,uv_pars_vertex:bv,uv_vertex:wv,worldpos_vertex:Av,background_vert:Rv,background_frag:Cv,backgroundCube_vert:Pv,backgroundCube_frag:Lv,cube_vert:Iv,cube_frag:Dv,depth_vert:Nv,depth_frag:Uv,distanceRGBA_vert:Ov,distanceRGBA_frag:Fv,equirect_vert:Bv,equirect_frag:kv,linedashed_vert:zv,linedashed_frag:Hv,meshbasic_vert:Vv,meshbasic_frag:Gv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:Kv,meshnormal_frag:jv,meshphong_vert:$v,meshphong_frag:Jv,meshphysical_vert:Zv,meshphysical_frag:Qv,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:rx,shadow_frag:sx,sprite_vert:ox,sprite_frag:ax},be={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Cn={basic:{uniforms:zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:zt([be.points,be.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:zt([be.common,be.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:zt([be.sprite,be.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:zt([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:zt([be.lights,be.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Cn.physical={uniforms:zt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const wo={r:0,b:0,g:0},bi=new In,cx=new Ye;function lx(i,e,t,n,r,s,o){const a=new Ge(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const E=p(y);E===null?m(a,c):E&&E.isColor&&(m(E,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){const E=p(v);E&&(E.isCubeTexture||E.mapping===na)?(h===void 0&&(h=new Qe(new Kt(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:br(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bi.copy(v.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(bi)),h.material.toneMapped=tt.getTransfer(E.colorSpace)!==ht,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Qe(new ei(2,2),new Jn({name:"BackgroundMaterial",uniforms:br(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=tt.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(wo,Xf(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:g,dispose:x}}function ux(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,D,k,X,P){let O=!1;const L=u(X,k,D);s!==L&&(s=L,l(s.object)),O=d(M,X,k,P),O&&p(M,X,k,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(M,D,k,X),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,k){const X=k.wireframe===!0;let P=n[M.id];P===void 0&&(P={},n[M.id]=P);let O=P[D.id];O===void 0&&(O={},P[D.id]=O);let L=O[X];return L===void 0&&(L=f(c()),O[X]=L),L}function f(M){const D=[],k=[],X=[];for(let P=0;P<t;P++)D[P]=0,k[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,D,k,X){const P=s.attributes,O=D.attributes;let L=0;const F=k.getAttributes();for(const N in F)if(F[N].location>=0){const ie=P[N];let B=O[N];if(B===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),ie===void 0||ie.attribute!==B||B&&ie.data!==B.data)return!0;L++}return s.attributesNum!==L||s.index!==X}function p(M,D,k,X){const P={},O=D.attributes;let L=0;const F=k.getAttributes();for(const N in F)if(F[N].location>=0){let ie=O[N];ie===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const B={};B.attribute=ie,ie&&ie.data&&(B.data=ie.data),P[N]=B,L++}s.attributes=P,s.attributesNum=L,s.index=X}function _(){const M=s.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function g(M){m(M,0)}function m(M,D){const k=s.newAttributes,X=s.enabledAttributes,P=s.attributeDivisors;k[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),P[M]!==D&&(i.vertexAttribDivisor(M,D),P[M]=D)}function x(){const M=s.newAttributes,D=s.enabledAttributes;for(let k=0,X=D.length;k<X;k++)D[k]!==M[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function y(M,D,k,X,P,O,L){L===!0?i.vertexAttribIPointer(M,D,k,P,O):i.vertexAttribPointer(M,D,k,X,P,O)}function v(M,D,k,X){_();const P=X.attributes,O=k.getAttributes(),L=D.defaultAttributeValues;for(const F in O){const N=O[F];if(N.location>=0){let W=P[F];if(W===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const ie=W.normalized,B=W.itemSize,te=e.get(W);if(te===void 0)continue;const ye=te.buffer,Ve=te.type,Fe=te.bytesPerElement,Z=Ve===i.INT||Ve===i.UNSIGNED_INT||W.gpuType===Rl;if(W.isInterleavedBufferAttribute){const ce=W.data,we=ce.stride,Ie=W.offset;if(ce.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)m(N.location+xe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<N.locationSize;xe++)g(N.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let xe=0;xe<N.locationSize;xe++)y(N.location+xe,B/N.locationSize,Ve,ie,we*Fe,(Ie+B/N.locationSize*xe)*Fe,Z)}else{if(W.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)m(N.location+ce,W.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ce=0;ce<N.locationSize;ce++)g(N.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ce=0;ce<N.locationSize;ce++)y(N.location+ce,B/N.locationSize,Ve,ie,B*Fe,B/N.locationSize*ce*Fe,Z)}}else if(L!==void 0){const ie=L[F];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(N.location,ie);break;case 3:i.vertexAttrib3fv(N.location,ie);break;case 4:i.vertexAttrib4fv(N.location,ie);break;default:i.vertexAttrib1fv(N.location,ie)}}}}x()}function E(){R();for(const M in n){const D=n[M];for(const k in D){const X=D[k];for(const P in X)h(X[P].object),delete X[P];delete D[k]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const k in D){const X=D[k];for(const P in X)h(X[P].object),delete X[P];delete D[k]}delete n[M.id]}function w(M){for(const D in n){const k=n[D];if(k[M.id]===void 0)continue;const X=k[M.id];for(const P in X)h(X[P].object),delete X[P];delete k[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function hx(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:b}}function dx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Pi,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):l();else{const x=s?0:n,y=x*4;let v=m.clippingState||null;c.value=v,v=h(p,f,y,d);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function px(i){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=Sr:a===Cc&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new eg(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const mr=4,_h=[.125,.215,.35,.446,.526,.582],Di=20,Ka=new jl,vh=new Ge;let ja=null,$a=0,Ja=0,Za=!1;const Li=(1+Math.sqrt(5))/2,fr=1/Li,xh=[new U(-Li,fr,0),new U(Li,fr,0),new U(-fr,0,Li),new U(fr,0,Li),new U(0,Li,-fr),new U(0,Li,fr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],mx=new U;class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=mx}=s;ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,$a,Ja),this._renderer.xr.enabled=Za,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ks,format:hn,colorSpace:Xt,depthBuffer:!1},r=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(s)),this._blurMaterial=_x(s,e,t)}return r}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,r,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vh),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Et({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Qe(new Kt,_);let m=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,m=!0):(_.color.copy(vh),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const E=this._cubeSize;Ao(r,v*E,y>2?E:0,E,E),u.setRenderTarget(r),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ao(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xh[(r-s-1)%xh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qe(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),_=s/p,g=isFinite(s)?1+Math.floor(h*_):Di;g>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);const m=[];let x=0;for(let w=0;w<Di;++w){const R=w/_,S=Math.exp(-R*R/2);m.push(S),w===0?x+=S:w<g&&(x+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const v=this._sizeLods[r],E=3*v*(r>y-mr?r-y+mr:0),b=4*(this._cubeSize-v);Ao(t,E,b,3*v,2*v),c.setRenderTarget(t),c.render(u,Ka)}}function gx(i){const e=[],t=[],n=[];let r=i;const s=i-mr+1+_h.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-mr?c=_h[o-i+mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,x=new Float32Array(_*p*d),y=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,R=b>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(S,_*p*b),y.set(f,g*p*b);const M=[b,b,b,b,b,b];v.set(M,m*p*b)}const E=new Rt;E.setAttribute("position",new Ut(x,_)),E.setAttribute("uv",new Ut(y,g)),E.setAttribute("faceIndex",new Ut(v,m)),e.push(E),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(i,e,t){const n=new zi(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _x(i,e,t){const n=new Float32Array(Di),r=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Sh(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Eh(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function vx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rc||c===Cc,h=c===Sr||c===Er;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new yh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yx(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],b=x[y+1],w=x[y+2];f.push(E,b,b,w,w,E)}}else if(p!==void 0){const x=p.array;_=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,b=y+1,w=y+2;f.push(E,b,b,w,w,E)}}else return;const g=new(zf(f)?Wf:Gf)(f,1);g.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Mx(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(f,d,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let m=0;for(let x=0;x<p;x++)m+=d[x]*_[x];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ex(i,e,t){const n=new WeakMap,r=new it;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*b*4*u),R=new Hf(w,E,b,u);R.type=xn,R.needsUpdate=!0;const S=v*4;for(let D=0;D<u;D++){const k=m[D],X=x[D],P=y[D],O=E*b*4*D;for(let L=0;L<k.count;L++){const F=L*S;p===!0&&(r.fromBufferAttribute(k,L),w[O+F+0]=r.x,w[O+F+1]=r.y,w[O+F+2]=r.z,w[O+F+3]=0),_===!0&&(r.fromBufferAttribute(X,L),w[O+F+4]=r.x,w[O+F+5]=r.y,w[O+F+6]=r.z,w[O+F+7]=0),g===!0&&(r.fromBufferAttribute(P,L),w[O+F+8]=r.x,w[O+F+9]=r.y,w[O+F+10]=r.z,w[O+F+11]=P.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new _e(E,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Tx(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const _d=new Ct,Th=new td(1,1),vd=new Hf,xd=new Fm,yd=new Yf,bh=[],wh=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bh[r];if(s===void 0&&(s=new Float32Array(r),bh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),Lt(t,n)}}function Px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Rh.set(n),i.uniformMatrix3fv(this.addr,!1,Rh),Lt(t,n)}}function Lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),Lt(t,n)}}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function zx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=kf,s=Th):s=_d,t.setTexture2D(e||s,r)}function Hx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xd,r)}function Vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||yd,r)}function Gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vd,r)}function Wx(i){switch(i){case 5126:return bx;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Xx(i,e){i.uniform1fv(this.addr,e)}function qx(i,e){const t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yx(i,e){const t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Kx(i,e){const t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function jx(i,e){const t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $x(i,e){const t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jx(i,e){const t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zx(i,e){i.uniform1iv(this.addr,e)}function Qx(i,e){i.uniform2iv(this.addr,e)}function ey(i,e){i.uniform3iv(this.addr,e)}function ty(i,e){i.uniform4iv(this.addr,e)}function ny(i,e){i.uniform1uiv(this.addr,e)}function iy(i,e){i.uniform2uiv(this.addr,e)}function ry(i,e){i.uniform3uiv(this.addr,e)}function sy(i,e){i.uniform4uiv(this.addr,e)}function oy(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_d,s[o])}function ay(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xd,s[o])}function cy(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yd,s[o])}function ly(i,e,t){const n=this.cache,r=e.length,s=oa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vd,s[o])}function uy(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Kx;case 35674:return jx;case 35675:return $x;case 35676:return Jx;case 5124:case 35670:return Zx;case 35667:case 35671:return Qx;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return ry;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return ly}}class hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}}class fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uy(t.type)}}class dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Ph(i,e){i.seq.push(e),i.map[e.id]=e}function py(i,e,t){const n=i.name,r=n.length;for(Qa.lastIndex=0;;){const s=Qa.exec(n),o=Qa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ph(t,l===void 0?new hy(a,i,e):new fy(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new dy(a),Ph(t,u)),t=u}}}class Fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);py(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const my=37297;let gy=0;function _y(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ih=new Ke;function vy(i){tt._getMatrix(Ih,tt.workingColorSpace,i);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Go:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_y(i.getShaderSource(e),a)}else return s}function xy(i,e){const t=vy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yy(i,e){let t;switch(e){case Kp:t="Linear";break;case jp:t="Reinhard";break;case $p:t="Cineon";break;case Jp:t="ACESFilmic";break;case Qp:t="AgX";break;case em:t="Neutral";break;case Zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new U;function My(){tt.getLuminanceCoefficients(Ro);const i=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Ey(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ty(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function cs(i){return i!==""}function Nh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const by=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(by,Ay)}const wy=new Map;function Ay(i,e){let t=je[e];if(t===void 0){const n=wy.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const Ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(i){return i.replace(Ry,Cy)}function Cy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Py(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ly(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Er&&(e="ENVMAP_MODE_REFRACTION"),e}function Dy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Af:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function Ny(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Uy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Py(t),l=Ly(t),h=Iy(t),u=Dy(t),f=Ny(t),d=Sy(t),p=Ey(s),_=r.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cs).join(`
`),m.length>0&&(m+=`
`)):(g=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?je.tonemapping_pars_fragment:"",t.toneMapping!==mi?yy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,xy("linearToOutputTexel",t.outputColorSpace),My(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),o=fl(o),o=Nh(o,t),o=Uh(o,t),a=fl(a),a=Nh(a,t),a=Uh(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=Lh(r,r.VERTEX_SHADER,y),b=Lh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,E),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(E)||"",P=r.getShaderInfoLog(b)||"",O=k.trim(),L=X.trim(),F=P.trim();let N=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,E,b);else{const ie=Dh(r,E,"vertex"),B=Dh(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ie+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||F==="")&&(W=!1);W&&(D.diagnostics={runnable:N,programLog:O,vertexShader:{log:L,prefix:g},fragmentShader:{log:F,prefix:m}})}r.deleteShader(E),r.deleteShader(b),R=new Fo(r,_),S=Ty(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,my)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Oy=0;class Fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new By(e),t.set(e,n)),n}}class By{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}}function ky(i,e,t,n,r,s,o){const a=new Fl,c=new Fy,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,D,k,X){const P=k.fog,O=X.geometry,L=S.isMeshStandardMaterial?k.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||L),N=F&&F.mapping===na?F.image.height:null,W=p[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,B=ie!==void 0?ie.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let ye,Ve,Fe,Z;if(W){const rt=Cn[W];ye=rt.vertexShader,Ve=rt.fragmentShader}else ye=S.vertexShader,Ve=S.fragmentShader,c.update(S),Fe=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);const ce=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ie=X.isInstancedMesh===!0,xe=X.isBatchedMesh===!0,ze=!!S.map,fe=!!S.matcap,I=!!F,Y=!!S.aoMap,q=!!S.lightMap,ne=!!S.bumpMap,$=!!S.normalMap,se=!!S.displacementMap,oe=!!S.emissiveMap,de=!!S.metalnessMap,Oe=!!S.roughnessMap,Te=S.anisotropy>0,C=S.clearcoat>0,T=S.dispersion>0,G=S.iridescence>0,J=S.sheen>0,ue=S.transmission>0,Q=Te&&!!S.anisotropyMap,le=C&&!!S.clearcoatMap,ee=C&&!!S.clearcoatNormalMap,he=C&&!!S.clearcoatRoughnessMap,Se=G&&!!S.iridescenceMap,re=G&&!!S.iridescenceThicknessMap,ve=J&&!!S.sheenColorMap,Ce=J&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ee=!!S.specularColorMap,Xe=!!S.specularIntensityMap,z=ue&&!!S.transmissionMap,pe=ue&&!!S.thicknessMap,Me=!!S.gradientMap,Pe=!!S.alphaMap,me=S.alphaTest>0,ae=!!S.alphaHash,Ne=!!S.extensions;let qe=mi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(qe=i.toneMapping);const pt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:ye,fragmentShader:Ve,defines:S.defines,customVertexShaderID:Fe,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:xe,batchingColor:xe&&X._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&X.instanceColor!==null,instancingMorph:Ie&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Xt,alphaToCoverage:!!S.alphaToCoverage,map:ze,matcap:fe,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:N,aoMap:Y,lightMap:q,bumpMap:ne,normalMap:$,displacementMap:f&&se,emissiveMap:oe,normalMapObjectSpace:$&&S.normalMapType===om,normalMapTangentSpace:$&&S.normalMapType===Bf,metalnessMap:de,roughnessMap:Oe,anisotropy:Te,anisotropyMap:Q,clearcoat:C,clearcoatMap:le,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:T,iridescence:G,iridescenceMap:Se,iridescenceThicknessMap:re,sheen:J,sheenColorMap:ve,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:Ee,specularIntensityMap:Xe,transmission:ue,transmissionMap:z,thicknessMap:pe,gradientMap:Me,opaque:S.transparent===!1&&S.blending===gr&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:me,alphaHash:ae,combine:S.combine,mapUv:ze&&_(S.map.channel),aoMapUv:Y&&_(S.aoMap.channel),lightMapUv:q&&_(S.lightMap.channel),bumpMapUv:ne&&_(S.bumpMap.channel),normalMapUv:$&&_(S.normalMap.channel),displacementMapUv:se&&_(S.displacementMap.channel),emissiveMapUv:oe&&_(S.emissiveMap.channel),metalnessMapUv:de&&_(S.metalnessMap.channel),roughnessMapUv:Oe&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:De&&_(S.specularMap.channel),specularColorMapUv:Ee&&_(S.specularColorMap.channel),specularIntensityMapUv:Xe&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:pe&&_(S.thicknessMap.channel),alphaMapUv:Pe&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(ze||Pe),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=p[S.type];let D;if(M){const k=Cn[M];D=$m.clone(k.uniforms)}else D=S.uniforms;return D}function E(S,M){let D;for(let k=0,X=h.length;k<X;k++){const P=h[k];if(P.cacheKey===M){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Uy(i,M,S,s),h.push(D)),D}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:R}}function zy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Hy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,d,p,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function a(u,f,d,p,_,g){const m=o(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function c(u,f,d,p,_,g){const m=o(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||Hy),n.length>1&&n.sort(f||Bh),r.length>1&&r.sort(f||Bh)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Vy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new kh,i.set(n,[o])):r>=s.length?(o=new kh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Wy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Xy=0;function qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yy(i){const e=new Gy,t=Wy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,s=new Ye,o=new Ye;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,x=0,y=0,v=0,E=0,b=0,w=0;l.sort(qy);for(let S=0,M=l.length;S<M;S++){const D=l[S],k=D.color,X=D.intensity,P=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*X,u+=k.g*X,f+=k.b*X;else if(D.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(D.sh.coefficients[L],X);w++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=L,d++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(k).multiplyScalar(X),L.distance=P,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,n.spot[_]=L;const F=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,F.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=F.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=O,v++}_++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(k).multiplyScalar(X),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=L,g++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){const F=D.shadow,N=t.get(D);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,n.pointShadow[p]=N,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=L,p++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(X),L.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[m]=L,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=w,n.version=Xy++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const y=l[m];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function zh(i){const e=new Yy(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ky(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zh(i),e.set(r,[a])):s>=o.length?(a=new zh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
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
}`;function Jy(i,e,t){let n=new zl;const r=new _e,s=new _e,o=new it,a=new Yg({depthPacking:sm}),c=new Kg,l={},h=t.maxTextureSize,u={[$n]:Gt,[Gt]:$n,[Yt]:Yt},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:jy,fragmentShader:$y}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Rt;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qe(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let m=this.type;this.render=function(b,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(pi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=m!==Wn&&this.type===Wn,P=m===Wn&&this.type!==Wn;for(let O=0,L=b.length;O<L;O++){const F=b[O],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||X===!0||P===!0){const B=this.type!==Wn?{minFilter:Wt,magFilter:Wt}:{};N.map!==null&&N.map.dispose(),N.map=new zi(r.x,r.y,B),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const ie=N.getViewportCount();for(let B=0;B<ie;B++){const te=N.getViewport(B);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),k.viewport(o),N.updateMatrices(F,B),n=N.getFrustum(),v(w,R,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===Wn&&x(N,R),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,D)};function x(b,w){const R=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,R,d,_,null)}function y(b,w,R,S){let M=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=M.uuid,X=w.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let O=P[X];O===void 0&&(O=M.clone(),P[X]=O,w.addEventListener("dispose",E)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Wn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=R}return M}function v(b,w,R,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const X=e.update(b),P=b.material;if(Array.isArray(P)){const O=X.groups;for(let L=0,F=O.length;L<F;L++){const N=O[L],W=P[N.materialIndex];if(W&&W.visible){const ie=y(b,W,S,M);b.onBeforeShadow(i,b,w,R,X,ie,N),i.renderBufferDirect(R,null,X,ie,b,N),b.onAfterShadow(i,b,w,R,X,ie,N)}}}else if(P.visible){const O=y(b,P,S,M);b.onBeforeShadow(i,b,w,R,X,O,null),i.renderBufferDirect(R,null,X,O,b,null),b.onAfterShadow(i,b,w,R,X,O,null)}}const k=b.children;for(let X=0,P=k.length;X<P;X++)v(k[X],w,R,S,M)}function E(b){b.target.removeEventListener("dispose",E);for(const R in l){const S=l[R],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Zy={[Mc]:Sc,[Ec]:wc,[Tc]:Ac,[Mr]:bc,[Sc]:Mc,[wc]:Ec,[Ac]:Tc,[bc]:Mr};function Qy(i,e){function t(){let z=!1;const pe=new it;let Me=null;const Pe=new it(0,0,0,0);return{setMask:function(me){Me!==me&&!z&&(i.colorMask(me,me,me,me),Me=me)},setLocked:function(me){z=me},setClear:function(me,ae,Ne,qe,pt){pt===!0&&(me*=qe,ae*=qe,Ne*=qe),pe.set(me,ae,Ne,qe),Pe.equals(pe)===!1&&(i.clearColor(me,ae,Ne,qe),Pe.copy(pe))},reset:function(){z=!1,Me=null,Pe.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,Me=null,Pe=null,me=null;return{setReversed:function(ae){if(pe!==ae){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;const qe=me;me=null,this.setClear(qe)}},getReversed:function(){return pe},setTest:function(ae){ae?ce(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ae){Me!==ae&&!z&&(i.depthMask(ae),Me=ae)},setFunc:function(ae){if(pe&&(ae=Zy[ae]),Pe!==ae){switch(ae){case Mc:i.depthFunc(i.NEVER);break;case Sc:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ae}},setLocked:function(ae){z=ae},setClear:function(ae){me!==ae&&(pe&&(ae=1-ae),i.clearDepth(ae),me=ae)},reset:function(){z=!1,Me=null,Pe=null,me=null,pe=!1}}}function r(){let z=!1,pe=null,Me=null,Pe=null,me=null,ae=null,Ne=null,qe=null,pt=null;return{setTest:function(rt){z||(rt?ce(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!z&&(i.stencilMask(rt),pe=rt)},setFunc:function(rt,Fn,bn){(Me!==rt||Pe!==Fn||me!==bn)&&(i.stencilFunc(rt,Fn,bn),Me=rt,Pe=Fn,me=bn)},setOp:function(rt,Fn,bn){(ae!==rt||Ne!==Fn||qe!==bn)&&(i.stencilOp(rt,Fn,bn),ae=rt,Ne=Fn,qe=bn)},setLocked:function(rt){z=rt},setClear:function(rt){pt!==rt&&(i.clearStencil(rt),pt=rt)},reset:function(){z=!1,pe=null,Me=null,Pe=null,me=null,ae=null,Ne=null,qe=null,pt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,b=null,w=new Ge(0,0,0),R=0,S=!1,M=null,D=null,k=null,X=null,P=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(N)[1]),L=F>=1):N.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),L=F>=2);let W=null,ie={};const B=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ye=new it().fromArray(B),Ve=new it().fromArray(te);function Fe(z,pe,Me,Pe){const me=new Uint8Array(4),ae=i.createTexture();i.bindTexture(z,ae),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Me;Ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(pe+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ae}const Z={};Z[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Mr),ne(!1),$(mu),ce(i.CULL_FACE),Y(pi);function ce(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function we(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ie(z,pe){return u[z]!==pe?(i.bindFramebuffer(z,pe),u[z]=pe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function xe(z,pe){let Me=d,Pe=!1;if(z){Me=f.get(pe),Me===void 0&&(Me=[],f.set(pe,Me));const me=z.textures;if(Me.length!==me.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ne=me.length;ae<Ne;ae++)Me[ae]=i.COLOR_ATTACHMENT0+ae;Me.length=me.length,Pe=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Me)}function ze(z){return p!==z?(i.useProgram(z),p=z,!0):!1}const fe={[Ii]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};fe[Lp]=i.MIN,fe[Ip]=i.MAX;const I={[Dp]:i.ZERO,[Np]:i.ONE,[Up]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[Hp]:i.SRC_ALPHA_SATURATE,[kp]:i.DST_COLOR,[Fp]:i.DST_ALPHA,[Op]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Bp]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Wp]:i.CONSTANT_ALPHA,[Xp]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(z,pe,Me,Pe,me,ae,Ne,qe,pt,rt){if(z===pi){_===!0&&(we(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),z!==Rp){if(z!==g||rt!==S){if((m!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,v=Ii),rt)switch(z){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gu:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _u:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,y=null,E=null,b=null,w.set(0,0,0),R=0,g=z,S=rt}return}me=me||pe,ae=ae||Me,Ne=Ne||Pe,(pe!==m||me!==v)&&(i.blendEquationSeparate(fe[pe],fe[me]),m=pe,v=me),(Me!==x||Pe!==y||ae!==E||Ne!==b)&&(i.blendFuncSeparate(I[Me],I[Pe],I[ae],I[Ne]),x=Me,y=Pe,E=ae,b=Ne),(qe.equals(w)===!1||pt!==R)&&(i.blendColor(qe.r,qe.g,qe.b,pt),w.copy(qe),R=pt),g=z,S=!1}function q(z,pe){z.side===Yt?we(i.CULL_FACE):ce(i.CULL_FACE);let Me=z.side===Gt;pe&&(Me=!Me),ne(Me),z.blending===gr&&z.transparent===!1?Y(pi):Y(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Pe=z.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function $(z){z!==wp?(ce(i.CULL_FACE),z!==D&&(z===mu?i.cullFace(i.BACK):z===Ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),D=z}function se(z){z!==k&&(L&&i.lineWidth(z),k=z)}function oe(z,pe,Me){z?(ce(i.POLYGON_OFFSET_FILL),(X!==pe||P!==Me)&&(i.polygonOffset(pe,Me),X=pe,P=Me)):we(i.POLYGON_OFFSET_FILL)}function de(z){z?ce(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Oe(z){z===void 0&&(z=i.TEXTURE0+O-1),W!==z&&(i.activeTexture(z),W=z)}function Te(z,pe,Me){Me===void 0&&(W===null?Me=i.TEXTURE0+O-1:Me=W);let Pe=ie[Me];Pe===void 0&&(Pe={type:void 0,texture:void 0},ie[Me]=Pe),(Pe.type!==z||Pe.texture!==pe)&&(W!==Me&&(i.activeTexture(Me),W=Me),i.bindTexture(z,pe||Z[z]),Pe.type=z,Pe.texture=pe)}function C(){const z=ie[W];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(z){ye.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ye.copy(z))}function Ce(z){Ve.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ve.copy(z))}function De(z,pe){let Me=l.get(pe);Me===void 0&&(Me=new WeakMap,l.set(pe,Me));let Pe=Me.get(z);Pe===void 0&&(Pe=i.getUniformBlockIndex(pe,z.name),Me.set(z,Pe))}function Ee(z,pe){const Pe=l.get(pe).get(z);c.get(pe)!==Pe&&(i.uniformBlockBinding(pe,Pe,z.__bindingPointIndex),c.set(pe,Pe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,ie={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,b=null,w=new Ge(0,0,0),R=0,S=!1,M=null,D=null,k=null,X=null,P=null,ye.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:we,bindFramebuffer:Ie,drawBuffers:xe,useProgram:ze,setBlending:Y,setMaterial:q,setFlipSided:ne,setCullFace:$,setLineWidth:se,setPolygonOffset:oe,setScissorTest:de,activeTexture:Oe,bindTexture:Te,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:Se,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:Ee,texStorage2D:ee,texStorage3D:he,texSubImage2D:J,texSubImage3D:ue,compressedTexSubImage2D:Q,compressedTexSubImage3D:le,scissor:ve,viewport:Ce,reset:Xe}}function eM(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return d?new OffscreenCanvas(C,T):ws("canvas")}function _(C,T,G){let J=1;const ue=Te(C);if((ue.width>G||ue.height>G)&&(J=G/Math.max(ue.width,ue.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*ue.width),le=Math.floor(J*ue.height);u===void 0&&(u=p(Q,le));const ee=T?p(Q,le):u;return ee.width=Q,ee.height=le,ee.getContext("2d").drawImage(C,0,0,Q,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Q+"x"+le+")."),ee}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,T,G,J,ue=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=T;if(T===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),T===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),T===i.RGBA){const le=ue?Go:tt.getTransfer(J);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=le===ht?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,T){let G;return C?T===null||T===ki||T===Ms?G=i.DEPTH24_STENCIL8:T===xn?G=i.DEPTH32F_STENCIL8:T===ys&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ki||T===Ms?G=i.DEPTH_COMPONENT24:T===xn?G=i.DEPTH_COMPONENT32F:T===ys&&(G=i.DEPTH_COMPONENT16),G}function E(C,T){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Qt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){const T=C.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&h.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),M(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const G=C.source,J=f.get(G);if(J){const ue=J[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(C),Object.keys(J).length===0&&f.delete(G)}n.remove(C)}function S(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const G=C.source,J=f.get(G);delete J[T.__cacheKey],o.memory.textures--}function M(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ue=0;ue<T.__webglFramebuffer[J].length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[J][ue]);else i.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)i.deleteFramebuffer(T.__webglFramebuffer[J]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,ue=G.length;J<ue;J++){const Q=n.get(G[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(C)}let D=0;function k(){D=0}function X(){const C=D;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function P(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function O(C,T){const G=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,C,T);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function L(C,T){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Z(G,C,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function F(C,T){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Z(G,C,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function N(C,T){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ce(G,C,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const W={[Bi]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},ie={[Wt]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},B={[am]:i.NEVER,[dm]:i.ALWAYS,[cm]:i.LESS,[kf]:i.LEQUAL,[lm]:i.EQUAL,[fm]:i.GEQUAL,[um]:i.GREATER,[hm]:i.NOTEQUAL};function te(C,T){if(T.type===xn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qt||T.magFilter===Io||T.magFilter===os||T.magFilter===Xn||T.minFilter===Qt||T.minFilter===Io||T.minFilter===os||T.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ie[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wt||T.minFilter!==os&&T.minFilter!==Xn||T.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ye(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",b));const J=T.source;let ue=f.get(J);ue===void 0&&(ue={},f.set(J,ue));const Q=P(T);if(Q!==C.__cacheKey){ue[Q]===void 0&&(ue[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[Q].usedTimes++;const le=ue[C.__cacheKey];le!==void 0&&(ue[C.__cacheKey].usedTimes--,le.usedTimes===0&&S(T)),C.__cacheKey=Q,C.__webglTexture=ue[Q].texture}return G}function Ve(C,T,G){return Math.floor(Math.floor(C/G)/T)}function Fe(C,T,G,J){const Q=C.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,G,J,T.data);else{Q.sort((re,ve)=>re.start-ve.start);let le=0;for(let re=1;re<Q.length;re++){const ve=Q[le],Ce=Q[re],De=ve.start+ve.count,Ee=Ve(Ce.start,T.width,4),Xe=Ve(ve.start,T.width,4);Ce.start<=De+1&&Ee===Xe&&Ve(Ce.start+Ce.count-1,T.width,4)===Ee?ve.count=Math.max(ve.count,Ce.start+Ce.count-ve.start):(++le,Q[le]=Ce)}Q.length=le+1;const ee=i.getParameter(i.UNPACK_ROW_LENGTH),he=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let re=0,ve=Q.length;re<ve;re++){const Ce=Q[re],De=Math.floor(Ce.start/4),Ee=Math.ceil(Ce.count/4),Xe=De%T.width,z=Math.floor(De/T.width),pe=Ee,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Xe,z,pe,Me,G,J,T.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,he),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Z(C,T,G){let J=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=i.TEXTURE_3D);const ue=ye(C,T),Q=T.source;t.bindTexture(J,C.__webglTexture,i.TEXTURE0+G);const le=n.get(Q);if(Q.version!==le.__version||ue===!0){t.activeTexture(i.TEXTURE0+G);const ee=tt.getPrimaries(tt.workingColorSpace),he=T.colorSpace===li?null:tt.getPrimaries(T.colorSpace),Se=T.colorSpace===li||ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=_(T.image,!1,r.maxTextureSize);re=Oe(T,re);const ve=s.convert(T.format,T.colorSpace),Ce=s.convert(T.type);let De=y(T.internalFormat,ve,Ce,T.colorSpace,T.isVideoTexture);te(J,T);let Ee;const Xe=T.mipmaps,z=T.isVideoTexture!==!0,pe=le.__version===void 0||ue===!0,Me=Q.dataReady,Pe=E(T,re);if(T.isDepthTexture)De=v(T.format===Es,T.type),pe&&(z?t.texStorage2D(i.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,ve,Ce,null));else if(T.isDataTexture)if(Xe.length>0){z&&pe&&t.texStorage2D(i.TEXTURE_2D,Pe,De,Xe[0].width,Xe[0].height);for(let me=0,ae=Xe.length;me<ae;me++)Ee=Xe[me],z?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,ve,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,me,De,Ee.width,Ee.height,0,ve,Ce,Ee.data);T.generateMipmaps=!1}else z?(pe&&t.texStorage2D(i.TEXTURE_2D,Pe,De,re.width,re.height),Me&&Fe(T,re,ve,Ce)):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,ve,Ce,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,De,Xe[0].width,Xe[0].height,re.depth);for(let me=0,ae=Xe.length;me<ae;me++)if(Ee=Xe[me],T.format!==hn)if(ve!==null)if(z){if(Me)if(T.layerUpdates.size>0){const Ne=gh(Ee.width,Ee.height,T.format,T.type);for(const qe of T.layerUpdates){const pt=Ee.data.subarray(qe*Ne/Ee.data.BYTES_PER_ELEMENT,(qe+1)*Ne/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,qe,Ee.width,Ee.height,1,ve,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,re.depth,ve,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,De,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,re.depth,ve,Ce,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,De,Ee.width,Ee.height,re.depth,0,ve,Ce,Ee.data)}else{z&&pe&&t.texStorage2D(i.TEXTURE_2D,Pe,De,Xe[0].width,Xe[0].height);for(let me=0,ae=Xe.length;me<ae;me++)Ee=Xe[me],T.format!==hn?ve!==null?z?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,me,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,ve,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,me,De,Ee.width,Ee.height,0,ve,Ce,Ee.data)}else if(T.isDataArrayTexture)if(z){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,De,re.width,re.height,re.depth),Me)if(T.layerUpdates.size>0){const me=gh(re.width,re.height,T.format,T.type);for(const ae of T.layerUpdates){const Ne=re.data.subarray(ae*me/re.data.BYTES_PER_ELEMENT,(ae+1)*me/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,re.width,re.height,1,ve,Ce,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Ce,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ve,Ce,re.data);else if(T.isData3DTexture)z?(pe&&t.texStorage3D(i.TEXTURE_3D,Pe,De,re.width,re.height,re.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Ce,re.data)):t.texImage3D(i.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ve,Ce,re.data);else if(T.isFramebufferTexture){if(pe)if(z)t.texStorage2D(i.TEXTURE_2D,Pe,De,re.width,re.height);else{let me=re.width,ae=re.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,De,me,ae,0,ve,Ce,null),me>>=1,ae>>=1}}else if(Xe.length>0){if(z&&pe){const me=Te(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Pe,De,me.width,me.height)}for(let me=0,ae=Xe.length;me<ae;me++)Ee=Xe[me],z?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ve,Ce,Ee):t.texImage2D(i.TEXTURE_2D,me,De,ve,Ce,Ee);T.generateMipmaps=!1}else if(z){if(pe){const me=Te(re);t.texStorage2D(i.TEXTURE_2D,Pe,De,me.width,me.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ce,re)}else t.texImage2D(i.TEXTURE_2D,0,De,ve,Ce,re);g(T)&&m(J),le.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ce(C,T,G){if(T.image.length!==6)return;const J=ye(C,T),ue=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const Q=n.get(ue);if(ue.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+G);const le=tt.getPrimaries(tt.workingColorSpace),ee=T.colorSpace===li?null:tt.getPrimaries(T.colorSpace),he=T.colorSpace===li||le===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!Se&&!re?ve[ae]=_(T.image[ae],!0,r.maxCubemapSize):ve[ae]=re?T.image[ae].image:T.image[ae],ve[ae]=Oe(T,ve[ae]);const Ce=ve[0],De=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),Xe=y(T.internalFormat,De,Ee,T.colorSpace),z=T.isVideoTexture!==!0,pe=Q.__version===void 0||J===!0,Me=ue.dataReady;let Pe=E(T,Ce);te(i.TEXTURE_CUBE_MAP,T);let me;if(Se){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Xe,Ce.width,Ce.height);for(let ae=0;ae<6;ae++){me=ve[ae].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const qe=me[Ne];T.format!==hn?De!==null?z?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,qe.width,qe.height,De,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Xe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,qe.width,qe.height,De,Ee,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Xe,qe.width,qe.height,0,De,Ee,qe.data)}}}else{if(me=T.mipmaps,z&&pe){me.length>0&&Pe++;const ae=Te(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(re){z?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,De,Ee,ve[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,ve[ae].width,ve[ae].height,0,De,Ee,ve[ae].data);for(let Ne=0;Ne<me.length;Ne++){const pt=me[Ne].image[ae].image;z?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,pt.width,pt.height,De,Ee,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Xe,pt.width,pt.height,0,De,Ee,pt.data)}}else{z?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ee,ve[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,De,Ee,ve[ae]);for(let Ne=0;Ne<me.length;Ne++){const qe=me[Ne];z?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,De,Ee,qe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Xe,De,Ee,qe.image[ae])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),Q.__version=ue.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function we(C,T,G,J,ue,Q){const le=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),he=y(G.internalFormat,le,ee,G.colorSpace),Se=n.get(T),re=n.get(G);if(re.__renderTarget=T,!Se.__hasExternalTextures){const ve=Math.max(1,T.width>>Q),Ce=Math.max(1,T.height>>Q);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,Q,he,ve,Ce,T.depth,0,le,ee,null):t.texImage2D(ue,Q,he,ve,Ce,0,le,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),oe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ue,re.__webglTexture,0,se(T)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ue,re.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(C,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){const J=T.depthTexture,ue=J&&J.isDepthTexture?J.type:null,Q=v(T.stencilBuffer,ue),le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=se(T);oe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,C)}else{const J=T.textures;for(let ue=0;ue<J.length;ue++){const Q=J[ue],le=s.convert(Q.format,Q.colorSpace),ee=s.convert(Q.type),he=y(Q.internalFormat,le,ee,Q.colorSpace),Se=se(T);G&&oe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,T.width,T.height):oe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,he,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,he,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ue=J.__webglTexture,Q=se(T);if(T.depthTexture.format===Ss)oe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Es)oe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function ze(C){const T=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",ue)};J.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=J}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?xe(T.__webglFramebuffer[0],C):xe(T.__webglFramebuffer,C)}else if(G){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=i.createRenderbuffer(),Ie(T.__webglDepthbuffer[J],C,!1);else{const ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Q)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ie(T.__webglDepthbuffer,C,!1);else{const ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(C,T,G){const J=n.get(C);T!==void 0&&we(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ze(C)}function I(C){const T=C.texture,G=n.get(C),J=n.get(T);C.addEventListener("dispose",w);const ue=C.textures,Q=C.isWebGLCubeRenderTarget===!0,le=ue.length>1;if(le||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=T.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let he=0;he<T.mipmaps.length;he++)G.__webglFramebuffer[ee][he]=i.createFramebuffer()}else G.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)G.__webglFramebuffer[ee]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(le)for(let ee=0,he=ue.length;ee<he;ee++){const Se=n.get(ue[ee]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<ue.length;ee++){const he=ue[ee];G.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const Se=s.convert(he.format,he.colorSpace),re=s.convert(he.type),ve=y(he.internalFormat,Se,re,he.colorSpace,C.isXRRenderTarget===!0),Ce=se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ve,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),te(i.TEXTURE_CUBE_MAP,T);for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)we(G.__webglFramebuffer[ee][he],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else we(G.__webglFramebuffer[ee],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ee=0,he=ue.length;ee<he;ee++){const Se=ue[ee],re=n.get(Se);let ve=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,re.__webglTexture),te(ve,Se),we(G.__webglFramebuffer,C,Se,i.COLOR_ATTACHMENT0+ee,ve,0),g(Se)&&m(ve)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),te(ee,T),T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)we(G.__webglFramebuffer[he],C,T,i.COLOR_ATTACHMENT0,ee,he);else we(G.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,ee,0);g(T)&&m(ee),t.unbindTexture()}C.depthBuffer&&ze(C)}function Y(C){const T=C.textures;for(let G=0,J=T.length;G<J;G++){const ue=T[G];if(g(ue)){const Q=x(C),le=n.get(ue).__webglTexture;t.bindTexture(Q,le),m(Q),t.unbindTexture()}}}const q=[],ne=[];function $(C){if(C.samples>0){if(oe(C)===!1){const T=C.textures,G=C.width,J=C.height;let ue=i.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(C),ee=T.length>1;if(ee)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const he=C.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const re=n.get(T[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,ue,i.NEAREST),c===!0&&(q.length=0,ne.length=0,q.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(q.push(Q),ne.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const re=n.get(T[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function se(C){return Math.min(r.maxSamples,C.samples)}function oe(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function de(C){const T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Oe(C,T){const G=C.colorSpace,J=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Xt&&G!==li&&(tt.getTransfer(G)===ht?(J!==hn||ue!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=N,this.rebindTextures=fe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=oe}function tM(i,e){function t(n,r=li){let s;const o=tt.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===If)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pf)return i.BYTE;if(n===Lf)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===Nf)return i.ALPHA;if(n===Uf)return i.RGB;if(n===hn)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===Of)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Do||n===No||n===Uo||n===Oo)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Do)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Lc||n===Ic||n===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nc||n===Uc||n===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nc||n===Uc)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===jc||n===$c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===Zc||n===Qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jc)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sM extends Or{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new rM,m={},x=t.getContextAttributes();let y=null,v=null;const E=[],b=[],w=new _e;let R=null;const S=new Ht;S.viewport=new it;const M=new Ht;M.viewport=new it;const D=[S,M],k=new g0;let X=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Oa,E[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Oa,E[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=E[Z];return ce===void 0&&(ce=new Oa,E[Z]=ce),ce.getHandSpace()};function O(Z){const ce=b.indexOf(Z.inputSource);if(ce===-1)return;const we=E[ce];we!==void 0&&(we.update(Z.inputSource,Z.frame,l||o),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<E.length;Z++){const ce=b[Z];ce!==null&&(b[Z]=null,E[Z].disconnect(ce))}X=null,P=null,g.reset();for(const Z in m)delete m[Z];e.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",L),r.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=x.stencil?Es:Ss,Ie=x.stencil?Ms:ki);const ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new zi(f.textureWidth,f.textureHeight,{format:hn,type:Ln,depthTexture:new td(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new zi(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Z){for(let ce=0;ce<Z.removed.length;ce++){const we=Z.removed[ce],Ie=b.indexOf(we);Ie>=0&&(b[Ie]=null,E[Ie].disconnect(we))}for(let ce=0;ce<Z.added.length;ce++){const we=Z.added[ce];let Ie=b.indexOf(we);if(Ie===-1){for(let ze=0;ze<E.length;ze++)if(ze>=b.length){b.push(we),Ie=ze;break}else if(b[ze]===null){b[ze]=we,Ie=ze;break}if(Ie===-1)break}const xe=E[Ie];xe&&xe.connect(we)}}const N=new U,W=new U;function ie(Z,ce,we){N.setFromMatrixPosition(ce.matrixWorld),W.setFromMatrixPosition(we.matrixWorld);const Ie=N.distanceTo(W),xe=ce.projectionMatrix.elements,ze=we.projectionMatrix.elements,fe=xe[14]/(xe[10]-1),I=xe[14]/(xe[10]+1),Y=(xe[9]+1)/xe[5],q=(xe[9]-1)/xe[5],ne=(xe[8]-1)/xe[0],$=(ze[8]+1)/ze[0],se=fe*ne,oe=fe*$,de=Ie/(-ne+$),Oe=de*-ne;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Oe),Z.translateZ(de),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Te=fe+de,C=I+de,T=se-Oe,G=oe+(Ie-Oe),J=Y*I/C*Te,ue=q*I/C*Te;Z.projectionMatrix.makePerspective(T,G,J,ue,Te,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function B(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ce=Z.near,we=Z.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(we=g.depthFar)),k.near=M.near=S.near=ce,k.far=M.far=S.far=we,(X!==k.near||P!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,P=k.far),k.layers.mask=Z.layers.mask|6,S.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;const Ie=Z.parent,xe=k.cameras;B(k,Ie);for(let ze=0;ze<xe.length;ze++)B(xe[ze],Ie);xe.length===2?ie(k,S,M):k.projectionMatrix.copy(S.projectionMatrix),te(Z,k,Ie)};function te(Z,ce,we){we===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Z){return m[Z]};let ye=null;function Ve(Z,ce){if(h=ce.getViewerPose(l||o),p=ce,h!==null){const we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ie=!1;we.length!==k.cameras.length&&(k.cameras.length=0,Ie=!0);for(let I=0;I<we.length;I++){const Y=we[I];let q=null;if(d!==null)q=d.getViewport(Y);else{const $=u.getViewSubImage(f,Y);q=$.viewport,I===0&&(e.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(v))}let ne=D[I];ne===void 0&&(ne=new Ht,ne.layers.enable(I),ne.viewport=new it,D[I]=ne),ne.matrix.fromArray(Y.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Y.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(q.x,q.y,q.width,q.height),I===0&&(k.matrix.copy(ne.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ie===!0&&k.cameras.push(ne)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(we[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<we.length;I++){const Y=we[I].camera;if(Y){let q=m[Y];q||(q=new nd,m[Y]=q);const ne=u.getCameraImage(Y);q.sourceTexture=ne}}}}for(let we=0;we<E.length;we++){const Ie=b[we],xe=E[we];Ie!==null&&xe!==void 0&&xe.update(Ie,ce,l||o)}ye&&ye(Z,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}const Fe=new gd;Fe.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}}const wi=new In,oM=new Ye;function aM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Xf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,x,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(wi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cM(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=r[x.id];v===void 0&&(p(x),v=h(x),r[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const b=e.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function h(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),E=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],v=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,w=v.length;b<w;b++){const R=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,M=R.length;S<M;S++){const D=R[S];if(d(D,b,S,E)===!0){const k=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let O=0;O<X.length;O++){const L=X[O],F=_(L);typeof L=="number"||typeof L=="boolean"?(D.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+P,D.__data)):L.isMatrix3?(D.__data[0]=L.elements[0],D.__data[1]=L.elements[1],D.__data[2]=L.elements[2],D.__data[3]=0,D.__data[4]=L.elements[3],D.__data[5]=L.elements[4],D.__data[6]=L.elements[5],D.__data[7]=0,D.__data[8]=L.elements[6],D.__data[9]=L.elements[7],D.__data[10]=L.elements[8],D.__data[11]=0):(L.toArray(D.__data,P),P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,v,E){const b=x.value,w=y+"_"+v;if(E[w]===void 0)return typeof b=="number"||typeof b=="boolean"?E[w]=b:E[w]=b.clone(),!0;{const R=E[w];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[w]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function p(x){const y=x.uniforms;let v=0;const E=16;for(let w=0,R=y.length;w<R;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,D=S.length;M<D;M++){const k=S[M],X=Array.isArray(k.value)?k.value:[k.value];for(let P=0,O=X.length;P<O;P++){const L=X[P],F=_(L),N=v%E,W=N%F.boundary,ie=N+W;v+=W,ie!==0&&E-ie<F.storage&&(v+=E-ie),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=F.storage}}}const b=v%E;return b>0&&(v+=E-b),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class lM{constructor(e={}){const{canvas:t=Pm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=vt;let b=0,w=0,R=null,S=-1,M=null;const D=new it,k=new it;let X=null;const P=new Ge(0);let O=0,L=t.width,F=t.height,N=1,W=null,ie=null;const B=new it(0,0,L,F),te=new it(0,0,L,F);let ye=!1;const Ve=new zl;let Fe=!1,Z=!1;const ce=new Ye,we=new U,Ie=new it,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function fe(){return R===null?N:1}let I=n;function Y(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const H="webgl2";if(I=Y(H,A),I===null)throw Y(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let q,ne,$,se,oe,de,Oe,Te,C,T,G,J,ue,Q,le,ee,he,Se,re,ve,Ce,De,Ee,Xe;function z(){q=new xx(I),q.init(),De=new tM(I,q),ne=new fx(I,q,e,De),$=new Qy(I,q),ne.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),se=new Sx(I),oe=new zy,de=new eM(I,q,$,oe,ne,De,se),Oe=new px(v),Te=new vx(v),C=new R0(I),Ee=new ux(I,C),T=new yx(I,C,se,Ee),G=new Tx(I,T,C,se),re=new Ex(I,ne,de),ee=new dx(oe),J=new ky(v,Oe,Te,q,ne,Ee,ee),ue=new aM(v,oe),Q=new Vy,le=new Ky(q),Se=new lx(v,Oe,Te,$,G,d,c),he=new Jy(v,G,ne),Xe=new cM(I,se,ne,$),ve=new hx(I,q,se),Ce=new Mx(I,q,se),se.programs=J.programs,v.capabilities=ne,v.extensions=q,v.properties=oe,v.renderLists=Q,v.shadowMap=he,v.state=$,v.info=se}z();const pe=new sM(v,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(L,F,!1))},this.getSize=function(A){return A.set(L,F)},this.setSize=function(A,H,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,F=H,t.width=Math.floor(A*N),t.height=Math.floor(H*N),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(L*N,F*N).floor()},this.setDrawingBufferSize=function(A,H,K){L=A,F=H,N=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,H,K,j){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,H,K,j),$.viewport(D.copy(B).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,H,K,j){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,H,K,j),$.scissor(k.copy(te).multiplyScalar(N).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){$.setScissorTest(ye=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,K=!0){let j=0;if(A){let V=!1;if(R!==null){const ge=R.texture.format;V=ge===Nl||ge===Dl||ge===Il}if(V){const ge=R.texture.type,Ae=ge===Ln||ge===ki||ge===ys||ge===Ms||ge===Cl||ge===Pl,Le=Se.getClearColor(),Re=Se.getClearAlpha(),He=Le.r,We=Le.g,Be=Le.b;Ae?(p[0]=He,p[1]=We,p[2]=Be,p[3]=Re,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=He,_[1]=We,_[2]=Be,_[3]=Re,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}H&&(j|=I.DEPTH_BUFFER_BIT),K&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Se.dispose(),Q.dispose(),le.dispose(),oe.dispose(),Oe.dispose(),Te.dispose(),G.dispose(),Ee.dispose(),Xe.dispose(),J.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",bn),pe.removeEventListener("sessionend",lu),xi.stop()};function Me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=se.autoReset,H=he.enabled,K=he.autoUpdate,j=he.needsUpdate,V=he.type;z(),se.autoReset=A,he.enabled=H,he.autoUpdate=K,he.needsUpdate=j,he.type=V}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const H=A.target;H.removeEventListener("dispose",ae),Ne(H)}function Ne(A){qe(A),oe.remove(A)}function qe(A){const H=oe.get(A).programs;H!==void 0&&(H.forEach(function(K){J.releaseProgram(K)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,j,V,ge){H===null&&(H=xe);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Le=yp(A,H,K,j,V);$.setMaterial(j,Ae);let Re=K.index,He=1;if(j.wireframe===!0){if(Re=T.getWireframeAttribute(K),Re===void 0)return;He=2}const We=K.drawRange,Be=K.attributes.position;let et=We.start*He,ut=(We.start+We.count)*He;ge!==null&&(et=Math.max(et,ge.start*He),ut=Math.min(ut,(ge.start+ge.count)*He)),Re!==null?(et=Math.max(et,0),ut=Math.min(ut,Re.count)):Be!=null&&(et=Math.max(et,0),ut=Math.min(ut,Be.count));const wt=ut-et;if(wt<0||wt===1/0)return;Ee.setup(V,j,Le,K,Re);let gt,dt=ve;if(Re!==null&&(gt=C.get(Re),dt=Ce,dt.setIndex(gt)),V.isMesh)j.wireframe===!0?($.setLineWidth(j.wireframeLinewidth*fe()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(V.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),$.setLineWidth(ke*fe()),V.isLineSegments?dt.setMode(I.LINES):V.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else V.isPoints?dt.setMode(I.POINTS):V.isSprite&&dt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ke=V._multiDrawStarts,yt=V._multiDrawCounts,nt=V._multiDrawCount,jt=Re?C.get(Re).bytesPerElement:1,qi=oe.get(j).currentProgram.getUniforms();for(let $t=0;$t<nt;$t++)qi.setValue(I,"_gl_DrawID",$t),dt.render(ke[$t]/jt,yt[$t])}else if(V.isInstancedMesh)dt.renderInstances(et,wt,V.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,yt=Math.min(K.instanceCount,ke);dt.renderInstances(et,wt,yt)}else dt.render(et,wt)};function pt(A,H,K){A.transparent===!0&&A.side===Yt&&A.forceSinglePass===!1?(A.side=Gt,A.needsUpdate=!0,Ks(A,H,K),A.side=$n,A.needsUpdate=!0,Ks(A,H,K),A.side=Yt):Ks(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),m=le.get(K),m.init(H),y.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const j=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Le=ge[Ae];pt(Le,K,V),j.add(Le)}else pt(ge,K,V),j.add(ge)}),m=y.pop(),j},this.compileAsync=function(A,H,K=null){const j=this.compile(A,H,K);return new Promise(V=>{function ge(){if(j.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){V(A);return}setTimeout(ge,10)}q.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let rt=null;function Fn(A){rt&&rt(A)}function bn(){xi.stop()}function lu(){xi.start()}const xi=new gd;xi.setAnimationLoop(Fn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){rt=A,pe.setAnimationLoop(A),A===null?xi.stop():xi.start()},pe.addEventListener("sessionstart",bn),pe.addEventListener("sessionend",lu),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(H),H=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,R),m=le.get(A,y.length),m.init(H),y.push(m),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ve.setFromProjectionMatrix(ce,Pn,H.reversedDepth),Z=this.localClippingEnabled,Fe=ee.init(this.clippingPlanes,Z),g=Q.get(A,x.length),g.init(),x.push(g),pe.enabled===!0&&pe.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&da(ge,H,-1/0,v.sortObjects)}da(A,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,ie),ze=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ze&&Se.addToRenderList(g,A),this.info.render.frame++,Fe===!0&&ee.beginShadows();const K=m.state.shadowsArray;he.render(K,A,H),Fe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,V=g.transmissive;if(m.setupLights(),H.isArrayCamera){const ge=H.cameras;if(V.length>0)for(let Ae=0,Le=ge.length;Ae<Le;Ae++){const Re=ge[Ae];hu(j,V,A,Re)}ze&&Se.render(A);for(let Ae=0,Le=ge.length;Ae<Le;Ae++){const Re=ge[Ae];uu(g,A,Re,Re.viewport)}}else V.length>0&&hu(j,V,A,H),ze&&Se.render(A),uu(g,A,H);R!==null&&w===0&&(de.updateMultisampleRenderTarget(R),de.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,H),Ee.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],Fe===!0&&ee.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function da(A,H,K,j){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){j&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Ae=G.update(A),Le=A.material;Le.visible&&g.push(A,Ae,Le,K,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const Ae=G.update(A),Le=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Le)){const Re=Ae.groups;for(let He=0,We=Re.length;He<We;He++){const Be=Re[He],et=Le[Be.materialIndex];et&&et.visible&&g.push(A,Ae,et,K,Ie.z,Be)}}else Le.visible&&g.push(A,Ae,Le,K,Ie.z,null)}}const ge=A.children;for(let Ae=0,Le=ge.length;Ae<Le;Ae++)da(ge[Ae],H,K,j)}function uu(A,H,K,j){const V=A.opaque,ge=A.transmissive,Ae=A.transparent;m.setupLightsView(K),Fe===!0&&ee.setGlobalState(v.clippingPlanes,K),j&&$.viewport(D.copy(j)),V.length>0&&Ys(V,H,K),ge.length>0&&Ys(ge,H,K),Ae.length>0&&Ys(Ae,H,K),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function hu(A,H,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new zi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?ks:Ln,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ge=m.state.transmissionRenderTarget[j.id],Ae=j.viewport||D;ge.setSize(Ae.z*v.transmissionResolutionScale,Ae.w*v.transmissionResolutionScale);const Le=v.getRenderTarget(),Re=v.getActiveCubeFace(),He=v.getActiveMipmapLevel();v.setRenderTarget(ge),v.getClearColor(P),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),ze&&Se.render(K);const We=v.toneMapping;v.toneMapping=mi;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Fe===!0&&ee.setGlobalState(v.clippingPlanes,j),Ys(A,K,j),de.updateMultisampleRenderTarget(ge),de.updateRenderTargetMipmap(ge),q.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ut=0,wt=H.length;ut<wt;ut++){const gt=H[ut],dt=gt.object,ke=gt.geometry,yt=gt.material,nt=gt.group;if(yt.side===Yt&&dt.layers.test(j.layers)){const jt=yt.side;yt.side=Gt,yt.needsUpdate=!0,fu(dt,K,j,ke,yt,nt),yt.side=jt,yt.needsUpdate=!0,et=!0}}et===!0&&(de.updateMultisampleRenderTarget(ge),de.updateRenderTargetMipmap(ge))}v.setRenderTarget(Le,Re,He),v.setClearColor(P,O),Be!==void 0&&(j.viewport=Be),v.toneMapping=We}function Ys(A,H,K){const j=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ge=A.length;V<ge;V++){const Ae=A[V],Le=Ae.object,Re=Ae.geometry,He=Ae.group;let We=Ae.material;We.allowOverride===!0&&j!==null&&(We=j),Le.layers.test(K.layers)&&fu(Le,H,K,Re,We,He)}}function fu(A,H,K,j,V,ge){A.onBeforeRender(v,H,K,j,V,ge),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,H,K,j,A,ge),V.transparent===!0&&V.side===Yt&&V.forceSinglePass===!1?(V.side=Gt,V.needsUpdate=!0,v.renderBufferDirect(K,H,j,V,A,ge),V.side=$n,V.needsUpdate=!0,v.renderBufferDirect(K,H,j,V,A,ge),V.side=Yt):v.renderBufferDirect(K,H,j,V,A,ge),A.onAfterRender(v,H,K,j,V,ge)}function Ks(A,H,K){H.isScene!==!0&&(H=xe);const j=oe.get(A),V=m.state.lights,ge=m.state.shadowsArray,Ae=V.state.version,Le=J.getParameters(A,V.state,ge,H,K),Re=J.getProgramCacheKey(Le);let He=j.programs;j.environment=A.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(A.isMeshStandardMaterial?Te:Oe).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",ae),He=new Map,j.programs=He);let We=He.get(Re);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===Ae)return pu(A,Le),We}else Le.uniforms=J.getUniforms(A),A.onBeforeCompile(Le,v),We=J.acquireProgram(Le,Re),He.set(Re,We),j.uniforms=Le.uniforms;const Be=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=ee.uniform),pu(A,Le),j.needsLights=Sp(A),j.lightsStateVersion=Ae,j.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function du(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Fo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function pu(A,H){const K=oe.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function yp(A,H,K,j,V){H.isScene!==!0&&(H=xe),de.resetTextureUnits();const ge=H.fog,Ae=j.isMeshStandardMaterial?H.environment:null,Le=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xt,Re=(j.isMeshStandardMaterial?Te:Oe).get(j.envMap||Ae),He=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,ut=!!K.morphAttributes.color;let wt=mi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=v.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=gt!==void 0?gt.length:0,ke=oe.get(j),yt=m.state.lights;if(Fe===!0&&(Z===!0||A!==M)){const Bt=A===M&&j.id===S;ee.setState(j,A,Bt)}let nt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==yt.state.version||ke.outputColorSpace!==Le||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isBatchedMesh&&ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==Re||j.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ee.numPlanes||ke.numIntersection!==ee.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==We||ke.morphTargets!==Be||ke.morphNormals!==et||ke.morphColors!==ut||ke.toneMapping!==wt||ke.morphTargetsCount!==dt)&&(nt=!0):(nt=!0,ke.__version=j.version);let jt=ke.currentProgram;nt===!0&&(jt=Ks(j,H,V));let qi=!1,$t=!1,Gr=!1;const Mt=jt.getUniforms(),nn=ke.uniforms;if($.useProgram(jt.program)&&(qi=!0,$t=!0,Gr=!0),j.id!==S&&(S=j.id,$t=!0),qi||M!==A){$.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Mt.setValue(I,"projectionMatrix",A.projectionMatrix),Mt.setValue(I,"viewMatrix",A.matrixWorldInverse);const qt=Mt.map.cameraPosition;qt!==void 0&&qt.setValue(I,we.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,$t=!0,Gr=!0)}if(V.isSkinnedMesh){Mt.setOptional(I,V,"bindMatrix"),Mt.setOptional(I,V,"bindMatrixInverse");const Bt=V.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Mt.setValue(I,"boneTexture",Bt.boneTexture,de))}V.isBatchedMesh&&(Mt.setOptional(I,V,"batchingTexture"),Mt.setValue(I,"batchingTexture",V._matricesTexture,de),Mt.setOptional(I,V,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",V._indirectTexture,de),Mt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",V._colorsTexture,de));const rn=K.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&re.update(V,K,jt),($t||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,Mt.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nn.envMap.value=Re,nn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),$t&&(Mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Mp(nn,Gr),ge&&j.fog===!0&&ue.refreshFogUniforms(nn,ge),ue.refreshMaterialUniforms(nn,j,N,F,m.state.transmissionRenderTarget[A.id]),Fo.upload(I,du(ke),nn,de)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fo.upload(I,du(ke),nn,de),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(I,"center",V.center),Mt.setValue(I,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(I,"normalMatrix",V.normalMatrix),Mt.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bt=j.uniformsGroups;for(let qt=0,pa=Bt.length;qt<pa;qt++){const yi=Bt[qt];Xe.update(yi,jt),Xe.bind(yi,jt)}}return jt}function Mp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Sp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,K){const j=oe.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=H,oe.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const K=oe.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const Ep=I.createFramebuffer();this.setRenderTarget=function(A,H=0,K=0){R=A,b=H,w=K;let j=!0,V=null,ge=!1,Ae=!1;if(A){const Re=oe.get(A);if(Re.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Re.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Re.__hasExternalTextures)de.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Re.__boundDepthTexture!==Be){if(Be!==null&&oe.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const We=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[H])?V=We[H][K]:V=We[H],ge=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?V=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[K]:V=We,D.copy(A.viewport),k.copy(A.scissor),X=A.scissorTest}else D.copy(B).multiplyScalar(N).floor(),k.copy(te).multiplyScalar(N).floor(),X=ye;if(K!==0&&(V=Ep),$.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&$.drawBuffers(A,V),$.viewport(D),$.scissor(k),$.setScissorTest(X),ge){const Re=oe.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,K)}else if(Ae){const Re=H;for(let He=0;He<A.textures.length;He++){const We=oe.get(A.textures[He]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+He,We.__webglTexture,K,Re)}}else if(A!==null&&K!==0){const Re=oe.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(A,H,K,j,V,ge,Ae,Le=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){$.bindFramebuffer(I.FRAMEBUFFER,Re);try{const He=A.textures[Le],We=He.format,Be=He.type;if(!ne.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-j&&K>=0&&K<=A.height-V&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,K,j,V,De.convert(We),De.convert(Be),ge))}finally{const He=R!==null?oe.get(R).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,j,V,ge,Ae,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(H>=0&&H<=A.width-j&&K>=0&&K<=A.height-V){$.bindFramebuffer(I.FRAMEBUFFER,Re);const He=A.textures[Le],We=He.format,Be=He.type;if(!ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(H,K,j,V,De.convert(We),De.convert(Be),0);const ut=R!==null?oe.get(R).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,ut);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lm(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(et),I.deleteSync(wt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,K=0){const j=Math.pow(2,-K),V=Math.floor(A.image.width*j),ge=Math.floor(A.image.height*j),Ae=H!==null?H.x:0,Le=H!==null?H.y:0;de.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Ae,Le,V,ge),$.unbindTexture()};const Tp=I.createFramebuffer(),bp=I.createFramebuffer();this.copyTextureToTexture=function(A,H,K=null,j=null,V=0,ge=null){ge===null&&(V!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=V,V=0):ge=0);let Ae,Le,Re,He,We,Be,et,ut,wt;const gt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(K!==null)Ae=K.max.x-K.min.x,Le=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,He=K.min.x,We=K.min.y,Be=K.isBox3?K.min.z:0;else{const rn=Math.pow(2,-V);Ae=Math.floor(gt.width*rn),Le=Math.floor(gt.height*rn),A.isDataArrayTexture?Re=gt.depth:A.isData3DTexture?Re=Math.floor(gt.depth*rn):Re=1,He=0,We=0,Be=0}j!==null?(et=j.x,ut=j.y,wt=j.z):(et=0,ut=0,wt=0);const dt=De.convert(H.format),ke=De.convert(H.type);let yt;H.isData3DTexture?(de.setTexture3D(H,0),yt=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(de.setTexture2DArray(H,0),yt=I.TEXTURE_2D_ARRAY):(de.setTexture2D(H,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qi=I.getParameter(I.UNPACK_SKIP_PIXELS),$t=I.getParameter(I.UNPACK_SKIP_ROWS),Gr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be);const Mt=A.isDataArrayTexture||A.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const rn=oe.get(A),Bt=oe.get(H),qt=oe.get(rn.__renderTarget),pa=oe.get(Bt.__renderTarget);$.bindFramebuffer(I.READ_FRAMEBUFFER,qt.__webglFramebuffer),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let yi=0;yi<Re;yi++)Mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,V,Be+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(H).__webglTexture,ge,wt+yi)),I.blitFramebuffer(He,We,Ae,Le,et,ut,Ae,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||oe.has(A)){const rn=oe.get(A),Bt=oe.get(H);$.bindFramebuffer(I.READ_FRAMEBUFFER,Tp),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,bp);for(let qt=0;qt<Re;qt++)Mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,V,Be+qt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,V),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,ge,wt+qt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,ge),V!==0?I.blitFramebuffer(He,We,Ae,Le,et,ut,Ae,Le,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(yt,ge,et,ut,wt+qt,He,We,Ae,Le):I.copyTexSubImage2D(yt,ge,et,ut,He,We,Ae,Le);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(yt,ge,et,ut,wt,Ae,Le,Re,dt,ke,gt.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,ge,et,ut,wt,Ae,Le,Re,dt,gt.data):I.texSubImage3D(yt,ge,et,ut,wt,Ae,Le,Re,dt,ke,gt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,et,ut,Ae,Le,dt,ke,gt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,et,ut,gt.width,gt.height,dt,gt.data):I.texSubImage2D(I.TEXTURE_2D,ge,et,ut,Ae,Le,dt,ke,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gr),ge===0&&H.generateMipmaps&&I.generateMipmap(yt),$.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){b=0,w=0,R=null,$.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Lr{static createButton(e,t={}){const n=document.createElement("button");function r(){let l=null;async function h(d){d.addEventListener("end",u),await e.xr.setSession(d),n.textContent="EXIT VR",l=d}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():o(),l&&Lr.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Lr.xrSessionIsGranted=!0})}}}Lr.xrSessionIsGranted=!1;Lr.registerSessionGrantedListener();const Ql=Object.freeze,gi=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Gs=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Md=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Sd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,uM=Ql({p:gi,n:Gs,h:1n,a:0n,b:7n,Gx:Md,Gy:Sd}),Mn=32,Hh=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,pn=(i,e,t="")=>{if(Hh(i)&&(e===void 0||i.length===e))return i;const n=Hh(i),r=e!==void 0?` of length ${e}`:"",s=n?`length=${i.length}`:`type=${typeof i}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw n?new RangeError(o):new TypeError(o)},hM=i=>Uint8Array.from(i),fM=(i,e,t)=>hM(pn(i,t,e)),Ed=(i,e)=>i.toString(16).padStart(e,"0"),Td=i=>{let e="";for(const t of pn(i))e+=Ed(t,2);return e},bd=i=>{const e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);const t=new Uint8Array(i.length/2);for(let n=0,r=0;n<t.length;n++,r+=2){const s=i.charCodeAt(r),o=i.charCodeAt(r+1);t[n]=((s&15)+(s>>6)*9)*16+(o&15)+(o>>6)*9}return t},Vh=()=>{const i=globalThis?.crypto?.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},Ir=(...i)=>{let e=0;for(const r of i)e+=pn(r).length;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.length;return t},eu=(i=Mn)=>{const e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},dM=BigInt,Ws=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},Ue=(i,e=gi)=>(i%=e)>=0n?i:e+i,aa=i=>Ue(i,Gs),pM=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Ue(i,e),n=e,r=0n,s=1n;for(;t!==0n;){const a=n/t,c=n-t*a,l=r-s*a;n=t,t=c,r=s,s=l}if(n!==1n)throw new Error("invert: does not exist");return Ue(r,e)},wd=i=>{const e=vM[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},Gh=(i,e,t)=>pn(wd(i)(e,t),Mn,"digest"),Wh=async(i,e,t)=>pn(await wd(i)(e,t),Mn,"digest"),ec=i=>{if(i instanceof cn)return i;throw new TypeError("Point expected")},tc="bad point: not on curve",Ad=i=>Ue(Ue(i*i)*i+7n),Xh=i=>Ws(i,0n,gi),ms=i=>Ws(i,1n,gi),Rd=i=>Ws(i,1n,Gs),ca=i=>!(i&1n),mM=i=>Uint8Array.of(ca(i)?2:3),Cd=i=>{const e=Ad(ms(i));let t=1n;for(let n=e,r=(gi+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*n%gi),n=n*n%gi;if(Ue(t*t)!==e)throw new Error("sqrt invalid");return new cn(i,ca(t)?t:Ue(-t),1n)};class cn{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=Xh(e),this.Y=ms(t),this.Z=Xh(n),Ql(this)}static CURVE(){return uM}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?gs:new cn(t,n,1n)}static fromBytes(e){pn(e);const t=e.length,n=e[0],r=jo(e,1,33);try{if(t===33&&(n===2||n===3)){const s=Cd(r);return n===3?s.negate():s}if(t===65&&n===4)return new cn(r,jo(e,33,65),1n).assertValidity()}catch{throw new Error(tc)}throw new Error(tc)}static fromHex(e){return cn.fromBytes(bd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=ec(e);return Ue(t*a)===Ue(s*r)&&Ue(n*a)===Ue(o*r)}is0(){return this.Z===0n}negate(){return new cn(this.X,Ue(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=ec(e),c=0n,l=7n;let h=0n,u=0n,f=0n;const d=Ue(l*3n);let p=Ue(t*s),_=Ue(n*o),g=Ue(r*a),m=Ue(t+n),x=Ue(s+o);m=Ue(m*x),x=Ue(p+_),m=Ue(m-x),x=Ue(t+r);let y=Ue(s+a);return x=Ue(x*y),y=Ue(p+g),x=Ue(x-y),y=Ue(n+r),h=Ue(o+a),y=Ue(y*h),h=Ue(_+g),y=Ue(y-h),f=Ue(c*x),h=Ue(d*g),f=Ue(h+f),h=Ue(_-f),f=Ue(_+f),u=Ue(h*f),_=Ue(p+p),_=Ue(_+p),g=Ue(c*g),x=Ue(d*x),_=Ue(_+g),g=Ue(p-g),g=Ue(c*g),x=Ue(x+g),p=Ue(_*x),u=Ue(u+p),p=Ue(y*x),h=Ue(m*h),h=Ue(h-p),p=Ue(m*_),f=Ue(y*f),f=Ue(f+p),new cn(h,u,f)}subtract(e){return this.add(ec(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return gs;if(Rd(e),e===1n)return this;if(this.equals(Vi))return wM(e).p;let n=gs,r=Vi,s=this;for(let o=0;t?o<256:e>0n;o++)e&1n?n=n.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const r=pM(n,gi);if(Ue(n*r)!==1n)throw new Error("inverse invalid");return{x:Ue(e*r),y:Ue(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(ms(e),ms(t),Ue(t*t)!==Ad(e))throw new Error(tc);return this}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),r=Zn(t);return e?Ir(mM(n),r):Ir(Uint8Array.of(4),r,Zn(n))}toHex(e){return Td(this.toBytes(e))}}const Vi=new cn(Md,Sd,1n),gs=new cn(0n,1n,0n);cn.BASE=Vi;cn.ZERO=gs;const gM=(i,e,t)=>Vi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Wi=i=>dM("0x"+(Td(i)||"0")),jo=(i,e,t)=>Wi(i.subarray(e,t)),Zn=i=>bd(Ed(Ws(i,0n,2n**256n),Mn*2)),_M=i=>{const e=Wi(pn(i,Mn,"secret key"));return Ws(e,1n,Gs,"invalid secret key: outside of range")},qh="SHA-256",vM={hmacSha256Async:async(i,e)=>{const t=Vh(),n=await t.importKey("raw",i,{name:"HMAC",hash:qh},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await Vh().digest(qh,i)),sha256:void 0},xM=i=>{if(i=i===void 0?eu(48):i,pn(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");const e=Ue(Wi(i),Gs-1n);return Zn(e+1n)},yM=i=>e=>{const t=xM(e);return{secretKey:t,publicKey:i(t)}},Pd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),dl=(i,...e)=>{const t=Gh("sha256",Pd(i));return Gh("sha256",Ir(t,t,...e))},pl=(i,...e)=>Wh("sha256Async",Pd(i)).then(t=>Wh("sha256Async",Ir(t,t,...e))),tu=i=>{const e=_M(i),t=Vi.multiply(e),{x:n,y:r}=t.assertValidity().toAffine(),s=ca(r)?e:aa(-e),o=Zn(n);return{d:s,px:o}},nu=i=>aa(Wi(i)),Ld=(...i)=>nu(dl("challenge",...i)),Id=async(...i)=>nu(await pl("challenge",...i)),Dd=i=>tu(i).px,MM=yM(Dd),Nd=(i,e,t)=>{const n=fM(i,"message"),{px:r,d:s}=tu(e);return{m:n,px:r,d:s,a:pn(t,Mn)}},Ud=i=>{const e=nu(i);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:n}=tu(Zn(e));return{rx:t,k:n}},Od=(i,e,t,n)=>Ir(e,Zn(aa(i+t*n))),Fd="invalid signature produced",SM=(i,e,t=eu(Mn))=>{const{m:n,px:r,d:s,a:o}=Nd(i,e,t),a=Zn(s^Wi(dl("aux",o))),{rx:c,k:l}=Ud(dl("nonce",a,r,n)),h=Od(l,c,Ld(c,r,n),s);if(!kd(h,n,r))throw new Error(Fd);return h},EM=async(i,e,t=eu(Mn))=>{const{m:n,px:r,d:s,a:o}=Nd(i,e,t),a=Zn(s^Wi(await pl("aux",o))),{rx:c,k:l}=Ud(await pl("nonce",a,r,n)),h=Od(l,c,await Id(c,r,n),s);if(!await zd(h,n,r))throw new Error(Fd);return h},TM=(i,e)=>i instanceof Promise?i.then(e):e(i),Bd=(i,e,t,n)=>{const r=pn(i,64,"signature"),s=pn(e,void 0,"message"),o=pn(t,Mn,"publicKey");let a,c,l,h;try{const u=Wi(o);a=Cd(u),c=ms(jo(r,0,Mn)),l=Rd(jo(r,Mn,64)),h=Ir(Zn(c),o,s)}catch{return!1}return TM(n(h),u=>{try{const{x:f,y:d}=gM(a,l,aa(-u)).toAffine();return!(!ca(d)||f!==c)}catch{return!1}})},kd=(i,e,t)=>Bd(i,e,t,Ld),zd=async(i,e,t)=>Bd(i,e,t,Id),Hd=Ql({keygen:MM,getPublicKey:Dd,sign:SM,verify:kd,signAsync:EM,verifyAsync:zd}),bM=()=>{const i=[];let e=Vi,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let r=1;r<128;r++)t=t.add(e),i.push(t);e=t.double()}return i};let Yh;const Kh=(i,e)=>{const t=e.negate();return i?t:e},wM=i=>{const e=Yh||(Yh=bM());let t=gs,n=Vi;for(let r=0;r<33;r++){let s=Number(i&255n);i>>=8n,s>128&&(s-=256,i+=1n);const o=r*128,a=o+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?n=n.add(Kh(c,e[o])):t=t.add(Kh(l,e[a]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}},{floor:ml,min:AM,sin:RM}=Math,Sn="Trystero",Is=(i,e)=>Array(i).fill(void 0).map(e),CM="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Hr=i=>Is(i,()=>CM[ml(Math.random()*62)]??"").join(""),Ot=Hr(20),Xi=Promise.all.bind(Promise),Vd=typeof window<"u",{entries:Ui,fromEntries:Gd,keys:ln,values:vr}=Object,Vt=()=>{},Wd="candidate",ct=i=>(i!==null&&clearTimeout(i),null),st=i=>new Error(`${Sn}: ${i}`),Dr=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:tn(i??e),hi=(i,e)=>i instanceof Error?i:st(Dr(i,e)),PM=new TextEncoder,LM=new TextDecoder,_i=i=>PM.encode(i),Ni=i=>LM.decode(i),Ds=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ns=(...i)=>i.join("@"),IM=(i,e)=>{const t=[...i],n=()=>{const s=RM(e++)*1e4;return s-ml(s)};let r=t.length;for(;r;){const s=ml(n()*r--),o=t[r];t[r]=t[s],t[s]=o}return t},DM=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?IM(e,Xd(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),tn=JSON.stringify,Nr=i=>{try{return JSON.parse(i)}catch{throw st(`failed to parse JSON: ${i}`)}},Xd=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,jh=3333,$h=6e4,nc={};let _s=null,gl=null;const NM=()=>{_s||(_s=new Promise(i=>{gl=i}).finally(()=>{gl=null,_s=null}))},UM=()=>{gl?.()},OM=(i,e,t)=>{const n={};let r=!1,s=!1,o,a=Vt;n.isClosed=!1,n.ready=new Promise(l=>a=l);const c=()=>{if(n.isClosed)return;o=void 0,s=!1;const l=new WebSocket(i);l.onclose=()=>{if(n.isClosed||s)return;if(s=!0,_s){_s.then(c);return}const h=nc[i]??=jh;if(h>=$h){n.isClosed=!0;return}o=setTimeout(c,Math.random()*h),nc[i]=AM(h*2,$h)},l.onmessage=h=>e(String(h.data)),n.socket=l,n.url=l.url,l.onopen=()=>{const h=r;r=!0,a(n),nc[i]=jh,h&&t?.()},n.send=h=>{l.readyState===1&&l.send(h)}};return n.close=()=>{n.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),n.socket.close()},c(),n},FM=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw st("relay bookkeeping missing registration for relay client");return a},r=()=>{const o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(n(c))}},s=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||s(o,a())},keyOf:n,scoped:r,getSockets:()=>Gd(Ui(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},BM=()=>{if(Vd){const i=new AbortController;return addEventListener("online",UM,{signal:i.signal}),addEventListener("offline",NM,{signal:i.signal}),()=>i.abort()}return Vt},iu="AES-GCM",kM={},zM=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),HM=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},la=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,_i(e))),Us=async i=>kM[i]??=Array.from(await la("SHA-1",i)).map(e=>e.toString(36)).join(""),VM=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},_i(`${i}:${e}:${t}`)),{name:iu},!1,["encrypt","decrypt"]),GM=async(i,e)=>Ds(await la("SHA-256",`${Sn}:${i}:${e}`)),qd="$",Yd=",",WM=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(Yd)+qd+zM(await crypto.subtle.encrypt({name:iu,iv:t},await i,_i(e)))},XM=async(i,e)=>{const[t,n]=e.split(qd);return Ni(await crypto.subtle.decrypt({name:iu,iv:new Uint8Array(t?.split(Yd).map(Number)??[])},await i,HM(n??"")))},ru=57333,qM=18e4,YM=20;var KM=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(i){this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Is(YM,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},ru)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(ct(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Vt,close:Vt,error:Vt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(ct(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},qM))}checkout(i,e,t){const n=this.shift(i),r=Math.max(0,i-n.length);r>0&&n.push(...Is(r,this.makeOffer));const s=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return s(this.makeOffer(),!0);throw c}};return Xi(n.map(o=>s(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{ct(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const ic=st("incorrect password for overlapping room"),jM=(i,e,t)=>{const n=o=>la("SHA-256",`${o}:${i}:${e}:${t}`).then(Ds),r=async(o,a,c)=>{if(!i)return;if(c){const h=Hr(36);await o({__trystero_pw:"challenge",c:h});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw ic;const f=await n(h);if(u.h!==f)throw ic;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw ic;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:r,compose:o=>i||o?async(a,c,l,h)=>{await r(c,l,h),await o?.(a,c,l,h)}:void 0}},$M=i=>{const e=Dr(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},JM=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:r,onActivate:s,onFailure:o})=>{const a={},c=(u,f)=>{const d=a[u];!d||f&&d.peer!==f||d.isActive||!d.didLocalHandshakePass||!d.didReceiveRemoteReady||(d.isActive=!0,d.handshakeTimer=ct(d.handshakeTimer),s(u,d.peer))},l=(u,f,d)=>{const p=a[u];if(!p||p.peer!==f)return;const _=$M(d);e?.(u,_),o(u,f,st(_))},h=(u,f)=>{const d=a[u];!d||d.peer!==f||d.isActive||(d.didLocalHandshakePass=!0,r("",u).catch(p=>l(u,f,st(`failed sending handshake readiness: ${Dr(p,"unknown send failure")}`))),c(u,f))};return{addPeer:(u,f)=>{a[u]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,f)=>{const d=a[u];d&&(d.handshakeTimer=ct(d.handshakeTimer),d.pendingHandshakePayloads.length=0,d.handshakeWaiters.splice(0).forEach(p=>p.reject(f)),delete a[u])},canReceiveFromPeer:(u,f)=>{const d=a[u];return!!(d&&(d.isActive||f))},start:(u,f)=>{const d=a[u];if(!d||d.peer!==f)return;d.handshakeTimer=setTimeout(()=>l(u,f,st(`handshake timed out after ${t}ms`)),t);const p=async(m,x)=>{await n(m,u,x)},_=()=>new Promise((m,x)=>{const y=a[u];if(!y||y.peer!==f){x(st("peer disconnected during handshake"));return}const v=y.pendingHandshakePayloads.shift();if(v){m(v);return}y.handshakeWaiters.push({resolve:m,reject:E=>x(E)})}),g=Ot<u;Promise.resolve(i?.(u,p,_,g)).then(()=>h(u,f)).catch(m=>l(u,f,hi(m,"handshake failed")))},receiveHandshakeData:(u,f,d)=>{const p=a[f];if(!p||p.isActive)return;const _=d===void 0?{data:u}:{data:u,metadata:d},g=p.handshakeWaiters.shift();if(g){g.resolve(_);return}p.pendingHandshakePayloads.push(_)},receiveHandshakeReady:u=>{const f=a[u];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(u))}}},ZM=15e3,QM=5e3,Jh="icegatheringstatechange",eS="iceconnectionstatechange",ts="offer",tS="answer",nS=/out of range/i,Zh=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Qh=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const o=new(n??RTCPeerConnection)({iceServers:iS.concat(r??[]),...t}),a={},c=[],l=[],h=e!==!1,u=[],f=[];let d=!1,p=!1,_=null,g=null,m=!1;const x=()=>g=ct(g),y=()=>{m||(m=!0,x(),a.close?.())},v=B=>{a.signal?a.signal(B):c.push(B)},E=B=>{const te=a.signal;a.signal=ye=>{te?.(ye),B(ye)},c.length>0&&c.splice(0).forEach(ye=>a.signal?.(ye))},b=B=>s?Zh(B):B,w=B=>{if(!s||typeof B.candidate!="string")return B;const te=Zh(B.candidate);return te===B.candidate?B:{...B,candidate:te}},R=B=>({type:B.localDescription?.type??ts,sdp:b(B.localDescription?.sdp??"")}),S=()=>{const B=o.remoteDescription?.sdp;return B?B.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},M=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,D=B=>{if(!o.remoteDescription)return!1;const te=M();if(typeof B.sdpMLineIndex=="number"&&te>0&&B.sdpMLineIndex>=te)return!1;const ye=S();return!(ye&&B.usernameFragment&&B.usernameFragment!==ye)},k=async B=>{try{return await o.addIceCandidate(B),!0}catch(te){if(te instanceof Error&&nS.test(te.message)&&typeof B.sdpMLineIndex=="number")return!1;throw te}},X=async()=>{if(!o.remoteDescription||u.length===0)return;const B=u.splice(0),te=[];for(const ye of B){if(!D(ye)){te.push(ye);continue}await k(ye)||te.push(ye)}te.length>0&&u.push(...te)},P=async B=>{if(D(B)){await k(B)||u.push(B);return}u.push(B)},O=B=>{B.binaryType="arraybuffer",B.bufferedAmountLowThreshold=65535,B.onmessage=te=>{const ye=te.data;a.data?a.data(ye):l.push(ye)},B.onopen=()=>a.connect?.(),B.onclose=y,B.onerror=({error:te})=>a.error?.(hi(te,"data channel error"))},L=async B=>{let te=null;try{await Promise.race([new Promise(ye=>{const Ve=()=>{B.iceGatheringState==="complete"&&(B.removeEventListener(Jh,Ve),ye())};B.addEventListener(Jh,Ve),Ve()}),new Promise(ye=>{te=setTimeout(ye,ZM)})])}finally{ct(te)}return R(B)},F=async()=>{const B=h?R(o):await L(o);return v(B),B};i?(_=o.createDataChannel("data"),O(_)):o.ondatachannel=({channel:B})=>{_=B,O(B)};const N=async(B=!1)=>{if(o.connectionState!=="closed")try{return d=!0,B&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===ts&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(B?await o.createOffer({iceRestart:!0}):void 0),await F()}catch(te){a.error?.(hi(te,"failed to create local offer"))}finally{d=!1}};o.onnegotiationneeded=async()=>N(!1),o.onicecandidate=({candidate:B})=>{if(!h||!B)return;const te=w(typeof B.toJSON=="function"?B.toJSON():{candidate:B.candidate,sdpMid:B.sdpMid,sdpMLineIndex:B.sdpMLineIndex,usernameFragment:B.usernameFragment});v({type:Wd,sdp:JSON.stringify(te)})};const W=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){y();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){x();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){g||(g=setTimeout(()=>{g=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&y()},QM));return}};o.onconnectionstatechange=W,o.addEventListener(eS,W),o.ontrack=B=>{const te=B.streams[0];if(te){if(!a.track&&!a.stream){f.push({track:B.track,stream:te});return}a.track?.(B.track,te),a.stream?.(te)}},o.onremovestream=B=>a.stream?.(B.stream);const ie=i?new Promise(B=>E(te=>{te.type===ts&&B(te)})):Promise.resolve();return i&&queueMicrotask(()=>{!d&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return _},get isDead(){return o.connectionState==="closed"},getOffer:async(B=!1)=>{if(i)return B?N(!0):o.localDescription?.type===ts?h?R(o):L(o):ie},async signal(B){if(B.type==="candidate"){try{const te=JSON.parse(B.sdp);te&&typeof te=="object"&&await P(w(te))}catch(te){a.error?.(hi(te,"failed to parse remote candidate"))}return}if(!(_?.readyState==="open"&&!B.sdp?.includes("a=rtpmap")))try{const te={...B,sdp:b(B.sdp)};if(B.type===ts){if(d||o.signalingState!=="stable"&&!p){if(i)return;await Xi([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(te)])}else await o.setRemoteDescription(te);return await X(),await o.setLocalDescription(),await F()}if(B.type===tS){p=!0;try{await o.setRemoteDescription(te),await X()}finally{p=!1}}}catch(te){a.error?.(hi(te,"failed to apply remote signal"))}},sendData:B=>_?.send(B),destroy:()=>{x(),_?.close(),o.close(),d=!1,p=!1,y()},setHandlers:B=>{const{signal:te,...ye}=B;Object.assign(a,ye),a.data&&l.length>0&&l.splice(0).forEach(Ve=>a.data?.(Ve)),te&&E(te),(a.track||a.stream)&&f.length>0&&f.splice(0).forEach(({track:Ve,stream:Fe})=>{a.track?.(Ve,Fe),a.stream?.(Fe)})},offerPromise:ie,addStream:B=>B.getTracks().forEach(te=>o.addTrack(te,B)),removeStream:B=>o.getSenders().filter(te=>te.track&&B.getTracks().includes(te.track)).forEach(te=>o.removeTrack(te)),addTrack:(B,te)=>o.addTrack(B,te),removeTrack:B=>{const te=o.getSenders().find(ye=>ye.track===B);te&&o.removeTrack(te)},replaceTrack:(B,te)=>{const ye=o.getSenders().find(Ve=>Ve.track===B);if(ye)return ye.replaceTrack(te)}}};const iS=[...Is(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),rS=Object.getPrototypeOf(Uint8Array),rc=32,sS=0,sc=32,ef=34,oc=35,Bo=36,Ai=16*2**10-Bo,ns=255,oS=65535,tf="bufferedamountlow",nf="close",rf="error",aS=1e4,cS=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),lS=(i,e=aS)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,r=null;const s=c=>{n||(n=!0,i.removeEventListener(tf,o),i.removeEventListener(nf,a),i.removeEventListener(rf,a),ct(r),t(c))},o=()=>s(!0),a=()=>s(!1);if(i.addEventListener(tf,o),i.addEventListener(nf,a),i.addEventListener(rf,a),r=setTimeout(()=>s(!1),e),i.readyState!=="open"){s(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&s(!0)}),uS=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const r={},s={},o={},a={},c=(u,f,{includePending:d=!1}={})=>(u?Array.isArray(u)?u:[u]:e(d)).flatMap(p=>{const _=i(p,d);return _?[Promise.resolve(f(p,_))]:(console.warn(`${Sn}: no peer with id ${p} found`),[])});return{makeInternalAction:(u,f={})=>{const d=s[u];if(r[u]&&d){const x=r[u].options;if(x.sendToPending!==!!f.sendToPending||x.receiveWhilePending!==!!f.receiveWhilePending)throw st(`action type "${u}" cannot be redefined`);return d}if(!u)throw st("action type argument is required");const p=_i(u);if(p.byteLength>rc)throw st(`action type string "${u}" (${p.byteLength}b) exceeds byte limit (${rc}). Hint: choose a shorter name.`);const _={sendToPending:!!f.sendToPending,receiveWhilePending:!!f.receiveWhilePending},g=new Uint8Array(rc);g.set(p);let m=0;return r[u]={onComplete:Vt,onProgress:Vt,setOnComplete:x=>{r[u].onComplete=x;const y=a[u];y?.length&&(delete a[u],y.forEach(({payload:v,peerId:E,metadata:b})=>x(v,E,b)))},setOnProgress:x=>{r[u].onProgress=x},send:async(x,y,v,E,b)=>{n(b);const w=typeof x;if(w==="undefined")throw st("action data cannot be undefined");const R=w!=="string",S=x instanceof Blob,M=S||x instanceof ArrayBuffer||x instanceof rS,D=v!==void 0,k=M?cS(S?await x.arrayBuffer():x):_i(R?tn(x):x),X=D?_i(tn(v)):null,P=Math.ceil(k.byteLength/Ai)+(D?1:0)||1,O=Is(P,(L,F)=>{const N=F===P-1,W=!!(D&&F===0),ie=new Uint8Array(Bo+(W?X?.byteLength??0:N?k.byteLength-Ai*(P-(D?2:1)):Ai));return ie.set(g),ie.set([m>>8,m&ns],sc),ie.set([Number(N)|Number(W)<<1|Number(M)<<2|Number(R)<<3],ef),ie.set([Math.round((F+1)/P*ns)],oc),ie.set(D?W?X??new Uint8Array:k.subarray((F-1)*Ai,F*Ai):k.subarray(F*Ai,(F+1)*Ai),Bo),ie});return m=m+1&oS,await Xi(c(y,async(L,F)=>{const{channel:N}=F;let W=0;for(;W<P;){n(b);const ie=O[W];if(!ie)break;if(N&&N.bufferedAmount>N.bufferedAmountLowThreshold){const ye=await lS(N);if(n(b),!ye)break}const B=i(L,_.sendToPending);if(!B||B!==F)break;F.sendData(ie),W++;const te=ie[oc]??ns;E?.(te/ns,L,v)}},{includePending:_.sendToPending})),[]},options:_},s[u]={send:r[u].send,onMessage:r[u].setOnComplete,onProgress:r[u].setOnProgress}},handleData:(u,f)=>{const d=new Uint8Array(f),p=Ni(d.subarray(sS,sc)).replaceAll("\0",""),_=r[p];if(!t(u,!!_?.options.receiveWhilePending))return;const g=(d[sc]??0)<<8|(d[33]??0),m=d[ef]??0,x=d[oc]??0,y=d.subarray(Bo),v=!!(m&1),E=!!(m&2),b=!!(m&4),w=!!(m&8);o[u]??={},o[u][p]??={};const R=o[u][p][g]??={chunks:[]};if(E?R.meta=Nr(Ni(y)):R.chunks.push(y),_?.onProgress(x/ns,u,R.meta),!v)return;const S=new Uint8Array(R.chunks.reduce((D,k)=>D+k.byteLength,0));R.chunks.reduce((D,k)=>(S.set(k,D),D+k.byteLength),0),delete o[u][p][g];const M=b?S:w?Nr(Ni(S)):Ni(S);if(_){_.onComplete(M,u,R.meta);return}(a[p]??=[]).push({payload:M,peerId:u,...R.meta===void 0?{}:{metadata:R.meta}})},clearPeer:u=>{delete o[u]}}},hS=500,dr=(i,e)=>{const t=st(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},ac=i=>{if(i?.aborted)throw dr("aborted","operation aborted")},sf=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,fS=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,Co=(i,e)=>e===void 0?i:{...i,metadata:e},dS=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},r={},s=uS({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:ac}),o=s.makeInternalAction,a=s.handleData,c=d=>{const p=r[d];p&&(ct(p.timer),p.signal&&p.abortHandler&&p.signal.removeEventListener("abort",p.abortHandler),delete r[d])},l=(d,p)=>{Ui(r).forEach(([_,g])=>{g.peerId===d&&(c(_),g.reject(p))})},h=(d,p)=>{s.clearPeer(d),l(d,dr("disconnected",Dr(p,"peer disconnected")))},u=o("@_response");return u.onMessage((d,p,_)=>{const g=fS(_);if(!g)return;const m=r[g.r];if(!(!m||m.peerId!==p)){if(c(g.r),g.e!==void 0){m.reject(dr("rejected",g.e));return}m.resolve(d)}}),{makeAction:(d,p)=>{if(p&&"onRequest"in p&&p.kind!=="request")throw st('request actions must use kind: "request"');const _=p?.kind??"message",g=o(d),m=n[d];if(m){if(m.kind!==_)throw st(`action type "${d}" cannot be redefined`);return m.action}const x={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:p?.onReceiveProgress??null},y=(P,O)=>P?(L,F)=>P(L,Co({peerId:F},O)):void 0,v=P=>{x.onReceiveProgress=P},E=(P,O,L)=>{const F=x.kind==="request"?sf(L):null;x.onReceiveProgress?.(P,Co({peerId:O},F?F.m:L))};if(g.onProgress(E),_==="message"){let P=p?.onMessage??null;const O=()=>{if(!P)return;const F=P;x.pendingMessages.splice(0).forEach(({payload:N,peerId:W,metadata:ie})=>{Promise.resolve().then(()=>F(N,Co({peerId:W},ie))).catch(B=>console.error(`${Sn} action handler error:`,B))})},L={send:async(F,N={})=>{await g.send(F,N.target,N.metadata,y(N.onProgress,N.metadata),N.signal)},get onMessage(){return P},set onMessage(F){P=F,O()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(F){v(F)}};return g.onMessage((F,N,W)=>{if(!P){x.pendingMessages.push(W===void 0?{payload:F,peerId:N}:{payload:F,peerId:N,metadata:W});return}const ie=P;Promise.resolve().then(()=>ie(F,Co({peerId:N},W))).catch(B=>console.error(`${Sn} action handler error:`,B))}),x.action=L,n[d]=x,O(),L}let b=p?.onRequest??null;const w=P=>{ct(P.timer);const O=x.pendingRequests.indexOf(P);O>-1&&x.pendingRequests.splice(O,1)},R=(P,O,L)=>{u.send(null,P,{r:O,e:Dr(L,"request failed")})},S=(P,O)=>{w(P),Promise.resolve().then(()=>O(P.payload,{peerId:P.peerId,...P.metadata===void 0?{}:{metadata:P.metadata},signal:P.controller.signal})).then(async L=>{if(L===void 0)throw st("request handler returned undefined");await u.send(L,P.peerId,{r:P.requestId})}).catch(L=>R(P.peerId,P.requestId,L)).finally(()=>P.controller.abort())},M=()=>{b&&x.pendingRequests.slice().forEach(P=>S(P,b))},D=(P,O,L,F)=>{if(b){const W={payload:P,peerId:O,...L===void 0?{}:{metadata:L},requestId:F,controller:new AbortController,timer:null};S(W,b);return}const N={payload:P,peerId:O,...L===void 0?{}:{metadata:L},requestId:F,controller:new AbortController,timer:setTimeout(()=>{w(N),N.controller.abort(),R(O,F,"request handler unavailable")},hS)};x.pendingRequests.push(N)},k=async(P,O)=>{const{target:L,metadata:F,onProgress:N,signal:W,timeoutMs:ie}=O;if(ac(W),!i(L,!1))throw dr("disconnected",`no active peer with id ${L}`);const B=Hr(20),te=new Promise((ye,Ve)=>{const Fe={peerId:L,resolve:ye,reject:Ve,timer:null,...W===void 0?{}:{signal:W}},Z=()=>{c(B),Ve(dr("aborted","operation aborted"))};W&&(Fe.abortHandler=Z,W.addEventListener("abort",Z,{once:!0})),r[B]=Fe}).catch(ye=>{throw ye});try{await g.send(P,L,F===void 0?{r:B}:{r:B,m:F},y(N,F),W);const ye=r[B];return ye&&ie!==void 0&&(ye.timer=setTimeout(()=>{c(B),ye.reject(dr("timeout","request timed out"))},ie)),await te}catch(ye){throw c(B),ye}},X={request:k,requestMany:async(P,O)=>(ac(O.signal),await Xi(O.targets.map(async L=>{try{const F={peerId:L,status:"fulfilled",value:await k(P,{target:L,...O.metadata===void 0?{}:{metadata:O.metadata},...O.timeoutMs===void 0?{}:{timeoutMs:O.timeoutMs},...O.onProgress===void 0?{}:{onProgress:O.onProgress},...O.signal===void 0?{}:{signal:O.signal}})};return O.onResult?.(F),F}catch(F){const N=hi(F,"request failed");if(N.kind==="aborted"||!N.kind)throw N;const W=N.kind==="timeout"?{peerId:L,status:"timeout"}:N.kind==="disconnected"?{peerId:L,status:"disconnected"}:{peerId:L,status:"rejected",error:N};return O.onResult?.(W),W}}))),get onRequest(){return b},set onRequest(P){b=P,M()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(P){v(P)}};return g.onMessage((P,O,L)=>{const F=sf(L);F&&D(P,O,F.m,F.r)}),x.action=X,n[d]=x,M(),X},makeInternalAction:o,handleData:a,clearPeer:h}},of=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,af=i=>e=>{let t=i.get(e);return t||(t=Hr(20),i.set(e,t)),t},Kd=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,r=new Map,s=new Map;return{getStreamKey:af(i),getTrackKey:af(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,h)=>{const u={track:a,stream:c};r.set(o,u),l&&s.set(l,u),h&&n.set(h,c)},getRemoteTrack:(o,a)=>r.get(o)??(a?s.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),r.clear(),s.clear()}}},pS=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},r={},s=Kd(),o={onPeerStream:null,onPeerTrack:null},a=(h,u,f,d)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,f,typeof f.id=="string"?f.id:void 0),o.onPeerStream?.(f,h,d))},c=(h,u,f,d,p)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,f,d,typeof f.id=="string"?f.id:void 0,typeof d.id=="string"?d.id:void 0),o.onPeerTrack?.(f,d,h,p))},l=(h,u,f,d,p,_={})=>{const g={k:u,..._,...f===void 0?{}:{m:f}};return i(h,async(m,x)=>{await d(g,m),p(x)})};return{addStream:(h,u,f)=>l(u.target,s.getStreamKey(h),u.metadata,f,d=>d.addStream(h),{s:h.id}),removeStream:(h,u)=>{i(u,(f,d)=>d.removeStream(h))},addTrack:(h,u,f,d)=>l(f.target,s.getTrackKey(h),f.metadata,d,p=>p.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{i(u,(f,d)=>d.removeTrack(h))},replaceTrack:(h,u,f,d)=>l(f.target,s.getTrackKey(u),f.metadata,d,p=>p.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;const f=of(h);if(!f)return;const d=t(u)?.__trysteroMedia?.getRemoteStream(f.key,f.streamId);if(d){a(u,f.key,d,f.metadata);return}(n[u]??=[]).push(f)},receiveTrackMeta:(h,u)=>{if(!e(u))return;const f=of(h);if(!f)return;const d=t(u)?.__trysteroMedia?.getRemoteTrack(f.key,f.trackId);if(d){c(u,f.key,d.track,d.stream,f.metadata);return}(r[u]??=[]).push(f)},receiveRemoteStream:(h,u)=>{if(!e(h))return;const f=n[h]?.shift();f&&a(h,f.key,u,f.metadata)},receiveRemoteTrack:(h,u,f)=>{if(!e(h))return;const d=r[h]?.shift();d&&c(h,d.key,u,f,d.metadata)},clearPeer:h=>{delete n[h],delete r[h]},get onPeerStream(){return o.onPeerStream},set onPeerStream(h){o.onPeerStream=h},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(h){o.onPeerTrack=h}}},cf="beforeunload",mS=1e4,ai=i=>"@_"+i,ls=new Set,lf=()=>ls.forEach(i=>i()),gS=i=>(ls.add(i),ls.size===1&&addEventListener(cf,lf),()=>{ls.delete(i),ls.size||removeEventListener(cf,lf)});var _S=(i,e,t,{onPeerHandshake:n,onHandshakeError:r,handshakeTimeoutMs:s=mS,isPassive:o=!1}={})=>{const a={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let u=Vt,f=null;const d=(P,O,{includePending:L=!1}={})=>(P?Array.isArray(P)?P:[P]:ln(L?a:c)).flatMap(F=>{const N=L?a[F]:c[F];return N?[Promise.resolve(O(F,N))]:(console.warn(`${Sn}: no peer with id ${F} found`),[])}),p=pS({iterate:(P,O)=>d(P,(L,F)=>O(L,F)),isActive:P=>!!c[P],getSharedMediaPeer:P=>a[P]??null}),_=dS({getPeer:(P,O)=>(O?a:c)[P],getPeerIds:P=>ln(P?a:c),canReceiveFromPeer:(P,O)=>!!f?.canReceiveFromPeer(P,O)}),g=_.makeInternalAction,m=_.handleData,x=_.makeAction,y=(P,O=st("peer disconnected"))=>{const L=hi(O,"peer disconnected");f?.clearPeer(P,L),delete a[P],delete c[P],_.clearPeer(P,L),l[P]?.splice(0).forEach(F=>F.reject(L)),delete l[P],p.clearPeer(P)},v=(P,O,L)=>{const F=a[P];if(!F||O&&F!==O)return;const N=!!c[P];y(P,L),F.destroy(),N&&h.onPeerLeave?.(P),e(P)},E=async()=>{await D.send(""),await new Promise(P=>setTimeout(P,99)),Ui(a).forEach(([P,O])=>{O.destroy(),y(P,st("room left"))}),u(),t()},b=g(ai("ping")),w=g(ai("pong")),R=g(ai("signal")),S=g(ai("stream")),M=g(ai("track")),D=g(ai("leave"),{sendToPending:!0,receiveWhilePending:!0}),k=g(ai("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),X=g(ai("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=JM({...n===void 0?{}:{onPeerHandshake:n},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:k.send,sendHandshakeReady:X.send,onActivate:(P,O)=>{c[P]=O,h.onPeerJoin?.(P)},onFailure:(P,O,L)=>v(P,O,L)}),b.onMessage((P,O)=>w.send("",O)),w.onMessage((P,O)=>{const L=l[O];L?.shift()?.resolve(),L&&!L.length&&delete l[O]}),R.onMessage((P,O)=>{c[O]&&a[O]?.signal(P)}),S.onMessage((P,O)=>p.receiveStreamMeta(P,O)),M.onMessage((P,O)=>p.receiveTrackMeta(P,O)),D.onMessage((P,O)=>v(O,void 0,st("peer left room"))),k.onMessage((P,O,L)=>f?.receiveHandshakeData(P,O,L)),X.onMessage((P,O)=>f?.receiveHandshakeReady(O)),i((P,O)=>{const L=a[O];if(L){if(L===P)return;L.destroy(),y(O,st("peer replaced"))}a[O]=P,f?.addPeer(O,P),P.setHandlers({data:F=>m(O,F),stream:F=>p.receiveRemoteStream(O,F),track:(F,N)=>p.receiveRemoteTrack(O,F,N),signal:F=>{c[O]&&R.send(F,O)},close:()=>v(O,P,st("peer disconnected")),error:F=>{console.error(`${Sn} peer error:`,F),v(O,P,F)}}),f?.start(O,P)}),Vd&&(u=gS(()=>E().catch(Vt))),{makeAction:x,leave:E,ping:async P=>{if(!c[P])throw st(`no active peer with id ${P}`);const O=Date.now();return await new Promise((L,F)=>{const N=l[P]??=[],W=()=>{const B=l[P];if(!B)return;const te=B.indexOf(ie);te>-1&&B.splice(te,1),B.length||delete l[P]},ie={resolve:()=>{W(),L()},reject:B=>{W(),F(B)}};N.push(ie),b.send("",P).catch(B=>ie.reject(hi(B,"peer disconnected")))}),Date.now()-O},isPassive:()=>o,getPeers:()=>Gd(Ui(c).map(([P,O])=>[P,O.connection])),addStream:(P,O={})=>p.addStream(P,O,S.send),removeStream:(P,O={})=>{p.removeStream(P,O.target)},addTrack:(P,O,L={})=>p.addTrack(P,O,L,M.send),removeTrack:(P,O={})=>{p.removeTrack(P,O.target)},replaceTrack:(P,O,L={})=>p.replaceTrack(P,O,L,M.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(P){h.onPeerJoin=P,P&&ln(c).forEach(O=>P(O))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(P){h.onPeerLeave=P},get onPeerStream(){return p.onPeerStream},set onPeerStream(P){p.onPeerStream=P},get onPeerTrack(){return p.onPeerTrack},set onPeerTrack(P){p.onPeerTrack=P}}};const jd=1,$d=2,uf=(i,e)=>{const t=_i(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=jd,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},vS=(i,e)=>{const t=_i(i),n=new Uint8Array(4+t.byteLength);return n[0]=$d,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},xS=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===jd){const r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:Ni(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==$d||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Ni(e.subarray(4,n)),isPresent:e[1]===1}},Jd=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},yS=i=>{if(Jd(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var MS=class{byApp={};roomPresenceHandlers={};getMap(i){return this.byApp[i]??={}}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return Jd(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(vS(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],r=n?.[e];if(!r||r.isClosing)return;r.idleTimer=ct(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=vr(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete n[e],s.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),ln(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const r=this.getMap(i),s=r[e];if(s){if(s.idleTimer=ct(s.idleTimer),s.peer===t)return s;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Kd(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${Sn} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),r[e]=o,o}bind(i,e,t,{onDetach:n}){const r=t.bindings[i];if(r)return t.idleTimer=ct(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Vt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===i&&(t.controlRoomId=ln(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(uf(s.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(s.handlers,h),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(f=>u.rooms.add(f)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=a,s.detach=o,t.bindings[i]=s,t.controlRoomId??=i,t.idleTimer=ct(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l?.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(h=>t.peer.sendData(uf(c,h))),this.flushBindingQueues(s)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||ln(i.bindings).length>0||(i.idleTimer=ct(i.idleTimer),i.idleTimer=setTimeout(()=>{const e=this.byApp[i.appId]?.[i.peerId];!e||ln(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}const e=vr(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){const t=xS(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const r=i.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),i.pendingDataByToken.set(t.roomToken,r);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){vr(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}};const SS=23333,ES=12,TS=7533,bS=23333,_l="__legacy__",$o="offer-placeholder",wS=["offer","answer","candidate"],AS=i=>{if(typeof i=="string")try{const e=Nr(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},is=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,RS=i=>wS.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),Zd=(i,e,t,n,r,s)=>{i.toCipher(e).then(o=>{i.isLeaving()||!s()||n(t,tn(r(o.sdp)))})},CS=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),PS=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),LS=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${PS(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,ua=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:LS(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},Os=(i,e)=>i[e]??=CS(),fn=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},ko=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=ct(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,fn(i))},vl=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,fn(i))},su=(i,e)=>{i.offerRelayTimers[e]=ct(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,fn(i))},hf=(i,e)=>{i?.offerRelays[e]===$o&&su(i,e)},IS=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Fs=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=ct(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,r)=>su(i,r)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||IS(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,fn(i)},DS=(i,e,t,n)=>{ct(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==n||(r.answerSent&&ua(i,r,t),n.destroy(),ko(r,n),i.checkDeactivate())},bS)},NS=async(i,e,t)=>{const n=t?[t,_l]:[_l];for(const r of n){const s=i.pendingCandidates[r];if(s?.length){delete i.pendingCandidates[r];for(const o of s)await e.signal(o)}}},Qd=(i,e,t,n=ru)=>{ct(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&ua(i,s,t),Fs(s,i.offerPool),i.checkDeactivate())},n)},US=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const r=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!r)throw st("failed to allocate offer peer");const{peer:s,offer:o}=r;e.offerPeer=s,e.offerId=Hr(ES),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],fn(e);const a=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&ua(i,e,t),Fs(e,i.offerPool)),i.disconnectPeer(s,t),i.checkDeactivate()};return s.setHandlers({connect:()=>i.connectPeer(s,t,n),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),Qd(i,e,t),{peer:s,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),OS=async(i,e,t,n,r)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const s=i.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){hf(s,e);return}if(s.offerRelays[e]!==$o)return;const[o,a]=await Xi([Us(Ns(i.rootTopicPlaintext,t)),US(i,s,t,e)]);if(i.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==$o){hf(s,e);return}s.offerRelayTimers[e]=ct(s.offerRelayTimers[e]),s.offerRelays[e]=!0,fn(s),s.offerRelayTimers[e]=setTimeout(()=>zS(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||s.connectedPeer||s.offerPeer!==a.peer||s.offerId!==a.offerId||l.type!=="candidate"||Zd(i,l,o,r,h=>({peerId:Ot,offerId:a.offerId,candidate:h,...i.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===a.peer&&s.offerId===a.offerId))},r(o,tn({peerId:Ot,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>s.offerSignalRelays[e]?.(l))},FS=async(i,e,t,n,r,s,o)=>{const a=Os(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||s)&&Ot<t)return;c&&Fs(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,DS(i,a,t,l),fn(a);const h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&ua(i,a,t),ko(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{ko(a,l),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){ko(a,l);return}const f=await Us(Ns(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:d=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||d.type!=="answer"&&d.type!=="candidate"||Zd(i,d,f,o,p=>{const _={peerId:Ot};return d.type==="answer"?(a.answerSent=!0,_.answer=p):_.candidate=p,r&&(_.offerId=r),i.isPassive&&(_.passive=!0),_},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await NS(a,l,r))},BS=async(i,e,t,n,r)=>{let s;try{s=await i.toPlain({type:Wd,sdp:t})}catch{return}const o=Os(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,c=o?.answeringPeer??null,l=!n&&o?.offerPeer?o.offerPeer:null,h=r&&!r.isDead?r:a??c??l;if(!h||h.isDead){const u=n??_l;(o.pendingCandidates[u]??=[]).push(s);return}h.signal(s)},kS=async(i,e,t,n,r,s)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(s)i.offerPool.claimLeased(s),s.setHandlers({connect:()=>i.connectPeer(s,t,e),close:()=>i.disconnectPeer(s,t)}),s.signal(o);else{const a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||r&&a.offerId&&r!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,Qd(i,a,t,SS),a.offerPeer.signal(o)}},zS=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(su(n,t),i.checkDeactivate())},HS=i=>e=>async(t,n,r)=>{if(i.isLeaving())return;const s=AS(n);if(!s||RS(s))return;const o=is(s,"peerId")??"",a=is(s,"offer"),c=is(s,"answer"),l=is(s,"candidate"),h=is(s,"offerId"),u=s.peer,f=s.hasOutgoingOffer===!0,d=s.passive===!0;if(!o||o===Ot)return;const[p,_]=await Xi([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==p&&t!==_||i.isPassive&&d||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;const g=i.peerStates[o],m=g?.connectedPeer;if(m&&g){const v=yS(m);if(v==="live"){g.connectedPeerUnhealthySinceMs=null;return}if(v==="stale")vl(g);else{const E=Date.now(),b=g.connectedPeerUnhealthySinceMs??E;if(g.connectedPeerUnhealthySinceMs=b,E-b<TS)return;vl(g)}}let x=i.sharedPeers.get(i.appId,o);x&&i.sharedPeers.getHealth(x.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),x=void 0);const y=!!(o&&!a&&!c&&!l);if(y&&!x){const v=Os(i.peerStates,o),E=Ot<o;if(v.answeringPeer||v.connectedPeer||v.offerAnswered)return;if(!E&&!v.offerPeer){const b=await Us(Ns(i.rootTopicPlaintext,o));!i.isLeaving()&&!v.connectedPeer&&r(b,tn({peerId:Ot}));return}if(v.offerRelays[e])return;v.offerRelays[e]=$o,fn(v)}if(x&&(a||c||l)){if(x.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,x);return}if(y)return OS(i,e,o,x,r);if(a)return FS(i,e,o,a,h,f,r);if(l)return BS(i,o,l,h,u);if(c)return kS(i,e,o,c,h,u)},Po=5333,VS=[233,533,1333],GS=7533,WS=123333;var XS=({init:i,subscribe:e,announce:t,deactivate:n})=>{const r={},s={},o={},a={},c=new MS,l=()=>vr(r).some(E=>ln(E).length>0),h=E=>s[E]??={},u=E=>o[E]??={},f=(E,b,w)=>{c.getHealth(E.peer)==="live"&&c.sendRoomPresence(E,b,w)},d=(E,b)=>{Ui(s[E]??{}).forEach(([w,R])=>{if(!R.shouldAdvertise())return;const{roomToken:S,roomTokenPromise:M}=R;if(S){f(b,S,!0);return}M.then(D=>{s[E]?.[w]===R&&R.roomToken===D&&(c.get(E,b.peerId)!==b||b.isClosing||R.shouldAdvertise()&&f(b,D,!0))})})},p=(E,b,w)=>vr(c.getMap(E)).forEach(R=>f(R,b,w)),_=E=>{a[E]||(a[E]=c.setRoomPresenceHandler(E,(b,w,R)=>{if(!R)return;const S=c.get(E,b),M=o[E]?.[w];!S||!M||s[E]?.[M]?.attachSharedPeerToRoom(b,S)}))},g=E=>{r[E]&&ln(r[E]).length>0||(a[E]?.(),delete a[E],delete s[E],delete o[E])};let m=!1,x=[],y=null,v=Vt;return(E,b,w)=>{if(!E)throw st("requires a config map as the first argument");if(w&&typeof w!="object")throw st("third argument must be a callbacks object");const{appId:R}=E,S=w?.onJoinError,M=w?.onPeerHandshake,D=w?.handshakeTimeoutMs;if(!R)throw st("config map is missing appId field");if(!b)throw st("roomId argument required");if(D!==void 0&&(!Number.isFinite(D)||D<=0))throw st("handshakeTimeoutMs must be a positive number");if(r[R]?.[b])return r[R][b];_(R);const k=Ns(Sn,R,b),X=Us(k),P=Us(Ns(k,Ot)),O=VM(E.password??"",R,b),L=GM(R,b),F=E._test_only_sharedPeerIdleMs??WS;let N=!1;const W=le=>async ee=>({type:ee.type,sdp:await le(O,ee.sdp)}),ie=W(XM),B=W(WM),te=c.getMap(R),ye=()=>Qh(!0,E);let Ve=!1;y||=new KM(ye);const Fe=y,Z=async le=>{const ee=await le.getOffer(Date.now()-le.created>ru);if(!ee||ee.type!=="offer")throw st("failed to get offer for peer");return(await B(ee)).sdp},ce=(le,ee)=>{const he=Os(q.peerStates,le);he.answeringExpiryTimer=ct(he.answeringExpiryTimer),he.answeringPeer=null;const{proxy:Se,isNew:re}=c.bind(b,L,ee,{onDetach:()=>{const ve=q.peerStates[le];ve?.connectedPeer===ee.peer&&(ve.connectedPeer=null,ve.connectedPeerUnhealthySinceMs=null,fn(ve))}});he.connectedPeer=ee.peer,he.connectedPeerUnhealthySinceMs=null,fn(he),re&&C(Se,le),Fs(he,Fe)},we=(le,ee,he)=>{if(N){le.destroy();return}const Se=Os(q.peerStates,ee);if(Se.connectedPeer){const Ce=te[ee];if(Ce&&Se.connectedPeer===Ce.peer&&Ce.bindings[b])return;Se.connectedPeer!==le&&!le.isDead&&le.destroy();return}let re=te[ee];if(re&&c.getHealth(re.peer)==="stale"&&(c.clear(R,ee,{destroyPeer:!0}),re=void 0),re&&re.peer!==le){le.isDead||le.destroy(),ce(ee,re);return}const ve=!re;re||=c.register(R,ee,le,F),ce(ee,re),ve&&d(R,re)},Ie=(le,ee)=>{if(N)return;const he=q.peerStates[ee];he?.connectedPeer===le&&(vl(he),Y(),!xe&&Ve&&q.requeueAnnounce?.())},xe=!!E.passive;let ze=null,fe,I=Vt;const Y=()=>{if(!xe||!q.isActive)return;let le=!1;Ui(q.peerStates).forEach(([ee,he])=>{he.connectedPeer||he.answeringPeer||he.offerInitPromise||he.offerPeer||he.offerRelays.some(Boolean)?le=!0:he.status==="idle"&&delete q.peerStates[ee]}),le||(q.isActive=!1,fe=ct(fe),Oe.forEach(ct),Oe.length=0,I(),ze?.roomToken&&p(R,ze.roomToken,!1))},q={appId:R,roomId:b,config:E,peerStates:{},rootTopicPlaintext:k,rootTopicP:X,selfTopicP:P,toPlain:ie,toCipher:B,isLeaving:()=>N,isPassive:xe,isActive:!xe,onJoinError:S,sharedPeers:c,offerPool:Fe,encryptOffer:Z,initPeer:Qh,connectPeer:we,disconnectPeer:Ie,attachSharedPeerToRoom:ce,checkDeactivate:Y,announceIntervals:[],announceIntervalMs:Po},ne={config:E,appId:R,roomId:b,isPassive:xe},$=HS(q);if(!m){const le=i(E);x=(Array.isArray(le)?le:[le]).map(ee=>Promise.resolve(ee)),m=!0,v=E.relayConfig?.manualReconnection?Vt:BM()}!xe&&!Fe.isActive&&Fe.warmup(),q.announceIntervals=x.map(()=>Po);const se=x.map(()=>Po),oe=x.map(()=>0),de=x.map(()=>0),Oe=[],Te=x.map(async(le,ee)=>e(await le,await X,await P,$(ee),he=>Fe.getOffers(he,Z),ne));Xi([X,P]).then(([le,ee])=>{if(N)return;const he=async(Se,re)=>{if(N||xe&&!q.isActive)return;const ve=xe?{passive:!0}:void 0;let Ce;try{Ce=await t(Se,le,ee,ve,ne),de[re]=0}catch(z){const pe=de[re]??0;pe===0&&E.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Sn}: announce failed - ${Dr(z,"")}`),de[re]=pe+1}if(N||xe&&!q.isActive||Ce&&typeof Ce!="number"&&"stopAnnouncing"in Ce)return;typeof Ce=="number"?(q.announceIntervals[re]=Ce,se[re]=Ce):Ce&&(se[re]=Ce.nextAnnounceMs,Ve||=Ce.reannounceOnDisconnect===!0);const De=oe[re]??0;oe[re]=De+1;const Ee=se[re]??Po,Xe=VS[De];Oe[re]=setTimeout(()=>{he(Se,re)},typeof Xe=="number"?Math.min(Ee,Xe):Ee)};I=()=>{n&&x.forEach(async Se=>{const re=await Se;N||n(re,le,ee,ne)})},q.requeueAnnounce=()=>{Oe.forEach(ct),Oe.length=0,fe=ct(fe),Fe.isActive||Fe.warmup(),ze?.roomToken&&p(R,ze.roomToken,!0),fe=setTimeout(Y,GS),x.forEach(async(Se,re)=>{const ve=await Se;ve&&!N&&(oe[re]=0,he(ve,re))})},Te.forEach(async(Se,re)=>{if(await Se,N)return;const ve=await x[re];ve&&!N&&(!xe||q.isActive)&&he(ve,re)})});let C=Vt;const{compose:T}=jM(E.password??"",R,b),G=T(M),J={...G?{onPeerHandshake:G}:{},...D===void 0?{}:{handshakeTimeoutMs:D},isPassive:xe,onHandshakeError:(le,ee)=>S?.({error:ee.replace(/^handshake failed: /,""),appId:R,peerId:le,roomId:b})};r[R]??={};const ue=h(R),Q=_S(le=>C=le,le=>{if(N)return;const ee=q.peerStates[le];ee?.connectedPeer&&(ee.connectedPeer=null,fn(ee),Y())},()=>{N=!0,C=Vt;const le=s[R]?.[b];le?.roomToken&&(p(R,le.roomToken,!1),delete o[R]?.[le.roomToken],o[R]&&!ln(o[R]).length&&delete o[R]),s[R]&&(delete s[R][b],ln(s[R]).length||delete s[R]),Ui(q.peerStates).forEach(([ee,he])=>{if(he.answeringExpiryTimer=ct(he.answeringExpiryTimer),he.connectedPeer&&!he.connectedPeer.isDead){const Se=te[ee];(!Se||Se.peer!==he.connectedPeer)&&he.connectedPeer.destroy()}he.answeringPeer&&!he.answeringPeer.isDead&&he.answeringPeer.destroy(),Fs(he,Fe),he.connectedPeer=null,he.answeringPeer=null,fn(he)}),r[R]&&(delete r[R][b],ln(r[R]).length===0&&delete r[R]),Oe.forEach(ct),fe=ct(fe),Te.forEach(async ee=>{(await ee)()}),!l()&&(m=!1,Fe.destroy(),y=null,v(),g(R))},J);return ze={roomToken:null,roomTokenPromise:L,attachSharedPeerToRoom:ce,shouldAdvertise:()=>!xe||q.isActive},ue[b]=ze,L.then(le=>{const ee=ze;!ee||N||s[R]?.[b]!==ee||(ee.roomToken=le,u(R)[le]=b,vr(te).forEach(he=>{he.remoteRoomTokens.has(le)&&ce(he.peerId,he)}),(!xe||q.isActive)&&p(R,le,!0))}),r[R][b]=Q}};const qS=["offer","answer","candidate"],YS=6e4,KS=i=>{if(typeof i=="string")try{const e=Nr(i);return e&&typeof e=="object"?e:null}catch{return null}return i},cc=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,jS=i=>qS.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),$S=i=>{const e=KS(i);if(!e||jS(e))return!1;const t=cc(e,"peerId");return!!(t&&t!==Ot&&e.passive!==!0&&!cc(e,"answer")&&!cc(e,"candidate"))},lc=i=>{if(!i)throw st("topic strategy missing room context");return i},ff=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),uc=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var JS=({steadyAnnounceIntervalMs:i=YS,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:r,unpublishTopic:s})=>XS({init:t,subscribe:async(o,a,c,l,h,u)=>{const f=lc(u),d=(E,b)=>{r(o,E,b,uc(f,"signal",a,c))};let p=null,_=!1,g=null,m=!1;const x=E=>{_||(_=!0,E())},y=()=>(g||(g=Promise.resolve(n(o,c,(E,b)=>{m||l(E,b,d)},ff(f,"self",a,c))).then(E=>{p=E,m&&x(E)})),g);f.isPassive||await y();const v=await n(o,a,async(E,b)=>{m||(f.isPassive&&$S(b)&&await y(),m||await l(E,b,d))},ff(f,"root",a,c));return()=>{m=!0,p&&x(p),v()}},announce:async(o,a,c,l,h)=>{const u=lc(h),f=await r(o,a,tn({peerId:Ot,...l}),uc(u,"announce",a,c));return typeof f=="number"||f!==void 0&&"stopAnnouncing"in f?f:{nextAnnounceMs:f?.nextAnnounceMs??i,reannounceOnDisconnect:f?.reannounceOnDisconnect??e}},...s?{deactivate:(o,a,c,l)=>{const h=lc(l);return s(o,a,uc(h,"announce",a,c))}}:{}});const ep=FM(i=>i.socket),ZS=5,tp="x",np="EVENT",{secretKey:QS,publicKey:eE}=Hd.keygen(),tE=Ds(eE),nE={},iE={},rE={},df=250,Jo=6e4,sE=15*6e4,oE=5333,Bs=new WeakMap,xl=new WeakSet,Oi=new WeakMap,pf=i=>{const e=Bs.get(i),t=Math.min(e?.delayMs?Math.max(Jo,e.delayMs*2):Jo,sE);return Bs.set(i,{delayMs:t,untilMs:Date.now()+t}),t},aE=i=>{const e=Bs.get(i);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},hc=i=>({nextAnnounceMs:i}),cE={stopAnnouncing:!0},lE=i=>{if(xl.has(i))return!1;const e=Oi.get(i);return e&&(clearTimeout(e.timer),Oi.delete(i)),xl.add(i),Bs.delete(i),i.close?.(),!0},uE=(i,e)=>{const t=Oi.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));const n=t?.eventIds??new Set([e]),r=setTimeout(()=>{Oi.delete(i)},oE);Oi.set(i,{eventIds:n,timer:r})},hE=(i,e)=>{const t=Oi.get(i);return t?.eventIds.has(e)?(clearTimeout(t.timer),Oi.delete(i),!0):!1},ip=()=>Math.floor(Date.now()/1e3),rp=i=>rE[i]??=Xd(i,1e4)+2e4,fE=async(i,e)=>{const t={kind:rp(i),tags:[[tp,i]],created_at:ip(),content:e,pubkey:tE},n=await la("SHA-256",tn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return tn([np,{...t,id:Ds(n),sig:Ds(await Hd.signAsync(n,QS))}])},Gi={},sp=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},dE=(i,e,t)=>{const n=Gi[i.url]??={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set};n.topics.set(e,t),op(i,n)},pE=(i,e)=>{const t=Gi[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),sp(t),t.subIds.forEach(n=>i.send(tn(["CLOSE",n]))),delete Gi[i.url]):op(i,t))},op=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{ap(i)}finally{sp(e)}},0))},mE=i=>{const e=Gi[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},ap=i=>{const e=Gi[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],r=ip();for(let s=0;s<t.length;s+=df)n.push(t.slice(s,s+df));for(;e.subIds.length>n.length;){const s=e.subIds.pop();s&&i.send(tn(["CLOSE",s]))}n.forEach((s,o)=>{const a=e.subIds[o]??=Hr(64);i.send(tn(["REQ",a,{kinds:[...new Set(s.map(rp))],since:r,"#x":s}]))})},gE=i=>{const e=Gi[i.url];e&&e.topics.size>0&&ap(i)},_E=JS({init:i=>DM(i,xE,ZS,!0).map(e=>{const t=ep.register(e,()=>OM(e,n=>{const[r,s,o,a]=Nr(n);if(r!==np){const c=`${Sn}: relay failure from ${t.url} - `,l=r==="CLOSED"&&typeof o=="string"?o:a,h=r==="OK"&&o===!1,u=h&&l?.startsWith("rate-limited:"),f=h&&l?.startsWith("duplicate:"),d=r==="CLOSED"||h&&!u&&!f,p=r==="OK"&&hE(t,s);if(d&&!lE(t))return;u?pf(t):p&&Bs.delete(t),!f&&i.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(c+s):(h||r==="CLOSED")&&console.warn(c+l));return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=iE[s];if(l){l(nE[s]??"",c);return}const h=Gi[t.url];if(h?.subIds.includes(s)&&o.tags){const u=o.tags.find(f=>f[0]===tp);u?.[1]&&h.topics.get(u[1])?.(u[1],c)}}},()=>gE(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{dE(i,e,(o,a)=>{t(o,a)});const s=()=>{pE(i,e)};return n.kind==="root"?mE(i).then(()=>s):s},publishTopic:async(i,e,t,n)=>{if(xl.has(i)||i.isClosed)return n.kind==="announce"?cE:void 0;if(n.kind==="announce"){const a=aE(i);if(a>0)return hc(Math.max(Jo,a))}const r=await fE(e,typeof t=="string"?t:tn(t)),s=i.socket.readyState===1;if(i.send(r),n.kind!=="announce")return;if(!s)return hc(pf(i));const o=Nr(r)[1].id;return uE(i,o),hc(Jo)}}),vE=ep.getSockets,xE=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i);function yE({self:i,neighbors:e,send:t,deliver:n,nonce:r=Math.random().toString(36).slice(2)}){const s=new Set;let o=0;function a(u){return s.has(u)?!1:(s.add(u),s.size>4096&&s.delete(s.values().next().value),!0)}function c(u){if(!(u.path.length>=4))for(const f of e())u.path.includes(f)||t(u,f)}function l(u,f){const d={id:`${i}:${r}:${++o}`,origin:i,kind:u,data:f,path:[i]};a(d.id),c(d)}function h(u,f){!u||!["pose","objects"].includes(u.kind)||typeof u.id!="string"||u.id.length>180||typeof u.origin!="string"||u.origin.length>100||u.origin===i||!Array.isArray(u.path)||u.path.length<1||u.path.length>4||u.path[0]!==u.origin||u.path.at(-1)!==f||u.path.includes(i)||u.path.some(d=>typeof d!="string"||d.length>100)||new Set(u.path).size!==u.path.length||JSON.stringify(u).length>24e3||!a(u.id)||(n(u.kind,u.data,u.origin),c({...u,path:[...u.path,i]}))}return{publish:l,receive:h}}const Zo=i=>i==="dog"?"dog":"cat";function yl(i,e=15964831,t="cat"){t=Zo(t);const n=new en,r=new xt({color:t==="cat"?15708281:14260849,roughness:.48,metalness:0}),s=new xt({color:16777215,roughness:.65}),o=new xt({color:2198161,roughness:.6}),a=new xt({color:t==="cat"?15047280:10771779,roughness:.6});function c(y,v,E=r){const b=new Qe(y,E);return b.position.set(...v),b.castShadow=!0,n.add(b),b}const l=c(new Vl(.25,.32,6,20),[0,.88,0],s);function h(y,v,E=s){const b=new Qe(y,E);return b.position.set(...v),l.add(b),b}h(new Kt(.012,.49,.018),[0,-.04,-.252],new xt({color:12966362})),h(new Kt(.105,.035,.022),[-.12,.09,-.234],o),h(new Kt(.035,.105,.022),[-.12,.09,-.234],o);for(const y of[-1,1]){const v=h(new Kt(.12,.18,.025),[y*.075,.25,-.21]);v.rotation.z=y*-.45}const u=c(new qn(.43,24,16),[0,1.65,0]);for(const y of[-1,1]){const v=new Qe(t==="cat"?new Yo(.16,.32,4,1):new qn(1,16,12),t==="cat"?r:a);if(v.position.set(y*(t==="cat"?.28:.41),t==="cat"?.34:.055,0),t==="cat"?(v.rotation.z=y*-.25,v.rotation.y=Math.PI/4,v.scale.z=.6):(v.scale.set(.12,.31,.13),v.rotation.z=y*.35),u.add(v),t==="cat"){const E=new Qe(new Yo(.105,.21,3),a);E.position.set(0,-.02,-.066),v.add(E)}}const f=new xt({color:3152675,roughness:.6});for(const y of[-.15,.15]){const v=new Qe(new qn(.072,12,10),f);v.position.set(y,.045,-.386),v.scale.set(.85,1.5,.48),u.add(v)}const d=[-.56,.56].map(y=>c(new qn(.14,16,12),[y,.8,-.06])),p=document.createElement("canvas");p.width=512,p.height=80;const _=p.getContext("2d");_.fillStyle="#123142dd",_.fillRect(0,0,512,80),_.fillStyle="#fff",_.font="bold 36px Arial",_.textAlign="center",_.textBaseline="middle",_.fillText(i,256,40,490);const g=new wr(p);g.colorSpace=vt;const m=new ig(new jf({map:g}));m.position.y=2.3,m.scale.set(1.9,.3,1),n.add(m),n.userData.texture=g,n.userData.character=t;const x=new Set;return n.traverse(y=>{y.isMesh&&x.add(y.material)}),n.userData.proximity=y=>{const v=St.clamp(y/.9,.08,1);for(const E of x){const b=v<1;E.transparent!==b&&(E.transparent=b,E.needsUpdate=!0),E.opacity=v,E.depthWrite=!b}},n.userData.animate=(y,v=0,E=null,b=1.65,w=0)=>{const R=Math.sin(y*(v>.1?9:2.4))*(v>.1?.035:.014);u.position.y=St.clamp(b,.9,2.25)+R,u.rotation.x=w,l.position.y=u.position.y-.77,d.forEach((S,M)=>{E?.[M]?S.position.copy(n.worldToLocal(new U(...E[M]))):S.position.set(M?.56:-.56,l.position.y-.08+R,-.06+Math.sin(y*8+M*Math.PI)*Math.min(v,1)*.15)})},n}function mf(i){i.removeFromParent();const e=new Set,t=new Set;i.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),i.userData.texture.dispose()}const cp="DERMAVR",lp=i=>String(i||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8),ME=i=>lp(new URLSearchParams(i).get("room"))||cp;function SE({online:i,joining:e,error:t,peers:n,relays:r,failed:s,elapsed:o}){return i?t?{state:"error",short:"no conectado",detail:"No se pudo iniciar la conexión. Pulsa Reconectar."}:n>0?{state:"connected",short:`${n+1} participantes`,detail:`Recibes a ${n} ${n===1?"participante":"participantes"}. Usa Encontrar para acercarte.`}:e||o<8e3?{state:"waiting",short:"conectando…",detail:"Conectando y buscando participantes…"}:r?s?{state:"error",short:"conexión incompleta",detail:"Se detectó otra conexión, pero no pudo completarse. Esta red puede necesitar el servidor central de la sala."}:{state:"waiting",short:"solo tú por ahora",detail:"Todavía no recibes a nadie. Abre el mismo enlace en el otro celular. Si ambos siguen solos, pulsa Reconectar."}:{state:"error",short:"sin conexión de sala",detail:"No hay conexión con los servicios de encuentro. Comprueba Internet y pulsa Reconectar."}:{state:"offline",short:"sin Internet",detail:"Sin Internet. Volveremos a conectar cuando regrese la red."}}function EE({endpoint:i,id:e,code:t,resume:n=crypto.randomUUID(),onStatus:r=()=>{},Socket:s=WebSocket}){const o=new URL(`/rooms/${encodeURIComponent(t)}`,i);if(o.searchParams.set("id",e),o.searchParams.set("resume",n),!["wss:","ws:"].includes(o.protocol)||o.protocol==="ws:"&&!["127.0.0.1","localhost"].includes(o.hostname))throw new Error("El servidor debe usar WSS.");const a=new Set,c=new Map;let l,h=!1,u=!1,f=0,d,p,_,g=0,m="connecting",x="";const y={isServer:!0,onPeerJoin:()=>{},onPeerLeave:()=>{},getPeers:()=>Object.fromEntries([...a].map(w=>[w,!0])),getState:()=>({state:m,error:x}),makeAction(w){if(!["pose","objects"].includes(w))throw new Error("Acción no admitida.");return c.has(w)||c.set(w,{onMessage:()=>{},async send(R,S={}){!u||l.readyState!==1||l.bufferedAmount>64e3||l.send(JSON.stringify({type:"action",action:w,data:R,...S.target?{target:S.target}:{}}))}}),c.get(w)},async leave(){h=!0,clearTimeout(d),clearTimeout(p),clearInterval(_),u=!1,a.clear(),m="closed",!(!l||l.readyState===3)&&await new Promise(w=>{const R=setTimeout(w,1200);l.addEventListener("close",()=>{clearTimeout(R),w()},{once:!0}),l.close(1e3,"Leaving room")})}};function v(w){m=w,r(w)}function E(w){typeof w!="string"||w===e||a.has(w)||a.size>=100||(a.add(w),y.onPeerJoin(w))}function b(){if(h)return;u=!1,x="",v(f?"reconnecting":"connecting");let w;try{w=l=new s(o.href)}catch{x="El navegador no pudo abrir la conexión con la sala.",clearInterval(_),v("error");return}p=setTimeout(()=>{!u&&w===l&&w.close(4e3,"Connection timeout")},15e3),w.addEventListener("message",R=>{if(h||w!==l||(g=Date.now(),R.data==="pong")||typeof R.data!="string"||R.data.length>32e3)return;let S;try{S=JSON.parse(R.data)}catch{return}S.type==="welcome"&&Array.isArray(S.peers)?(clearTimeout(p),u=!0,f=0,v("connected"),S.peers.slice(0,100).forEach(E)):S.type==="join"&&u?E(S.id):S.type==="leave"?a.delete(S.id)&&y.onPeerLeave(S.id):S.type==="action"&&u&&(a.has(S.peerId)||S.peerId==="server")?c.get(S.action)?.onMessage(S.data,{peerId:S.peerId}):S.type==="error"&&(x=String(S.message||"El servidor rechazó la conexión.").slice(0,180),r())}),w.addEventListener("error",()=>{w===l&&(x||="No se pudo contactar con el servidor.",r())}),w.addEventListener("close",R=>{if(!(h||w!==l)){clearTimeout(p),u=!1;for(const S of[...a])a.delete(S),y.onPeerLeave(S);if([1008,4003,4009,4029].includes(R.code)){v("error");return}v("reconnecting"),d=setTimeout(b,Math.min(15e3,1e3*2**Math.min(f++,4))+Math.random()*500)}})}return _=setInterval(()=>{if(!(l?.readyState!==1||!u))if(Date.now()-g>45e3)l.close(4e3,"Heartbeat timeout");else try{l.send("ping")}catch{l.close(4e3,"Heartbeat failed")}},2e4),queueMicrotask(b),y}function TE(i,e){return!i||i.name!==e.name||i.character!==e.character||["x","z","elevation","headY","yaw","pitch"].some(t=>Math.abs((i[t]||0)-(e[t]||0))>.02)?!0:JSON.stringify(i.hands)!==JSON.stringify(e.hands)}const fc="wss://fiction-wife-martin-observations.trycloudflare.com";function bE({scene:i,renderer:e,camera:t,controllers:n,objects:r,menu:s,say:o,welcome:a,myColor:c,getCharacter:l,getElevation:h=()=>0,onLocate:u=()=>{}}){const f=new Map,d=new Set,p=document.querySelector("#player-name"),_=document.querySelector("#room-code"),g=document.querySelector("#room-message"),m=document.querySelector("#people-count"),x=document.querySelector("#connection-state"),y=document.querySelector("#participant-list"),v=document.querySelector("#room-status"),E=document.querySelector("#network-detail");let b,w,R,S="",M=0,D=0,k=0,X=-1/0,P=0,O=!1,L=!1,F=!1,N=0,W=null,ie=0;const B=crypto.randomUUID();let te=Promise.resolve();function ye(){const fe=b;return b=null,R=null,w=null,fe&&(te=te.then(()=>fe.leave()).catch(()=>{})),te}let Ve;try{Ve=localStorage.getItem("oseoverse-name")}catch{}p.value=Ve||`Visitante ${Math.floor(100+Math.random()*900)}`;const Fe=fe=>{const I=f.get(fe);I&&mf(I.group),f.delete(fe)};function Z(){if(!S)return;const fe=Object.keys(b?.getPeers()||{});m.textContent=String(f.size+1);const I=b?.isServer?b.getState():null,Y=I?+(I.state==="connected"):Object.values(vE()).filter($=>$.readyState===1).length,q=SE({online:navigator.onLine,joining:O||["connecting","reconnecting"].includes(I?.state),error:L||I?.state==="error",peers:f.size,relays:Y,failed:d.size,elapsed:performance.now()-X});x.textContent=q.detail,I&&I.state!=="connected"&&(x.textContent=I.error||"Conectando con el servidor de la sala…"),v.textContent=`${S} · ${q.short}`,v.dataset.state=q.state,E.textContent=I?`Servidor central: ${I.state==="connected"?"conectado":I.state==="error"?"sin conexión":"reconectando"} · versión 6${fc.includes(".trycloudflare.com")?" · Prueba temporal: mantener encendido el PC anfitrión.":""}`:`Conexión directa de prueba · servicios de encuentro: ${Y} · conexiones: ${fe.length} · versión 6`,y.replaceChildren();const ne=document.createElement("li");ne.textContent=`${p.value||"Visitante"} (tú)`,y.appendChild(ne);for(const[$,se]of f){const oe=document.createElement("li"),de=document.createElement("button"),Oe=Math.round(se.destination.distanceTo(t.getWorldPosition(new U)));oe.textContent=`${se.name} · ${Oe} m `,de.textContent="Encontrar",de.setAttribute("aria-label",`Encontrar a ${se.name}`),de.addEventListener("click",()=>{const Te=f.get($);Te&&u(Te)}),oe.appendChild(de),y.appendChild(oe)}}function ce(){const fe=e.xr.isPresenting?e.xr.getCamera():t,I=fe.getWorldDirection(new U),Y=fe.getWorldPosition(new U),q=["left","right"].map($=>{const se=n.find(oe=>oe.userData.handedness===$&&oe.userData.connected);return e.xr.isPresenting&&se?se.getWorldPosition(new U).toArray():null}),ne=h();return{character:l(),seq:++D,x:Y.x,z:Y.z,elevation:ne,yaw:Math.atan2(-I.x,-I.z),pitch:Math.asin(St.clamp(I.y,-1,1)),headY:Y.y-ne,hands:q,name:p.value.trim().slice(0,18)||"Visitante",color:c}}function we(fe,I=!1){if(!w)return;const Y=ce();if(b?.isServer){const q=performance.now();if(!fe&&q-ie<5e3&&!TE(W,Y))return;W=Y,ie=q,w.send(Y,fe?{target:fe}:void 0).catch(()=>{});return}R?.publish("pose",Y),(fe||I)&&w.send(Y,fe?{target:fe}:void 0).catch(()=>{})}function Ie(fe,I){if(I===Ot||!fe||![fe.x,fe.z,fe.yaw].every(Number.isFinite))return;let Y=f.get(I);if(Y&&Number.isSafeInteger(fe.seq)&&fe.seq<=Y.seq)return;const q=String(fe.name||"Visitante").slice(0,18);if(Y&&(Y.group.userData.character!==Zo(fe.character)||Y.name!==q)){Y.name=q;const $=yl(Y.name,fe.color,fe.character);$.position.copy(Y.group.position),$.rotation.copy(Y.group.rotation),mf(Y.group),Y.group=$,i.add($)}if(!Y){const $=Number.isInteger(fe.color)&&fe.color>=0&&fe.color<=16777215?fe.color:15964831,se=String(fe.name||"Visitante").slice(0,18),oe=yl(se,$,fe.character);i.add(oe),oe.position.set(St.clamp(fe.x,-37,un.x),0,St.clamp(fe.z,-39,un.z)),Y={group:oe,name:se,destination:oe.position.clone(),yaw:0,headY:1.65,pitch:0,hands:null,seq:-1},f.set(I,Y)}Y.seq=Number.isSafeInteger(fe.seq)?fe.seq:Y.seq,Y.lastSeen=performance.now(),d.delete(I);const ne=Number.isFinite(fe.elevation)?St.clamp(fe.elevation,0,8):0;Y.destination.set(St.clamp(fe.x,-37,un.x),ne,St.clamp(fe.z,-39,un.z)),Y.yaw=fe.yaw,Y.headY=Number.isFinite(fe.headY)?St.clamp(fe.headY,.9,2.25):1.65,Y.pitch=Number.isFinite(fe.pitch)?St.clamp(fe.pitch,-1.4,1.4):0,Y.hands=Array.isArray(fe.hands)&&fe.hands.length===2?fe.hands.map($=>Array.isArray($)&&$.length===3&&$.every(se=>Number.isFinite(se)&&Math.abs(se)<=90)?$:null):null,m.textContent=String(f.size+1),F=!0,N=0}async function xe(fe,I=!1){const Y=lp(fe);if(!Y){g.textContent="Escribe el código de sala.";return}const q=++M;O=!0,L=!1,I||(F=!1,N=0),r.release();const ne=ye();for(const se of f.keys())Fe(se);d.clear(),S=Y,X=performance.now();try{localStorage.setItem("oseoverse-name",p.value.trim().slice(0,18))}catch{}_.value=S;const $=new URL(location.href);$.searchParams.set("room",S),history.replaceState(null,"",$),Z();try{if(await ne,q!==M)return;const se=fc?EE({endpoint:fc,id:Ot,code:S,resume:B,onStatus:Te=>{q===M&&(Te==="connected"&&(W=null,ie=0,we()),Z())}}):_E({appId:"oseoverse-campus-v3",relayConfig:{urls:["wss://top.testrelay.top","wss://nos.lol","wss://relay.mostro.network"]}},S,{onJoinError:Te=>{q===M&&(d.add(Te.peerId||"unknown"),Z())}});b=se,O=!1,w=se.makeAction("pose");const oe=se.makeAction("objects"),de=se.isServer?null:se.makeAction("mesh"),Oe=se.isServer?null:yE({self:Ot,neighbors:()=>Object.keys(se.getPeers()),send:(Te,C)=>{q===M&&de.send(Te,{target:C}).catch(()=>{})},deliver:(Te,C,T)=>{q===M&&(Te==="pose"?Ie(C,T):r.receive(C,T))}});R=Oe,de&&(de.onMessage=(Te,{peerId:C})=>{q===M&&Oe.receive(Te,C)}),w.onMessage=(Te,{peerId:C})=>{q===M&&Ie(Te,C)},oe.onMessage=(Te,{peerId:C})=>{q===M&&r.receive(Te,C)},r.setNetwork(Te=>(Oe?.publish("objects",Te),oe.send(Te).catch(()=>{})),I),W=null,ie=0,se.onPeerJoin=Te=>{q===M&&(d.delete(Te),se.isServer||(we(Te),Oe.publish("objects",r.snapshot()),oe.send(r.snapshot(),{target:Te}).catch(()=>{})),g.textContent=`Sala ${S} · enlace con otro participante establecido`,Z(),o("Se conectó otro participante. Abre la sala para encontrarlo."))},se.onPeerLeave=Te=>{q===M&&(se.isServer&&(Fe(Te),r.peerLeft(Te)),Z())},document.querySelector("#copy-link").hidden=!1,document.querySelector("#reconnect").hidden=!1,g.textContent=`Sala ${S}. Comparte este enlace para entrar juntos.`,s.open=!1,Z(),I?o("Restableciendo la conexión de la sala…"):a.show(S)}catch(se){if(q!==M)return;++M,O=!1,L=!0,ye(),r.setNetwork(null,I),g.textContent=`No se pudo conectar: ${se.message}`,Z()}}function ze(){S&&navigator.onLine&&(!b||performance.now()-X>3e3)&&xe(S,!0)}return document.querySelector("#join-room").addEventListener("click",()=>xe(_.value)),document.querySelector("#create-room").addEventListener("click",()=>xe(Math.random().toString(36).slice(2,8))),document.querySelector("#join-lobby").addEventListener("click",()=>xe(cp)),v.addEventListener("click",()=>{s.open=!s.open,Z()}),document.querySelector("#reconnect").addEventListener("click",ze),_.addEventListener("keydown",fe=>{fe.key==="Enter"&&xe(_.value)}),p.addEventListener("change",()=>{try{localStorage.setItem("oseoverse-name",p.value.trim().slice(0,18))}catch{}we(void 0,!0),Z()}),document.querySelector("#copy-link").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),g.textContent="Enlace copiado."}catch{g.textContent=location.href}}),window.addEventListener("pagehide",()=>{r.release(),++M,ye()}),window.addEventListener("pageshow",fe=>{fe.persisted&&ze()}),window.addEventListener("online",ze),window.addEventListener("offline",Z),document.addEventListener("visibilitychange",()=>{document.hidden?(P=performance.now(),r.release()):(P&&performance.now()-P>1e4?ze():we(void 0,!0),P=0)}),setInterval(()=>{if(!b){Z();return}we(void 0,!0);for(const[fe,I]of f)performance.now()-I.lastSeen>2e4&&(Fe(fe),r.peerLeft(fe));Z(),!b.isServer&&!document.hidden&&navigator.onLine&&!O&&!f.size&&!Object.keys(b.getPeers()).length&&(d.size||F)&&N<3&&performance.now()-X>45e3*(N+1)&&(N++,ze())},1e3),xe(ME(location.search)),{peers:f,sessionStarted:()=>{a.show(S||"OSEOVERSE"),we(void 0,!0)},update:()=>{b&&performance.now()-k>(b.isServer?400:150)&&(we(),k=performance.now())}}}function wE(i,e,t){const n=document.querySelector("#welcome"),r=document.querySelector("#welcome-room"),s=document.createElement("canvas");s.width=1024,s.height=320;const o=s.getContext("2d"),a=new wr(s);a.colorSpace=vt;const c=new Qe(new ei(1.5,.47),new Et({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));c.renderOrder=100,c.visible=!1,i.add(c);let l=0,h="OSEOVERSE";function u(d=h){h=d,l=performance.now()+5e3,r.textContent=d,n.hidden=!1,o.fillStyle="#102e3cf2",o.fillRect(0,0,1024,320),o.textAlign="center",o.fillStyle="#8ff0d5",o.font="bold 48px Arial",o.fillText("BIENVENIDO A LA SALA",512,85),o.fillStyle="#fff",o.font="bold 70px Arial",o.fillText(d,512,182,950),o.font="32px Arial",o.fillText("Explora · participa · comparte",512,260),a.needsUpdate=!0}function f(){const d=l-performance.now(),p=Math.min(1,Math.max(0,d/600));if(n.hidden=d<=0||e.xr.isPresenting,n.style.opacity=p,c.visible=d>0&&e.xr.isPresenting,c.visible){const _=e.xr.getCamera();_.getWorldPosition(c.position),_.getWorldQuaternion(c.quaternion),c.position.add(new U(0,.25,-2).applyQuaternion(c.quaternion)),c.material.opacity=p}}return{show:u,update:f}}function AE(i,e,t,n=.24){const r=(a,c)=>t.some(l=>a>l.minX-n&&a<l.maxX+n&&c>l.minZ-n&&c<l.maxZ+n),s=r(e.x,i.z)?i.x:e.x,o=r(s,e.z)?i.z:e.z;return{x:s,z:o}}function up(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Rt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in s){const u=gf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const p=gf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function gf(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new Ut(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){const _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}function _f(i,e){if(e===im)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===rl||e===Ff){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===rl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function RE(i){const e=new en;e.name="Techo tecnológico · módulos y luminarias",e.userData.fallRoof=!0,i.add(e);const t={frame:new xt({color:2112080,roughness:.42,metalness:.45}),recess:new Et({color:4215654}),panel:new Et({color:13229032}),silver:new xt({color:9086909,roughness:.38,metalness:.45}),cyan:new Et({color:6810367}),white:new Et({color:15464959})},n=new Map;function r(u,f){n.has(u)||n.set(u,[]),n.get(u).push(f)}function s(u,f,d,p,_,g,m){r(u,new Kt(_,g,m).translate(f,d,p))}function o(u,f,d,p,_=p){const g=new U(...f),m=new U(...d),x=m.clone().sub(g),y=new Kt(p,x.length(),_);y.applyQuaternion(new En().setFromUnitVectors(new U(0,1,0),x.normalize())),y.translate(...g.add(m).multiplyScalar(.5).toArray()),r(u,y)}function a(u,f,d,p,_,g,m,x=.22){const y=new ad;[[-_/2+x,-g/2],[_/2-x,-g/2],[_/2,-g/2+x],[_/2,g/2-x],[_/2-x,g/2],[-_/2+x,g/2],[-_/2,g/2-x],[-_/2,-g/2+x]].forEach(([b,w],R)=>R?y.lineTo(b,w):y.moveTo(b,w)),y.closePath();const E=new ql(y,{depth:m,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.04,bevelThickness:.025});E.rotateX(Math.PI/2),E.translate(f,d,p),r(u,E)}function c(u,f,d,p,_,g=!1){a("frame",u,d+.12,f,p,_,.12),a("panel",u,d-.015,f,p-.2,_-.2,.055),s("recess",u,d-.109,f,.28,.026,_-.55),s(g?"cyan":"white",u,d-.127,f,.065,.018,_-.78);for(const m of[-1,1]){s("silver",u+m*(p/2-.23),d-.1,f,.06,.06,_-.65);for(let x=0;x<3;x++)s("recess",u+m*(p/2-.58),d-.105,f-_/2+.4+x*.13,.38,.022,.038)}}function l(u,f,d,p,_,g,m=Math.PI/6){const x=Array.from({length:6},(y,v)=>[u+Math.cos(m+v*Math.PI/3)*p,f,d+Math.sin(m+v*Math.PI/3)*p]);return x.forEach((y,v)=>o(g,y,x[(v+1)%6],_)),x}function h(u,f,d,p,_){const g=l(u,p,f,d,.17,"frame");l(u,p-.1,f,d-.04,.058,"cyan"),l(u,p+.12,f,d*.73,.07,"silver"),l(u,p+.08,f,d*.7,.025,"white");for(let m=0;m<6;m+=2){const x=g[m];o("silver",[x[0],p+.05,x[2]],[x[0],_,x[2]],.022),u===0&&o("silver",[x[0],_,x[2]],[x[0],_,Math.round(x[2]/4)*4],.045),o("frame",x,[u+(x[0]-u)*.73,p+.12,f+(x[2]-f)*.73],.07)}}for(const u of[0,-20]){for(let f=0;f<8;f++){const d=[-31,-23,-15,-7,7,15,23,31][f];for(const p of[-2,2])c(d,u+p,4.25,7.2,3.05,f%2===0)}for(const f of[-18,18])h(f,u,1.25,3.93,4.4)}for(const u of[-9.2,-30])for(const f of[-24,-12,12,24])for(const d of[-2.45,2.45])for(const p of[-2.05,2.05])c(f+d,u+p,4.035,4.5,3.55,!0);for(let u=-36;u<=12;u+=4)o("frame",[-3,4.62,u],[-2.5,5.35,u],.19,.24),o("silver",[-2.5,5.35,u],[2.5,5.35,u],.16,.2),o("frame",[2.5,5.35,u],[3,4.62,u],.19,.24),o("cyan",[-2.5,5.24,u],[2.5,5.24,u],.035,.04);h(0,1,2.7,4.12,5.35),h(0,1,1.65,4.45,5.35);for(const u of[-10,-22,-32,9])h(0,u,1.35,4.35,5.35);for(const u of[-1,1]){for(const f of[4,8,12])c(u*5.1,f,4.47,3.8,3.3,!0);for(let f=-32;f<=8;f+=5)c(u*34,f,4.33,3.4,4.25)}for(const[u,f]of n){const d=f.map(g=>g.index?g.toNonIndexed():g),p=up(d,!1);new Set([...f,...d]).forEach(g=>g.dispose());const _=new Qe(p,t[u]);_.name=`Techo · ${u}`,e.add(_)}return e}function CE(i){const e=new en;e.name="Dermagatos Campus Original",i.add(e);let t=72831;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296;function r(d){const p=document.createElement("canvas");p.width=p.height=512;const _=p.getContext("2d");if(d==="wood"){_.fillStyle="#b59370",_.fillRect(0,0,512,512);for(let m=0;m<8;m++){const x=m%2*128;for(let y=-1;y<3;y++){const v=y*256+x,E=m*64;_.fillStyle=`hsl(31 28% ${54+n()*12}%)`,_.fillRect(v+1,E+1,254,62);for(let b=0;b<28;b++){_.strokeStyle=`rgba(65,40,20,${.025+n()*.08})`,_.beginPath();const w=E+n()*62;_.moveTo(v+3,w),_.bezierCurveTo(v+90,w-3,v+160,w+4,v+250,w),_.stroke()}}}}else{_.fillStyle="#bacbd3",_.fillRect(0,0,512,512);for(let m=0;m<5200;m++)_.fillStyle=["#b5c5cd","#d5e0e5","#bccbd2","#a7bbc5"][Math.floor(n()*4)],_.beginPath(),_.ellipse(n()*512,n()*512,.5+n()*2,.5+n()*3,n()*6,0,Math.PI*2),_.fill();_.strokeStyle="#92a9b3",_.lineWidth=3,_.strokeRect(1,1,510,510)}const g=new wr(p);return g.colorSpace=vt,g.wrapS=g.wrapT=Bi,g.anisotropy=4,g}const s={wall:new xt({color:14937844,roughness:.6}),dark:new xt({color:1586249,roughness:.42,metalness:.35}),wood:new xt({map:r("wood"),roughness:.85}),stone:new xt({map:r("stone"),roughness:.48,metalness:.12}),teal:new xt({color:2918792,roughness:.7}),light:new Et({color:15335416}),neon:new Et({color:5627125}),metal:new xt({color:7638698,roughness:.35,metalness:.5}),ceiling:new Et({color:14280431}),leaf:new xt({color:4353104,roughness:1})},o=new Map,a=[];function c(d,p,_,g,m,x,y,v=!1){const E=new Kt(m,x,y);if(d==="wood"||d==="stone"){const w=E.attributes.position,R=E.attributes.normal,S=E.attributes.uv;for(let M=0;M<w.count;M++){const D=Math.abs(R.getY(M))>.5?[w.getX(M),w.getZ(M)]:Math.abs(R.getX(M))>.5?[w.getZ(M),w.getY(M)]:[w.getX(M),w.getY(M)];S.setXY(M,D[0]/3,D[1]/3)}}E.translate(p,_,g);const b=d+(_>3.8?":roof":"");o.has(b)||o.set(b,[]),o.get(b).push(E),v&&a.push({minX:p-m/2,maxX:p+m/2,minZ:g-y/2,maxZ:g+y/2})}function l(d,p,_,g,m=4,x="#24484c"){const y=document.createElement("canvas");y.width=1024,y.height=192;const v=y.getContext("2d");v.fillStyle=x,v.fillRect(0,0,1024,192),v.fillStyle="#f2faf4",v.font="bold 58px Arial",v.textAlign="center",v.textBaseline="middle",v.fillText(d,512,96,940);const E=new wr(y);E.colorSpace=vt;const b=new Qe(new ei(m,m*.11),new Et({map:E,side:Yt}));b.position.set(p,_,g),e.add(b)}c("stone",0,-.13,0,76,.25,80);for(const d of[-20,20])c("ceiling",d,4.85,-12,34,.18,52);for(const d of[-3,3])c("metal",d,4.9,-12,.18,.25,52),c("neon",d,4.69,-12,.055,.035,52);for(const d of[0,-20]){c("wood",0,.015,d,68,.025,7);for(const p of[-20,20])c("ceiling",p,4.45,d,34,.2,8);for(const p of[-1,1])c("neon",0,.05,d+p*3.25,68,.02,.045)}for(const d of[-34,0,34])if(c("wood",d,.035,-13,d===0?7:4,.025,33),d!==0&&c("ceiling",d,4.5,-14,5,.15,35),d===0)for(const p of[-1,1])c("neon",p*3.25,.07,-13,.045,.025,33);const h=[];for(const d of[-9.2,-30])for(const p of[-24,-12,12,24]){h.push({x:p,z:d}),c("wood",p,.06,d,10,.05,8.8),c("wall",p-5,2.1,d,.22,4.2,8.8,!0),c("wall",p+5,2.1,d,.22,4.2,8.8,!0),c("wall",p,2.1,d-4.4,10,4.2,.22,!0),c("wood",p,.8,d-4.26,9.75,1.5,.04),c("dark",p,.13,d-4.23,9.75,.12,.04),c("ceiling",p,4.24,d,10.2,.18,8.9);for(const g of[-1,1])c("dark",p+g*4.85,2.1,d+4.4,.26,4.2,.26,!0);c("dark",p,3.94,d+4.4,10,.45,.28);for(const g of[-1,1])c("neon",p+g*4.7,4.08,d,.06,.04,8.3),c("metal",p+g*4.72,2.1,d-4.24,.18,3.8,.06),c("neon",p+g*4.72,2.1,d-4.19,.035,3.5,.025);l(d===-9.2?p===-12?"LABORATORIO INTERACTIVO":p===12?"EQUIPO VETERINARIO":"SALA DE EXPOSICIÓN":p===-24?"PROCONVET":p===24?"EXPERIENCIAS":"SALA DE ENCUENTRO",p,3.88,d+4.57,5.5)}c("wood",0,.56,.4,3.6,1.12,1.25,!0),c("ceiling",0,1.14,.4,4,.12,1.55),c("teal",0,.6,1.04,3.3,.65,.035),l("DERMAGATOS",0,.67,1.065,2.8);for(const d of[-1.8,1.8]){const p=new Qe(new vi(.63,.63,1.1,24),s.wood);p.position.set(d,.55,.4),e.add(p)}for(const d of[-5.3,5.3])c("ceiling",d,4.65,5.3,4.4,.2,15);RE(e);const u=new Qe(new Ko(.65,0),new Et({color:6217727,wireframe:!0}));u.position.set(0,2.25,-1.5),e.add(u),c("dark",0,.5,-1.5,1.1,1,1.1,!0),c("neon",0,1.02,-1.5,1.15,.04,1.15),l("CAMPUS VETERINARIO · EXPLORA Y PARTICIPA",0,3.1,-3.7,6);for(const d of[-6,6])for(const p of[5,-19])c("dark",d,.2,p,2.9,.38,.8,!0),c("wood",d,.43,p,3.1,.12,.95),c("wall",d,.78,p-.38,3.1,.65,.12);c("wall",0,2.45,-38,74,4.9,.3,!0);for(const d of[-37,37])c("wall",d,2.45,-12,.3,4.9,52,!0);c("wall",0,1,14,74,2,.3,!0);for(const d of[-7,7,-32,32])for(const p of[9,-22]){c("dark",d,.3,p,.9,.6,.9,!0);const _=new Qe(new Ko(.7,1),s.leaf);_.scale.y=1.35,_.position.set(d,1.2,p),e.add(_)}for(const[d,p]of o){const _=up(p,!1);p.forEach(m=>m.dispose());const g=new Qe(_,s[d.split(":")[0]]);g.receiveShadow=!0,g.userData.fallRoof=d.endsWith(":roof"),e.add(g)}const f=new Qe(new qn(150,32,16),new Jn({side:Gt,depthWrite:!1,vertexShader:"varying vec3 vDirection; void main(){ vDirection=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDirection;
      void main(){ vec3 d=normalize(vDirection); float h=max(d.y,0.0);
        vec3 color=mix(vec3(0.76,0.88,0.96),vec3(0.12,0.34,0.64),pow(h,0.65));
        float sun=pow(max(dot(d,normalize(vec3(-0.5,0.6,0.35))),0.0),180.0);
        float clouds=smoothstep(0.67,0.95,sin(d.x*19.0+sin(d.z*11.0))*sin(d.z*23.0+d.y*8.0));
        color=mix(color,vec3(0.92,0.97,1.0),clouds*smoothstep(0.05,0.3,h)*0.28);
        gl_FragColor=vec4(color+vec3(1.0,0.86,0.63)*sun*0.6,1.0);
        #include <colorspace_fragment>
      }`}));return f.renderOrder=-10,i.add(f),i.userData.updateCampus=d=>{u.rotation.y+=d*.25},{group:e,walls:a,rooms:h}}class PE extends kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new UE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new jE(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ps.extractUrlBase(e);o=ps.resolveURL(l,this.path)}else o=ps.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new pd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hp){try{o[Ze.KHR_BINARY_GLTF]=new $E(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new DE;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new JE(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new ZE;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new QE;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function LE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new md(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new d0(h),l.distance=u;break;case"spot":l=new h0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class DE{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,n){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,vt))}return Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class UE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(s)}}class OE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class FE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class BE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class kE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class zE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],Xt),Promise.all(s)}}class HE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class VE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(s)}}class GE{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class WE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class XE{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class qE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class YE{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class KE{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,r.mode,r.filter),d})})}else return null}}class jE{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==on.TRIANGLES&&l.mode!==on.TRIANGLE_STRIP&&l.mode!==on.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const p of u){const _=new Ye,g=new U,m=new En,x=new U(1,1,1),y=new Qf(p.geometry,p.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(g,m,x));for(const v in c)if(v==="_COLOR_0"){const E=c[v];y.instanceColor=new ol(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const hp="glTF",rs=12,vf={JSON:1313821514,BIN:5130562};class $E{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-rs,s=new DataView(e,rs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===vf.JSON){const l=new Uint8Array(e,rs+o,a);this.content=n.decode(l)}else if(c===vf.BIN){const l=rs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ml[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ml[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=xr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){r.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}u(d)},a,l,Xt,f)})})}}class ZE{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QE{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class fp extends Hs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=r-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,_=p-l,g=-2*d+3*f,m=d-f,x=1-g,y=m-f+u;for(let v=0;v!==a;v++){const E=o[_+v+a],b=o[_+v+c]*h,w=o[p+v+a],R=o[p+v]*h;s[v]=x*E+y*b+g*w+m*R}return s}}const eT=new En;class tT extends fp{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return eT.fromArray(s).normalize().toArray(s),s}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:Wt,9729:Qt,9984:Cf,9985:Io,9986:os,9987:Xn},yf={33071:ui,33648:Vo,10497:Bi},dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nT={CUBICSPLINE:void 0,LINEAR:bs,STEP:Ts},pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Ri(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rT(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(r){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function sT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oT(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mc(t.attributes):e=i.indices+":"+mc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+mc(i.targets[n]);return e}function mc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cT=new Ye;class lT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new LE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new c0(this.options.manager):this.textureLoader=new m0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ri(s,a,r),wn(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(ps.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=dc[r.type],a=xr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Ut(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=dc[r.type],l=xr[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0;let _,g;if(d&&d!==u){const m=Math.floor(f/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let y=t.cache.get(x);y||(_=new l(a,m*d,r.count*d/h),y=new Kf(_,d/h),t.cache.add(x,y)),g=new Rs(y,c,f%d/h,p)}else a===null?_=new l(r.count*c):_=new l(a,f,r.count*c),g=new Ut(_,c,p);if(r.sparse!==void 0){const m=dc.SCALAR,x=xr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,E=new x(o[1],y,r.sparse.count*m),b=new l(o[2],v,r.sparse.count*c);a!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,R=E.length;w<R;w++){const S=E[w];if(g.setX(S,b[w*c]),c>=2&&g.setY(S,b[w*c+1]),c>=3&&g.setZ(S,b[w*c+2]),c>=4&&g.setW(S,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=xf[f.magFilter]||Qt,h.minFilter=xf[f.minFilter]||Xn,h.wrapS=yf[f.wrapS]||Bi,h.wrapT=yf[f.wrapT]||Bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Qt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(_){const g=new Ct(_);g.needsUpdate=!0,f(g)}),t.load(ps.resolveURL(u,s.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),wn(u,o),u.userData.mimeType=o.mimeType||aT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ed,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Hl,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xt}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=r[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yt);const h=s.alphaMode||pc.OPAQUE;if(h===pc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Et&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _e(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Et&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Et){const u=s.emissiveFactor;a.emissive=new Ge().setRGB(u[0],u[1],u[2],Xt)}return s.emissiveTexture!==void 0&&o!==Et&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,vt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),wn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ri(r,u,s),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Mf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=oT(l),u=r[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Mf(new Rt,l,t),r[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?iT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],g=o[d];let m;const x=l[d];if(g.mode===on.TRIANGLES||g.mode===on.TRIANGLE_STRIP||g.mode===on.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new sg(_,x):new Qe(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===on.TRIANGLE_STRIP?m.geometry=_f(m.geometry,Ff):g.mode===on.TRIANGLE_FAN&&(m.geometry=_f(m.geometry,rl));else if(g.mode===on.LINES)m=new hg(_,x);else if(g.mode===on.LINE_STRIP)m=new ia(_,x);else if(g.mode===on.LINE_LOOP)m=new fg(_,x);else if(g.mode===on.POINTS)m=new dg(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&sT(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),wn(m,s),g.extensions&&Ri(r,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&Ri(r,u[0],s),u[0];const f=new en;s.extensions&&Ri(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(St.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new jl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Ye;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new kl(a,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=r.channels.length;u<f;u++){const d=r.channels[u],p=r.samplers[d.sampler],_=d.target,g=_.node,m=r.parameters!==void 0?r.parameters[p.input]:p.input,x=r.parameters!==void 0?r.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let y=0,v=f.length;y<v;y++){const E=f[y],b=d[y],w=p[y],R=_[y],S=g[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,b,w,R,S);if(M)for(let D=0;D<M.length;D++)m.push(M[D])}const x=new t0(s,void 0,m);return wn(x,r),x})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,cT)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Jf:l.length>1?h=new en:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),wn(h,s),s.extensions&&Ri(n,h,s),s.matrix!==void 0){const u=new Ye;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(h);r.associations.set(h,{...u})}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new en;n.name&&(s.name=r.createUniqueName(n.name)),wn(s,n),n.extensions&&Ri(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of r.associations)(f instanceof yn||f instanceof Ct)&&u.set(f,d);return h.traverse(f=>{const d=r.associations.get(f);d!=null&&u.set(f,d)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];ci[s.path]===ci.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ci[s.path]){case ci.weights:l=Rr;break;case ci.rotation:l=Cr;break;case ci.translation:case ci.scale:l=Pr;break;default:n.itemSize===1?l=Rr:l=Pr;break}const h=r.interpolation!==void 0?nT[r.interpolation]:bs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+ci[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Cr?tT:fp;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uT(i,e,t){const n=e.attributes,r=new Dn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){const h=Sl(xr[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,c=new U;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=Sl(xr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Nn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Mf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ml[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return tt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),wn(i,e),uT(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?rT(i,e.targets,t):i})}function El(i,e=3,t="#0e394b"){const n=document.createElement("canvas");n.width=1024,n.height=160;const r=n.getContext("2d");r.fillStyle=t,r.fillRect(0,0,1024,160),r.fillStyle="#ffffff",r.font="bold 58px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(i,512,80,970);const s=new wr(n);return s.colorSpace=vt,new Qe(new ei(e,e*160/1024),new Et({map:s,side:Yt}))}async function hT(i,e,t){const n=new Qe(new vi(1.1,1.2,.16,32),new xt({color:2311772}));n.position.set(Rn.x,.08,Rn.z),i.add(n);for(const a of[-1.5,0,1.5]){const c=new Qe(new vi(.55,.62,.75,20),new xt({color:15791346}));c.position.set(An.x+a,.375,An.z),c.receiveShadow=!0,i.add(c)}const r=El("TOCA LAS FIGURAS PARA AGARRAR",3.8);r.position.set(An.x,.12,An.z+1.4),r.rotation.x=-Math.PI/2,i.add(r);const s=El("VR: gatillo = tomar/soltar · joystick derecho = tamaño",3.8);s.position.set(An.x,2.8,An.z-1),i.add(s);const o=CE(i);i.userData.campusWalls=o.walls,t("Campus Dermagatos listo. Cargando stands…");try{const a=await new PE().loadAsync("./models/stand.glb");a.scene.traverse(u=>{if(u.isMesh){u.castShadow=!1,u.receiveShadow=!0;for(const f of Array.isArray(u.material)?u.material:[u.material])f.map&&(f.map.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()))}});const c=new en;c.add(a.scene),a.scene.scale.setScalar(.03),c.updateMatrixWorld(!0);const l=new Dn().setFromObject(c),h=l.getCenter(new U);a.scene.position.set(-h.x,-l.min.y,-h.z);for(const{x:u,z:f,name:d,color:p}of vc){const _=c.clone(!0);_.rotation.y=Math.PI,_.position.set(u,.11,f),i.add(_)}document.querySelector("#load-state").textContent="Dermagatos · campus original · 8 salas · 2 stands",t("Stands listos. Explora, responde y mueve los objetos.")}catch(a){document.querySelector("#load-state").textContent="No se pudo cargar el modelo",t("El modelo no pudo cargar. Recarga para volver a intentarlo."),console.error("Carga de stand:",a)}}function fT(i,e){const n=new Et({side:Yt,transparent:!0,depthWrite:!1}),r=new Qf(new ei(.07,.12),n,84);r.frustumCulled=!1,r.visible=!1,i.add(r);const s=new mt,o=Array.from({length:84},()=>({p:new U,v:new U,r:new U,spin:new U})),a=new Qe(new Yl(.85,.89,48),new Et({color:5963694,transparent:!0,depthWrite:!1,side:Yt}));a.position.copy(e).add(new U(0,0,.04)),a.visible=!1,i.add(a);let c=3,l=!0;function h(f){c=0,l=f,r.count=f?84:28,r.visible=!0,a.visible=!0,a.material.color.set(f?5963694:16740990);const d=f?[5566394,16766828,16748500,7264767,15988991]:[16739453,16759148];o.forEach((p,_)=>{const g=_%2?1:-1;p.p.copy(e).add(new U(g*1.2,-.85,.2)),p.v.set(g*(.2+Math.random()*.8),f?2.4+Math.random()*2:.7+Math.random()*1.4,.2+Math.random()*.7),p.r.set(Math.random()*6,Math.random()*6,Math.random()*6),p.spin.set(Math.random()*7,Math.random()*9,Math.random()*6),r.setColorAt(_,new Ge(d[_%d.length]))}),r.instanceColor.needsUpdate=!0,u(0)}function u(f){if(c>2.5)return;c+=f;const d=l?2.2:1.3;if(c>=d){r.visible=!1,a.visible=!1;return}for(let p=0;p<r.count;p++){const _=o[p];_.v.y-=2.8*f,_.p.addScaledVector(_.v,f),_.r.addScaledVector(_.spin,f),s.position.copy(_.p),s.rotation.set(_.r.x,_.r.y,_.r.z),s.scale.setScalar(Math.min(1,(d-c)*2.5)),s.updateMatrix(),r.setMatrixAt(p,s.matrix)}r.instanceMatrix.needsUpdate=!0,n.opacity=Math.min(1,(d-c)*1.6),a.scale.setScalar(.5+c*1.8),a.material.opacity=Math.max(0,.7-c*1.6)}return{burst:h,update:u}}const gc=[{prompt:"¿Cuál producto de Proconvet cuida la higiene oral?",options:["PeroxyPROC","NaturPROC oral","HepatoPET"],correct:1},{prompt:"¿Cuál es un champú antiséptico y antiseborreico?",options:["PeroxyPROC","NaturPROC oral","GastroPET"],correct:0},{prompt:"¿Cuál es un champú dermatológico antifúngico?",options:["MiclorPROC","HepatoPET","NaturPROC oral"],correct:0}],Ci=new U(Ho.x,1.95,Ho.z),Lo=[430,555,680],_c=96;function dT({scene:i,camera:e,renderer:t,status:n,onWrong:r=()=>{}}){const s=document.createElement("canvas");s.width=900,s.height=960;const o=s.getContext("2d"),a=new wr(s);a.colorSpace=vt,a.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy());const c=new Qe(new ei(2.7,2.88),new Et({map:a,transparent:!0}));c.position.copy(Ci),c.name="Preguntas Proconvet",i.add(c);const l=new Qe(new Kt(2.82,3,.12),new xt({color:1587271,roughness:.5}));l.position.copy(Ci).add(new U(0,0,-.08)),i.add(l);const h=new Qe(new vi(.12,.16,.55,12),new xt({color:1587271}));h.position.set(Ci.x,.275,Ci.z),i.add(h);const u=fT(i,Ci),f=new Vs;let d=0,p=0,_=null,g=-1,m=-1,x=0,y=-1/0,v=performance.now(),E;const b=document.querySelector("#quiz-progress");function w(L,F){const N=[];let W="";for(const ie of L.split(" ")){const B=W?`${W} ${ie}`:ie;W&&o.measureText(B).width>F?(N.push(W),W=ie):W=B}return W&&N.push(W),N}function R(){o.fillStyle="#092932",o.fillRect(0,0,900,960),o.strokeStyle=_==="correct"?"#66ffc0":_==="wrong"?"#ff7a90":"#72dfe7",o.lineWidth=12,o.strokeRect(10,10,880,940),o.fillStyle="#39bdcb",o.fillRect(22,22,856,115),o.fillStyle="#062e36",o.font="bold 50px Arial",o.fillText("PROCONVET",55,95),o.fillStyle="#baf4e6",o.font="28px Arial",o.fillText(`${Math.min(d+1,3)} / 3    ·    ${p} puntos de prueba`,55,185),o.fillStyle="#fff",o.font="bold 48px Arial",w(d<3?gc[d].prompt:"¡Completaste el reto!",780).forEach((F,N)=>o.fillText(F,55,260+N*58)),d<3?gc[d].options.forEach((F,N)=>{o.fillStyle=N===g?_==="correct"?"#236d51":"#782f45":N===m?"#27758b":"#173f4d",o.fillRect(50,Lo[N],800,_c),o.strokeStyle=N===m?"#fff":"#70c5d0",o.lineWidth=3,o.strokeRect(50,Lo[N],800,_c),o.fillStyle="#fff",o.font="bold 43px Arial",o.fillText(`${"ABC"[N]}. ${F}`,78,Lo[N]+62,750)}):(o.fillStyle="#a4ffce",o.font="bold 64px Arial",o.fillText(`${p} puntos`,55,540)),o.fillStyle=_==="wrong"?"#ffabbc":"#aaf4cc",o.font="bold 31px Arial";const L=_==="wrong"?"Inténtalo otra vez":_==="correct"?"¡Correcto! +10 puntos":d<3?"Toca una opción · VR: gatillo":"Recarga para repetir la prueba";o.fillText(L,55,855,790),o.fillStyle="#b1c8ce",o.font="24px Arial",o.fillText("Explora · descubre · responde",55,913),a.needsUpdate=!0,b.textContent=`${Math.min(d+(_==="correct"?1:0),3)}/3 · ${p} pts`}function S(L){try{E||=new(window.AudioContext||window.webkitAudioContext),E.state==="suspended"&&E.resume(),(L?[523,659,784,1046]:[330,247]).forEach((F,N)=>{const W=E.createOscillator(),ie=E.createGain(),B=E.currentTime+N*.09;W.type=L?"sine":"triangle",W.frequency.setValueAtTime(F,B),ie.gain.setValueAtTime(1e-4,B),ie.gain.exponentialRampToValueAtTime(.08,B+.015),ie.gain.exponentialRampToValueAtTime(1e-4,B+.22),W.connect(ie).connect(E.destination),W.start(B),W.stop(B+.23)})}catch{}}function M(){return(t.xr.isPresenting?t.xr.getCamera():e).getWorldPosition(new U).distanceTo(Ci)<6.5}function D(L){return c.updateWorldMatrix(!0,!1),f.ray.copy(L),f.far=18,f.intersectObject(c)[0]||null}function k(L){if(!L)return-1;const F=L.uv.x*900,N=(1-L.uv.y)*960;return F>=50&&F<=850?Lo.findIndex(W=>N>=W&&N<=W+_c):-1}function X(L){const F=D(L);if(!F)return!1;if(!M())return n.textContent="Acércate al panel para responder.",!0;const N=k(F),W=performance.now();if(d>=3||x||N<0||W-y<550)return!0;const ie=N===gc[d].correct;return g=N,_=ie?"correct":"wrong",y=W,ie&&(p+=10,x=W+1900),n.textContent=ie?"¡Correcto! +10 puntos de prueba.":"Incorrecto. Puedes volver a intentarlo.",S(ie),u.burst(ie),R(),ie||r(),!0}function P(L){const F=M()&&d<3&&!x?k(D(L)):-1;F!==m&&(m=F,R())}function O(L){const F=performance.now();x&&F>=x&&(d++,x=0,_=null,g=-1,v=F,R());const N=(F-y)/1e3,W=Math.min(1,(F-v)/450);c.material.opacity=.4+.6*W,c.scale.setScalar(1-(1-W)*.06+(_==="correct"&&N<.6?Math.sin(N*Math.PI/.6)*.022:0)),c.position.x=Ci.x+(_==="wrong"&&N<.4?Math.sin(N*55)*(.4-N)*.1:0),u.update(L)}return R(),{hit:D,answerFromRay:X,hoverRay:P,update:O}}function pT(i,e){let t=Zo(localStorage.getItem("oseoverse-character"));const n=[],r=[],s=new Vs;for(const[c,l,h]of[["cat",-1.05,"Gato veterinario"],["dog",1.05,"Perro veterinario"]]){const u=yl(h,void 0,c);u.position.set(Rn.x+l,.1,Rn.z),u.rotation.y=Math.PI,i.add(u);const f=El(`ELEGIR ${c==="cat"?"GATO":"PERRO"}`,1.65);f.position.set(Rn.x+l,.34,Rn.z+.62),f.userData.kind=c,i.add(f),r.push(f);const d=new Qe(new ra(.65,.035,8,40),new Et({color:6614994}));d.rotation.x=-Math.PI/2,d.position.set(Rn.x+l,.12,Rn.z),i.add(d),u.traverse(p=>{p.isMesh&&(p.userData.kind=c,r.push(p))}),n.push({avatar:u,ring:d,kind:c})}function o(){document.querySelectorAll("[data-character]").forEach(c=>c.setAttribute("aria-pressed",String(c.dataset.character===t))),document.querySelector("#selected-character").textContent=t==="cat"?"Gato veterinario":"Perro veterinario",n.forEach(c=>{c.ring.visible=c.kind===t})}function a(c){t=Zo(c),localStorage.setItem("oseoverse-character",t),o(),e(`Tu personaje: ${t==="cat"?"gato":"perro"} veterinario con bata blanca.`),document.querySelector("#character-picker").hidden=!0}return document.querySelectorAll("[data-character]").forEach(c=>c.addEventListener("click",()=>a(c.dataset.character))),document.querySelector("#close-characters").addEventListener("click",()=>{document.querySelector("#character-picker").hidden=!0}),o(),{selected:()=>t,hit:c=>(s.ray.copy(c),s.far=6,r.forEach(l=>l.updateWorldMatrix(!0,!1)),s.intersectObjects(r,!1)[0]),chooseHit:c=>a(c.object.userData.kind),update:c=>n.forEach(l=>l.avatar.userData.animate(c))}}const mT=["cube","ball","ring"];function gT(i){return i&&mT.includes(i.id)&&Array.isArray(i.p)&&i.p.length===3&&i.p.every(Number.isFinite)&&Math.abs(i.p[0])<=un.x&&i.p[1]>=0&&i.p[1]<=6&&Math.abs(i.p[2])<=un.z&&Number.isFinite(i.r)&&Math.abs(i.r)<1e3&&Number.isFinite(i.s)&&i.s>=.4&&i.s<=2.5&&(i.owner===null||typeof i.owner=="string"&&i.owner.length<=100)&&Number.isSafeInteger(i.clock)&&i.clock>=0&&typeof i.actor=="string"&&i.actor.length<=100}function _T(i,e){return i.clock>e.clock||i.clock===e.clock&&i.actor>e.actor}function vT(i,e,t,n=!1){return!gT(e)||!n&&e.actor!==t?i:_T(e,i)?structuredClone(e):i}function xT({radius:i,fov:e,width:t,height:n,top:r,bottom:s}){const o=Math.max(0,r),a=Math.max(o+40,s),c=Math.tan(e*Math.PI/360),l=Math.min(c*t/n*.78,c*(a-o)/n*.78);return{distance:Math.max(1.9,i/Math.sin(Math.atan(l))+.18),ndcY:1-(o+a)/n}}const yT=2.35;function MT(i){const e=Math.max(0,Math.min(1,i/yT)),t=Math.max(0,Math.min(1,(e-.12)/.76));return{height:8*(1-t*t),motion:Math.sin(Math.PI*t),done:e>=1}}function ST({scene:i,camera:e,renderer:t,status:n,actor:r}){const s=document.querySelector("#object-tools"),o=document.querySelector("#held-name"),a=document.querySelector("#held-scale"),c=[new Kt(.62,.62,.62),new qn(.36,24,16),new ra(.3,.1,10,28)],l=["cube","ball","ring"].map((L,F)=>{const N=new Qe(c[F],new xt({color:[4443104,16423852,16764770][F],metalness:.16,roughness:.28,emissive:0}));N.castShadow=!0,N.name=["Cubo","Esfera","Aro"][F];const W={id:L,p:[An.x+(F-1)*1.5,1.18,An.z],r:0,s:1,owner:null,clock:0,actor:""};return N.position.fromArray(W.p),i.add(N),{id:L,mesh:N,initial:W,state:structuredClone(W),seenAt:0}});let h=null,u=null,f=null,d=0,p=0,_=0;const g=new Vs,m=new U,x=new U;function y(){s.hidden=!h||t.xr.isPresenting,document.body.classList.toggle("holding",!!h),h&&(o.textContent=h.mesh.name,a.textContent=`${h.state.s.toFixed(2)}×`)}function v(L){L.state.clock=++d,L.state.actor=r,L.seenAt=performance.now(),f&&f({kind:"update",states:[structuredClone(L.state)]})}function E(L,F=!1,N=.1){const W=F?1:Math.min(1,N*15);L.mesh.position.lerp(m.fromArray(L.state.p),W),L.mesh.scale.lerp(new U().setScalar(L.state.s),W),L.mesh.rotation.y+=(St.euclideanModulo(L.state.r-L.mesh.rotation.y+Math.PI,Math.PI*2)-Math.PI)*W,L.mesh.material.emissive.set(L===h?1193010:L.state.owner?3347743:0)}function b(L){return g.ray.copy(L),g.far=6,l.forEach(F=>F.mesh.updateWorldMatrix(!0,!1)),g.intersectObjects(l.map(F=>F.mesh))[0]||null}function w(L=!1){if(!h)return;const F=h;L&&(F.state.p=[...F.initial.p],F.state.s=1,F.state.r=0),F.state.owner=null,v(F),h=null,u=null,E(F,!0),y(),n.textContent=L?"Objeto devuelto a su pedestal.":"Objeto colocado. Los demás ven su posición y tamaño."}function R(L,F=null){if(h)return w(),!0;if(!L)return!1;const N=l.find(W=>W.mesh===L.object);return N?N.state.owner&&N.state.owner!==r&&performance.now()-N.seenAt<4e3?(n.textContent="Otra persona tiene ese objeto. Espera a que lo suelte.",!0):(h=N,u=F,_=N.state.r,N.state.owner=r,v(N),y(),n.textContent=`Sostienes ${N.mesh.name}. Mueve la vista; usa +/− para el tamaño y Soltar para colocarlo.`,!0):!1}function S(L){h&&(h.state.s=St.clamp(h.state.s*L,.4,2.5),E(h,!0),y())}function M(L=Math.PI/6){h&&(_+=L,h.state.r+=L,E(h,!0))}document.querySelector("#scale-up").addEventListener("click",()=>S(1.15)),document.querySelector("#scale-down").addEventListener("click",()=>S(1/1.15)),document.querySelector("#rotate-object").addEventListener("click",()=>M()),document.querySelector("#release-object").addEventListener("click",()=>w()),document.querySelector("#reset-object").addEventListener("click",()=>w(!0));function D(L,F){if(!(!L||!["update","snapshot"].includes(L.kind)||!Array.isArray(L.states)||L.states.length>3))for(const N of L.states){const W=l.find(B=>B.id===N?.id);if(!W)continue;const ie=vT(W.state,N,F,L.kind==="snapshot");ie!==W.state&&(W.state=ie,d=Math.max(d,ie.clock),W.seenAt=performance.now(),h===W&&W.state.owner!==r&&(h=null,u=null,y(),n.textContent="Otra persona tomó el objeto primero."))}}function k(){return{kind:"snapshot",states:l.map(L=>structuredClone(L.state))}}function X(L,F=!1){h=null,u=null,f=L,d=0,l.forEach(N=>{F||(N.state=structuredClone(N.initial),N.seenAt=0),d=Math.max(d,N.state.clock),E(N,!0)}),y()}function P(L){for(const F of l)F.state.owner===L&&(F.state.owner=null,v(F))}function O(L){if(h){const F=u||(t.xr.isPresenting?t.xr.getCamera():e);F.getWorldPosition(m),x.set(0,0,-1).applyQuaternion(F.getWorldQuaternion(new En));const N=.54*h.state.s;let W=.65+N*1.15;if(!t.xr.isPresenting){const ie=document.querySelector("#room-status").getBoundingClientRect().bottom+18,B=s.getBoundingClientRect().top-22,te=xT({radius:N,fov:e.fov,width:innerWidth,height:innerHeight,top:ie,bottom:B});e.updateWorldMatrix(!0,!1),x.set(0,te.ndcY,.5).unproject(e).sub(m).normalize(),W=te.distance}m.addScaledVector(x,W),m.x=St.clamp(m.x,-37,un.x),m.z=St.clamp(m.z,-39,un.z),m.y=St.clamp(m.y,N+.1,5),h.state.p=m.toArray(),h.state.r=Math.atan2(-x.x,-x.z)+_,h.state.r=St.euclideanModulo(h.state.r,Math.PI*2),performance.now()-p>100&&(v(h),p=performance.now())}for(const F of l)E(F,F===h,L);y()}return{hit:b,grab:R,release:w,scaleBy:S,rotate:M,receive:D,snapshot:k,setNetwork:X,peerLeft:P,update:O,isHolding:()=>!!h,heldBy:()=>u}}function ET(){const i=document.querySelector("#ambient-toggle");let e=!0,t,n;try{e=localStorage.getItem("oseo-ambience")!=="off"}catch{}function r(){i.textContent=`Sonido ambiente: ${e?"activado":"apagado"}`,i.setAttribute("aria-pressed",String(e))}function s(){n&&n.gain.setTargetAtTime(e&&!document.hidden?.045:0,t.currentTime,.4)}function o(){if(e)try{t||(t=new(window.AudioContext||window.webkitAudioContext),n=t.createGain(),n.gain.value=0,n.connect(t.destination),[130.81,196,261.63,293.66,392].forEach((a,c)=>{const l=t.createOscillator(),h=t.createGain(),u=t.createOscillator(),f=t.createGain();l.frequency.value=a,l.type="sine",h.gain.value=.12,u.frequency.value=.035+c*.011,f.gain.value=.07,u.connect(f).connect(h.gain),l.connect(h).connect(n),l.start(),u.start()})),t.state==="suspended"&&t.resume().catch(()=>{}),s()}catch{i.textContent="Sonido no disponible"}}return i.addEventListener("click",()=>{e=!e;try{localStorage.setItem("oseo-ambience",e?"on":"off")}catch{}r(),e&&o(),s()}),window.addEventListener("pointerdown",o),window.addEventListener("keydown",o),document.addEventListener("visibilitychange",s),r(),{unlock:o}}function TT({scene:i,player:e,camera:t,renderer:n,onStart:r}){const s=document.querySelector("#fall-toggle"),o=document.querySelector("#fall-overlay");let a=!0,c=null;try{a=localStorage.getItem("oseo-fall")!=="off"}catch{}const l=new en;l.visible=!1,i.add(l);const h=new Et({color:10153983,transparent:!0,opacity:.5,depthWrite:!1}),u=new vi(.009,.009,1,4);for(let g=0;g<28;g++){const m=new Qe(u,h),x=g*Math.PI*2/28;m.position.set(Math.cos(x)*2.2,g%7-3,Math.sin(x)*2.2),l.add(m)}function f(){s.textContent=`Caída al fallar: ${a?"activada":"apagada"}`,s.setAttribute("aria-pressed",String(a))}function d(){if(c){e.position.copy(c.position),n.xr.isPresenting||(t.rotation.x=c.pitch),t.fov=c.fov,t.updateProjectionMatrix();for(const[g,m]of c.roofs)g.visible=m;c=null,l.visible=!1,o.hidden=!0}}s.addEventListener("click",()=>{a=!a,a||d(),f();try{localStorage.setItem("oseo-fall",a?"on":"off")}catch{}});function p(){if(!a||c)return;r();const g=[];i.traverse(m=>{m.userData.fallRoof&&(g.push([m,m.visible]),m.visible=!1)}),c={age:0,position:e.position.clone(),pitch:t.rotation.x,fov:t.fov,roofs:g},l.visible=!0,_(0)}function _(g){if(!c)return;c.age+=g;const m=MT(c.age);if(m.done){d();return}e.position.copy(c.position),e.position.y+=m.height;const x=n.xr.isPresenting;if(o.hidden=x,o.style.opacity=String(.2+m.motion*.65),!x){const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;t.rotation.x=St.clamp(c.pitch-(v?0:m.motion*.6),-1.3,1.3),t.fov=c.fov+(v?0:m.motion*14),t.updateProjectionMatrix()}const y=(x?n.xr.getCamera():t).getWorldPosition(new U);l.position.copy(y),h.opacity=.35*m.motion,l.children.forEach((v,E)=>{v.position.y=(c.age*8+E*.37)%6-3,v.scale.y=.5+m.motion*1.5})}return n.xr.addEventListener("sessionstart",d),n.xr.addEventListener("sessionend",d),document.addEventListener("visibilitychange",()=>{document.hidden&&d()}),f(),{start:p,update:_,cancel:d,active:()=>!!c}}const yr=document.querySelector("#status"),Xs=document.querySelector("#menu");let Sf;new MutationObserver(()=>{yr.classList.add("visible"),clearTimeout(Sf),Sf=setTimeout(()=>yr.classList.remove("visible"),4200)}).observe(yr,{childList:!0});const Qn=i=>{yr.textContent=i},$e=new lM({antialias:!0,powerPreference:"high-performance"});$e.setPixelRatio(Math.min(devicePixelRatio||1,1.5));$e.setSize(innerWidth,innerHeight);$e.outputColorSpace=vt;$e.shadowMap.enabled=!0;$e.shadowMap.type=wf;$e.xr.enabled=!0;document.querySelector("#app").appendChild($e.domElement);const Qo=Lr.createButton($e);document.body.appendChild(Qo);const dp=()=>Qo.classList.toggle("unsupported",Qo.textContent.includes("NOT SUPPORTED"));new MutationObserver(dp).observe(Qo,{childList:!0,subtree:!0,characterData:!0});dp();const Ft=new ng;Ft.background=new Ge(10994900);Ft.fog=new Bl(10994900,90,180);const _t=new en;_t.position.set(Math.random()*2-1,0,10);Ft.add(_t);const bt=new Ht(70,innerWidth/innerHeight,.05,220);bt.position.y=1.65;bt.rotation.order="YXZ";_t.add(bt);const pp=wE(Ft,$e),mp=[...Ot].reduce((i,e)=>i*31+e.charCodeAt(0)>>>0,0)%12,Tl=(mp%4-1.5)*1.1,bl=Math.floor(mp/4)*1.2;_t.position.set(Tl,0,4.8+bl*.4);Ft.add(new l0(15792895,9142128,2.3));const Vr=new md(16774631,2.1);Vr.position.set(-8,15,9);Vr.castShadow=!0;Vr.shadow.mapSize.set(1024,1024);Object.assign(Vr.shadow.camera,{left:-17,right:17,top:17,bottom:-17});Vr.shadow.bias=-5e-4;Ft.add(Vr);hT(Ft,$e,Qn);const ft=ST({scene:Ft,camera:bt,renderer:$e,status:yr,actor:Ot}),ou=ET(),jn=TT({scene:Ft,player:_t,camera:bt,renderer:$e,onStart:()=>{ft.release(),Qn("¡Caída! Regresas al mismo punto para intentarlo otra vez.")}}),vs=dT({scene:Ft,camera:bt,renderer:$e,status:yr,onWrong:jn.start}),ea=pT(Ft,Qn);function qs(i,e,t=0){jn.cancel(),ft.release(),_t.position.set(i+Tl*.65,0,e+bl*.4),_t.rotation.y=t+Math.atan2(Tl*.65,4.6+bl*.4),bt.rotation.x=0,Xs.open=!1}function bT(i){const e=Ft.userData.campusWalls||[],t=i.destination;for(let n=0;n<8;n++){const r=i.yaw+Math.PI+n*Math.PI/4,s=t.x+Math.sin(r)*2.2,o=t.z+Math.cos(r)*2.2;if(!(Math.abs(s)>un.x-.4||Math.abs(o)>un.z-.4||e.some(a=>s>a.minX-.4&&s<a.maxX+.4&&o>a.minZ-.4&&o<a.maxZ+.4))){jn.cancel(),ft.release(),_t.position.set(s,0,o),_t.rotation.y=Math.atan2(s-t.x,o-t.z),bt.rotation.x=0,Xs.open=!1,Qn(`Estás cerca de ${i.name}.`);return}}Qn("No hay espacio libre cerca. Pueden encontrarse usando Volver a recepción.")}document.querySelector("#go-stand").addEventListener("click",()=>{qs(Ho.x,Ho.z+4.6),Qn("Toca directamente una respuesta del panel.")});document.querySelector("#go-objects").addEventListener("click",()=>{qs(An.x,An.z+4.6),Qn("Toca una figura para tomarla. Mueve la vista y usa +/− o la rueda.")});document.querySelector("#go-lobby").addEventListener("click",()=>qs(0,5.5));document.querySelector("#go-second").addEventListener("click",()=>qs(vc[1].x,vc[1].z+7.6));document.querySelector("#go-characters").addEventListener("click",()=>{qs(Rn.x,Rn.z+4.6),document.querySelector("#character-picker").hidden=!1});document.querySelector("#lock-pointer").addEventListener("click",()=>{Xs.open=!1,$e.domElement.requestPointerLock()});const au=[$e.xr.getController(0),$e.xr.getController(1)],gp=[15964831,9886184,12954864,16764033,10674108][Math.floor(Math.random()*5)],cu=bE({scene:Ft,renderer:$e,camera:bt,controllers:au,objects:ft,menu:Xs,say:Qn,welcome:pp,myColor:gp,getCharacter:ea.selected,getElevation:()=>_t.position.y,onLocate:bT}),wT=cu.peers,zo=new _e(0,0),ta=new Vs,Ef=new Vs;function ha(i,e){const t=$e.domElement.getBoundingClientRect();return document.pointerLockElement===$e.domElement||i===void 0?zo.set(0,0):zo.set((i-t.left)/t.width*2-1,-(e-t.top)/t.height*2+1),bt.updateWorldMatrix(!0,!1),ta.setFromCamera(zo,bt),ta.ray}function fa(i,e=null){if(ou.unlock(),jn.active())return;if(ft.isHolding()){ft.release();return}const t=ft.hit(i),n=vs.hit(i),r=ea.hit(i);if(r&&(!t||r.distance<t.distance)&&(!n||r.distance<n.distance)){ea.chooseHit(r);return}t&&(!n||t.distance<n.distance)?ft.grab(t,e):n?vs.answerFromRay(i):Qn("Acércate y apunta al panel o a una de las tres figuras.")}document.querySelector("#interact").addEventListener("click",()=>fa(ha()));const fi=new Set;window.addEventListener("keydown",i=>{i.target.matches("input, textarea")||(fi.add(i.code),!i.repeat&&(i.code==="KeyE"&&fa(ha()),(i.code==="Equal"||i.code==="NumpadAdd")&&ft.scaleBy(1.15),(i.code==="Minus"||i.code==="NumpadSubtract")&&ft.scaleBy(1/1.15),i.code==="KeyR"&&ft.rotate()))});window.addEventListener("keyup",i=>fi.delete(i.code));window.addEventListener("blur",()=>{fi.clear(),xp()});$e.domElement.addEventListener("wheel",i=>{ft.isHolding()&&(i.preventDefault(),ft.scaleBy(Math.exp(-i.deltaY*.001)))},{passive:!1});const Fi=new Map;let xs=0;$e.domElement.addEventListener("pointerdown",i=>{Fi.set(i.pointerId,{x:i.clientX,y:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1}),$e.domElement.setPointerCapture(i.pointerId)});$e.domElement.addEventListener("pointermove",i=>{if($e.xr.isPresenting||jn.active())return;const e=Fi.get(i.pointerId);if(document.pointerLockElement===$e.domElement){_t.rotation.y-=i.movementX*.0025,bt.rotation.x=St.clamp(bt.rotation.x-i.movementY*.0025,-1.3,1.3);return}if(!e){ha(i.clientX,i.clientY);return}const t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,e.moved||=Math.hypot(e.x-e.startX,e.y-e.startY)>8,Fi.size===2&&ft.isHolding()){const[r,s]=[...Fi.values()];r.moved=s.moved=!0;const o=Math.hypot(r.x-s.x,r.y-s.y);xs>0&&ft.scaleBy(o/xs),xs=o}else e.moved&&(_t.rotation.y-=t*.004,bt.rotation.x=St.clamp(bt.rotation.x-n*.004,-1.3,1.3))});$e.domElement.addEventListener("pointerup",i=>{const e=Fi.get(i.pointerId);Fi.delete(i.pointerId),xs=0,e&&!e.moved&&!$e.xr.isPresenting&&fa(ha(i.clientX,i.clientY))});$e.domElement.addEventListener("pointercancel",i=>{Fi.delete(i.pointerId),xs=0});const di={x:0,y:0},Ur=document.querySelector("#move-pad"),_p=document.querySelector("#move-knob");function vp(i){const e=Ur.getBoundingClientRect(),t=e.width*.34,n=i.clientX-e.left-e.width/2,r=i.clientY-e.top-e.height/2,s=Math.max(1,Math.hypot(n,r)/t);di.x=n/t/s,di.y=r/t/s,_p.style.transform=`translate(${di.x*t}px, ${di.y*t}px)`}function xp(){di.x=di.y=0,_p.style.transform=""}Ur.addEventListener("pointerdown",i=>{Ur.setPointerCapture(i.pointerId),vp(i)});Ur.addEventListener("pointermove",i=>{Ur.hasPointerCapture(i.pointerId)&&vp(i)});["pointerup","pointercancel","lostpointercapture"].forEach(i=>Ur.addEventListener(i,xp));function wl(i){return i.updateWorldMatrix(!0,!1),Ef.set(i.getWorldPosition(new U),new U(0,0,-1).applyQuaternion(i.getWorldQuaternion(new En))),Ef.ray}for(const i of au){_t.add(i);const e=new Qe(new qn(.07,12,8),new xt({color:gp}));i.add(e);const t=new ia(new Rt().setFromPoints([new U,new U(0,0,-6)]),new Hl({color:9105112,transparent:!0,opacity:.6}));i.add(t),i.addEventListener("connected",n=>{i.userData.handedness=n.data.handedness,i.userData.connected=!0}),i.addEventListener("disconnected",()=>{ft.heldBy()===i&&ft.release(),i.userData.connected=!1}),i.addEventListener("selectstart",()=>fa(wl(i),i)),i.addEventListener("squeezestart",()=>{ou.unlock(),!jn.active()&&!ft.isHolding()&&ft.grab(ft.hit(wl(i)),i)}),i.addEventListener("squeezeend",()=>{ft.heldBy()===i&&ft.release()})}$e.xr.addEventListener("sessionstart",()=>{ou.unlock(),document.body.classList.add("in-vr"),Xs.open=!1,fi.clear(),cu.sessionStarted()});$e.xr.addEventListener("sessionend",()=>{ft.release(),document.body.classList.remove("in-vr"),bt.rotation.x=0});const AT=new _0;let ss=0,Tf=0;$e.setAnimationLoop(()=>{const i=Math.min(AT.getDelta(),.05);ss+=i;let e=Number(fi.has("KeyD"))-Number(fi.has("KeyA"))+di.x,t=Number(fi.has("KeyS"))-Number(fi.has("KeyW"))+di.y;if($e.xr.isPresenting)for(const c of $e.xr.getSession()?.inputSources||[]){const l=c.gamepad?.axes;if(!l)continue;const h=l.length>=4?l[2]:l[0],u=l.length>=4?l[3]:l[1];c.handedness==="right"?ft.isHolding()?(Math.abs(u)>.2&&ft.scaleBy(Math.exp(-u*i)),Math.abs(h)>.2&&ft.rotate(h*i*1.5)):!jn.active()&&Math.abs(h)>.6&&ss-Tf>.3&&(_t.rotation.y-=Math.sign(h)*Math.PI/6,Tf=ss):(e+=Math.abs(h)>.18?h:0,t+=Math.abs(u)>.18?u:0)}const n=Math.max(1,Math.hypot(e,t));e/=n,t/=n;const r=($e.xr.isPresenting?$e.xr.getCamera():bt).getWorldDirection(new U);r.y=0,r.normalize();const s={x:_t.position.x,z:_t.position.z},o=jn.active()?0:4.2;_t.position.addScaledVector(new U(-r.z,0,r.x),e*o*i).addScaledVector(r,-t*o*i);const a=AE(s,_t.position,Ft.userData.campusWalls||[]);_t.position.x=a.x,_t.position.z=a.z,_t.position.x=St.clamp(_t.position.x,-37,un.x),_t.position.z=St.clamp(_t.position.z,-39,un.z);for(const c of wT.values()){const l=c.group.position.distanceTo(c.destination);c.group.position.lerp(c.destination,Math.min(1,i*10));const h=($e.xr.isPresenting?$e.xr.getCamera():bt).getWorldPosition(new U);c.group.userData.proximity(Math.hypot(c.group.position.x-h.x,c.group.position.z-h.z));const u=St.euclideanModulo(c.yaw-c.group.rotation.y+Math.PI,Math.PI*2)-Math.PI;c.group.rotation.y+=u*Math.min(1,i*12),c.group.updateWorldMatrix(!0,!1),c.group.userData.animate(ss,Math.min(l*8,1),c.hands,c.headY,c.pitch)}if(jn.update(i),Ft.userData.updateCampus?.(i),ea.update(ss),cu.update(),!$e.xr.isPresenting)bt.updateWorldMatrix(!0,!1),ta.setFromCamera(document.pointerLockElement?new _e:zo,bt),vs.hoverRay(ta.ray);else{const c=au.find(l=>l.userData.handedness==="right"&&l.userData.connected);c&&vs.hoverRay(wl(c))}vs.update(i),ft.update(i),pp.update(),document.querySelector("#interact").textContent=ft.isHolding()?"Soltar":"Agarrar",$e.render(Ft,bt)});window.addEventListener("resize",()=>{bt.aspect=innerWidth/innerHeight,bt.updateProjectionMatrix(),$e.setSize(innerWidth,innerHeight)});

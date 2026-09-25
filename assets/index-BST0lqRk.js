(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const An={x:37,z:39},Tn={x:-12,z:-9.2},bn={x:12,z:-9.2},Ao={x:-26,z:-25.5},ec=[{x:-24,z:-30,name:"PROCONVET · PREGUNTAS",color:"#087d86"},{x:24,z:-30,name:"EXPLORA · CREA · COMPARTE",color:"#7354a5"}];const ol="180",Bh=0,Xl=1,kh=2,$f=1,Zf=2,Vn=3,Yn=0,zt=1,qt=2,ui=0,dr=1,ql=2,Yl=3,jl=4,zh=5,Ci=100,Hh=101,Vh=102,Gh=103,Wh=104,Xh=200,qh=201,Yh=202,jh=203,tc=204,nc=205,Kh=206,$h=207,Zh=208,Jh=209,Qh=210,ep=211,tp=212,np=213,ip=214,ic=0,rc=1,sc=2,_r=3,oc=4,ac=5,cc=6,lc=7,Jf=0,rp=1,sp=2,fi=0,op=1,ap=2,cp=3,lp=4,up=5,fp=6,dp=7,Kl="attached",hp="detached",Qf=300,xr=301,vr=302,uc=303,fc=304,Vo=306,Ni=1e3,oi=1001,Ro=1002,Ht=1003,ed=1004,ns=1005,Zt=1006,xo=1007,Gn=1008,Cn=1009,td=1010,nd=1011,hs=1012,al=1013,Oi=1014,gn=1015,Cs=1016,cl=1017,ll=1018,ps=1020,id=35902,rd=35899,sd=1021,od=1022,an=1023,ms=1026,gs=1027,ul=1028,fl=1029,ad=1030,dl=1031,hl=1033,vo=33776,yo=33777,Mo=33778,So=33779,dc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,xc=37496,vc=37808,yc=37809,Mc=37810,Sc=37811,Ec=37812,Tc=37813,bc=37814,wc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Lc=37820,Ic=37821,Dc=36492,Uc=36494,Nc=36495,Oc=36283,Fc=36284,Bc=36285,kc=36286,_s=2300,xs=2301,ta=2302,$l=2400,Zl=2401,Jl=2402,pp=2500,mp=0,cd=1,zc=2,gp=3200,_p=3201,ld=0,xp=1,si="",_t="srgb",Wt="srgb-linear",Co="linear",ct="srgb",Wi=7680,Ql=519,vp=512,yp=513,Mp=514,ud=515,Sp=516,Ep=517,Tp=518,bp=519,Hc=35044,eu="300 es",Rn=2e3,Po=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const ss=Math.PI/180,yr=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function wp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ap(i,e,t){return i!==e?(t-i)/(e-i):0}function os(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return os(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ip(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dp(i,e){return i+Math.random()*(e-i)}function Up(i){return i*(.5-Math.random())}function Np(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(i){return i*ss}function Fp(i){return i*yr}function Bp(i){return(i&i-1)===0&&i!==0}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),f=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*f,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*f,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*f,a*l);break;case"XZX":i.set(a*f,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*f,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yt={DEG2RAD:ss,RAD2DEG:yr,generateUUID:_n,clamp:je,euclideanModulo:pl,mapLinear:wp,inverseLerp:Ap,lerp:os,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Lp,randInt:Ip,randFloat:Dp,randFloatSpread:Up,seededRandom:Np,degToRad:Op,radToDeg:Fp,isPowerOfTwo:Bp,ceilPowerOfTwo:kp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Hp,normalize:it,denormalize:mn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],f=n[r+2],u=n[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==h||f!==g){let m=1-a;const p=c*d+l*h+f*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),T=Math.atan2(S,p*x);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const v=a*x;if(c=c*m+d*v,l=l*m+h*v,f=f*m+g*v,u=u*m+_*v,m===1-a){const S=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=S,l*=S,f*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],f=n[r+3],u=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+f*u+c*h-l*d,e[t+1]=c*g+f*d+l*u-a*h,e[t+2]=l*g+f*h+a*d-c*u,e[t+3]=f*g-a*u-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(r/2),u=a(s/2),d=c(n/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*f*u+l*h*g,this._y=l*h*u-d*f*g,this._z=l*f*g+d*h*u,this._w=l*f*u-d*h*g;break;case"YXZ":this._x=d*f*u+l*h*g,this._y=l*h*u-d*f*g,this._z=l*f*g-d*h*u,this._w=l*f*u+d*h*g;break;case"ZXY":this._x=d*f*u-l*h*g,this._y=l*h*u+d*f*g,this._z=l*f*g+d*h*u,this._w=l*f*u-d*h*g;break;case"ZYX":this._x=d*f*u-l*h*g,this._y=l*h*u+d*f*g,this._z=l*f*g-d*h*u,this._w=l*f*u+d*h*g;break;case"YZX":this._x=d*f*u+l*h*g,this._y=l*h*u+d*f*g,this._z=l*f*g-d*h*u,this._w=l*f*u-d*h*g;break;case"XZY":this._x=d*f*u-l*h*g,this._y=l*h*u-d*f*g,this._z=l*f*g+d*h*u,this._w=l*f*u+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],u=t[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(f-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-r*a,this._w=o*f-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),f=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*f,this.y=n+c*f+a*l-s*u,this.z=r+c*u+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new F,nu=new Ln;class We{constructor(e,t,n,r,s,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],d=n[2],h=n[5],g=n[8],_=r[0],m=r[3],p=r[6],x=r[1],y=r[4],v=r[7],S=r[2],T=r[5],R=r[8];return s[0]=o*_+a*x+c*S,s[3]=o*m+a*y+c*T,s[6]=o*p+a*v+c*R,s[1]=l*_+f*x+u*S,s[4]=l*m+f*y+u*T,s[7]=l*p+f*v+u*R,s[2]=d*_+h*x+g*S,s[5]=d*m+h*y+g*T,s[8]=d*p+h*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*s*f+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,d=a*c-f*s,h=l*s-o*c,g=t*u+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-f*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(f*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new We;function fd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vp(){const i=vs("canvas");return i.style.display="block",i}const iu={};function ys(i){i in iu||(iu[i]=!0,console.warn(i))}function Gp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ru=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const i={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?Co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wt]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:ru,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const Ze=Wp();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class Xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=vs("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qp=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ra(r[o].image)):s.push(ra(r[o]))}else s=ra(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;const sa=new F;class At extends Ir{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=oi,r=oi,s=Zt,o=Gn,a=an,c=Cn,l=At.DEFAULT_ANISOTROPY,f=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=_n(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Qf;At.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(h+1)/2,S=(p+1)/2,T=(f+d)/4,R=(u+_)/4,A=(g+m)/4;return y>v&&y>S?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=R/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=A/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=R/s,r=A/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-f)/x,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends Ir{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new At(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ml(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dd extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),ks.subVectors(this.max,zr),qi.subVectors(e.a,zr),Yi.subVectors(e.b,zr),ji.subVectors(e.c,zr),Zn.subVectors(Yi,qi),Jn.subVectors(ji,Yi),xi.subVectors(qi,ji);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-xi.y,xi.x,0];return!oa(t,qi,Yi,ji,ks)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,qi,Yi,ji,ks))?!1:(zs.crossVectors(Zn,Jn),t=[zs.x,zs.y,zs.z],oa(t,qi,Yi,ji,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,Bs=new In,qi=new F,Yi=new F,ji=new F,Zn=new F,Jn=new F,xi=new F,zr=new F,ks=new F,zs=new F,vi=new F;function oa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),f=n.dot(vi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const $p=new In,Hr=new F,aa=new F;class Dn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$p.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(aa)),this.expandByPoint(Hr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new F,ca=new F,Hs=new F,Qn=new F,la=new F,Vs=new F,ua=new F;class Ps{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ca.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),a=Qn.dot(this.direction),c=-Qn.dot(Hs),l=Qn.lengthSq(),f=Math.abs(1-o*o);let u,d,h,g;if(f>0)if(u=o*c-a,d=o*a-c,g=s*f,u>=0)if(d>=-g)if(d<=g){const _=1/f;u*=_,d*=_,h=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),h=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),h=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ca).addScaledVector(Hs,d),h}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){la.subVectors(t,e),Vs.subVectors(n,e),ua.crossVectors(la,Vs);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const c=a*this.direction.dot(Vs.crossVectors(Qn,Vs));if(c<0)return null;const l=a*this.direction.dot(la.cross(Qn));if(l<0||c+l>o)return null;const f=-a*Qn.dot(ua);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,r,s,o,a,c,l,f,u,d,h,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,f,u,d,h,g,_,m)}set(e,t,n,r,s,o,a,c,l,f,u,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*f,h=o*u,g=a*f,_=a*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*f,h=c*u,g=l*f,_=l*u;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*f,h=c*u,g=l*f,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*f,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*f,h=o*u,g=a*f,_=a*u;t[0]=c*f,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*f,t[4]=_-d*u,t[8]=g*u+h,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=h*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=d*u+_,t[5]=o*f,t[9]=h*u-g,t[2]=g*u-h,t[6]=a*f,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,Jp)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ei.crossVectors(n,Kt),ei.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ei.crossVectors(n,Kt)),ei.normalize(),Gs.crossVectors(Kt,ei),r[0]=ei.x,r[4]=Gs.x,r[8]=Kt.x,r[1]=ei.y,r[5]=Gs.y,r[9]=Kt.y,r[2]=ei.z,r[6]=Gs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],S=n[15],T=r[0],R=r[4],A=r[8],M=r[12],E=r[1],I=r[5],B=r[9],W=r[13],C=r[2],U=r[6],L=r[10],N=r[14],D=r[3],X=r[7],Q=r[11],k=r[15];return s[0]=o*T+a*E+c*C+l*D,s[4]=o*R+a*I+c*U+l*X,s[8]=o*A+a*B+c*L+l*Q,s[12]=o*M+a*W+c*N+l*k,s[1]=f*T+u*E+d*C+h*D,s[5]=f*R+u*I+d*U+h*X,s[9]=f*A+u*B+d*L+h*Q,s[13]=f*M+u*W+d*N+h*k,s[2]=g*T+_*E+m*C+p*D,s[6]=g*R+_*I+m*U+p*X,s[10]=g*A+_*B+m*L+p*Q,s[14]=g*M+_*W+m*N+p*k,s[3]=x*T+y*E+v*C+S*D,s[7]=x*R+y*I+v*U+S*X,s[11]=x*A+y*B+v*L+S*Q,s[15]=x*M+y*W+v*N+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*h-n*c*h)+_*(+t*c*h-t*l*d+s*o*d-r*o*h+r*l*f-s*c*f)+m*(+t*l*u-t*a*h-s*o*u+n*o*h+s*a*f-n*l*f)+p*(-r*a*f-t*c*u+t*a*d+r*o*u-n*o*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*l-_*d*l+_*c*h-a*m*h-u*c*p+a*d*p,y=g*d*l-f*m*l-g*c*h+o*m*h+f*c*p-o*d*p,v=f*_*l-g*u*l+g*a*h-o*_*h-f*a*p+o*u*p,S=g*u*c-f*_*c-g*a*d+o*_*d+f*a*m-o*u*m,T=t*x+n*y+r*v+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(_*d*s-u*m*s-_*r*h+n*m*h+u*r*p-n*d*p)*R,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*R,e[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*h-n*c*h)*R,e[4]=y*R,e[5]=(f*m*s-g*d*s+g*r*h-t*m*h-f*r*p+t*d*p)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*R,e[7]=(o*d*s-f*c*s+f*r*l-t*d*l-o*r*h+t*c*h)*R,e[8]=v*R,e[9]=(g*u*s-f*_*s-g*n*h+t*_*h+f*n*p-t*u*p)*R,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(f*a*s-o*u*s-f*n*l+t*u*l+o*n*h-t*a*h)*R,e[12]=S*R,e[13]=(f*_*r-g*u*r+g*n*d-t*_*d-f*n*m+t*u*m)*R,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*r-f*a*r+f*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+n,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,u=a+a,d=s*l,h=s*f,g=s*u,_=o*f,m=o*u,p=a*u,x=c*l,y=c*f,v=c*u,S=n.x,T=n.y,R=n.z;return r[0]=(1-(_+p))*S,r[1]=(h+v)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(h-v)*T,r[5]=(1-(d+p))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+y)*R,r[9]=(m-x)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),a=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const l=1/s,f=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=f,hn.elements[5]*=f,hn.elements[6]*=f,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Rn,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Po)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Rn,c=!1){const l=this.elements,f=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Rn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Po)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new F,hn=new Ge,Zp=new F(0,0,0),Jp=new F(1,1,1),ei=new F,Gs=new F,Kt=new F,ou=new Ge,au=new Ln;class Pn{constructor(e=0,t=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],u=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const cu=new F,$i=new Ln,Bn=new Ge,Ws=new F,Vr=new F,em=new F,tm=new Ln,lu=new F(1,0,0),uu=new F(0,1,0),fu=new F(0,0,1),du={type:"added"},nm={type:"removed"},Zi={type:"childadded",child:null},fa={type:"childremoved",child:null};class ht extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new F,t=new Pn,n=new Ln,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new We}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Vr,Ws,this.up):Bn.lookAt(Ws,Vr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ht.DEFAULT_UP=new F(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new F,kn=new F,da=new F,zn=new F,Ji=new F,Qi=new F,hu=new F,ha=new F,pa=new F,ma=new F,ga=new et,_a=new et,xa=new et;class rn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),kn.subVectors(n,t),da.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(kn),c=pn.dot(da),l=kn.dot(kn),f=kn.dot(da),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,h=(l*c-a*f)*d,g=(o*f-a*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ga,s.x),o.addScaledVector(_a,s.y),o.addScaledVector(xa,s.z),o}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),kn.subVectors(e,t),pn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),pn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,n),Qi.subVectors(s,n),ha.subVectors(e,n);const c=Ji.dot(ha),l=Qi.dot(ha);if(c<=0&&l<=0)return t.copy(n);pa.subVectors(e,r);const f=Ji.dot(pa),u=Qi.dot(pa);if(f>=0&&u<=f)return t.copy(r);const d=c*u-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Ji,o);ma.subVectors(e,s);const h=Ji.dot(ma),g=Qi.dot(ma);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qi,a);const m=f*g-h*u;if(m<=0&&u-f>=0&&h-g>=0)return hu.subVectors(s,r),a=(u-f)/(u-f+(h-g)),t.copy(r).addScaledVector(hu,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=pl(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=va(o,s,e+1/3),this.g=va(o,s,e),this.b=va(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ze.workingToColorSpace(Dt.copy(this),e),Math.round(je(Dt.r*255,0,255))*65536+Math.round(je(Dt.g*255,0,255))*256+Math.round(je(Dt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=_t){Ze.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,r=Dt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Xs);const n=os(ti.h,Xs.h,t),r=os(ti.s,Xs.s,t),s=os(ti.l,Xs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Oe;Oe.NAMES=hd;let im=0;class xn extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=dr,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new F,qs=new Ne;let rm=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class pd extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sm=0;const tn=new Ge,ya=new ht,er=new F,$t=new In,Gr=new In,Lt=new F;class Pt extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?md:pd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors($t.min,Gr.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,Gr.max),$t.expandByPoint(Lt)):($t.expandByPoint(Gr.min),$t.expandByPoint(Gr.max))}$t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Lt.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Lt.add(er)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new F,c[A]=new F;const l=new F,f=new F,u=new F,d=new Ne,h=new Ne,g=new Ne,_=new F,m=new F;function p(A,M,E){l.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,E),f.sub(l),u.sub(l),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(I),m.copy(u).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(I),a[A].add(_),a[M].add(_),a[E].add(_),c[A].add(m),c[M].add(m),c[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,M=x.length;A<M;++A){const E=x[A],I=E.start,B=E.count;for(let W=I,C=I+B;W<C;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new F,v=new F,S=new F,T=new F;function R(A){S.fromBufferAttribute(r,A),T.copy(S);const M=a[A];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(T,M);const I=v.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,M=x.length;A<M;++A){const E=x[A],I=E.start,B=E.count;for(let W=I,C=I+B;W<C;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,f=new F,u=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(f),c.add(f),l.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,u=a.normalized,d=new l.constructor(c.length*f);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*f;for(let p=0;p<f;p++)d[g++]=l[h++]}return new Ut(d,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,u=l.length;f<u;f++){const d=l[f],h=e(d,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,d=l.length;u<d;u++){const h=l[u];f.push(h.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let d=0,h=u.length;d<h;d++)f.push(u[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new Ge,yi=new Ps,Ys=new Dn,mu=new F,js=new F,Ks=new F,$s=new F,Ma=new F,Zs=new F,gu=new F,Js=new F;class Ye extends ht{constructor(e=new Pt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],u=s[c];f!==0&&(Ma.fromBufferAttribute(u,e),o?Zs.addScaledVector(Ma,f):Zs.addScaledVector(Ma.sub(t),f))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Ys.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ys,mu)===null||yi.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(s).invert(),yi.copy(e.ray).applyMatrix4(pu),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=x,S=y;v<S;v+=3){const T=a.getX(v),R=a.getX(v+1),A=a.getX(v+2);r=Qs(this,p,e,n,l,f,u,T,R,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Qs(this,o,e,n,l,f,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let v=x,S=y;v<S;v+=3){const T=v,R=v+1,A=v+2;r=Qs(this,p,e,n,l,f,u,T,R,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;r=Qs(this,o,e,n,l,f,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function om(i,e,t,n,r,s,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Yn,a),c===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Js);return l<t.near||l>t.far?null:{distance:l,point:Js.clone(),object:i}}function Qs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,js),i.getVertexPosition(c,Ks),i.getVertexPosition(l,$s);const f=om(i,e,t,n,js,Ks,$s,gu);if(f){const u=new F;rn.getBarycoord(gu,js,Ks,$s,u),r&&(f.uv=rn.getInterpolatedAttribute(r,a,c,l,u,new Ne)),s&&(f.uv1=rn.getInterpolatedAttribute(s,a,c,l,u,new Ne)),o&&(f.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new F,materialIndex:0};rn.getNormal(js,Ks,$s,d.normal),f.face=d,f.barycoord=u}return f}class cn extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],u=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,x,y,v,S,T,R,A,M){const E=v/R,I=S/A,B=v/2,W=S/2,C=T/2,U=R+1,L=A+1;let N=0,D=0;const X=new F;for(let Q=0;Q<L;Q++){const k=Q*I-W;for(let H=0;H<U;H++){const le=H*E-B;X[_]=le*x,X[m]=k*y,X[p]=C,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,f.push(X.x,X.y,X.z),u.push(H/R),u.push(1-Q/A),N+=1}}for(let Q=0;Q<A;Q++)for(let k=0;k<R;k++){const H=d+k+U*Q,le=d+k+U*(Q+1),he=d+(k+1)+U*(Q+1),ye=d+(k+1)+U*Q;c.push(H,le,ye),c.push(le,he,ye),D+=6}a.addGroup(h,D,M),h+=D,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function am(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const cm={clone:Mr,merge:Ft};var lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _d extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new F,_u=new Ne,xu=new Ne;class Bt extends _d{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,_u,xu),t.subVectors(xu,_u)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class fm extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new Bt(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new Bt(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new Bt(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new Bt(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new Bt(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xd extends At{constructor(e=[],t=xr,n,r,s,o,a,c,l,f){super(e,t,n,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dm extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:ui});s.uniforms.tEquirect.value=t;const o=new Ye(r,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Zt),new fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class ln extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=f.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _l{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pm extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new F;class Ms{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yd extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ir;const Wr=new F,rr=new F,sr=new F,or=new Ne,Xr=new Ne,Md=new Ge,eo=new F,qr=new F,to=new F,vu=new Ne,Ea=new Ne,yu=new Ne;class mm extends ht{constructor(e=new yd){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vd(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Ms(n,3,0,!1)),ir.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-sr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;no(eo.set(-.5,-.5,0),sr,o,rr,r,s),no(qr.set(.5,-.5,0),sr,o,rr,r,s),no(to.set(.5,.5,0),sr,o,rr,r,s),vu.set(0,0),Ea.set(1,0),yu.set(1,1);let a=e.ray.intersectTriangle(eo,qr,to,!1,Wr);if(a===null&&(no(qr.set(-.5,.5,0),sr,o,rr,r,s),Ea.set(0,1),a=e.ray.intersectTriangle(eo,to,qr,!1,Wr),a===null))return;const c=e.ray.origin.distanceTo(Wr);c<e.near||c>e.far||t.push({distance:c,point:Wr.clone(),uv:rn.getInterpolation(Wr,eo,qr,to,vu,Ea,yu,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function no(i,e,t,n,r,s){or.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Xr.x=s*or.x-r*or.y,Xr.y=r*or.x+s*or.y):Xr.copy(or),i.copy(e),i.x+=Xr.x,i.y+=Xr.y,i.applyMatrix4(Md)}const Mu=new F,Su=new et,Eu=new et,gm=new F,Tu=new Ge,io=new F,Ta=new Dn,bu=new Ge,ba=new Ps;class _m extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(r),e.ray.intersectsSphere(Ta)!==!1&&(bu.copy(r).invert(),ba.copy(e.ray).applyMatrix4(bu),!(this.boundingBox!==null&&ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Su.fromBufferAttribute(r.attributes.skinIndex,e),Eu.fromBufferAttribute(r.attributes.skinWeight,e),Mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Eu.getComponent(s);if(o!==0){const a=Su.getComponent(s);Tu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gm.copy(Mu).applyMatrix4(Tu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sd extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ed extends At{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Ht,f=Ht,u,d){super(null,o,a,c,l,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new Ge,xm=new Ge;class xl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:xm;wu.multiplyMatrices(a,t[s]),wu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ed(t,e,e,an,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sd),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Vc extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ar=new Ge,Au=new Ge,ro=[],Ru=new In,vm=new Ge,Yr=new Ye,jr=new Dn;class Td extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,vm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),Ru.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),jr.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ar),Au.multiplyMatrices(n,ar),Yr.matrixWorld=Au,Yr.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){const c=ro[o];c.instanceId=s,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ed(new Float32Array(r*this.count),r,this.count,ul,gn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wa=new F,ym=new F,Mm=new We;class Ai{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wa.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mm.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Dn,Sm=new Ne(.5,.5),so=new F;class vl{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],f=s[4],u=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],x=s[12],y=s[13],v=s[14],S=s[15];if(r[0].setComponents(l-o,h-f,p-g,S-x).normalize(),r[1].setComponents(l+o,h+f,p+g,S+x).normalize(),r[2].setComponents(l+a,h+u,p+_,S+y).normalize(),r[3].setComponents(l-a,h-u,p-_,S-y).normalize(),n)r[4].setComponents(c,d,m,v).normalize(),r[5].setComponents(l-c,h-d,p-m,S-v).normalize();else if(r[4].setComponents(l-c,h-d,p-m,S-v).normalize(),t===Rn)r[5].setComponents(l+c,h+d,p+m,S+v).normalize();else if(t===Po)r[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Sm.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yl extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lo=new F,Io=new F,Cu=new Ge,Kr=new Ps,oo=new Dn,Aa=new F,Pu=new F;class Go extends ht{constructor(e=new Pt,t=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Lo.fromBufferAttribute(t,r-1),Io.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Lo.distanceTo(Io);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;Cu.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=f.getX(_),x=f.getX(_+1),y=ao(this,e,Kr,c,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(h),p=ao(this,e,Kr,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=ao(this,e,Kr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ao(this,e,Kr,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ao(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Lo.fromBufferAttribute(a,r),Io.fromBufferAttribute(a,s),t.distanceSqToSegment(Lo,Io,Aa,Pu)>n)return;Aa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Aa);if(!(l<e.near||l>e.far))return{distance:l,point:Pu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Lu=new F,Iu=new F;class Em extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Lu.fromBufferAttribute(t,r),Iu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Lu.distanceTo(Iu);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tm extends Go{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bd extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Du=new Ge,Gc=new Ps,co=new Dn,lo=new F;class bm extends ht{constructor(e=new Pt,t=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Du.copy(r).invert(),Gc.copy(e.ray).applyMatrix4(Du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);lo.fromBufferAttribute(u,m),Uu(lo,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let g=d,_=h;g<_;g++)lo.fromBufferAttribute(u,g),Uu(lo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uu(i,e,t,n,r,s,o){const a=Gc.distanceSqToPoint(i);if(a<t){const c=new F;Gc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Sr extends At{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wd extends At{constructor(e,t,n=Oi,r,s,o,a=Ht,c=Ht,l,f=ms,u=1){if(f!==ms&&f!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ad extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ml extends Pt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],f=t/2,u=Math.PI/2*e,d=t,h=2*u+d,g=n*2+s,_=r+1,m=new F,p=new F;for(let x=0;x<=g;x++){let y=0,v=0,S=0,T=0;if(x<=n){const M=x/n,E=M*Math.PI/2;v=-f-e*Math.cos(E),S=e*Math.sin(E),T=-e*Math.cos(E),y=M*u}else if(x<=n+s){const M=(x-n)/s;v=-f+M*t,S=e,T=0,y=u+M*d}else{const M=(x-n-s)/n,E=M*Math.PI/2;v=f+e*Math.sin(E),S=e*Math.cos(E),T=e*Math.sin(E),y=u+d+M*u}const R=Math.max(0,Math.min(1,y/h));let A=0;x===0?A=.5/r:x===g&&(A=-.5/r);for(let M=0;M<=r;M++){const E=M/r,I=E*Math.PI*2,B=Math.sin(I),W=Math.cos(I);p.x=-S*W,p.y=v,p.z=S*B,a.push(p.x,p.y,p.z),m.set(-S*W,T,S*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+A,R)}if(x>0){const M=(x-1)*_;for(let E=0;E<r;E++){const I=M+E,B=M+E+1,W=x*_+E,C=x*_+E+1;o.push(I,B,W),o.push(B,C,W)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class mi extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(h,2));function x(){const v=new F,S=new F;let T=0;const R=(t-e)/n;for(let A=0;A<=s;A++){const M=[],E=A/s,I=E*(t-e)+e;for(let B=0;B<=r;B++){const W=B/r,C=W*c+a,U=Math.sin(C),L=Math.cos(C);S.x=I*U,S.y=-E*n+m,S.z=I*L,u.push(S.x,S.y,S.z),v.set(U,R,L).normalize(),d.push(v.x,v.y,v.z),h.push(W,1-E),M.push(g++)}_.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const E=_[M][A],I=_[M+1][A],B=_[M+1][A+1],W=_[M][A+1];(e>0||M!==0)&&(f.push(E,I,W),T+=3),(t>0||M!==s-1)&&(f.push(I,B,W),T+=3)}l.addGroup(p,T,0),p+=T}function y(v){const S=g,T=new Ne,R=new F;let A=0;const M=v===!0?e:t,E=v===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,m*E,0),d.push(0,E,0),h.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const C=B/r*c+a,U=Math.cos(C),L=Math.sin(C);R.x=M*L,R.y=m*E,R.z=M*U,u.push(R.x,R.y,R.z),d.push(0,E,0),T.x=U*.5+.5,T.y=L*.5*E+.5,h.push(T.x,T.y),g++}for(let B=0;B<r;B++){const W=S+B,C=I+B;v===!0?f.push(C,C+1,W):f.push(C+1,C,W),A+=3}l.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends mi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Do(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),f(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new F,v=new F,S=new F;for(let T=0;T<t.length;T+=3)h(t[T+0],y),h(t[T+1],v),h(t[T+2],S),c(y,v,S,x)}function c(x,y,v,S){const T=S+1,R=[];for(let A=0;A<=T;A++){R[A]=[];const M=x.clone().lerp(v,A/T),E=y.clone().lerp(v,A/T),I=T-A;for(let B=0;B<=I;B++)B===0&&A===T?R[A][B]=M:R[A][B]=M.clone().lerp(E,B/I)}for(let A=0;A<T;A++)for(let M=0;M<2*(T-A)-1;M++){const E=Math.floor(M/2);M%2===0?(d(R[A][E+1]),d(R[A+1][E]),d(R[A][E])):(d(R[A][E+1]),d(R[A+1][E+1]),d(R[A+1][E]))}}function l(x){const y=new F;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function f(){const x=new F;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=m(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;o.push(v,1-S)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],S=o[x+4],T=Math.max(y,v,S),R=Math.min(y,v,S);T>.9&&R<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function h(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new F,y=new F,v=new F,S=new F,T=new Ne,R=new Ne,A=new Ne;for(let M=0,E=0;M<s.length;M+=9,E+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),T.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),S.copy(x).add(y).add(v).divideScalar(3);const I=m(S);_(T,E+0,x,I),_(R,E+2,y,I),_(A,E+4,v,I)}}function _(x,y,v,S){S<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.vertices,e.indices,e.radius,e.details)}}class Uo extends Sl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uo(e.radius,e.detail)}}class $n extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,f=c+1,u=e/a,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const x=p*d-o;for(let y=0;y<l;y++){const v=y*u-s;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),S=x+1+l*(p+1),T=x+1+l*p;h.push(y,v,T),h.push(v,S,T)}this.setIndex(h),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}class El extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],f=[];let u=e;const d=(t-e)/r,h=new F,g=new Ne;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;h.x=u*Math.cos(p),h.y=u*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,f.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,S=x+n+2,T=x+1;a.push(y,v,T),a.push(v,S,T)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wn extends Pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const f=[],u=new F,d=new F,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const T=S/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-y),x.push(l++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=f[p][x+1],v=f[p][x],S=f[p+1][x],T=f[p+1][x+1];(p!==0||o>0)&&h.push(y,v,T),(p!==n-1||c<Math.PI)&&h.push(v,S,T)}this.setIndex(h),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Er extends Pt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],f=new F,u=new F,d=new F;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,x=(r+1)*h+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Et extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Un extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wm extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Am extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function uo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cm(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Nu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function Rd(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ls{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pm extends Ls{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zl:s=e,a=2*t-n;break;case Jl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:o=e,c=2*n-t;break;case Jl:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-h)*m+(1.5+h)*_+.5*g,v=h*m-h*_;for(let S=0;S!==a;++S)s[S]=p*o[f+S]+x*o[l+S]+y*o[c+S]+v*o[u+S];return s}}class Lm extends Ls{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(n-t)/(r-t),u=1-f;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*f;return s}}class Im extends Ls{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Rm(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ta,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(r)c=!0;else{const u=a*n,d=u-n,h=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[u+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=xs;class Dr extends Mn{constructor(e,t,n){super(e,t,n)}}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=_s;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cd extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}Cd.prototype.ValueTypeName="color";class Tr extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}Tr.prototype.ValueTypeName="number";class Dm extends Ls{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let f=l+a;l!==f;l+=4)Ln.slerpFlat(s,0,o,l-a,o,l,c);return s}}class br extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Dm(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Mn{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=_s;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends Mn{constructor(e,t,n,r){super(e,t,n,r)}}wr.prototype.ValueTypeName="vector";class Um{constructor(e="",t=-1,n=[],r=pp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Om(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const f=Cm(c);c=Nu(c,1,f),l=Nu(l,1,f),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],f=l.name.match(s);if(f&&f.length>1){const u=f[1];let d=r[u];d||(r[u]=d=[]),d.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,h,g,_){if(h.length!==0){const m=[],p=[];Rd(h,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new Tr(".morphTargetInfluence["+_+"]",m,p))}c=h.length*o}else{const h=".bones["+t[u].name+"]";n(wr,h+".position",d,"pos",r),n(br,h+".quaternion",d,"rot",r),n(wr,h+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Nm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tr;case"vector":case"vector2":case"vector3":case"vector4":return wr;case"color":return Cd;case"quaternion":return br;case"bool":case"boolean":return Dr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Om(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nm(i.type);if(i.times===void 0){const t=[],n=[];Rd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Xn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Fm{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],g=l[u+1];if(h.global&&(h.lastIndex=0),h.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Bm=new Fm;class Nr{constructor(e){this.manager=e!==void 0?e:Bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class km extends Error{constructor(e,t){super(e),this.response=t}}class Pd extends Nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:r});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=Hn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let T=0,R=f.length;T<R;T++){const A=f[T];A.onProgress&&A.onProgress(S)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new km(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Xn.add(`file:${e}`,l);const f=Hn[e];delete Hn[e];for(let u=0,d=f.length;u<d;u++){const h=f[u];h.onLoad&&h.onLoad(l)}}).catch(l=>{const f=Hn[e];if(f===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,d=f.length;u<d;u++){const h=f[u];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cr=new WeakMap;class zm extends Nr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=cr.get(o);u===void 0&&(u=[],cr.set(o,u)),u.push({onLoad:t,onError:r})}return o}const a=vs("img");function c(){f(),t&&t(this);const u=cr.get(this)||[];for(let d=0;d<u.length;d++){const h=u[d];h.onLoad&&h.onLoad(this)}cr.delete(this),s.manager.itemEnd(e)}function l(u){f(),r&&r(u),Xn.remove(`image:${e}`);const d=cr.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(u)}cr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Hm extends Nr{constructor(e){super(e)}load(e,t,n,r){const s=new At,o=new zm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Wo extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Vm extends Wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ra=new Ge,Ou=new F,Fu=new F;class Tl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gm extends Tl{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wm extends Wo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Gm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bu=new Ge,$r=new F,Ca=new F;class Xm extends Tl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),r.makeTranslation(-$r.x,-$r.y,-$r.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu,n.coordinateSystem,n.reversedDepth)}}class qm extends Wo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bl extends _d{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ym extends Tl{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ld extends Wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class as{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Pa=new WeakMap;class jm extends Nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Pa.has(o)===!0)r&&r(Pa.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Pa.set(c,l),Xn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Km extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $m{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wl="\\[\\]\\.:\\/",Zm=new RegExp("["+wl+"]","g"),Al="[^"+wl+"]",Jm="[^"+wl.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",Al),eg=/(WCOD+)?/.source.replace("WCOD",Jm),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),ig=new RegExp("^"+Qm+eg+tg+ng+"$"),rg=["material","materials","bones","map"];class sg{constructor(e,t,n){const r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(e){const t=ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);rg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=sg;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ku=new Ge;class Is{constructor(e,t,n=0,r=1/0){this.ray=new Ps(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(zu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Wc(e[r],this,n,t);return n.sort(zu),n}}function zu(i,e){return i.distance-e.distance}function Wc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Wc(s[o],e,t,!0)}}function Hu(i,e,t,n){const r=og(n);switch(t){case sd:return i*e;case ul:return i*e/r.components*r.byteLength;case fl:return i*e/r.components*r.byteLength;case ad:return i*e*2/r.components*r.byteLength;case dl:return i*e*2/r.components*r.byteLength;case od:return i*e*3/r.components*r.byteLength;case an:return i*e*4/r.components*r.byteLength;case hl:return i*e*4/r.components*r.byteLength;case vo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dc:case Uc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(i){switch(i){case Cn:case td:return{byteLength:1,components:1};case hs:case nd:case Cs:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case Oi:case al:case gn:return{byteLength:4,components:1};case id:case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Id(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ag(i){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,f);else{u.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<u.length;h++){const g=u[d],_=u[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let h=0,g=u.length;h<g;h++){const _=u[h];i.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lg=`#define PI 3.141592653589793
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,o_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:cg,alphahash_pars_fragment:lg,alphamap_fragment:ug,alphamap_pars_fragment:fg,alphatest_fragment:dg,alphatest_pars_fragment:hg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:_g,begin_vertex:xg,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:wg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Lg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ug,displacementmap_vertex:Ng,emissivemap_fragment:Og,emissivemap_pars_fragment:Fg,colorspace_fragment:Bg,colorspace_pars_fragment:kg,envmap_fragment:zg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Vg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e_,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:jg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:$g,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:c_,lights_fragment_end:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:h_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:x_,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:E_,morphtarget_vertex:T_,normal_fragment_begin:b_,normal_fragment_maps:w_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:U_,opaque_fragment:N_,packing:O_,premultiplied_alpha_fragment:F_,project_vertex:B_,dithering_fragment:k_,dithering_pars_fragment:z_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:j_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:r0,uv_vertex:s0,worldpos_vertex:o0,background_vert:a0,background_frag:c0,backgroundCube_vert:l0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:d0,depth_vert:h0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:x0,linedashed_vert:v0,linedashed_frag:y0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:b0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:O0,shadow_vert:F0,shadow_frag:B0,sprite_vert:k0,sprite_frag:z0},ge={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},wn={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:Ft([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const fo={r:0,b:0,g:0},Si=new Pn,H0=new Ge;function V0(i,e,t,n,r,s,o){const a=new Oe(0);let c=s===!0?0:1,l,f,u=null,d=0,h=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Vo)?(f===void 0&&(f=new Ye(new cn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Mr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(Si)),f.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,(u!==S||d!==S.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ye(new $n(2,2),new jn({name:"BackgroundMaterial",uniforms:Mr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(fo,gd(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,v,o)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:x}}function G0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(E,I,B,W,C){let U=!1;const L=u(W,B,I);s!==L&&(s=L,l(s.object)),U=h(E,W,B,C),U&&g(E,W,B,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(E,I,B,W),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function u(E,I,B){const W=B.wireframe===!0;let C=n[E.id];C===void 0&&(C={},n[E.id]=C);let U=C[I.id];U===void 0&&(U={},C[I.id]=U);let L=U[W];return L===void 0&&(L=d(c()),U[W]=L),L}function d(E){const I=[],B=[],W=[];for(let C=0;C<t;C++)I[C]=0,B[C]=0,W[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:W,object:E,attributes:{},index:null}}function h(E,I,B,W){const C=s.attributes,U=I.attributes;let L=0;const N=B.getAttributes();for(const D in N)if(N[D].location>=0){const Q=C[D];let k=U[D];if(k===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),Q===void 0||Q.attribute!==k||k&&Q.data!==k.data)return!0;L++}return s.attributesNum!==L||s.index!==W}function g(E,I,B,W){const C={},U=I.attributes;let L=0;const N=B.getAttributes();for(const D in N)if(N[D].location>=0){let Q=U[D];Q===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor));const k={};k.attribute=Q,Q&&Q.data&&(k.data=Q.data),C[D]=k,L++}s.attributes=C,s.attributesNum=L,s.index=W}function _(){const E=s.newAttributes;for(let I=0,B=E.length;I<B;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const B=s.newAttributes,W=s.enabledAttributes,C=s.attributeDivisors;B[E]=1,W[E]===0&&(i.enableVertexAttribArray(E),W[E]=1),C[E]!==I&&(i.vertexAttribDivisor(E,I),C[E]=I)}function x(){const E=s.newAttributes,I=s.enabledAttributes;for(let B=0,W=I.length;B<W;B++)I[B]!==E[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function y(E,I,B,W,C,U,L){L===!0?i.vertexAttribIPointer(E,I,B,C,U):i.vertexAttribPointer(E,I,B,W,C,U)}function v(E,I,B,W){_();const C=W.attributes,U=B.getAttributes(),L=I.defaultAttributeValues;for(const N in U){const D=U[N];if(D.location>=0){let X=C[N];if(X===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),X!==void 0){const Q=X.normalized,k=X.itemSize,H=e.get(X);if(H===void 0)continue;const le=H.buffer,he=H.type,ye=H.bytesPerElement,K=he===i.INT||he===i.UNSIGNED_INT||X.gpuType===al;if(X.isInterleavedBufferAttribute){const te=X.data,fe=te.stride,Pe=X.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<D.locationSize;_e++)p(D.location+_e,te.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<D.locationSize;_e++)m(D.location+_e);i.bindBuffer(i.ARRAY_BUFFER,le);for(let _e=0;_e<D.locationSize;_e++)y(D.location+_e,k/D.locationSize,he,Q,fe*ye,(Pe+k/D.locationSize*_e)*ye,K)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<D.locationSize;te++)p(D.location+te,X.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<D.locationSize;te++)m(D.location+te);i.bindBuffer(i.ARRAY_BUFFER,le);for(let te=0;te<D.locationSize;te++)y(D.location+te,k/D.locationSize,he,Q,k*ye,k/D.locationSize*te*ye,K)}}else if(L!==void 0){const Q=L[N];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(D.location,Q);break;case 3:i.vertexAttrib3fv(D.location,Q);break;case 4:i.vertexAttrib4fv(D.location,Q);break;default:i.vertexAttrib1fv(D.location,Q)}}}}x()}function S(){A();for(const E in n){const I=n[E];for(const B in I){const W=I[B];for(const C in W)f(W[C].object),delete W[C];delete I[B]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const B in I){const W=I[B];for(const C in W)f(W[C].object),delete W[C];delete I[B]}delete n[E.id]}function R(E){for(const I in n){const B=n[I];if(B[E.id]===void 0)continue;const W=B[E.id];for(const C in W)f(W[C].object),delete W[C];delete B[E.id]}}function A(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function W0(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function o(l,f,u){u!==0&&(i.drawArraysInstanced(n,l,f,u),t.update(f,n,u))}function a(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,u);let h=0;for(let g=0;g<u;g++)h+=f[g];t.update(h,n,1)}function c(l,f,u,d){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],f[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function X0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gn&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:T}}function q0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ai,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||n!==0||r;return r=d,n=u.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,h){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):l();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;c.value=v,v=f(g,d,y,h);for(let S=0;S!==y;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,d,h,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=h;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Y0(i){let e=new WeakMap;function t(o,a){return a===uc?o.mapping=xr:a===fc&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===fc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const fr=4,Vu=[.125,.215,.35,.446,.526,.582],Pi=20,La=new bl,Gu=new Oe;let Ia=null,Da=0,Ua=0,Na=!1;const Ri=(1+Math.sqrt(5))/2,lr=1/Ri,Wu=[new F(-Ri,lr,0),new F(Ri,lr,0),new F(-lr,0,Ri),new F(lr,0,Ri),new F(0,Ri,-lr),new F(0,Ri,lr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],j0=new F;class Xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=j0}=s;Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Cs,format:an,colorSpace:Wt,depthBuffer:!1},r=qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(s)),this._blurMaterial=$0(s,e,t)}return r}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r,s){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Gu),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new wt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new Ye(new cn,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(Gu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[y]));const S=this._cubeSize;ho(r,v*S,y>2?S:0,S,S),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xr||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wu[(r-s-1)%Wu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Ye(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Pi-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let x=0;for(let R=0;R<Pi;++R){const A=R/_,M=Math.exp(-A*A/2);p.push(M),R===0?x+=M:R<m&&(x+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[r],S=3*v*(r>y-fr?r-y+fr:0),T=4*(this._cubeSize-v);ho(t,S,T,3*v,2*v),c.setRenderTarget(t),c.render(u,La)}}function K0(i){const e=[],t=[],n=[];let r=i;const s=i-fr+1+Vu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-fr?c=Vu[o-i+fr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,u=1+l,d=[f,f,u,f,u,u,f,f,u,u,f,u],h=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*h),y=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let T=0;T<h;T++){const R=T%3*2/3-1,A=T>2?0:-1,M=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];x.set(M,_*g*T),y.set(d,m*g*T);const E=[T,T,T,T,T,T];v.set(E,p*g*T)}const S=new Pt;S.setAttribute("position",new Ut(x,_)),S.setAttribute("uv",new Ut(y,m)),S.setAttribute("faceIndex",new Ut(v,p)),e.push(S),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qu(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $0(i,e,t){const n=new Float32Array(Pi),r=new F(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ju(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function Z0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===uc||c===fc,f=c===xr||c===vr;if(l||f){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Xu(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return l&&h&&h.height>0||f&&h&&r(h)?(t===null&&(t=new Xu(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function J0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Q0(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const h in d)e.update(d[h],i.ARRAY_BUFFER)}function l(u){const d=[],h=u.index,g=u.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let y=0,v=x.length;y<v;y+=3){const S=x[y+0],T=x[y+1],R=x[y+2];d.push(S,T,T,R,R,S)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const S=y+0,T=y+1,R=y+2;d.push(S,T,T,R,R,S)}}else return;const m=new(fd(d)?md:pd)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function f(u){const d=s.get(u);if(d){const h=u.index;h!==null&&d.version<h.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function ex(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*o),t.update(h,n,1)}function l(d,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,d*o,g),t.update(h,n,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function u(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=h[x]*_[x];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function tx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nx(i,e,t){const n=new WeakMap,r=new et;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var h=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let S=a.attributes.position.count*v,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*T*4*u),A=new dd(R,S,T,u);A.type=gn,A.needsUpdate=!0;const M=v*4;for(let I=0;I<u;I++){const B=p[I],W=x[I],C=y[I],U=S*T*4*I;for(let L=0;L<B.count;L++){const N=L*M;g===!0&&(r.fromBufferAttribute(B,L),R[U+N+0]=r.x,R[U+N+1]=r.y,R[U+N+2]=r.z,R[U+N+3]=0),_===!0&&(r.fromBufferAttribute(W,L),R[U+N+4]=r.x,R[U+N+5]=r.y,R[U+N+6]=r.z,R[U+N+7]=0),m===!0&&(r.fromBufferAttribute(C,L),R[U+N+8]=r.x,R[U+N+9]=r.y,R[U+N+10]=r.z,R[U+N+11]=C.itemSize===4?r.w:1)}}d={count:u,texture:A,size:new Ne(S,T)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function ix(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Dd=new At,Ku=new wd(1,1),Ud=new dd,Nd=new Kp,Od=new xd,$u=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$u[r];if(s===void 0&&(s=new Float32Array(r),$u[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),Ct(t,n)}}function lx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Ct(t,n)}}function ux(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Ct(t,n)}}function fx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function vx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ku.compareFunction=ud,s=Ku):s=Dd,t.setTexture2D(e||s,r)}function yx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nd,r)}function Mx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Od,r)}function Sx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ud,r)}function Ex(i){switch(i){case 5126:return rx;case 35664:return sx;case 35665:return ox;case 35666:return ax;case 35674:return cx;case 35675:return lx;case 35676:return ux;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return hx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Tx(i,e){i.uniform1fv(this.addr,e)}function bx(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function wx(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Ax(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function Rx(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cx(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Px(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lx(i,e){i.uniform1iv(this.addr,e)}function Ix(i,e){i.uniform2iv(this.addr,e)}function Dx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Nx(i,e){i.uniform1uiv(this.addr,e)}function Ox(i,e){i.uniform2uiv(this.addr,e)}function Fx(i,e){i.uniform3uiv(this.addr,e)}function Bx(i,e){i.uniform4uiv(this.addr,e)}function kx(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dd,s[o])}function zx(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nd,s[o])}function Hx(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Od,s[o])}function Vx(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ud,s[o])}function Gx(i){switch(i){case 5126:return Tx;case 35664:return bx;case 35665:return wx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Ix;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Ox;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}}class Xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function tf(i,e){i.seq.push(e),i.map[e.id]=e}function Yx(i,e,t){const n=i.name,r=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),o=Oa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tf(t,l===void 0?new Wx(a,i,e):new Xx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new qx(a),tf(t,u)),t=u}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jx=37297;let Kx=0;function $x(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const rf=new We;function Zx(i){Ze._getMatrix(rf,Ze.workingColorSpace,i);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$x(i.getShaderSource(e),a)}else return s}function Jx(i,e){const t=Zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qx(i,e){let t;switch(e){case op:t="Linear";break;case ap:t="Reinhard";break;case cp:t="Cineon";break;case lp:t="ACESFilmic";break;case fp:t="AgX";break;case dp:t="Neutral";break;case up:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new F;function ev(){Ze.getLuminanceCoefficients(po);const i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function nv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function is(i){return i!==""}function of(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(rv,ov)}const sv=new Map;function ov(i,e){let t=Xe[e];if(t===void 0){const n=sv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(av,cv)}function cv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function uv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case vr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vr&&(e="ENVMAP_MODE_REFRACTION"),e}function dv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jf:e="ENVMAP_BLENDING_MULTIPLY";break;case rp:e="ENVMAP_BLENDING_MIX";break;case sp:e="ENVMAP_BLENDING_ADD";break}return e}function hv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=lv(t),l=uv(t),f=fv(t),u=dv(t),d=hv(t),h=tv(t),g=nv(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==fi?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=Xc(o),o=of(o,t),o=af(o,t),a=Xc(a),a=of(a,t),a=af(a,t),o=cf(o),a=cf(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,S=nf(r,r.VERTEX_SHADER,y),T=nf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,S),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",W=r.getShaderInfoLog(S)||"",C=r.getShaderInfoLog(T)||"",U=B.trim(),L=W.trim(),N=C.trim();let D=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,T);else{const Q=sf(r,S,"vertex"),k=sf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+Q+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||N==="")&&(X=!1);X&&(I.diagnostics={runnable:D,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:p}})}r.deleteShader(S),r.deleteShader(T),A=new Eo(r,_),M=iv(r,_)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,jx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let mv=0;class gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _v(e),t.set(e,n)),n}}class _v{constructor(e){this.id=mv++,this.code=e,this.usedTimes=0}}function xv(i,e,t,n,r,s,o){const a=new gl,c=new gv,l=new Set,f=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,E,I,B,W){const C=B.fog,U=W.geometry,L=M.isMeshStandardMaterial?B.environment:null,N=(M.isMeshStandardMaterial?t:e).get(M.envMap||L),D=N&&N.mapping===Vo?N.image.height:null,X=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,k=Q!==void 0?Q.length:0;let H=0;U.morphAttributes.position!==void 0&&(H=1),U.morphAttributes.normal!==void 0&&(H=2),U.morphAttributes.color!==void 0&&(H=3);let le,he,ye,K;if(X){const tt=wn[X];le=tt.vertexShader,he=tt.fragmentShader}else le=M.vertexShader,he=M.fragmentShader,c.update(M),ye=c.getVertexShaderID(M),K=c.getFragmentShaderID(M);const te=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Pe=W.isInstancedMesh===!0,_e=W.isBatchedMesh===!0,Fe=!!M.map,He=!!M.matcap,O=!!N,Je=!!M.aoMap,Me=!!M.lightMap,Ie=!!M.bumpMap,be=!!M.normalMap,ot=!!M.displacementMap,Se=!!M.emissiveMap,ke=!!M.metalnessMap,pt=!!M.roughnessMap,gt=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,q=M.iridescence>0,ee=M.sheen>0,se=M.transmission>0,Z=gt&&!!M.anisotropyMap,ie=P&&!!M.clearcoatMap,$=P&&!!M.clearcoatNormalMap,re=P&&!!M.clearcoatRoughnessMap,me=q&&!!M.iridescenceMap,J=q&&!!M.iridescenceThicknessMap,ue=ee&&!!M.sheenColorMap,Ee=ee&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,pe=!!M.specularColorMap,ze=!!M.specularIntensityMap,z=se&&!!M.transmissionMap,oe=se&&!!M.thicknessMap,de=!!M.gradientMap,Te=!!M.alphaMap,ae=M.alphaTest>0,ne=!!M.alphaHash,Re=!!M.extensions;let Ve=fi;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const dt={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:he,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:_e,batchingColor:_e&&W._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&W.instanceColor!==null,instancingMorph:Pe&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Wt,alphaToCoverage:!!M.alphaToCoverage,map:Fe,matcap:He,envMap:O,envMapMode:O&&N.mapping,envMapCubeUVHeight:D,aoMap:Je,lightMap:Me,bumpMap:Ie,normalMap:be,displacementMap:d&&ot,emissiveMap:Se,normalMapObjectSpace:be&&M.normalMapType===xp,normalMapTangentSpace:be&&M.normalMapType===ld,metalnessMap:ke,roughnessMap:pt,anisotropy:gt,anisotropyMap:Z,clearcoat:P,clearcoatMap:ie,clearcoatNormalMap:$,clearcoatRoughnessMap:re,dispersion:b,iridescence:q,iridescenceMap:me,iridescenceThicknessMap:J,sheen:ee,sheenColorMap:ue,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:pe,specularIntensityMap:ze,transmission:se,transmissionMap:z,thicknessMap:oe,gradientMap:de,opaque:M.transparent===!1&&M.blending===dr&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:ne,combine:M.combine,mapUv:Fe&&_(M.map.channel),aoMapUv:Je&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:Ie&&_(M.bumpMap.channel),normalMapUv:be&&_(M.normalMap.channel),displacementMapUv:ot&&_(M.displacementMap.channel),emissiveMapUv:Se&&_(M.emissiveMap.channel),metalnessMapUv:ke&&_(M.metalnessMap.channel),roughnessMapUv:pt&&_(M.roughnessMap.channel),anisotropyMapUv:Z&&_(M.anisotropyMap.channel),clearcoatMapUv:ie&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:pe&&_(M.specularColorMap.channel),specularIntensityMapUv:ze&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:oe&&_(M.thicknessMap.channel),alphaMapUv:Te&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(be||gt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!U.attributes.uv&&(Fe||Te),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:W.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:H,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)E.push(I),E.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const E=g[M.type];let I;if(E){const B=wn[E];I=cm.clone(B.uniforms)}else I=M.uniforms;return I}function S(M,E){let I;for(let B=0,W=f.length;B<W;B++){const C=f[B];if(C.cacheKey===E){I=C,++I.usedTimes;break}}return I===void 0&&(I=new pv(i,E,M,s),f.push(I)),I}function T(M){if(--M.usedTimes===0){const E=f.indexOf(M);f[E]=f[f.length-1],f.pop(),M.destroy()}}function R(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:A}}function vv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ff(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,h,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:h,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,h,g,_,m){const p=o(u,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(u,d,h,g,_,m){const p=o(u,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||yv),n.length>1&&n.sort(d||uf),r.length>1&&r.sort(d||uf)}function f(){for(let u=e,d=i.length;u<d;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function Mv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ff,i.set(n,[o])):r>=s.length?(o=new ff,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ev(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tv=0;function bv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wv(i){const e=new Sv,t=Ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new Ge,o=new Ge;function a(l){let f=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,S=0,T=0,R=0;l.sort(bv);for(let M=0,E=l.length;M<E;M++){const I=l[M],B=I.color,W=I.intensity,C=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=B.r*W,u+=B.g*W,d+=B.b*W;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],W);R++}else if(I.isDirectionalLight){const L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const N=I.shadow,D=t.get(I);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.directionalShadow[h]=D,n.directionalShadowMap[h]=U,n.directionalShadowMatrix[h]=I.shadow.matrix,x++}n.directional[h]=L,h++}else if(I.isSpotLight){const L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(B).multiplyScalar(W),L.distance=C,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[_]=L;const N=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,N.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=N.matrix,I.castShadow){const D=t.get(I);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=U,v++}_++}else if(I.isRectAreaLight){const L=e.get(I);L.color.copy(B).multiplyScalar(W),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=L,m++}else if(I.isPointLight){const L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){const N=I.shadow,D=t.get(I);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=L,g++}else if(I.isHemisphereLight){const L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(W),L.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==S||A.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,A.directionalLength=h,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=S,A.numLightProbes=R,n.version=Tv++)}function c(l,f){let u=0,d=0,h=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function df(i){const e=new wv(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Av(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new df(i),e.set(r,[a])):s>=o.length?(a=new df(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Pv(i,e,t){let n=new vl;const r=new Ne,s=new Ne,o=new et,a=new wm({depthPacking:_p}),c=new Am,l={},f=t.maxTextureSize,u={[Yn]:zt,[zt]:Yn,[qt]:qt},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Rv,fragmentShader:Cv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(T,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ui),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=p!==Vn&&this.type===Vn,C=p===Vn&&this.type!==Vn;for(let U=0,L=T.length;U<L;U++){const N=T[U],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||W===!0||C===!0){const k=this.type!==Vn?{minFilter:Ht,magFilter:Ht}:{};D.map!==null&&D.map.dispose(),D.map=new Fi(r.x,r.y,k),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Q=D.getViewportCount();for(let k=0;k<Q;k++){const H=D.getViewport(k);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),B.viewport(o),D.updateMatrices(N,k),n=D.getFrustum(),v(R,A,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Vn&&x(D,A),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,I)};function x(T,R){const A=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,A,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,A,h,_,null)}function y(T,R,A,M){let E=null;const I=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=A.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=E.uuid,W=R.uuid;let C=l[B];C===void 0&&(C={},l[B]=C);let U=C[W];U===void 0&&(U=E.clone(),C[W]=U,R.addEventListener("dispose",S)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Vn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=A}return E}function v(T,R,A,M,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const W=e.update(T),C=T.material;if(Array.isArray(C)){const U=W.groups;for(let L=0,N=U.length;L<N;L++){const D=U[L],X=C[D.materialIndex];if(X&&X.visible){const Q=y(T,X,M,E);T.onBeforeShadow(i,T,R,A,W,Q,D),i.renderBufferDirect(A,null,W,Q,T,D),T.onAfterShadow(i,T,R,A,W,Q,D)}}}else if(C.visible){const U=y(T,C,M,E);T.onBeforeShadow(i,T,R,A,W,U,null),i.renderBufferDirect(A,null,W,U,T,null),T.onAfterShadow(i,T,R,A,W,U,null)}}const B=T.children;for(let W=0,C=B.length;W<C;W++)v(B[W],R,A,M,E)}function S(T){T.target.removeEventListener("dispose",S);for(const A in l){const M=l[A],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const Lv={[ic]:rc,[sc]:cc,[oc]:lc,[_r]:ac,[rc]:ic,[cc]:sc,[lc]:oc,[ac]:_r};function Iv(i,e){function t(){let z=!1;const oe=new et;let de=null;const Te=new et(0,0,0,0);return{setMask:function(ae){de!==ae&&!z&&(i.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){z=ae},setClear:function(ae,ne,Re,Ve,dt){dt===!0&&(ae*=Ve,ne*=Ve,Re*=Ve),oe.set(ae,ne,Re,Ve),Te.equals(oe)===!1&&(i.clearColor(ae,ne,Re,Ve),Te.copy(oe))},reset:function(){z=!1,de=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,oe=!1,de=null,Te=null,ae=null;return{setReversed:function(ne){if(oe!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;const Ve=ae;ae=null,this.setClear(Ve)}},getReversed:function(){return oe},setTest:function(ne){ne?te(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ne){de!==ne&&!z&&(i.depthMask(ne),de=ne)},setFunc:function(ne){if(oe&&(ne=Lv[ne]),Te!==ne){switch(ne){case ic:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case oc:i.depthFunc(i.EQUAL);break;case ac:i.depthFunc(i.GEQUAL);break;case cc:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ne}},setLocked:function(ne){z=ne},setClear:function(ne){ae!==ne&&(oe&&(ne=1-ne),i.clearDepth(ne),ae=ne)},reset:function(){z=!1,de=null,Te=null,ae=null,oe=!1}}}function r(){let z=!1,oe=null,de=null,Te=null,ae=null,ne=null,Re=null,Ve=null,dt=null;return{setTest:function(tt){z||(tt?te(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!z&&(i.stencilMask(tt),oe=tt)},setFunc:function(tt,Nn,Sn){(de!==tt||Te!==Nn||ae!==Sn)&&(i.stencilFunc(tt,Nn,Sn),de=tt,Te=Nn,ae=Sn)},setOp:function(tt,Nn,Sn){(ne!==tt||Re!==Nn||Ve!==Sn)&&(i.stencilOp(tt,Nn,Sn),ne=tt,Re=Nn,Ve=Sn)},setLocked:function(tt){z=tt},setClear:function(tt){dt!==tt&&(i.clearStencil(tt),dt=tt)},reset:function(){z=!1,oe=null,de=null,Te=null,ae=null,ne=null,Re=null,Ve=null,dt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let f={},u={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,S=null,T=null,R=new Oe(0,0,0),A=0,M=!1,E=null,I=null,B=null,W=null,C=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,N=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(D)[1]),L=N>=1):D.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),L=N>=2);let X=null,Q={};const k=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),le=new et().fromArray(k),he=new et().fromArray(H);function ye(z,oe,de,Te){const ae=new Uint8Array(4),ne=i.createTexture();i.bindTexture(z,ne),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<de;Re++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(oe+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ne}const K={};K[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(_r),Ie(!1),be(Xl),te(i.CULL_FACE),Je(ui);function te(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function fe(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Pe(z,oe){return u[z]!==oe?(i.bindFramebuffer(z,oe),u[z]=oe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function _e(z,oe){let de=h,Te=!1;if(z){de=d.get(oe),de===void 0&&(de=[],d.set(oe,de));const ae=z.textures;if(de.length!==ae.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=ae.length;ne<Re;ne++)de[ne]=i.COLOR_ATTACHMENT0+ne;de.length=ae.length,Te=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Te=!0);Te&&i.drawBuffers(de)}function Fe(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const He={[Ci]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};He[Gh]=i.MIN,He[Wh]=i.MAX;const O={[Xh]:i.ZERO,[qh]:i.ONE,[Yh]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[nc]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(z,oe,de,Te,ae,ne,Re,Ve,dt,tt){if(z===ui){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),z!==zh){if(z!==m||tt!==M){if((p!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,v=Ci),tt)switch(z){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,y=null,S=null,T=null,R.set(0,0,0),A=0,m=z,M=tt}return}ae=ae||oe,ne=ne||de,Re=Re||Te,(oe!==p||ae!==v)&&(i.blendEquationSeparate(He[oe],He[ae]),p=oe,v=ae),(de!==x||Te!==y||ne!==S||Re!==T)&&(i.blendFuncSeparate(O[de],O[Te],O[ne],O[Re]),x=de,y=Te,S=ne,T=Re),(Ve.equals(R)===!1||dt!==A)&&(i.blendColor(Ve.r,Ve.g,Ve.b,dt),R.copy(Ve),A=dt),m=z,M=!1}function Me(z,oe){z.side===qt?fe(i.CULL_FACE):te(i.CULL_FACE);let de=z.side===zt;oe&&(de=!de),Ie(de),z.blending===dr&&z.transparent===!1?Je(ui):Je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Te=z.stencilWrite;a.setTest(Te),Te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(z){E!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),E=z)}function be(z){z!==Bh?(te(i.CULL_FACE),z!==I&&(z===Xl?i.cullFace(i.BACK):z===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),I=z}function ot(z){z!==B&&(L&&i.lineWidth(z),B=z)}function Se(z,oe,de){z?(te(i.POLYGON_OFFSET_FILL),(W!==oe||C!==de)&&(i.polygonOffset(oe,de),W=oe,C=de)):fe(i.POLYGON_OFFSET_FILL)}function ke(z){z?te(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function pt(z){z===void 0&&(z=i.TEXTURE0+U-1),X!==z&&(i.activeTexture(z),X=z)}function gt(z,oe,de){de===void 0&&(X===null?de=i.TEXTURE0+U-1:de=X);let Te=Q[de];Te===void 0&&(Te={type:void 0,texture:void 0},Q[de]=Te),(Te.type!==z||Te.texture!==oe)&&(X!==de&&(i.activeTexture(de),X=de),i.bindTexture(z,oe||K[z]),Te.type=z,Te.texture=oe)}function P(){const z=Q[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(z){le.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),le.copy(z))}function Ee(z){he.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),he.copy(z))}function Ae(z,oe){let de=l.get(oe);de===void 0&&(de=new WeakMap,l.set(oe,de));let Te=de.get(z);Te===void 0&&(Te=i.getUniformBlockIndex(oe,z.name),de.set(z,Te))}function pe(z,oe){const Te=l.get(oe).get(z);c.get(oe)!==Te&&(i.uniformBlockBinding(oe,Te,z.__bindingPointIndex),c.set(oe,Te))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},X=null,Q={},u={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,S=null,T=null,R=new Oe(0,0,0),A=0,M=!1,E=null,I=null,B=null,W=null,C=null,le.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:fe,bindFramebuffer:Pe,drawBuffers:_e,useProgram:Fe,setBlending:Je,setMaterial:Me,setFlipSided:Ie,setCullFace:be,setLineWidth:ot,setPolygonOffset:Se,setScissorTest:ke,activeTexture:pt,bindTexture:gt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:me,texImage3D:J,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:$,texStorage3D:re,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:ie,scissor:ue,viewport:Ee,reset:ze}}function Dv(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,f=new WeakMap;let u;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return h?new OffscreenCanvas(P,b):vs("canvas")}function _(P,b,q){let ee=1;const se=gt(P);if((se.width>q||se.height>q)&&(ee=q/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(ee*se.width),ie=Math.floor(ee*se.height);u===void 0&&(u=g(Z,ie));const $=b?g(Z,ie):u;return $.width=Z,$.height=ie,$.getContext("2d").drawImage(P,0,0,Z,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+ie+")."),$}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,q,ee,se=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=b;if(b===i.RED&&(q===i.FLOAT&&(Z=i.R32F),q===i.HALF_FLOAT&&(Z=i.R16F),q===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.R8UI),q===i.UNSIGNED_SHORT&&(Z=i.R16UI),q===i.UNSIGNED_INT&&(Z=i.R32UI),q===i.BYTE&&(Z=i.R8I),q===i.SHORT&&(Z=i.R16I),q===i.INT&&(Z=i.R32I)),b===i.RG&&(q===i.FLOAT&&(Z=i.RG32F),q===i.HALF_FLOAT&&(Z=i.RG16F),q===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RG8UI),q===i.UNSIGNED_SHORT&&(Z=i.RG16UI),q===i.UNSIGNED_INT&&(Z=i.RG32UI),q===i.BYTE&&(Z=i.RG8I),q===i.SHORT&&(Z=i.RG16I),q===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),q===i.UNSIGNED_INT&&(Z=i.RGB32UI),q===i.BYTE&&(Z=i.RGB8I),q===i.SHORT&&(Z=i.RGB16I),q===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),q===i.UNSIGNED_INT&&(Z=i.RGBA32UI),q===i.BYTE&&(Z=i.RGBA8I),q===i.SHORT&&(Z=i.RGBA16I),q===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){const ie=se?Co:Ze.getTransfer(ee);q===i.FLOAT&&(Z=i.RGBA32F),q===i.HALF_FLOAT&&(Z=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Z=ie===ct?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(P,b){let q;return P?b===null||b===Oi||b===ps?q=i.DEPTH24_STENCIL8:b===gn?q=i.DEPTH32F_STENCIL8:b===hs&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Oi||b===ps?q=i.DEPTH_COMPONENT24:b===gn?q=i.DEPTH_COMPONENT32F:b===hs&&(q=i.DEPTH_COMPONENT16),q}function S(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ht&&P.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){const b=P.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&f.delete(b)}function R(P){const b=P.target;b.removeEventListener("dispose",R),E(b)}function A(P){const b=n.get(P);if(b.__webglInit===void 0)return;const q=P.source,ee=d.get(q);if(ee){const se=ee[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(P),Object.keys(ee).length===0&&d.delete(q)}n.remove(P)}function M(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const q=P.source,ee=d.get(q);delete ee[b.__cacheKey],o.memory.textures--}function E(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let se=0;se<b.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(b.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[ee]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=P.textures;for(let ee=0,se=q.length;ee<se;ee++){const Z=n.get(q[ee]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(q[ee])}n.remove(P)}let I=0;function B(){I=0}function W(){const P=I;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function C(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function U(P,b){const q=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,P,b);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function L(P,b){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){K(q,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function N(P,b){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){K(q,P,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function D(P,b){const q=n.get(P);if(P.version>0&&q.__version!==P.version){te(q,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}const X={[Ni]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},Q={[Ht]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},k={[vp]:i.NEVER,[bp]:i.ALWAYS,[yp]:i.LESS,[ud]:i.LEQUAL,[Mp]:i.EQUAL,[Tp]:i.GEQUAL,[Sp]:i.GREATER,[Ep]:i.NOTEQUAL};function H(P,b){if(b.type===gn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zt||b.magFilter===xo||b.magFilter===ns||b.magFilter===Gn||b.minFilter===Zt||b.minFilter===xo||b.minFilter===ns||b.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,X[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,X[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,X[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ht||b.minFilter!==ns&&b.minFilter!==Gn||b.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function le(P,b){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));const ee=b.source;let se=d.get(ee);se===void 0&&(se={},d.set(ee,se));const Z=C(b);if(Z!==P.__cacheKey){se[Z]===void 0&&(se[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[Z].usedTimes++;const ie=se[P.__cacheKey];ie!==void 0&&(se[P.__cacheKey].usedTimes--,ie.usedTimes===0&&M(b)),P.__cacheKey=Z,P.__webglTexture=se[Z].texture}return q}function he(P,b,q){return Math.floor(Math.floor(P/q)/b)}function ye(P,b,q,ee){const Z=P.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,ee,b.data);else{Z.sort((J,ue)=>J.start-ue.start);let ie=0;for(let J=1;J<Z.length;J++){const ue=Z[ie],Ee=Z[J],Ae=ue.start+ue.count,pe=he(Ee.start,b.width,4),ze=he(ue.start,b.width,4);Ee.start<=Ae+1&&pe===ze&&he(Ee.start+Ee.count-1,b.width,4)===pe?ue.count=Math.max(ue.count,Ee.start+Ee.count-ue.start):(++ie,Z[ie]=Ee)}Z.length=ie+1;const $=i.getParameter(i.UNPACK_ROW_LENGTH),re=i.getParameter(i.UNPACK_SKIP_PIXELS),me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let J=0,ue=Z.length;J<ue;J++){const Ee=Z[J],Ae=Math.floor(Ee.start/4),pe=Math.ceil(Ee.count/4),ze=Ae%b.width,z=Math.floor(Ae/b.width),oe=pe,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,ze,z,oe,de,q,ee,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,$),i.pixelStorei(i.UNPACK_SKIP_PIXELS,re),i.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function K(P,b,q){let ee=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=i.TEXTURE_3D);const se=le(P,b),Z=b.source;t.bindTexture(ee,P.__webglTexture,i.TEXTURE0+q);const ie=n.get(Z);if(Z.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+q);const $=Ze.getPrimaries(Ze.workingColorSpace),re=b.colorSpace===si?null:Ze.getPrimaries(b.colorSpace),me=b.colorSpace===si||$===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=_(b.image,!1,r.maxTextureSize);J=pt(b,J);const ue=s.convert(b.format,b.colorSpace),Ee=s.convert(b.type);let Ae=y(b.internalFormat,ue,Ee,b.colorSpace,b.isVideoTexture);H(ee,b);let pe;const ze=b.mipmaps,z=b.isVideoTexture!==!0,oe=ie.__version===void 0||se===!0,de=Z.dataReady,Te=S(b,J);if(b.isDepthTexture)Ae=v(b.format===gs,b.type),oe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Ee,null));else if(b.isDataTexture)if(ze.length>0){z&&oe&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,ze[0].width,ze[0].height);for(let ae=0,ne=ze.length;ae<ne;ae++)pe=ze[ae],z?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Ee,pe.data):t.texImage2D(i.TEXTURE_2D,ae,Ae,pe.width,pe.height,0,ue,Ee,pe.data);b.generateMipmaps=!1}else z?(oe&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,J.width,J.height),de&&ye(b,J,ue,Ee)):t.texImage2D(i.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Ee,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,ze[0].width,ze[0].height,J.depth);for(let ae=0,ne=ze.length;ae<ne;ae++)if(pe=ze[ae],b.format!==an)if(ue!==null)if(z){if(de)if(b.layerUpdates.size>0){const Re=Hu(pe.width,pe.height,b.format,b.type);for(const Ve of b.layerUpdates){const dt=pe.data.subarray(Ve*Re/pe.data.BYTES_PER_ELEMENT,(Ve+1)*Re/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ve,pe.width,pe.height,1,ue,dt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,J.depth,ue,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ae,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,J.depth,ue,Ee,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ae,pe.width,pe.height,J.depth,0,ue,Ee,pe.data)}else{z&&oe&&t.texStorage2D(i.TEXTURE_2D,Te,Ae,ze[0].width,ze[0].height);for(let ae=0,ne=ze.length;ae<ne;ae++)pe=ze[ae],b.format!==an?ue!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Ee,pe.data):t.texImage2D(i.TEXTURE_2D,ae,Ae,pe.width,pe.height,0,ue,Ee,pe.data)}else if(b.isDataArrayTexture)if(z){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ae,J.width,J.height,J.depth),de)if(b.layerUpdates.size>0){const ae=Hu(J.width,J.height,b.format,b.type);for(const ne of b.layerUpdates){const Re=J.data.subarray(ne*ae/J.data.BYTES_PER_ELEMENT,(ne+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,J.width,J.height,1,ue,Ee,Re)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Ee,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,ue,Ee,J.data);else if(b.isData3DTexture)z?(oe&&t.texStorage3D(i.TEXTURE_3D,Te,Ae,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Ee,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,ue,Ee,J.data);else if(b.isFramebufferTexture){if(oe)if(z)t.texStorage2D(i.TEXTURE_2D,Te,Ae,J.width,J.height);else{let ae=J.width,ne=J.height;for(let Re=0;Re<Te;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ae,ae,ne,0,ue,Ee,null),ae>>=1,ne>>=1}}else if(ze.length>0){if(z&&oe){const ae=gt(ze[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ae,ae.width,ae.height)}for(let ae=0,ne=ze.length;ae<ne;ae++)pe=ze[ae],z?de&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ue,Ee,pe):t.texImage2D(i.TEXTURE_2D,ae,Ae,ue,Ee,pe);b.generateMipmaps=!1}else if(z){if(oe){const ae=gt(J);t.texStorage2D(i.TEXTURE_2D,Te,Ae,ae.width,ae.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ee,J)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ue,Ee,J);m(b)&&p(ee),ie.__version=Z.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function te(P,b,q){if(b.image.length!==6)return;const ee=le(P,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const Z=n.get(se);if(se.version!==Z.__version||ee===!0){t.activeTexture(i.TEXTURE0+q);const ie=Ze.getPrimaries(Ze.workingColorSpace),$=b.colorSpace===si?null:Ze.getPrimaries(b.colorSpace),re=b.colorSpace===si||ie===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,J=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!me&&!J?ue[ne]=_(b.image[ne],!0,r.maxCubemapSize):ue[ne]=J?b.image[ne].image:b.image[ne],ue[ne]=pt(b,ue[ne]);const Ee=ue[0],Ae=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),ze=y(b.internalFormat,Ae,pe,b.colorSpace),z=b.isVideoTexture!==!0,oe=Z.__version===void 0||ee===!0,de=se.dataReady;let Te=S(b,Ee);H(i.TEXTURE_CUBE_MAP,b);let ae;if(me){z&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ze,Ee.width,Ee.height);for(let ne=0;ne<6;ne++){ae=ue[ne].mipmaps;for(let Re=0;Re<ae.length;Re++){const Ve=ae[Re];b.format!==an?Ae!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ve.width,Ve.height,Ae,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ve.width,Ve.height,Ae,pe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,Ve.width,Ve.height,0,Ae,pe,Ve.data)}}}else{if(ae=b.mipmaps,z&&oe){ae.length>0&&Te++;const ne=gt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(J){z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ae,pe,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,ue[ne].width,ue[ne].height,0,Ae,pe,ue[ne].data);for(let Re=0;Re<ae.length;Re++){const dt=ae[Re].image[ne].image;z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,dt.width,dt.height,Ae,pe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,dt.width,dt.height,0,Ae,pe,dt.data)}}else{z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,pe,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Ae,pe,ue[ne]);for(let Re=0;Re<ae.length;Re++){const Ve=ae[Re];z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ae,pe,Ve.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,Ae,pe,Ve.image[ne])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function fe(P,b,q,ee,se,Z){const ie=s.convert(q.format,q.colorSpace),$=s.convert(q.type),re=y(q.internalFormat,ie,$,q.colorSpace),me=n.get(b),J=n.get(q);if(J.__renderTarget=b,!me.__hasExternalTextures){const ue=Math.max(1,b.width>>Z),Ee=Math.max(1,b.height>>Z);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Z,re,ue,Ee,b.depth,0,ie,$,null):t.texImage2D(se,Z,re,ue,Ee,0,ie,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,se,J.__webglTexture,0,ot(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,se,J.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(P,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const ee=b.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Z=v(b.stencilBuffer,se),ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=ot(b);Se(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,Z,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,P)}else{const ee=b.textures;for(let se=0;se<ee.length;se++){const Z=ee[se],ie=s.convert(Z.format,Z.colorSpace),$=s.convert(Z.type),re=y(Z.internalFormat,ie,$,Z.colorSpace),me=ot(b);q&&Se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,re,b.width,b.height):Se(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const se=ee.__webglTexture,Z=ot(b);if(b.depthTexture.format===ms)Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===gs)Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const b=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ee=P.texture.mipmaps;ee&&ee.length>0?_e(b.__webglFramebuffer[0],P):_e(b.__webglFramebuffer,P)}else if(q){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=i.createRenderbuffer(),Pe(b.__webglDepthbuffer[ee],P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Z)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pe(b.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,b,q){const ee=n.get(P);b!==void 0&&fe(ee.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Fe(P)}function O(P){const b=P.texture,q=n.get(P),ee=n.get(b);P.addEventListener("dispose",R);const se=P.textures,Z=P.isWebGLCubeRenderTarget===!0,ie=se.length>1;if(ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=b.version,o.memory.textures++),Z){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let re=0;re<b.mipmaps.length;re++)q.__webglFramebuffer[$][re]=i.createFramebuffer()}else q.__webglFramebuffer[$]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)q.__webglFramebuffer[$]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ie)for(let $=0,re=se.length;$<re;$++){const me=n.get(se[$]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Se(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<se.length;$++){const re=se[$];q.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[$]);const me=s.convert(re.format,re.colorSpace),J=s.convert(re.type),ue=y(re.internalFormat,me,J,re.colorSpace,P.isXRRenderTarget===!0),Ee=ot(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ue,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,q.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),H(i.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)fe(q.__webglFramebuffer[$][re],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,re);else fe(q.__webglFramebuffer[$],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let $=0,re=se.length;$<re;$++){const me=se[$],J=n.get(me);let ue=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),H(ue,me),fe(q.__webglFramebuffer,P,me,i.COLOR_ATTACHMENT0+$,ue,0),m(me)&&p(ue)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,ee.__webglTexture),H($,b),b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)fe(q.__webglFramebuffer[re],P,b,i.COLOR_ATTACHMENT0,$,re);else fe(q.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,$,0);m(b)&&p($),t.unbindTexture()}P.depthBuffer&&Fe(P)}function Je(P){const b=P.textures;for(let q=0,ee=b.length;q<ee;q++){const se=b[q];if(m(se)){const Z=x(P),ie=n.get(se).__webglTexture;t.bindTexture(Z,ie),p(Z),t.unbindTexture()}}}const Me=[],Ie=[];function be(P){if(P.samples>0){if(Se(P)===!1){const b=P.textures,q=P.width,ee=P.height;let se=i.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(P),$=b.length>1;if($)for(let me=0;me<b.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let me=0;me<b.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const J=n.get(b[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,q,ee,0,0,q,ee,se,i.NEAREST),c===!0&&(Me.length=0,Ie.length=0,Me.push(i.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Me.push(Z),Ie.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<b.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const J=n.get(b[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(P){return Math.min(r.maxSamples,P.samples)}function Se(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(P){const b=o.render.frame;f.get(P)!==b&&(f.set(P,b),P.update())}function pt(P,b){const q=P.colorSpace,ee=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Wt&&q!==si&&(Ze.getTransfer(q)===ct?(ee!==an||se!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=L,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=He,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Se}function Uv(i,e){function t(n,r=si){let s;const o=Ze.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===td)return i.BYTE;if(n===nd)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Cs)return i.HALF_FLOAT;if(n===sd)return i.ALPHA;if(n===od)return i.RGB;if(n===an)return i.RGBA;if(n===ms)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===ad)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===vo||n===yo||n===Mo||n===So)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===hc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===_c||n===xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===_c)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===yc||n===Mc||n===Sc||n===Ec||n===Tc||n===bc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Uc||n===Nc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Dc)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===Fc||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
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

}`;class Fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:Nv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bv extends Ir{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Fv,p={},x=t.getContextAttributes();let y=null,v=null;const S=[],T=[],R=new Ne;let A=null;const M=new Bt;M.viewport=new et;const E=new Bt;E.viewport=new et;const I=[M,E],B=new Km;let W=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=S[K];return te===void 0&&(te=new Sa,S[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=S[K];return te===void 0&&(te=new Sa,S[K]=te),te.getGripSpace()},this.getHand=function(K){let te=S[K];return te===void 0&&(te=new Sa,S[K]=te),te.getHandSpace()};function U(K){const te=T.indexOf(K.inputSource);if(te===-1)return;const fe=S[te];fe!==void 0&&(fe.update(K.inputSource,K.frame,l||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",N);for(let K=0;K<S.length;K++){const te=T[K];te!==null&&(T[K]=null,S[K].disconnect(te))}W=null,C=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(y),h=null,d=null,u=null,r=null,v=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",L),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?gs:ms,Pe=x.stencil?ps:Oi);const Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Fi(d.textureWidth,d.textureHeight,{format:an,type:Cn,depthTexture:new wd(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Fi(h.framebufferWidth,h.framebufferHeight,{format:an,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(K){for(let te=0;te<K.removed.length;te++){const fe=K.removed[te],Pe=T.indexOf(fe);Pe>=0&&(T[Pe]=null,S[Pe].disconnect(fe))}for(let te=0;te<K.added.length;te++){const fe=K.added[te];let Pe=T.indexOf(fe);if(Pe===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=T.length){T.push(fe),Pe=Fe;break}else if(T[Fe]===null){T[Fe]=fe,Pe=Fe;break}if(Pe===-1)break}const _e=S[Pe];_e&&_e.connect(fe)}}const D=new F,X=new F;function Q(K,te,fe){D.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const Pe=D.distanceTo(X),_e=te.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,He=_e[14]/(_e[10]-1),O=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],Me=(_e[9]-1)/_e[5],Ie=(_e[8]-1)/_e[0],be=(Fe[8]+1)/Fe[0],ot=He*Ie,Se=He*be,ke=Pe/(-Ie+be),pt=ke*-Ie;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const gt=He+ke,P=O+ke,b=ot-pt,q=Se+(Pe-pt),ee=Je*O/P*gt,se=Me*O/P*gt;K.projectionMatrix.makePerspective(b,q,ee,se,gt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function k(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=E.near=M.near=te,B.far=E.far=M.far=fe,(W!==B.near||C!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,C=B.far),B.layers.mask=K.layers.mask|6,M.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const Pe=K.parent,_e=B.cameras;k(B,Pe);for(let Fe=0;Fe<_e.length;Fe++)k(_e[Fe],Pe);_e.length===2?Q(B,M,E):B.projectionMatrix.copy(M.projectionMatrix),H(K,B,Pe)};function H(K,te,fe){fe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let le=null;function he(K,te){if(f=te.getViewerPose(l||o),g=te,f!==null){const fe=f.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Pe=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let O=0;O<fe.length;O++){const Je=fe[O];let Me=null;if(h!==null)Me=h.getViewport(Je);else{const be=u.getViewSubImage(d,Je);Me=be.viewport,O===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let Ie=I[O];Ie===void 0&&(Ie=new Bt,Ie.layers.enable(O),Ie.viewport=new et,I[O]=Ie),Ie.matrix.fromArray(Je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Me.x,Me.y,Me.width,Me.height),O===0&&(B.matrix.copy(Ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(Ie)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const O=u.getDepthInformation(fe[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<fe.length;O++){const Je=fe[O].camera;if(Je){let Me=p[Je];Me||(Me=new Ad,p[Je]=Me);const Ie=u.getCameraImage(Je);Me.sourceTexture=Ie}}}}for(let fe=0;fe<S.length;fe++){const Pe=T[fe],_e=S[fe];Pe!==null&&_e!==void 0&&_e.update(Pe,te,l||o)}le&&le(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ye=new Id;ye.setAnimationLoop(he),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}}const Ei=new Pn,kv=new Ge;function zv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Ei.copy(v),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hv(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=r[x.id];v===void 0&&(g(x),v=f(x),r[x.id]=v,x.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(x,S);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function f(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),S=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=r[x.id],v=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=v.length;T<R;T++){const A=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,E=A.length;M<E;M++){const I=A[M];if(h(I,T,M,S)===!0){const B=I.__offset,W=Array.isArray(I.value)?I.value:[I.value];let C=0;for(let U=0;U<W.length;U++){const L=W[U],N=_(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,B+C,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,C),C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,y,v,S){const T=x.value,R=y+"_"+v;if(S[R]===void 0)return typeof T=="number"||typeof T=="boolean"?S[R]=T:S[R]=T.clone(),!0;{const A=S[R];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return S[R]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(x){const y=x.uniforms;let v=0;const S=16;for(let R=0,A=y.length;R<A;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,I=M.length;E<I;E++){const B=M[E],W=Array.isArray(B.value)?B.value:[B.value];for(let C=0,U=W.length;C<U;C++){const L=W[C],N=_(L),D=v%S,X=D%N.boundary,Q=D+X;v+=X,Q!==0&&S-Q<N.storage&&(v+=S-Q),B.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=N.storage}}}const T=v%S;return T>0&&(v+=S-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Vv{constructor(e={}){const{canvas:t=Vp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=_t;let T=0,R=0,A=null,M=-1,E=null;const I=new et,B=new et;let W=null;const C=new Oe(0);let U=0,L=t.width,N=t.height,D=1,X=null,Q=null;const k=new et(0,0,L,N),H=new et(0,0,L,N);let le=!1;const he=new vl;let ye=!1,K=!1;const te=new Ge,fe=new F,Pe=new et,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function He(){return A===null?D:1}let O=n;function Je(w,V){return t.getContext(w,V)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ae,!1),O===null){const V="webgl2";if(O=Je(V,w),O===null)throw Je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Ie,be,ot,Se,ke,pt,gt,P,b,q,ee,se,Z,ie,$,re,me,J,ue,Ee,Ae,pe,ze;function z(){Me=new J0(O),Me.init(),Ae=new Uv(O,Me),Ie=new X0(O,Me,e,Ae),be=new Iv(O,Me),Ie.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),ot=new tx(O),Se=new vv,ke=new Dv(O,Me,be,Se,Ie,Ae,ot),pt=new Y0(v),gt=new Z0(v),P=new ag(O),pe=new G0(O,P),b=new Q0(O,P,ot,pe),q=new ix(O,b,P,ot),J=new nx(O,Ie,ke),$=new q0(Se),ee=new xv(v,pt,gt,Me,Ie,pe,$),se=new zv(v,Se),Z=new Mv,ie=new Av(Me),me=new V0(v,pt,gt,be,q,h,c),re=new Pv(v,q,Ie),ze=new Hv(O,ot,Ie,be),ue=new W0(O,Me,ot),Ee=new ex(O,Me,ot),ot.programs=ee.programs,v.capabilities=Ie,v.extensions=Me,v.properties=Se,v.renderLists=Z,v.shadowMap=re,v.state=be,v.info=ot}z();const oe=new Bv(v,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(L,N,!1))},this.getSize=function(w){return w.set(L,N)},this.setSize=function(w,V,Y=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,N=V,t.width=Math.floor(w*D),t.height=Math.floor(V*D),Y===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(L*D,N*D).floor()},this.setDrawingBufferSize=function(w,V,Y){L=w,N=V,D=Y,t.width=Math.floor(w*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,V,Y,j){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,V,Y,j),be.viewport(I.copy(k).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,V,Y,j){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,V,Y,j),be.scissor(B.copy(H).multiplyScalar(D).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){be.setScissorTest(le=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Y=!0){let j=0;if(w){let G=!1;if(A!==null){const ce=A.texture.format;G=ce===hl||ce===dl||ce===fl}if(G){const ce=A.texture.type,xe=ce===Cn||ce===Oi||ce===hs||ce===ps||ce===cl||ce===ll,we=me.getClearColor(),ve=me.getClearAlpha(),Ue=we.r,Be=we.g,Le=we.b;xe?(g[0]=Ue,g[1]=Be,g[2]=Le,g[3]=ve,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ue,_[1]=Be,_[2]=Le,_[3]=ve,O.clearBufferiv(O.COLOR,0,_))}else j|=O.COLOR_BUFFER_BIT}V&&(j|=O.DEPTH_BUFFER_BIT),Y&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),Z.dispose(),ie.dispose(),Se.dispose(),pt.dispose(),gt.dispose(),q.dispose(),pe.dispose(),ze.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Sn),oe.removeEventListener("sessionend",kl),gi.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ot.autoReset,V=re.enabled,Y=re.autoUpdate,j=re.needsUpdate,G=re.type;z(),ot.autoReset=w,re.enabled=V,re.autoUpdate=Y,re.needsUpdate=j,re.type=G}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const V=w.target;V.removeEventListener("dispose",ne),Re(V)}function Re(w){Ve(w),Se.remove(w)}function Ve(w){const V=Se.get(w).programs;V!==void 0&&(V.forEach(function(Y){ee.releaseProgram(Y)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Y,j,G,ce){V===null&&(V=_e);const xe=G.isMesh&&G.matrixWorld.determinant()<0,we=Ih(w,V,Y,j,G);be.setMaterial(j,xe);let ve=Y.index,Ue=1;if(j.wireframe===!0){if(ve=b.getWireframeAttribute(Y),ve===void 0)return;Ue=2}const Be=Y.drawRange,Le=Y.attributes.position;let $e=Be.start*Ue,at=(Be.start+Be.count)*Ue;ce!==null&&($e=Math.max($e,ce.start*Ue),at=Math.min(at,(ce.start+ce.count)*Ue)),ve!==null?($e=Math.max($e,0),at=Math.min(at,ve.count)):Le!=null&&($e=Math.max($e,0),at=Math.min(at,Le.count));const Mt=at-$e;if(Mt<0||Mt===1/0)return;pe.setup(G,j,we,Y,ve);let mt,lt=ue;if(ve!==null&&(mt=P.get(ve),lt=Ee,lt.setIndex(mt)),G.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*He()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(G.isLine){let De=j.linewidth;De===void 0&&(De=1),be.setLineWidth(De*He()),G.isLineSegments?lt.setMode(O.LINES):G.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else G.isPoints?lt.setMode(O.POINTS):G.isSprite&&lt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const De=G._multiDrawStarts,xt=G._multiDrawCounts,Qe=G._multiDrawCount,Yt=ve?P.get(ve).bytesPerElement:1,Gi=Se.get(j).currentProgram.getUniforms();for(let jt=0;jt<Qe;jt++)Gi.setValue(O,"_gl_DrawID",jt),lt.render(De[jt]/Yt,xt[jt])}else if(G.isInstancedMesh)lt.renderInstances($e,Mt,G.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xt=Math.min(Y.instanceCount,De);lt.renderInstances($e,Mt,xt)}else lt.render($e,Mt)};function dt(w,V,Y){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,Fs(w,V,Y),w.side=Yn,w.needsUpdate=!0,Fs(w,V,Y),w.side=qt):Fs(w,V,Y)}this.compile=function(w,V,Y=null){Y===null&&(Y=w),p=ie.get(Y),p.init(V),y.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==Y&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const j=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ce=G.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const we=ce[xe];dt(we,Y,G),j.add(we)}else dt(ce,Y,G),j.add(ce)}),p=y.pop(),j},this.compileAsync=function(w,V,Y=null){const j=this.compile(w,V,Y);return new Promise(G=>{function ce(){if(j.forEach(function(xe){Se.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){G(w);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tt=null;function Nn(w){tt&&tt(w)}function Sn(){gi.stop()}function kl(){gi.start()}const gi=new Id;gi.setAnimationLoop(Nn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){tt=w,oe.setAnimationLoop(w),w===null?gi.stop():gi.start()},oe.addEventListener("sessionstart",Sn),oe.addEventListener("sessionend",kl),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(V),V=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,V,A),p=ie.get(w,y.length),p.init(V),y.push(p),te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),he.setFromProjectionMatrix(te,Rn,V.reversedDepth),K=this.localClippingEnabled,ye=$.init(this.clippingPlanes,K),m=Z.get(w,x.length),m.init(),x.push(m),oe.enabled===!0&&oe.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Qo(ce,V,-1/0,v.sortObjects)}Qo(w,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(X,Q),Fe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Fe&&me.addToRenderList(m,w),this.info.render.frame++,ye===!0&&$.beginShadows();const Y=p.state.shadowsArray;re.render(Y,w,V),ye===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){const ce=V.cameras;if(G.length>0)for(let xe=0,we=ce.length;xe<we;xe++){const ve=ce[xe];Hl(j,G,w,ve)}Fe&&me.render(w);for(let xe=0,we=ce.length;xe<we;xe++){const ve=ce[xe];zl(m,w,ve,ve.viewport)}}else G.length>0&&Hl(j,G,w,V),Fe&&me.render(w),zl(m,w,V);A!==null&&R===0&&(ke.updateMultisampleRenderTarget(A),ke.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,V),pe.resetDefaultState(),M=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],ye===!0&&$.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Qo(w,V,Y,j){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){j&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const xe=q.update(w),we=w.material;we.visible&&m.push(w,xe,we,Y,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const xe=q.update(w),we=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(we)){const ve=xe.groups;for(let Ue=0,Be=ve.length;Ue<Be;Ue++){const Le=ve[Ue],$e=we[Le.materialIndex];$e&&$e.visible&&m.push(w,xe,$e,Y,Pe.z,Le)}}else we.visible&&m.push(w,xe,we,Y,Pe.z,null)}}const ce=w.children;for(let xe=0,we=ce.length;xe<we;xe++)Qo(ce[xe],V,Y,j)}function zl(w,V,Y,j){const G=w.opaque,ce=w.transmissive,xe=w.transparent;p.setupLightsView(Y),ye===!0&&$.setGlobalState(v.clippingPlanes,Y),j&&be.viewport(I.copy(j)),G.length>0&&Os(G,V,Y),ce.length>0&&Os(ce,V,Y),xe.length>0&&Os(xe,V,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Hl(w,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Fi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Cs:Cn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ce=p.state.transmissionRenderTarget[j.id],xe=j.viewport||I;ce.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const we=v.getRenderTarget(),ve=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor(C),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&me.render(Y);const Be=v.toneMapping;v.toneMapping=fi;const Le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ye===!0&&$.setGlobalState(v.clippingPlanes,j),Os(w,Y,j),ke.updateMultisampleRenderTarget(ce),ke.updateRenderTargetMipmap(ce),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,Mt=V.length;at<Mt;at++){const mt=V[at],lt=mt.object,De=mt.geometry,xt=mt.material,Qe=mt.group;if(xt.side===qt&&lt.layers.test(j.layers)){const Yt=xt.side;xt.side=zt,xt.needsUpdate=!0,Vl(lt,Y,j,De,xt,Qe),xt.side=Yt,xt.needsUpdate=!0,$e=!0}}$e===!0&&(ke.updateMultisampleRenderTarget(ce),ke.updateRenderTargetMipmap(ce))}v.setRenderTarget(we,ve,Ue),v.setClearColor(C,U),Le!==void 0&&(j.viewport=Le),v.toneMapping=Be}function Os(w,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ce=w.length;G<ce;G++){const xe=w[G],we=xe.object,ve=xe.geometry,Ue=xe.group;let Be=xe.material;Be.allowOverride===!0&&j!==null&&(Be=j),we.layers.test(Y.layers)&&Vl(we,V,Y,ve,Be,Ue)}}function Vl(w,V,Y,j,G,ce){w.onBeforeRender(v,V,Y,j,G,ce),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,V,Y,j,w,ce),G.transparent===!0&&G.side===qt&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,v.renderBufferDirect(Y,V,j,G,w,ce),G.side=Yn,G.needsUpdate=!0,v.renderBufferDirect(Y,V,j,G,w,ce),G.side=qt):v.renderBufferDirect(Y,V,j,G,w,ce),w.onAfterRender(v,V,Y,j,G,ce)}function Fs(w,V,Y){V.isScene!==!0&&(V=_e);const j=Se.get(w),G=p.state.lights,ce=p.state.shadowsArray,xe=G.state.version,we=ee.getParameters(w,G.state,ce,V,Y),ve=ee.getProgramCacheKey(we);let Ue=j.programs;j.environment=w.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(w.isMeshStandardMaterial?gt:pt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",ne),Ue=new Map,j.programs=Ue);let Be=Ue.get(ve);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===xe)return Wl(w,we),Be}else we.uniforms=ee.getUniforms(w),w.onBeforeCompile(we,v),Be=ee.acquireProgram(we,ve),Ue.set(ve,Be),j.uniforms=we.uniforms;const Le=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=$.uniform),Wl(w,we),j.needsLights=Uh(w),j.lightsStateVersion=xe,j.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Gl(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Eo.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Wl(w,V){const Y=Se.get(w);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Ih(w,V,Y,j,G){V.isScene!==!0&&(V=_e),ke.resetTextureUnits();const ce=V.fog,xe=j.isMeshStandardMaterial?V.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt,ve=(j.isMeshStandardMaterial?gt:pt).get(j.envMap||xe),Ue=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let Mt=fi;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=mt!==void 0?mt.length:0,De=Se.get(j),xt=p.state.lights;if(ye===!0&&(K===!0||w!==E)){const Nt=w===E&&j.id===M;$.setState(j,w,Nt)}let Qe=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==xt.state.version||De.outputColorSpace!==we||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==ve||j.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==$.numPlanes||De.numIntersection!==$.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==$e||De.morphColors!==at||De.toneMapping!==Mt||De.morphTargetsCount!==lt)&&(Qe=!0):(Qe=!0,De.__version=j.version);let Yt=De.currentProgram;Qe===!0&&(Yt=Fs(j,V,G));let Gi=!1,jt=!1,kr=!1;const vt=Yt.getUniforms(),Qt=De.uniforms;if(be.useProgram(Yt.program)&&(Gi=!0,jt=!0,kr=!0),j.id!==M&&(M=j.id,jt=!0),Gi||E!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(O,"projectionMatrix",w.projectionMatrix),vt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Xt=vt.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,fe.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,jt=!0,kr=!0)}if(G.isSkinnedMesh){vt.setOptional(O,G,"bindMatrix"),vt.setOptional(O,G,"bindMatrixInverse");const Nt=G.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),vt.setValue(O,"boneTexture",Nt.boneTexture,ke))}G.isBatchedMesh&&(vt.setOptional(O,G,"batchingTexture"),vt.setValue(O,"batchingTexture",G._matricesTexture,ke),vt.setOptional(O,G,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",G._indirectTexture,ke),vt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",G._colorsTexture,ke));const en=Y.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&J.update(G,Y,Yt),(jt||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,vt.setValue(O,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Qt.envMap.value=ve,Qt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Qt.envMapIntensity.value=V.environmentIntensity),jt&&(vt.setValue(O,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Dh(Qt,kr),ce&&j.fog===!0&&se.refreshFogUniforms(Qt,ce),se.refreshMaterialUniforms(Qt,j,D,N,p.state.transmissionRenderTarget[w.id]),Eo.upload(O,Gl(De),Qt,ke)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Eo.upload(O,Gl(De),Qt,ke),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(O,"center",G.center),vt.setValue(O,"modelViewMatrix",G.modelViewMatrix),vt.setValue(O,"normalMatrix",G.normalMatrix),vt.setValue(O,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Nt=j.uniformsGroups;for(let Xt=0,ea=Nt.length;Xt<ea;Xt++){const _i=Nt[Xt];ze.update(_i,Yt),ze.bind(_i,Yt)}}return Yt}function Dh(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Uh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,V,Y){const j=Se.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Se.get(w.texture).__webglTexture=V,Se.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Y=Se.get(w);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const Nh=O.createFramebuffer();this.setRenderTarget=function(w,V=0,Y=0){A=w,T=V,R=Y;let j=!0,G=null,ce=!1,xe=!1;if(w){const ve=Se.get(w);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(ve.__webglFramebuffer===void 0)ke.setupRenderTarget(w);else if(ve.__hasExternalTextures)ke.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&Se.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(xe=!0);const Be=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?G=Be[V][Y]:G=Be[V],ce=!0):w.samples>0&&ke.useMultisampledRTT(w)===!1?G=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[Y]:G=Be,I.copy(w.viewport),B.copy(w.scissor),W=w.scissorTest}else I.copy(k).multiplyScalar(D).floor(),B.copy(H).multiplyScalar(D).floor(),W=le;if(Y!==0&&(G=Nh),be.bindFramebuffer(O.FRAMEBUFFER,G)&&j&&be.drawBuffers(w,G),be.viewport(I),be.scissor(B),be.setScissorTest(W),ce){const ve=Se.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,ve.__webglTexture,Y)}else if(xe){const ve=V;for(let Ue=0;Ue<w.textures.length;Ue++){const Be=Se.get(w.textures[Ue]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,Y,ve)}}else if(w!==null&&Y!==0){const ve=Se.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(w,V,Y,j,G,ce,xe,we=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){be.bindFramebuffer(O.FRAMEBUFFER,ve);try{const Ue=w.textures[we],Be=Ue.format,Le=Ue.type;if(!Ie.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-j&&Y>=0&&Y<=w.height-G&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),O.readPixels(V,Y,j,G,Ae.convert(Be),Ae.convert(Le),ce))}finally{const Ue=A!==null?Se.get(A).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,V,Y,j,G,ce,xe,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve)if(V>=0&&V<=w.width-j&&Y>=0&&Y<=w.height-G){be.bindFramebuffer(O.FRAMEBUFFER,ve);const Ue=w.textures[we],Be=Ue.format,Le=Ue.type;if(!Ie.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),O.readPixels(V,Y,j,G,Ae.convert(Be),Ae.convert(Le),0);const at=A!==null?Se.get(A).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,at);const Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gp(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer($e),O.deleteSync(Mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Y=0){const j=Math.pow(2,-Y),G=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),xe=V!==null?V.x:0,we=V!==null?V.y:0;ke.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,xe,we,G,ce),be.unbindTexture()};const Oh=O.createFramebuffer(),Fh=O.createFramebuffer();this.copyTextureToTexture=function(w,V,Y=null,j=null,G=0,ce=null){ce===null&&(G!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=G,G=0):ce=0);let xe,we,ve,Ue,Be,Le,$e,at,Mt;const mt=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(Y!==null)xe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,ve=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Be=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const en=Math.pow(2,-G);xe=Math.floor(mt.width*en),we=Math.floor(mt.height*en),w.isDataArrayTexture?ve=mt.depth:w.isData3DTexture?ve=Math.floor(mt.depth*en):ve=1,Ue=0,Be=0,Le=0}j!==null?($e=j.x,at=j.y,Mt=j.z):($e=0,at=0,Mt=0);const lt=Ae.convert(V.format),De=Ae.convert(V.type);let xt;V.isData3DTexture?(ke.setTexture3D(V,0),xt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ke.setTexture2DArray(V,0),xt=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(V,0),xt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Qe=O.getParameter(O.UNPACK_ROW_LENGTH),Yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gi=O.getParameter(O.UNPACK_SKIP_PIXELS),jt=O.getParameter(O.UNPACK_SKIP_ROWS),kr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,Be),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Le);const vt=w.isDataArrayTexture||w.isData3DTexture,Qt=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const en=Se.get(w),Nt=Se.get(V),Xt=Se.get(en.__renderTarget),ea=Se.get(Nt.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,Xt.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let _i=0;_i<ve;_i++)vt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,G,Le+_i),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,ce,Mt+_i)),O.blitFramebuffer(Ue,Be,xe,we,$e,at,xe,we,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Se.has(w)){const en=Se.get(w),Nt=Se.get(V);be.bindFramebuffer(O.READ_FRAMEBUFFER,Oh),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fh);for(let Xt=0;Xt<ve;Xt++)vt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,G,Le+Xt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,G),Qt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,ce,Mt+Xt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,ce),G!==0?O.blitFramebuffer(Ue,Be,xe,we,$e,at,xe,we,O.COLOR_BUFFER_BIT,O.NEAREST):Qt?O.copyTexSubImage3D(xt,ce,$e,at,Mt+Xt,Ue,Be,xe,we):O.copyTexSubImage2D(xt,ce,$e,at,Ue,Be,xe,we);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(xt,ce,$e,at,Mt,xe,we,ve,lt,De,mt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(xt,ce,$e,at,Mt,xe,we,ve,lt,mt.data):O.texSubImage3D(xt,ce,$e,at,Mt,xe,we,ve,lt,De,mt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ce,$e,at,xe,we,lt,De,mt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ce,$e,at,mt.width,mt.height,lt,mt.data):O.texSubImage2D(O.TEXTURE_2D,ce,$e,at,xe,we,lt,De,mt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Qe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gi),O.pixelStorei(O.UNPACK_SKIP_ROWS,jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,kr),ce===0&&V.generateMipmaps&&O.generateMipmap(xt),be.unbindTexture()},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&ke.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ke.setTextureCube(w,0):w.isData3DTexture?ke.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ke.setTexture2DArray(w,0):ke.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,be.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Ar{static createButton(e,t={}){const n=document.createElement("button");function r(){let l=null;async function f(h){h.addEventListener("end",u),await e.xr.setSession(h),n.textContent="EXIT VR",l=h}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",d).then(f):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(f).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(f).catch(h=>{console.warn(h)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():o(),l&&Ar.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ar.xrSessionIsGranted=!0})}}}Ar.xrSessionIsGranted=!1;Ar.registerSessionGrantedListener();const Cl=Object.freeze,di=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Ds=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Fd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Bd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Gv=Cl({p:di,n:Ds,h:1n,a:0n,b:7n,Gx:Fd,Gy:Bd}),vn=32,hf=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,fn=(i,e,t="")=>{if(hf(i)&&(e===void 0||i.length===e))return i;const n=hf(i),r=e!==void 0?` of length ${e}`:"",s=n?`length=${i.length}`:`type=${typeof i}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw n?new RangeError(o):new TypeError(o)},Wv=i=>Uint8Array.from(i),Xv=(i,e,t)=>Wv(fn(i,t,e)),kd=(i,e)=>i.toString(16).padStart(e,"0"),zd=i=>{let e="";for(const t of fn(i))e+=kd(t,2);return e},Hd=i=>{const e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);const t=new Uint8Array(i.length/2);for(let n=0,r=0;n<t.length;n++,r+=2){const s=i.charCodeAt(r),o=i.charCodeAt(r+1);t[n]=((s&15)+(s>>6)*9)*16+(o&15)+(o>>6)*9}return t},pf=()=>{const i=globalThis?.crypto?.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},Rr=(...i)=>{let e=0;for(const r of i)e+=fn(r).length;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.length;return t},Pl=(i=vn)=>{const e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},qv=BigInt,Us=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},Ce=(i,e=di)=>(i%=e)>=0n?i:e+i,qo=i=>Ce(i,Ds),Yv=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Ce(i,e),n=e,r=0n,s=1n;for(;t!==0n;){const a=n/t,c=n-t*a,l=r-s*a;n=t,t=c,r=s,s=l}if(n!==1n)throw new Error("invert: does not exist");return Ce(r,e)},Vd=i=>{const e=Zv[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},mf=(i,e,t)=>fn(Vd(i)(e,t),vn,"digest"),gf=async(i,e,t)=>fn(await Vd(i)(e,t),vn,"digest"),Fa=i=>{if(i instanceof sn)return i;throw new TypeError("Point expected")},Ba="bad point: not on curve",Gd=i=>Ce(Ce(i*i)*i+7n),_f=i=>Us(i,0n,di),cs=i=>Us(i,1n,di),Wd=i=>Us(i,1n,Ds),Yo=i=>!(i&1n),jv=i=>Uint8Array.of(Yo(i)?2:3),Xd=i=>{const e=Gd(cs(i));let t=1n;for(let n=e,r=(di+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*n%di),n=n*n%di;if(Ce(t*t)!==e)throw new Error("sqrt invalid");return new sn(i,Yo(t)?t:Ce(-t),1n)};class sn{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=_f(e),this.Y=cs(t),this.Z=_f(n),Cl(this)}static CURVE(){return Gv}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?ls:new sn(t,n,1n)}static fromBytes(e){fn(e);const t=e.length,n=e[0],r=No(e,1,33);try{if(t===33&&(n===2||n===3)){const s=Xd(r);return n===3?s.negate():s}if(t===65&&n===4)return new sn(r,No(e,33,65),1n).assertValidity()}catch{throw new Error(Ba)}throw new Error(Ba)}static fromHex(e){return sn.fromBytes(Hd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=Fa(e);return Ce(t*a)===Ce(s*r)&&Ce(n*a)===Ce(o*r)}is0(){return this.Z===0n}negate(){return new sn(this.X,Ce(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:r}=this,{X:s,Y:o,Z:a}=Fa(e),c=0n,l=7n;let f=0n,u=0n,d=0n;const h=Ce(l*3n);let g=Ce(t*s),_=Ce(n*o),m=Ce(r*a),p=Ce(t+n),x=Ce(s+o);p=Ce(p*x),x=Ce(g+_),p=Ce(p-x),x=Ce(t+r);let y=Ce(s+a);return x=Ce(x*y),y=Ce(g+m),x=Ce(x-y),y=Ce(n+r),f=Ce(o+a),y=Ce(y*f),f=Ce(_+m),y=Ce(y-f),d=Ce(c*x),f=Ce(h*m),d=Ce(f+d),f=Ce(_-d),d=Ce(_+d),u=Ce(f*d),_=Ce(g+g),_=Ce(_+g),m=Ce(c*m),x=Ce(h*x),_=Ce(_+m),m=Ce(g-m),m=Ce(c*m),x=Ce(x+m),g=Ce(_*x),u=Ce(u+g),g=Ce(y*x),f=Ce(p*f),f=Ce(f-g),g=Ce(p*_),d=Ce(y*d),d=Ce(d+g),new sn(f,u,d)}subtract(e){return this.add(Fa(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return ls;if(Wd(e),e===1n)return this;if(this.equals(Bi))return sy(e).p;let n=ls,r=Bi,s=this;for(let o=0;t?o<256:e>0n;o++)e&1n?n=n.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const r=Yv(n,di);if(Ce(n*r)!==1n)throw new Error("inverse invalid");return{x:Ce(e*r),y:Ce(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(cs(e),cs(t),Ce(t*t)!==Gd(e))throw new Error(Ba);return this}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),r=Kn(t);return e?Rr(jv(n),r):Rr(Uint8Array.of(4),r,Kn(n))}toHex(e){return zd(this.toBytes(e))}}const Bi=new sn(Fd,Bd,1n),ls=new sn(0n,1n,0n);sn.BASE=Bi;sn.ZERO=ls;const Kv=(i,e,t)=>Bi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),zi=i=>qv("0x"+(zd(i)||"0")),No=(i,e,t)=>zi(i.subarray(e,t)),Kn=i=>Hd(kd(Us(i,0n,2n**256n),vn*2)),$v=i=>{const e=zi(fn(i,vn,"secret key"));return Us(e,1n,Ds,"invalid secret key: outside of range")},xf="SHA-256",Zv={hmacSha256Async:async(i,e)=>{const t=pf(),n=await t.importKey("raw",i,{name:"HMAC",hash:xf},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await pf().digest(xf,i)),sha256:void 0},Jv=i=>{if(i=i===void 0?Pl(48):i,fn(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");const e=Ce(zi(i),Ds-1n);return Kn(e+1n)},Qv=i=>e=>{const t=Jv(e);return{secretKey:t,publicKey:i(t)}},qd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),qc=(i,...e)=>{const t=mf("sha256",qd(i));return mf("sha256",Rr(t,t,...e))},Yc=(i,...e)=>gf("sha256Async",qd(i)).then(t=>gf("sha256Async",Rr(t,t,...e))),Ll=i=>{const e=$v(i),t=Bi.multiply(e),{x:n,y:r}=t.assertValidity().toAffine(),s=Yo(r)?e:qo(-e),o=Kn(n);return{d:s,px:o}},Il=i=>qo(zi(i)),Yd=(...i)=>Il(qc("challenge",...i)),jd=async(...i)=>Il(await Yc("challenge",...i)),Kd=i=>Ll(i).px,ey=Qv(Kd),$d=(i,e,t)=>{const n=Xv(i,"message"),{px:r,d:s}=Ll(e);return{m:n,px:r,d:s,a:fn(t,vn)}},Zd=i=>{const e=Il(i);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:n}=Ll(Kn(e));return{rx:t,k:n}},Jd=(i,e,t,n)=>Rr(e,Kn(qo(i+t*n))),Qd="invalid signature produced",ty=(i,e,t=Pl(vn))=>{const{m:n,px:r,d:s,a:o}=$d(i,e,t),a=Kn(s^zi(qc("aux",o))),{rx:c,k:l}=Zd(qc("nonce",a,r,n)),f=Jd(l,c,Yd(c,r,n),s);if(!th(f,n,r))throw new Error(Qd);return f},ny=async(i,e,t=Pl(vn))=>{const{m:n,px:r,d:s,a:o}=$d(i,e,t),a=Kn(s^zi(await Yc("aux",o))),{rx:c,k:l}=Zd(await Yc("nonce",a,r,n)),f=Jd(l,c,await jd(c,r,n),s);if(!await nh(f,n,r))throw new Error(Qd);return f},iy=(i,e)=>i instanceof Promise?i.then(e):e(i),eh=(i,e,t,n)=>{const r=fn(i,64,"signature"),s=fn(e,void 0,"message"),o=fn(t,vn,"publicKey");let a,c,l,f;try{const u=zi(o);a=Xd(u),c=cs(No(r,0,vn)),l=Wd(No(r,vn,64)),f=Rr(Kn(c),o,s)}catch{return!1}return iy(n(f),u=>{try{const{x:d,y:h}=Kv(a,l,qo(-u)).toAffine();return!(!Yo(h)||d!==c)}catch{return!1}})},th=(i,e,t)=>eh(i,e,t,Yd),nh=async(i,e,t)=>eh(i,e,t,jd),ih=Cl({keygen:ey,getPublicKey:Kd,sign:ty,verify:th,signAsync:ny,verifyAsync:nh}),ry=()=>{const i=[];let e=Bi,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let r=1;r<128;r++)t=t.add(e),i.push(t);e=t.double()}return i};let vf;const yf=(i,e)=>{const t=e.negate();return i?t:e},sy=i=>{const e=vf||(vf=ry());let t=ls,n=Bi;for(let r=0;r<33;r++){let s=Number(i&255n);i>>=8n,s>128&&(s-=256,i+=1n);const o=r*128,a=o+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?n=n.add(yf(c,e[o])):t=t.add(yf(l,e[a]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}},{floor:jc,min:oy,sin:ay}=Math,yn="Trystero",Ss=(i,e)=>Array(i).fill(void 0).map(e),cy="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Fr=i=>Ss(i,()=>cy[jc(Math.random()*62)]??"").join(""),Vt=Fr(20),Hi=Promise.all.bind(Promise),rh=typeof window<"u",{entries:Ii,fromEntries:sh,keys:on,values:pr}=Object,kt=()=>{},oh="candidate",st=i=>(i!==null&&clearTimeout(i),null),nt=i=>new Error(`${yn}: ${i}`),Cr=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:Jt(i??e),ai=(i,e)=>i instanceof Error?i:nt(Cr(i,e)),ly=new TextEncoder,uy=new TextDecoder,hi=i=>ly.encode(i),Li=i=>uy.decode(i),Es=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ts=(...i)=>i.join("@"),fy=(i,e)=>{const t=[...i],n=()=>{const s=ay(e++)*1e4;return s-jc(s)};let r=t.length;for(;r;){const s=jc(n()*r--),o=t[r];t[r]=t[s],t[s]=o}return t},dy=(i,e,t,n=!1)=>i.relayConfig?.urls||(n?fy(e,ah(i.appId)):e).slice(0,i.relayConfig?.redundancy??t),Jt=JSON.stringify,Pr=i=>{try{return JSON.parse(i)}catch{throw nt(`failed to parse JSON: ${i}`)}},ah=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Mf=3333,Sf=6e4,ka={};let us=null,Kc=null;const hy=()=>{us||(us=new Promise(i=>{Kc=i}).finally(()=>{Kc=null,us=null}))},py=()=>{Kc?.()},my=(i,e,t)=>{const n={};let r=!1,s=!1,o,a=kt;n.isClosed=!1,n.ready=new Promise(l=>a=l);const c=()=>{if(n.isClosed)return;o=void 0,s=!1;const l=new WebSocket(i);l.onclose=()=>{if(n.isClosed||s)return;if(s=!0,us){us.then(c);return}const f=ka[i]??=Mf;if(f>=Sf){n.isClosed=!0;return}o=setTimeout(c,Math.random()*f),ka[i]=oy(f*2,Sf)},l.onmessage=f=>e(String(f.data)),n.socket=l,n.url=l.url,l.onopen=()=>{const f=r;r=!0,a(n),ka[i]=Mf,f&&t?.()},n.send=f=>{l.readyState===1&&l.send(f)}};return n.close=()=>{n.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),n.socket.close()},c(),n},gy=i=>{const e={},t=new WeakMap,n=o=>{const a=t.get(o);if(!a)throw nt("relay bookkeeping missing registration for relay client");return a},r=()=>{const o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(n(c))}},s=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{const c=e[o];return c||s(o,a())},keyOf:n,scoped:r,getSockets:()=>sh(Ii(e).flatMap(([o,a])=>{const c=i(a);return c?[[o,c]]:[]}))}},_y=()=>{if(rh){const i=new AbortController;return addEventListener("online",py,{signal:i.signal}),addEventListener("offline",hy,{signal:i.signal}),()=>i.abort()}return kt},Dl="AES-GCM",xy={},vy=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),yy=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},jo=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,hi(e))),bs=async i=>xy[i]??=Array.from(await jo("SHA-1",i)).map(e=>e.toString(36)).join(""),My=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},hi(`${i}:${e}:${t}`)),{name:Dl},!1,["encrypt","decrypt"]),Sy=async(i,e)=>Es(await jo("SHA-256",`${yn}:${i}:${e}`)),ch="$",lh=",",Ey=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(lh)+ch+vy(await crypto.subtle.encrypt({name:Dl,iv:t},await i,hi(e)))},Ty=async(i,e)=>{const[t,n]=e.split(ch);return Li(await crypto.subtle.decrypt({name:Dl,iv:new Uint8Array(t?.split(lh).map(Number)??[])},await i,yy(n??"")))},Ul=57333,by=18e4,wy=20;var Ay=class{makeOffer;pool=[];pooled=new Set;leased=new Map;recycling=new Set;cleanupTimer=null;active=!1;constructor(i){this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Ss(wy,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},Ul)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(st(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:kt,close:kt,error:kt}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(st(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},by))}checkout(i,e,t){const n=this.shift(i),r=Math.max(0,i-n.length);r>0&&n.push(...Ss(r,this.makeOffer));const s=async(o,a=!1)=>{try{const c=await t(o);return e?(this.lease(o),{peer:o,offer:c,claim:()=>this.claimLeased(o),reclaim:()=>this.reclaimLeased(o)}):{peer:o,offer:c}}catch(c){if(this.claimLeased(o),this.pooled.delete(o),o.destroy(),!a)return s(this.makeOffer(),!0);throw c}};return Hi(n.map(o=>s(o)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{st(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const za=nt("incorrect password for overlapping room"),Ry=(i,e,t)=>{const n=o=>jo("SHA-256",`${o}:${i}:${e}:${t}`).then(Es),r=async(o,a,c)=>{if(!i)return;if(c){const f=Fr(36);await o({__trystero_pw:"challenge",c:f});const{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw za;const d=await n(f);if(u.h!==d)throw za;return}const{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw za;await o({__trystero_pw:"response",h:await n(l.c)})};return{run:r,compose:o=>i||o?async(a,c,l,f)=>{await r(c,l,f),await o?.(a,c,l,f)}:void 0}},Cy=i=>{const e=Cr(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Py=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:r,onActivate:s,onFailure:o})=>{const a={},c=(u,d)=>{const h=a[u];!h||d&&h.peer!==d||h.isActive||!h.didLocalHandshakePass||!h.didReceiveRemoteReady||(h.isActive=!0,h.handshakeTimer=st(h.handshakeTimer),s(u,h.peer))},l=(u,d,h)=>{const g=a[u];if(!g||g.peer!==d)return;const _=Cy(h);e?.(u,_),o(u,d,nt(_))},f=(u,d)=>{const h=a[u];!h||h.peer!==d||h.isActive||(h.didLocalHandshakePass=!0,r("",u).catch(g=>l(u,d,nt(`failed sending handshake readiness: ${Cr(g,"unknown send failure")}`))),c(u,d))};return{addPeer:(u,d)=>{a[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{const h=a[u];h&&(h.handshakeTimer=st(h.handshakeTimer),h.pendingHandshakePayloads.length=0,h.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete a[u])},canReceiveFromPeer:(u,d)=>{const h=a[u];return!!(h&&(h.isActive||d))},start:(u,d)=>{const h=a[u];if(!h||h.peer!==d)return;h.handshakeTimer=setTimeout(()=>l(u,d,nt(`handshake timed out after ${t}ms`)),t);const g=async(p,x)=>{await n(p,u,x)},_=()=>new Promise((p,x)=>{const y=a[u];if(!y||y.peer!==d){x(nt("peer disconnected during handshake"));return}const v=y.pendingHandshakePayloads.shift();if(v){p(v);return}y.handshakeWaiters.push({resolve:p,reject:S=>x(S)})}),m=Vt<u;Promise.resolve(i?.(u,g,_,m)).then(()=>f(u,d)).catch(p=>l(u,d,ai(p,"handshake failed")))},receiveHandshakeData:(u,d,h)=>{const g=a[d];if(!g||g.isActive)return;const _=h===void 0?{data:u}:{data:u,metadata:h},m=g.handshakeWaiters.shift();if(m){m.resolve(_);return}g.pendingHandshakePayloads.push(_)},receiveHandshakeReady:u=>{const d=a[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(u))}}},Ly=15e3,Iy=5e3,Ef="icegatheringstatechange",Dy="iceconnectionstatechange",Zr="offer",Uy="answer",Ny=/out of range/i,Tf=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var bf=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const o=new(n??RTCPeerConnection)({iceServers:Oy.concat(r??[]),...t}),a={},c=[],l=[],f=e!==!1,u=[],d=[];let h=!1,g=!1,_=null,m=null,p=!1;const x=()=>m=st(m),y=()=>{p||(p=!0,x(),a.close?.())},v=k=>{a.signal?a.signal(k):c.push(k)},S=k=>{const H=a.signal;a.signal=le=>{H?.(le),k(le)},c.length>0&&c.splice(0).forEach(le=>a.signal?.(le))},T=k=>s?Tf(k):k,R=k=>{if(!s||typeof k.candidate!="string")return k;const H=Tf(k.candidate);return H===k.candidate?k:{...k,candidate:H}},A=k=>({type:k.localDescription?.type??Zr,sdp:T(k.localDescription?.sdp??"")}),M=()=>{const k=o.remoteDescription?.sdp;return k?k.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},E=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,I=k=>{if(!o.remoteDescription)return!1;const H=E();if(typeof k.sdpMLineIndex=="number"&&H>0&&k.sdpMLineIndex>=H)return!1;const le=M();return!(le&&k.usernameFragment&&k.usernameFragment!==le)},B=async k=>{try{return await o.addIceCandidate(k),!0}catch(H){if(H instanceof Error&&Ny.test(H.message)&&typeof k.sdpMLineIndex=="number")return!1;throw H}},W=async()=>{if(!o.remoteDescription||u.length===0)return;const k=u.splice(0),H=[];for(const le of k){if(!I(le)){H.push(le);continue}await B(le)||H.push(le)}H.length>0&&u.push(...H)},C=async k=>{if(I(k)){await B(k)||u.push(k);return}u.push(k)},U=k=>{k.binaryType="arraybuffer",k.bufferedAmountLowThreshold=65535,k.onmessage=H=>{const le=H.data;a.data?a.data(le):l.push(le)},k.onopen=()=>a.connect?.(),k.onclose=y,k.onerror=({error:H})=>a.error?.(ai(H,"data channel error"))},L=async k=>{let H=null;try{await Promise.race([new Promise(le=>{const he=()=>{k.iceGatheringState==="complete"&&(k.removeEventListener(Ef,he),le())};k.addEventListener(Ef,he),he()}),new Promise(le=>{H=setTimeout(le,Ly)})])}finally{st(H)}return A(k)},N=async()=>{const k=f?A(o):await L(o);return v(k),k};i?(_=o.createDataChannel("data"),U(_)):o.ondatachannel=({channel:k})=>{_=k,U(k)};const D=async(k=!1)=>{if(o.connectionState!=="closed")try{return h=!0,k&&(o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Zr&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(k?await o.createOffer({iceRestart:!0}):void 0),await N()}catch(H){a.error?.(ai(H,"failed to create local offer"))}finally{h=!1}};o.onnegotiationneeded=async()=>D(!1),o.onicecandidate=({candidate:k})=>{if(!f||!k)return;const H=R(typeof k.toJSON=="function"?k.toJSON():{candidate:k.candidate,sdpMid:k.sdpMid,sdpMLineIndex:k.sdpMLineIndex,usernameFragment:k.usernameFragment});v({type:oh,sdp:JSON.stringify(H)})};const X=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){y();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){x();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&y()},Iy));return}};o.onconnectionstatechange=X,o.addEventListener(Dy,X),o.ontrack=k=>{const H=k.streams[0];if(H){if(!a.track&&!a.stream){d.push({track:k.track,stream:H});return}a.track?.(k.track,H),a.stream?.(H)}},o.onremovestream=k=>a.stream?.(k.stream);const Q=i?new Promise(k=>S(H=>{H.type===Zr&&k(H)})):Promise.resolve();return i&&queueMicrotask(()=>{!h&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:o,get channel(){return _},get isDead(){return o.connectionState==="closed"},getOffer:async(k=!1)=>{if(i)return k?D(!0):o.localDescription?.type===Zr?f?A(o):L(o):Q},async signal(k){if(k.type==="candidate"){try{const H=JSON.parse(k.sdp);H&&typeof H=="object"&&await C(R(H))}catch(H){a.error?.(ai(H,"failed to parse remote candidate"))}return}if(!(_?.readyState==="open"&&!k.sdp?.includes("a=rtpmap")))try{const H={...k,sdp:T(k.sdp)};if(k.type===Zr){if(h||o.signalingState!=="stable"&&!g){if(i)return;await Hi([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(H)])}else await o.setRemoteDescription(H);return await W(),await o.setLocalDescription(),await N()}if(k.type===Uy){g=!0;try{await o.setRemoteDescription(H),await W()}finally{g=!1}}}catch(H){a.error?.(ai(H,"failed to apply remote signal"))}},sendData:k=>_?.send(k),destroy:()=>{x(),_?.close(),o.close(),h=!1,g=!1,y()},setHandlers:k=>{const{signal:H,...le}=k;Object.assign(a,le),a.data&&l.length>0&&l.splice(0).forEach(he=>a.data?.(he)),H&&S(H),(a.track||a.stream)&&d.length>0&&d.splice(0).forEach(({track:he,stream:ye})=>{a.track?.(he,ye),a.stream?.(ye)})},offerPromise:Q,addStream:k=>k.getTracks().forEach(H=>o.addTrack(H,k)),removeStream:k=>o.getSenders().filter(H=>H.track&&k.getTracks().includes(H.track)).forEach(H=>o.removeTrack(H)),addTrack:(k,H)=>o.addTrack(k,H),removeTrack:k=>{const H=o.getSenders().find(le=>le.track===k);H&&o.removeTrack(H)},replaceTrack:(k,H)=>{const le=o.getSenders().find(he=>he.track===k);if(le)return le.replaceTrack(H)}}};const Oy=[...Ss(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),Fy=Object.getPrototypeOf(Uint8Array),Ha=32,By=0,Va=32,wf=34,Ga=35,To=36,Ti=16*2**10-To,Jr=255,ky=65535,Af="bufferedamountlow",Rf="close",Cf="error",zy=1e4,Hy=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),Vy=(i,e=zy)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,r=null;const s=c=>{n||(n=!0,i.removeEventListener(Af,o),i.removeEventListener(Rf,a),i.removeEventListener(Cf,a),st(r),t(c))},o=()=>s(!0),a=()=>s(!1);if(i.addEventListener(Af,o),i.addEventListener(Rf,a),i.addEventListener(Cf,a),r=setTimeout(()=>s(!1),e),i.readyState!=="open"){s(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&s(!0)}),Gy=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const r={},s={},o={},a={},c=(u,d,{includePending:h=!1}={})=>(u?Array.isArray(u)?u:[u]:e(h)).flatMap(g=>{const _=i(g,h);return _?[Promise.resolve(d(g,_))]:(console.warn(`${yn}: no peer with id ${g} found`),[])});return{makeInternalAction:(u,d={})=>{const h=s[u];if(r[u]&&h){const x=r[u].options;if(x.sendToPending!==!!d.sendToPending||x.receiveWhilePending!==!!d.receiveWhilePending)throw nt(`action type "${u}" cannot be redefined`);return h}if(!u)throw nt("action type argument is required");const g=hi(u);if(g.byteLength>Ha)throw nt(`action type string "${u}" (${g.byteLength}b) exceeds byte limit (${Ha}). Hint: choose a shorter name.`);const _={sendToPending:!!d.sendToPending,receiveWhilePending:!!d.receiveWhilePending},m=new Uint8Array(Ha);m.set(g);let p=0;return r[u]={onComplete:kt,onProgress:kt,setOnComplete:x=>{r[u].onComplete=x;const y=a[u];y?.length&&(delete a[u],y.forEach(({payload:v,peerId:S,metadata:T})=>x(v,S,T)))},setOnProgress:x=>{r[u].onProgress=x},send:async(x,y,v,S,T)=>{n(T);const R=typeof x;if(R==="undefined")throw nt("action data cannot be undefined");const A=R!=="string",M=x instanceof Blob,E=M||x instanceof ArrayBuffer||x instanceof Fy,I=v!==void 0,B=E?Hy(M?await x.arrayBuffer():x):hi(A?Jt(x):x),W=I?hi(Jt(v)):null,C=Math.ceil(B.byteLength/Ti)+(I?1:0)||1,U=Ss(C,(L,N)=>{const D=N===C-1,X=!!(I&&N===0),Q=new Uint8Array(To+(X?W?.byteLength??0:D?B.byteLength-Ti*(C-(I?2:1)):Ti));return Q.set(m),Q.set([p>>8,p&Jr],Va),Q.set([Number(D)|Number(X)<<1|Number(E)<<2|Number(A)<<3],wf),Q.set([Math.round((N+1)/C*Jr)],Ga),Q.set(I?X?W??new Uint8Array:B.subarray((N-1)*Ti,N*Ti):B.subarray(N*Ti,(N+1)*Ti),To),Q});return p=p+1&ky,await Hi(c(y,async(L,N)=>{const{channel:D}=N;let X=0;for(;X<C;){n(T);const Q=U[X];if(!Q)break;if(D&&D.bufferedAmount>D.bufferedAmountLowThreshold){const le=await Vy(D);if(n(T),!le)break}const k=i(L,_.sendToPending);if(!k||k!==N)break;N.sendData(Q),X++;const H=Q[Ga]??Jr;S?.(H/Jr,L,v)}},{includePending:_.sendToPending})),[]},options:_},s[u]={send:r[u].send,onMessage:r[u].setOnComplete,onProgress:r[u].setOnProgress}},handleData:(u,d)=>{const h=new Uint8Array(d),g=Li(h.subarray(By,Va)).replaceAll("\0",""),_=r[g];if(!t(u,!!_?.options.receiveWhilePending))return;const m=(h[Va]??0)<<8|(h[33]??0),p=h[wf]??0,x=h[Ga]??0,y=h.subarray(To),v=!!(p&1),S=!!(p&2),T=!!(p&4),R=!!(p&8);o[u]??={},o[u][g]??={};const A=o[u][g][m]??={chunks:[]};if(S?A.meta=Pr(Li(y)):A.chunks.push(y),_?.onProgress(x/Jr,u,A.meta),!v)return;const M=new Uint8Array(A.chunks.reduce((I,B)=>I+B.byteLength,0));A.chunks.reduce((I,B)=>(M.set(B,I),I+B.byteLength),0),delete o[u][g][m];const E=T?M:R?Pr(Li(M)):Li(M);if(_){_.onComplete(E,u,A.meta);return}(a[g]??=[]).push({payload:E,peerId:u,...A.meta===void 0?{}:{metadata:A.meta}})},clearPeer:u=>{delete o[u]}}},Wy=500,ur=(i,e)=>{const t=nt(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},Wa=i=>{if(i?.aborted)throw ur("aborted","operation aborted")},Pf=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,Xy=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,mo=(i,e)=>e===void 0?i:{...i,metadata:e},qy=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},r={},s=Gy({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Wa}),o=s.makeInternalAction,a=s.handleData,c=h=>{const g=r[h];g&&(st(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete r[h])},l=(h,g)=>{Ii(r).forEach(([_,m])=>{m.peerId===h&&(c(_),m.reject(g))})},f=(h,g)=>{s.clearPeer(h),l(h,ur("disconnected",Cr(g,"peer disconnected")))},u=o("@_response");return u.onMessage((h,g,_)=>{const m=Xy(_);if(!m)return;const p=r[m.r];if(!(!p||p.peerId!==g)){if(c(m.r),m.e!==void 0){p.reject(ur("rejected",m.e));return}p.resolve(h)}}),{makeAction:(h,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw nt('request actions must use kind: "request"');const _=g?.kind??"message",m=o(h),p=n[h];if(p){if(p.kind!==_)throw nt(`action type "${h}" cannot be redefined`);return p.action}const x={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:g?.onReceiveProgress??null},y=(C,U)=>C?(L,N)=>C(L,mo({peerId:N},U)):void 0,v=C=>{x.onReceiveProgress=C},S=(C,U,L)=>{const N=x.kind==="request"?Pf(L):null;x.onReceiveProgress?.(C,mo({peerId:U},N?N.m:L))};if(m.onProgress(S),_==="message"){let C=g?.onMessage??null;const U=()=>{if(!C)return;const N=C;x.pendingMessages.splice(0).forEach(({payload:D,peerId:X,metadata:Q})=>{Promise.resolve().then(()=>N(D,mo({peerId:X},Q))).catch(k=>console.error(`${yn} action handler error:`,k))})},L={send:async(N,D={})=>{await m.send(N,D.target,D.metadata,y(D.onProgress,D.metadata),D.signal)},get onMessage(){return C},set onMessage(N){C=N,U()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(N){v(N)}};return m.onMessage((N,D,X)=>{if(!C){x.pendingMessages.push(X===void 0?{payload:N,peerId:D}:{payload:N,peerId:D,metadata:X});return}const Q=C;Promise.resolve().then(()=>Q(N,mo({peerId:D},X))).catch(k=>console.error(`${yn} action handler error:`,k))}),x.action=L,n[h]=x,U(),L}let T=g?.onRequest??null;const R=C=>{st(C.timer);const U=x.pendingRequests.indexOf(C);U>-1&&x.pendingRequests.splice(U,1)},A=(C,U,L)=>{u.send(null,C,{r:U,e:Cr(L,"request failed")})},M=(C,U)=>{R(C),Promise.resolve().then(()=>U(C.payload,{peerId:C.peerId,...C.metadata===void 0?{}:{metadata:C.metadata},signal:C.controller.signal})).then(async L=>{if(L===void 0)throw nt("request handler returned undefined");await u.send(L,C.peerId,{r:C.requestId})}).catch(L=>A(C.peerId,C.requestId,L)).finally(()=>C.controller.abort())},E=()=>{T&&x.pendingRequests.slice().forEach(C=>M(C,T))},I=(C,U,L,N)=>{if(T){const X={payload:C,peerId:U,...L===void 0?{}:{metadata:L},requestId:N,controller:new AbortController,timer:null};M(X,T);return}const D={payload:C,peerId:U,...L===void 0?{}:{metadata:L},requestId:N,controller:new AbortController,timer:setTimeout(()=>{R(D),D.controller.abort(),A(U,N,"request handler unavailable")},Wy)};x.pendingRequests.push(D)},B=async(C,U)=>{const{target:L,metadata:N,onProgress:D,signal:X,timeoutMs:Q}=U;if(Wa(X),!i(L,!1))throw ur("disconnected",`no active peer with id ${L}`);const k=Fr(20),H=new Promise((le,he)=>{const ye={peerId:L,resolve:le,reject:he,timer:null,...X===void 0?{}:{signal:X}},K=()=>{c(k),he(ur("aborted","operation aborted"))};X&&(ye.abortHandler=K,X.addEventListener("abort",K,{once:!0})),r[k]=ye}).catch(le=>{throw le});try{await m.send(C,L,N===void 0?{r:k}:{r:k,m:N},y(D,N),X);const le=r[k];return le&&Q!==void 0&&(le.timer=setTimeout(()=>{c(k),le.reject(ur("timeout","request timed out"))},Q)),await H}catch(le){throw c(k),le}},W={request:B,requestMany:async(C,U)=>(Wa(U.signal),await Hi(U.targets.map(async L=>{try{const N={peerId:L,status:"fulfilled",value:await B(C,{target:L,...U.metadata===void 0?{}:{metadata:U.metadata},...U.timeoutMs===void 0?{}:{timeoutMs:U.timeoutMs},...U.onProgress===void 0?{}:{onProgress:U.onProgress},...U.signal===void 0?{}:{signal:U.signal}})};return U.onResult?.(N),N}catch(N){const D=ai(N,"request failed");if(D.kind==="aborted"||!D.kind)throw D;const X=D.kind==="timeout"?{peerId:L,status:"timeout"}:D.kind==="disconnected"?{peerId:L,status:"disconnected"}:{peerId:L,status:"rejected",error:D};return U.onResult?.(X),X}}))),get onRequest(){return T},set onRequest(C){T=C,E()},get onReceiveProgress(){return x.onReceiveProgress},set onReceiveProgress(C){v(C)}};return m.onMessage((C,U,L)=>{const N=Pf(L);N&&I(C,U,N.m,N.r)}),x.action=W,n[h]=x,E(),W},makeInternalAction:o,handleData:a,clearPeer:f}},Lf=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,If=i=>e=>{let t=i.get(e);return t||(t=Fr(20),i.set(e,t)),t},uh=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,r=new Map,s=new Map;return{getStreamKey:If(i),getTrackKey:If(e),rememberRemoteStream:(o,a,c)=>{t.set(o,a),c&&n.set(c,a)},getRemoteStream:(o,a)=>t.get(o)??(a?n.get(a):void 0),rememberRemoteTrack:(o,a,c,l,f)=>{const u={track:a,stream:c};r.set(o,u),l&&s.set(l,u),f&&n.set(f,c)},getRemoteTrack:(o,a)=>r.get(o)??(a?s.get(a):void 0),clearRemote:()=>{t.clear(),n.clear(),r.clear(),s.clear()}}},Yy=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},r={},s=uh(),o={onPeerStream:null,onPeerTrack:null},a=(f,u,d,h)=>{e(f)&&(t(f)?.__trysteroMedia?.rememberRemoteStream(u,d,typeof d.id=="string"?d.id:void 0),o.onPeerStream?.(d,f,h))},c=(f,u,d,h,g)=>{e(f)&&(t(f)?.__trysteroMedia?.rememberRemoteTrack(u,d,h,typeof d.id=="string"?d.id:void 0,typeof h.id=="string"?h.id:void 0),o.onPeerTrack?.(d,h,f,g))},l=(f,u,d,h,g,_={})=>{const m={k:u,..._,...d===void 0?{}:{m:d}};return i(f,async(p,x)=>{await h(m,p),g(x)})};return{addStream:(f,u,d)=>l(u.target,s.getStreamKey(f),u.metadata,d,h=>h.addStream(f),{s:f.id}),removeStream:(f,u)=>{i(u,(d,h)=>h.removeStream(f))},addTrack:(f,u,d,h)=>l(d.target,s.getTrackKey(f),d.metadata,h,g=>g.addTrack(f,u),{s:u.id,t:f.id}),removeTrack:(f,u)=>{i(u,(d,h)=>h.removeTrack(f))},replaceTrack:(f,u,d,h)=>l(d.target,s.getTrackKey(u),d.metadata,h,g=>g.replaceTrack(f,u),{t:f.id}),receiveStreamMeta:(f,u)=>{if(!e(u))return;const d=Lf(f);if(!d)return;const h=t(u)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(h){a(u,d.key,h,d.metadata);return}(n[u]??=[]).push(d)},receiveTrackMeta:(f,u)=>{if(!e(u))return;const d=Lf(f);if(!d)return;const h=t(u)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(h){c(u,d.key,h.track,h.stream,d.metadata);return}(r[u]??=[]).push(d)},receiveRemoteStream:(f,u)=>{if(!e(f))return;const d=n[f]?.shift();d&&a(f,d.key,u,d.metadata)},receiveRemoteTrack:(f,u,d)=>{if(!e(f))return;const h=r[f]?.shift();h&&c(f,h.key,u,d,h.metadata)},clearPeer:f=>{delete n[f],delete r[f]},get onPeerStream(){return o.onPeerStream},set onPeerStream(f){o.onPeerStream=f},get onPeerTrack(){return o.onPeerTrack},set onPeerTrack(f){o.onPeerTrack=f}}},Df="beforeunload",jy=1e4,ii=i=>"@_"+i,rs=new Set,Uf=()=>rs.forEach(i=>i()),Ky=i=>(rs.add(i),rs.size===1&&addEventListener(Df,Uf),()=>{rs.delete(i),rs.size||removeEventListener(Df,Uf)});var $y=(i,e,t,{onPeerHandshake:n,onHandshakeError:r,handshakeTimeoutMs:s=jy,isPassive:o=!1}={})=>{const a={},c={},l={},f={onPeerJoin:null,onPeerLeave:null};let u=kt,d=null;const h=(C,U,{includePending:L=!1}={})=>(C?Array.isArray(C)?C:[C]:on(L?a:c)).flatMap(N=>{const D=L?a[N]:c[N];return D?[Promise.resolve(U(N,D))]:(console.warn(`${yn}: no peer with id ${N} found`),[])}),g=Yy({iterate:(C,U)=>h(C,(L,N)=>U(L,N)),isActive:C=>!!c[C],getSharedMediaPeer:C=>a[C]??null}),_=qy({getPeer:(C,U)=>(U?a:c)[C],getPeerIds:C=>on(C?a:c),canReceiveFromPeer:(C,U)=>!!d?.canReceiveFromPeer(C,U)}),m=_.makeInternalAction,p=_.handleData,x=_.makeAction,y=(C,U=nt("peer disconnected"))=>{const L=ai(U,"peer disconnected");d?.clearPeer(C,L),delete a[C],delete c[C],_.clearPeer(C,L),l[C]?.splice(0).forEach(N=>N.reject(L)),delete l[C],g.clearPeer(C)},v=(C,U,L)=>{const N=a[C];if(!N||U&&N!==U)return;const D=!!c[C];y(C,L),N.destroy(),D&&f.onPeerLeave?.(C),e(C)},S=async()=>{await I.send(""),await new Promise(C=>setTimeout(C,99)),Ii(a).forEach(([C,U])=>{U.destroy(),y(C,nt("room left"))}),u(),t()},T=m(ii("ping")),R=m(ii("pong")),A=m(ii("signal")),M=m(ii("stream")),E=m(ii("track")),I=m(ii("leave"),{sendToPending:!0,receiveWhilePending:!0}),B=m(ii("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),W=m(ii("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=Py({...n===void 0?{}:{onPeerHandshake:n},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:B.send,sendHandshakeReady:W.send,onActivate:(C,U)=>{c[C]=U,f.onPeerJoin?.(C)},onFailure:(C,U,L)=>v(C,U,L)}),T.onMessage((C,U)=>R.send("",U)),R.onMessage((C,U)=>{const L=l[U];L?.shift()?.resolve(),L&&!L.length&&delete l[U]}),A.onMessage((C,U)=>{c[U]&&a[U]?.signal(C)}),M.onMessage((C,U)=>g.receiveStreamMeta(C,U)),E.onMessage((C,U)=>g.receiveTrackMeta(C,U)),I.onMessage((C,U)=>v(U,void 0,nt("peer left room"))),B.onMessage((C,U,L)=>d?.receiveHandshakeData(C,U,L)),W.onMessage((C,U)=>d?.receiveHandshakeReady(U)),i((C,U)=>{const L=a[U];if(L){if(L===C)return;L.destroy(),y(U,nt("peer replaced"))}a[U]=C,d?.addPeer(U,C),C.setHandlers({data:N=>p(U,N),stream:N=>g.receiveRemoteStream(U,N),track:(N,D)=>g.receiveRemoteTrack(U,N,D),signal:N=>{c[U]&&A.send(N,U)},close:()=>v(U,C,nt("peer disconnected")),error:N=>{console.error(`${yn} peer error:`,N),v(U,C,N)}}),d?.start(U,C)}),rh&&(u=Ky(()=>S().catch(kt))),{makeAction:x,leave:S,ping:async C=>{if(!c[C])throw nt(`no active peer with id ${C}`);const U=Date.now();return await new Promise((L,N)=>{const D=l[C]??=[],X=()=>{const k=l[C];if(!k)return;const H=k.indexOf(Q);H>-1&&k.splice(H,1),k.length||delete l[C]},Q={resolve:()=>{X(),L()},reject:k=>{X(),N(k)}};D.push(Q),T.send("",C).catch(k=>Q.reject(ai(k,"peer disconnected")))}),Date.now()-U},isPassive:()=>o,getPeers:()=>sh(Ii(c).map(([C,U])=>[C,U.connection])),addStream:(C,U={})=>g.addStream(C,U,M.send),removeStream:(C,U={})=>{g.removeStream(C,U.target)},addTrack:(C,U,L={})=>g.addTrack(C,U,L,E.send),removeTrack:(C,U={})=>{g.removeTrack(C,U.target)},replaceTrack:(C,U,L={})=>g.replaceTrack(C,U,L,E.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(C){f.onPeerJoin=C,C&&on(c).forEach(U=>C(U))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(C){f.onPeerLeave=C},get onPeerStream(){return g.onPeerStream},set onPeerStream(C){g.onPeerStream=C},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(C){g.onPeerTrack=C}}};const fh=1,dh=2,Nf=(i,e)=>{const t=hi(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=fh,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},Zy=(i,e)=>{const t=hi(i),n=new Uint8Array(4+t.byteLength);return n[0]=dh,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},Jy=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===fh){const r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:Li(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==dh||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:Li(e.subarray(4,n)),isPresent:e[1]===1}},hh=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},Qy=i=>{if(hh(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var eM=class{byApp={};roomPresenceHandlers={};getMap(i){return this.byApp[i]??={}}get(i,e){return this.byApp[i]?.[e]}isPeerStale(i){return hh(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(Zy(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],r=n?.[e];if(!r||r.isClosing)return;r.idleTimer=st(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=pr(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete n[e],s.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),on(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const r=this.getMap(i),s=r[e];if(s){if(s.idleTimer=st(s.idleTimer),s.peer===t)return s;this.clear(i,e,{destroyPeer:!0})}const o={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:uh(),idleMs:n,isClosing:!1};return t.setHandlers({data:a=>this.dispatchData(o,a),signal:a=>this.dispatchSignal(o,a),close:()=>this.clear(i,e,{destroyPeer:!1}),error:a=>{console.error(`${yn} peer error:`,a),this.clear(i,e,{destroyPeer:!1})},track:(a,c)=>this.dispatchTrack(o,a,c)}),r[e]=o,o}bind(i,e,t,{onDetach:n}){const r=t.bindings[i];if(r)return t.idleTimer=st(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:kt,proxy:{}},o=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===i&&(t.controlRoomId=on(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},a={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Nf(s.roomToken,c))},destroy:()=>o(),setHandlers:c=>{const{signal:l,...f}=c;Object.assign(s.handlers,f),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,f=l.size===0;l.add(i),t.streamOwners.set(c,l),f&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const f=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=f.rooms.size===0;return f.stream=l,f.rooms.add(i),t.trackOwners.set(c,f),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const f=t.trackOwners.get(c);if(f){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:f.stream,rooms:new Set};f.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=a,s.detach=o,t.bindings[i]=s,t.controlRoomId??=i,t.idleTimer=st(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l?.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(f=>t.peer.sendData(Nf(c,f))),this.flushBindingQueues(s)}),{proxy:a,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||on(i.bindings).length>0||(i.idleTimer=st(i.idleTimer),i.idleTimer=setTimeout(()=>{const e=this.byApp[i.appId]?.[i.peerId];!e||on(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t?.handlers.signal)return t}const e=pr(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{e.track?.(t,n),e.stream?.(n)})}dispatchData(i,e){const t=Jy(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[i.appId]?.(i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const r=i.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),i.pendingDataByToken.set(t.roomToken,r);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){this.getSignalBinding(i)?.handlers.signal?.(e)}dispatchTrack(i,e,t){pr(i.bindings).forEach(n=>{if(n.handlers.track||n.handlers.stream){n.handlers.track?.(e,t),n.handlers.stream?.(t);return}n.pendingTracks.push({track:e,stream:t})})}};const tM=23333,nM=12,iM=7533,rM=23333,$c="__legacy__",Oo="offer-placeholder",sM=["offer","answer","candidate"],oM=i=>{if(typeof i=="string")try{const e=Pr(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},Qr=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,aM=i=>sM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),ph=(i,e,t,n,r,s)=>{i.toCipher(e).then(o=>{i.isLeaving()||!s()||n(t,Jt(r(o.sdp)))})},cM=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),lM=i=>[...i.turnConfig??[],...i.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),uM=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${lM(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Ko=(i,e,t)=>{i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,i.onJoinError?.({error:uM(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},ws=(i,e)=>i[e]??=cM(),un=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},bo=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=st(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,un(i))},Zc=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,un(i))},Nl=(i,e)=>{i.offerRelayTimers[e]=st(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,un(i))},Of=(i,e)=>{i?.offerRelays[e]===Oo&&Nl(i,e)},fM=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},As=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=st(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,r)=>Nl(i,r)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||fM(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,un(i)},dM=(i,e,t,n)=>{st(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==n||(r.answerSent&&Ko(i,r,t),n.destroy(),bo(r,n),i.checkDeactivate())},rM)},hM=async(i,e,t)=>{const n=t?[t,$c]:[$c];for(const r of n){const s=i.pendingCandidates[r];if(s?.length){delete i.pendingCandidates[r];for(const o of s)await e.signal(o)}}},mh=(i,e,t,n=Ul)=>{st(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Ko(i,s,t),As(s,i.offerPool),i.checkDeactivate())},n)},pM=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const r=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!r)throw nt("failed to allocate offer peer");const{peer:s,offer:o}=r;e.offerPeer=s,e.offerId=Fr(nM),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],un(e);const a=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Ko(i,e,t),As(e,i.offerPool)),i.disconnectPeer(s,t),i.checkDeactivate()};return s.setHandlers({connect:()=>i.connectPeer(s,t,n),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:a,error:a}),mh(i,e,t),{peer:s,offer:o,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),mM=async(i,e,t,n,r)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const s=i.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Of(s,e);return}if(s.offerRelays[e]!==Oo)return;const[o,a]=await Hi([bs(Ts(i.rootTopicPlaintext,t)),pM(i,s,t,e)]);if(i.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==Oo){Of(s,e);return}s.offerRelayTimers[e]=st(s.offerRelayTimers[e]),s.offerRelays[e]=!0,un(s),s.offerRelayTimers[e]=setTimeout(()=>vM(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||s.connectedPeer||s.offerPeer!==a.peer||s.offerId!==a.offerId||l.type!=="candidate"||ph(i,l,o,r,f=>({peerId:Vt,offerId:a.offerId,candidate:f,...i.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===a.peer&&s.offerId===a.offerId))},r(o,Jt({peerId:Vt,offerId:a.offerId,offer:a.offer,...i.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>s.offerSignalRelays[e]?.(l))},gM=async(i,e,t,n,r,s,o)=>{const a=ws(i.peerStates,t);if(a.answeringPeer||a.offerAnswered)return;const c=!!(a.offerPeer||a.offerRelays.some(Boolean));if((c||s)&&Vt<t)return;c&&As(a,i.offerPool);const l=i.initPeer(!1,i.config);a.answeringPeer=l,a.answerSent=!1,a.connectionErrorReported=!1,dM(i,a,t,l),un(a);const f=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&Ko(i,a,t),bo(a,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:f,error:f});let u;try{u=await i.toPlain({type:"offer",sdp:n})}catch{bo(a,l),i.onJoinError?.({error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){bo(a,l);return}const d=await bs(Ts(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:h=>{i.isLeaving()||a.answeringPeer!==l||l.isDead||h.type!=="answer"&&h.type!=="candidate"||ph(i,h,d,o,g=>{const _={peerId:Vt};return h.type==="answer"?(a.answerSent=!0,_.answer=g):_.candidate=g,r&&(_.offerId=r),i.isPassive&&(_.passive=!0),_},()=>a.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await hM(a,l,r))},_M=async(i,e,t,n,r)=>{let s;try{s=await i.toPlain({type:oh,sdp:t})}catch{return}const o=ws(i.peerStates,e),a=n&&o?.offerPeer&&o.offerId===n?o.offerPeer:null,c=o?.answeringPeer??null,l=!n&&o?.offerPeer?o.offerPeer:null,f=r&&!r.isDead?r:a??c??l;if(!f||f.isDead){const u=n??$c;(o.pendingCandidates[u]??=[]).push(s);return}f.signal(s)},xM=async(i,e,t,n,r,s)=>{let o;try{o=await i.toPlain({type:"answer",sdp:n})}catch{i.onJoinError?.({error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(s)i.offerPool.claimLeased(s),s.setHandlers({connect:()=>i.connectPeer(s,t,e),close:()=>i.disconnectPeer(s,t)}),s.signal(o);else{const a=i.peerStates[t];if(!a||!a.offerPeer||a.offerAnswered||r&&a.offerId&&r!==a.offerId||a.offerPeer.isDead)return;a.offerAnswered=!0,mh(i,a,t,tM),a.offerPeer.signal(o)}},vM=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(Nl(n,t),i.checkDeactivate())},yM=i=>e=>async(t,n,r)=>{if(i.isLeaving())return;const s=oM(n);if(!s||aM(s))return;const o=Qr(s,"peerId")??"",a=Qr(s,"offer"),c=Qr(s,"answer"),l=Qr(s,"candidate"),f=Qr(s,"offerId"),u=s.peer,d=s.hasOutgoingOffer===!0,h=s.passive===!0;if(!o||o===Vt)return;const[g,_]=await Hi([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==g&&t!==_||i.isPassive&&h||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,i.requeueAnnounce?.()),i.isPassive&&!i.isActive))return;const m=i.peerStates[o],p=m?.connectedPeer;if(p&&m){const v=Qy(p);if(v==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(v==="stale")Zc(m);else{const S=Date.now(),T=m.connectedPeerUnhealthySinceMs??S;if(m.connectedPeerUnhealthySinceMs=T,S-T<iM)return;Zc(m)}}let x=i.sharedPeers.get(i.appId,o);x&&i.sharedPeers.getHealth(x.peer)==="stale"&&(i.sharedPeers.clear(i.appId,o,{destroyPeer:!0}),x=void 0);const y=!!(o&&!a&&!c&&!l);if(y&&!x){const v=ws(i.peerStates,o),S=Vt<o;if(v.answeringPeer||v.connectedPeer||v.offerAnswered)return;if(!S&&!v.offerPeer){const T=await bs(Ts(i.rootTopicPlaintext,o));!i.isLeaving()&&!v.connectedPeer&&r(T,Jt({peerId:Vt}));return}if(v.offerRelays[e])return;v.offerRelays[e]=Oo,un(v)}if(x&&(a||c||l)){if(x.bindings[i.roomId])return;i.attachSharedPeerToRoom(o,x);return}if(y)return mM(i,e,o,x,r);if(a)return gM(i,e,o,a,f,d,r);if(l)return _M(i,o,l,f,u);if(c)return xM(i,e,o,c,f,u)},go=5333,MM=[233,533,1333],SM=7533,EM=123333;var TM=({init:i,subscribe:e,announce:t,deactivate:n})=>{const r={},s={},o={},a={},c=new eM,l=()=>pr(r).some(S=>on(S).length>0),f=S=>s[S]??={},u=S=>o[S]??={},d=(S,T,R)=>{c.getHealth(S.peer)==="live"&&c.sendRoomPresence(S,T,R)},h=(S,T)=>{Ii(s[S]??{}).forEach(([R,A])=>{if(!A.shouldAdvertise())return;const{roomToken:M,roomTokenPromise:E}=A;if(M){d(T,M,!0);return}E.then(I=>{s[S]?.[R]===A&&A.roomToken===I&&(c.get(S,T.peerId)!==T||T.isClosing||A.shouldAdvertise()&&d(T,I,!0))})})},g=(S,T,R)=>pr(c.getMap(S)).forEach(A=>d(A,T,R)),_=S=>{a[S]||(a[S]=c.setRoomPresenceHandler(S,(T,R,A)=>{if(!A)return;const M=c.get(S,T),E=o[S]?.[R];!M||!E||s[S]?.[E]?.attachSharedPeerToRoom(T,M)}))},m=S=>{r[S]&&on(r[S]).length>0||(a[S]?.(),delete a[S],delete s[S],delete o[S])};let p=!1,x=[],y=null,v=kt;return(S,T,R)=>{if(!S)throw nt("requires a config map as the first argument");if(R&&typeof R!="object")throw nt("third argument must be a callbacks object");const{appId:A}=S,M=R?.onJoinError,E=R?.onPeerHandshake,I=R?.handshakeTimeoutMs;if(!A)throw nt("config map is missing appId field");if(!T)throw nt("roomId argument required");if(I!==void 0&&(!Number.isFinite(I)||I<=0))throw nt("handshakeTimeoutMs must be a positive number");if(r[A]?.[T])return r[A][T];_(A);const B=Ts(yn,A,T),W=bs(B),C=bs(Ts(B,Vt)),U=My(S.password??"",A,T),L=Sy(A,T),N=S._test_only_sharedPeerIdleMs??EM;let D=!1;const X=ie=>async $=>({type:$.type,sdp:await ie(U,$.sdp)}),Q=X(Ty),k=X(Ey),H=c.getMap(A),le=()=>bf(!0,S);let he=!1;y||=new Ay(le);const ye=y,K=async ie=>{const $=await ie.getOffer(Date.now()-ie.created>Ul);if(!$||$.type!=="offer")throw nt("failed to get offer for peer");return(await k($)).sdp},te=(ie,$)=>{const re=ws(Me.peerStates,ie);re.answeringExpiryTimer=st(re.answeringExpiryTimer),re.answeringPeer=null;const{proxy:me,isNew:J}=c.bind(T,L,$,{onDetach:()=>{const ue=Me.peerStates[ie];ue?.connectedPeer===$.peer&&(ue.connectedPeer=null,ue.connectedPeerUnhealthySinceMs=null,un(ue))}});re.connectedPeer=$.peer,re.connectedPeerUnhealthySinceMs=null,un(re),J&&P(me,ie),As(re,ye)},fe=(ie,$,re)=>{if(D){ie.destroy();return}const me=ws(Me.peerStates,$);if(me.connectedPeer){const Ee=H[$];if(Ee&&me.connectedPeer===Ee.peer&&Ee.bindings[T])return;me.connectedPeer!==ie&&!ie.isDead&&ie.destroy();return}let J=H[$];if(J&&c.getHealth(J.peer)==="stale"&&(c.clear(A,$,{destroyPeer:!0}),J=void 0),J&&J.peer!==ie){ie.isDead||ie.destroy(),te($,J);return}const ue=!J;J||=c.register(A,$,ie,N),te($,J),ue&&h(A,J)},Pe=(ie,$)=>{if(D)return;const re=Me.peerStates[$];re?.connectedPeer===ie&&(Zc(re),Je(),!_e&&he&&Me.requeueAnnounce?.())},_e=!!S.passive;let Fe=null,He,O=kt;const Je=()=>{if(!_e||!Me.isActive)return;let ie=!1;Ii(Me.peerStates).forEach(([$,re])=>{re.connectedPeer||re.answeringPeer||re.offerInitPromise||re.offerPeer||re.offerRelays.some(Boolean)?ie=!0:re.status==="idle"&&delete Me.peerStates[$]}),ie||(Me.isActive=!1,He=st(He),pt.forEach(st),pt.length=0,O(),Fe?.roomToken&&g(A,Fe.roomToken,!1))},Me={appId:A,roomId:T,config:S,peerStates:{},rootTopicPlaintext:B,rootTopicP:W,selfTopicP:C,toPlain:Q,toCipher:k,isLeaving:()=>D,isPassive:_e,isActive:!_e,onJoinError:M,sharedPeers:c,offerPool:ye,encryptOffer:K,initPeer:bf,connectPeer:fe,disconnectPeer:Pe,attachSharedPeerToRoom:te,checkDeactivate:Je,announceIntervals:[],announceIntervalMs:go},Ie={config:S,appId:A,roomId:T,isPassive:_e},be=yM(Me);if(!p){const ie=i(S);x=(Array.isArray(ie)?ie:[ie]).map($=>Promise.resolve($)),p=!0,v=S.relayConfig?.manualReconnection?kt:_y()}!_e&&!ye.isActive&&ye.warmup(),Me.announceIntervals=x.map(()=>go);const ot=x.map(()=>go),Se=x.map(()=>0),ke=x.map(()=>0),pt=[],gt=x.map(async(ie,$)=>e(await ie,await W,await C,be($),re=>ye.getOffers(re,K),Ie));Hi([W,C]).then(([ie,$])=>{if(D)return;const re=async(me,J)=>{if(D||_e&&!Me.isActive)return;const ue=_e?{passive:!0}:void 0;let Ee;try{Ee=await t(me,ie,$,ue,Ie),ke[J]=0}catch(z){const oe=ke[J]??0;oe===0&&S.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${yn}: announce failed - ${Cr(z,"")}`),ke[J]=oe+1}if(D||_e&&!Me.isActive||Ee&&typeof Ee!="number"&&"stopAnnouncing"in Ee)return;typeof Ee=="number"?(Me.announceIntervals[J]=Ee,ot[J]=Ee):Ee&&(ot[J]=Ee.nextAnnounceMs,he||=Ee.reannounceOnDisconnect===!0);const Ae=Se[J]??0;Se[J]=Ae+1;const pe=ot[J]??go,ze=MM[Ae];pt[J]=setTimeout(()=>{re(me,J)},typeof ze=="number"?Math.min(pe,ze):pe)};O=()=>{n&&x.forEach(async me=>{const J=await me;D||n(J,ie,$,Ie)})},Me.requeueAnnounce=()=>{pt.forEach(st),pt.length=0,He=st(He),ye.isActive||ye.warmup(),Fe?.roomToken&&g(A,Fe.roomToken,!0),He=setTimeout(Je,SM),x.forEach(async(me,J)=>{const ue=await me;ue&&!D&&(Se[J]=0,re(ue,J))})},gt.forEach(async(me,J)=>{if(await me,D)return;const ue=await x[J];ue&&!D&&(!_e||Me.isActive)&&re(ue,J)})});let P=kt;const{compose:b}=Ry(S.password??"",A,T),q=b(E),ee={...q?{onPeerHandshake:q}:{},...I===void 0?{}:{handshakeTimeoutMs:I},isPassive:_e,onHandshakeError:(ie,$)=>M?.({error:$.replace(/^handshake failed: /,""),appId:A,peerId:ie,roomId:T})};r[A]??={};const se=f(A),Z=$y(ie=>P=ie,ie=>{if(D)return;const $=Me.peerStates[ie];$?.connectedPeer&&($.connectedPeer=null,un($),Je())},()=>{D=!0,P=kt;const ie=s[A]?.[T];ie?.roomToken&&(g(A,ie.roomToken,!1),delete o[A]?.[ie.roomToken],o[A]&&!on(o[A]).length&&delete o[A]),s[A]&&(delete s[A][T],on(s[A]).length||delete s[A]),Ii(Me.peerStates).forEach(([$,re])=>{if(re.answeringExpiryTimer=st(re.answeringExpiryTimer),re.connectedPeer&&!re.connectedPeer.isDead){const me=H[$];(!me||me.peer!==re.connectedPeer)&&re.connectedPeer.destroy()}re.answeringPeer&&!re.answeringPeer.isDead&&re.answeringPeer.destroy(),As(re,ye),re.connectedPeer=null,re.answeringPeer=null,un(re)}),r[A]&&(delete r[A][T],on(r[A]).length===0&&delete r[A]),pt.forEach(st),He=st(He),gt.forEach(async $=>{(await $)()}),!l()&&(p=!1,ye.destroy(),y=null,v(),m(A))},ee);return Fe={roomToken:null,roomTokenPromise:L,attachSharedPeerToRoom:te,shouldAdvertise:()=>!_e||Me.isActive},se[T]=Fe,L.then(ie=>{const $=Fe;!$||D||s[A]?.[T]!==$||($.roomToken=ie,u(A)[ie]=T,pr(H).forEach(re=>{re.remoteRoomTokens.has(ie)&&te(re.peerId,re)}),(!_e||Me.isActive)&&g(A,ie,!0))}),r[A][T]=Z}};const bM=["offer","answer","candidate"],wM=6e4,AM=i=>{if(typeof i=="string")try{const e=Pr(i);return e&&typeof e=="object"?e:null}catch{return null}return i},Xa=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,RM=i=>bM.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),CM=i=>{const e=AM(i);if(!e||RM(e))return!1;const t=Xa(e,"peerId");return!!(t&&t!==Vt&&e.passive!==!0&&!Xa(e,"answer")&&!Xa(e,"candidate"))},qa=i=>{if(!i)throw nt("topic strategy missing room context");return i},Ff=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),Ya=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var PM=({steadyAnnounceIntervalMs:i=wM,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:r,unpublishTopic:s})=>TM({init:t,subscribe:async(o,a,c,l,f,u)=>{const d=qa(u),h=(S,T)=>{r(o,S,T,Ya(d,"signal",a,c))};let g=null,_=!1,m=null,p=!1;const x=S=>{_||(_=!0,S())},y=()=>(m||(m=Promise.resolve(n(o,c,(S,T)=>{p||l(S,T,h)},Ff(d,"self",a,c))).then(S=>{g=S,p&&x(S)})),m);d.isPassive||await y();const v=await n(o,a,async(S,T)=>{p||(d.isPassive&&CM(T)&&await y(),p||await l(S,T,h))},Ff(d,"root",a,c));return()=>{p=!0,g&&x(g),v()}},announce:async(o,a,c,l,f)=>{const u=qa(f),d=await r(o,a,Jt({peerId:Vt,...l}),Ya(u,"announce",a,c));return typeof d=="number"||d!==void 0&&"stopAnnouncing"in d?d:{nextAnnounceMs:d?.nextAnnounceMs??i,reannounceOnDisconnect:d?.reannounceOnDisconnect??e}},...s?{deactivate:(o,a,c,l)=>{const f=qa(l);return s(o,a,Ya(f,"announce",a,c))}}:{}});const LM=gy(i=>i.socket),IM=5,gh="x",_h="EVENT",{secretKey:DM,publicKey:UM}=ih.keygen(),NM=Es(UM),OM={},FM={},BM={},Bf=250,Fo=6e4,kM=15*6e4,zM=5333,Rs=new WeakMap,Jc=new WeakSet,Di=new WeakMap,kf=i=>{const e=Rs.get(i),t=Math.min(e?.delayMs?Math.max(Fo,e.delayMs*2):Fo,kM);return Rs.set(i,{delayMs:t,untilMs:Date.now()+t}),t},HM=i=>{const e=Rs.get(i);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},ja=i=>({nextAnnounceMs:i}),VM={stopAnnouncing:!0},GM=i=>{if(Jc.has(i))return!1;const e=Di.get(i);return e&&(clearTimeout(e.timer),Di.delete(i)),Jc.add(i),Rs.delete(i),i.close?.(),!0},WM=(i,e)=>{const t=Di.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));const n=t?.eventIds??new Set([e]),r=setTimeout(()=>{Di.delete(i)},zM);Di.set(i,{eventIds:n,timer:r})},XM=(i,e)=>{const t=Di.get(i);return t?.eventIds.has(e)?(clearTimeout(t.timer),Di.delete(i),!0):!1},xh=()=>Math.floor(Date.now()/1e3),vh=i=>BM[i]??=ah(i,1e4)+2e4,qM=async(i,e)=>{const t={kind:vh(i),tags:[[gh,i]],created_at:xh(),content:e,pubkey:NM},n=await jo("SHA-256",Jt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Jt([_h,{...t,id:Es(n),sig:Es(await ih.signAsync(n,DM))}])},ki={},yh=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},YM=(i,e,t)=>{const n=ki[i.url]??={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set};n.topics.set(e,t),Mh(i,n)},jM=(i,e)=>{const t=ki[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),yh(t),t.subIds.forEach(n=>i.send(Jt(["CLOSE",n]))),delete ki[i.url]):Mh(i,t))},Mh=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Sh(i)}finally{yh(e)}},0))},KM=i=>{const e=ki[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Sh=i=>{const e=ki[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],r=xh();for(let s=0;s<t.length;s+=Bf)n.push(t.slice(s,s+Bf));for(;e.subIds.length>n.length;){const s=e.subIds.pop();s&&i.send(Jt(["CLOSE",s]))}n.forEach((s,o)=>{const a=e.subIds[o]??=Fr(64);i.send(Jt(["REQ",a,{kinds:[...new Set(s.map(vh))],since:r,"#x":s}]))})},$M=i=>{const e=ki[i.url];e&&e.topics.size>0&&Sh(i)},ZM=PM({init:i=>dy(i,JM,IM,!0).map(e=>{const t=LM.register(e,()=>my(e,n=>{const[r,s,o,a]=Pr(n);if(r!==_h){const c=`${yn}: relay failure from ${t.url} - `,l=r==="CLOSED"&&typeof o=="string"?o:a,f=r==="OK"&&o===!1,u=f&&l?.startsWith("rate-limited:"),d=f&&l?.startsWith("duplicate:"),h=r==="CLOSED"||f&&!u&&!d,g=r==="OK"&&XM(t,s);if(h&&!GM(t))return;u?kf(t):g&&Rs.delete(t),!d&&i.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(c+s):(f||r==="CLOSED")&&console.warn(c+l));return}if(o&&typeof o=="object"&&"content"in o){const{content:c}=o,l=FM[s];if(l){l(OM[s]??"",c);return}const f=ki[t.url];if(f?.subIds.includes(s)&&o.tags){const u=o.tags.find(d=>d[0]===gh);u?.[1]&&f.topics.get(u[1])?.(u[1],c)}}},()=>$M(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{YM(i,e,(o,a)=>{t(o,a)});const s=()=>{jM(i,e)};return n.kind==="root"?KM(i).then(()=>s):s},publishTopic:async(i,e,t,n)=>{if(Jc.has(i)||i.isClosed)return n.kind==="announce"?VM:void 0;if(n.kind==="announce"){const a=HM(i);if(a>0)return ja(Math.max(Fo,a))}const r=await qM(e,typeof t=="string"?t:Jt(t)),s=i.socket.readyState===1;if(i.send(r),n.kind!=="announce")return;if(!s)return ja(kf(i));const o=Pr(r)[1].id;return WM(i,o),ja(Fo)}}),JM=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i);function QM({self:i,neighbors:e,send:t,deliver:n,nonce:r=Math.random().toString(36).slice(2)}){const s=new Set;let o=0;function a(u){return s.has(u)?!1:(s.add(u),s.size>4096&&s.delete(s.values().next().value),!0)}function c(u){if(!(u.path.length>=4))for(const d of e())u.path.includes(d)||t(u,d)}function l(u,d){const h={id:`${i}:${r}:${++o}`,origin:i,kind:u,data:d,path:[i]};a(h.id),c(h)}function f(u,d){!u||!["pose","objects"].includes(u.kind)||typeof u.id!="string"||u.id.length>180||typeof u.origin!="string"||u.origin.length>100||u.origin===i||!Array.isArray(u.path)||u.path.length<1||u.path.length>4||u.path[0]!==u.origin||u.path.at(-1)!==d||u.path.includes(i)||u.path.some(h=>typeof h!="string"||h.length>100)||new Set(u.path).size!==u.path.length||JSON.stringify(u).length>24e3||!a(u.id)||(n(u.kind,u.data,u.origin),c({...u,path:[...u.path,i]}))}return{publish:l,receive:f}}const Bo=i=>i==="dog"?"dog":"cat";function Qc(i,e=15964831,t="cat"){t=Bo(t);const n=new ln,r=new Et({color:t==="cat"?15708281:14260849,roughness:.48,metalness:0}),s=new Et({color:16777215,roughness:.65}),o=new Et({color:2198161,roughness:.6}),a=new Et({color:t==="cat"?15047280:10771779,roughness:.6});function c(y,v,S=r){const T=new Ye(y,S);return T.position.set(...v),T.castShadow=!0,n.add(T),T}const l=c(new Ml(.25,.32,6,20),[0,.88,0],s);function f(y,v,S=s){const T=new Ye(y,S);return T.position.set(...v),l.add(T),T}f(new cn(.012,.49,.018),[0,-.04,-.252],new Et({color:12966362})),f(new cn(.105,.035,.022),[-.12,.09,-.234],o),f(new cn(.035,.105,.022),[-.12,.09,-.234],o);for(const y of[-1,1]){const v=f(new cn(.12,.18,.025),[y*.075,.25,-.21]);v.rotation.z=y*-.45}const u=c(new Wn(.43,24,16),[0,1.65,0]);for(const y of[-1,1]){const v=new Ye(t==="cat"?new Do(.16,.32,4,1):new Wn(1,16,12),t==="cat"?r:a);if(v.position.set(y*(t==="cat"?.28:.41),t==="cat"?.34:.055,0),t==="cat"?(v.rotation.z=y*-.25,v.rotation.y=Math.PI/4,v.scale.z=.6):(v.scale.set(.12,.31,.13),v.rotation.z=y*.35),u.add(v),t==="cat"){const S=new Ye(new Do(.105,.21,3),a);S.position.set(0,-.02,-.066),v.add(S)}}const d=new Et({color:3152675,roughness:.6});for(const y of[-.15,.15]){const v=new Ye(new Wn(.072,12,10),d);v.position.set(y,.045,-.386),v.scale.set(.85,1.5,.48),u.add(v)}const h=[-.56,.56].map(y=>c(new Wn(.14,16,12),[y,.8,-.06])),g=document.createElement("canvas");g.width=512,g.height=80;const _=g.getContext("2d");_.fillStyle="#123142dd",_.fillRect(0,0,512,80),_.fillStyle="#fff",_.font="bold 36px Arial",_.textAlign="center",_.textBaseline="middle",_.fillText(i,256,40,490);const m=new Sr(g);m.colorSpace=_t;const p=new mm(new yd({map:m}));p.position.y=2.3,p.scale.set(1.9,.3,1),n.add(p),n.userData.texture=m,n.userData.character=t;const x=new Set;return n.traverse(y=>{y.isMesh&&x.add(y.material)}),n.userData.proximity=y=>{const v=yt.clamp(y/.9,.08,1);for(const S of x){const T=v<1;S.transparent!==T&&(S.transparent=T,S.needsUpdate=!0),S.opacity=v,S.depthWrite=!T}},n.userData.animate=(y,v=0,S=null,T=1.65,R=0)=>{const A=Math.sin(y*(v>.1?9:2.4))*(v>.1?.035:.014);u.position.y=yt.clamp(T,.9,2.25)+A,u.rotation.x=R,l.position.y=u.position.y-.77,h.forEach((M,E)=>{S?.[E]?M.position.copy(n.worldToLocal(new F(...S[E]))):M.position.set(E?.56:-.56,l.position.y-.08+A,-.06+Math.sin(y*8+E*Math.PI)*Math.min(v,1)*.15)})},n}function zf(i){i.removeFromParent();const e=new Set,t=new Set;i.traverse(n=>{n.geometry&&e.add(n.geometry),n.material&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),i.userData.texture.dispose()}function eS({scene:i,renderer:e,camera:t,controllers:n,objects:r,menu:s,say:o,welcome:a,myColor:c,getCharacter:l,getElevation:f=()=>0}){const u=new Map,d=new Set,h=document.querySelector("#player-name"),g=document.querySelector("#room-code"),_=document.querySelector("#room-message"),m=document.querySelector("#people-count"),p=document.querySelector("#connection-state"),x=document.querySelector("#participant-list");let y,v,S,T="",R=0,A=0,M=0,E=-1/0,I=0,B=Promise.resolve();function W(){const H=y;return y=null,S=null,v=null,H&&(B=B.then(()=>H.leave()).catch(()=>{})),B}h.value=localStorage.getItem("oseoverse-name")||`Visitante ${Math.floor(100+Math.random()*900)}`;const C=H=>{const le=u.get(H);le&&zf(le.group),u.delete(H)};function U(){if(!T)return;const H=Object.keys(y?.getPeers()||{});m.textContent=String(u.size+1),p.textContent=navigator.onLine?`${u.size+1} participantes recibidos · ${H.length} conexiones directas${d.size?" · Conexiones pendientes":""}`:"Sin Internet. Esperando reconexión…",x.replaceChildren();for(const le of[`${h.value||"Visitante"} (tú)`,...[...u].map(([he,ye])=>`${ye.name} · ${ye.group.userData.character==="dog"?"Perro":"Gato"}${H.includes(he)?"":" · conexión compartida"}`)]){const he=document.createElement("li");he.textContent=le,x.appendChild(he)}}function L(){const H=e.xr.isPresenting?e.xr.getCamera():t,le=H.getWorldDirection(new F),he=H.getWorldPosition(new F),ye=["left","right"].map(te=>{const fe=n.find(Pe=>Pe.userData.handedness===te&&Pe.userData.connected);return e.xr.isPresenting&&fe?fe.getWorldPosition(new F).toArray():null}),K=f();return{character:l(),seq:++A,x:he.x,z:he.z,elevation:K,yaw:Math.atan2(-le.x,-le.z),pitch:Math.asin(yt.clamp(le.y,-1,1)),headY:he.y-K,hands:ye,name:h.value.trim().slice(0,18)||"Visitante",color:c}}function N(H,le=!1){if(!v)return;const he=L();S?.publish("pose",he),(H||le)&&v.send(he,H?{target:H}:void 0).catch(()=>{})}function D(H,le){if(le===Vt||!H||![H.x,H.z,H.yaw].every(Number.isFinite))return;let he=u.get(le);if(he&&Number.isSafeInteger(H.seq)&&H.seq<=he.seq)return;if(he&&he.group.userData.character!==Bo(H.character)){const K=Qc(he.name,H.color,H.character);K.position.copy(he.group.position),K.rotation.copy(he.group.rotation),zf(he.group),he.group=K,i.add(K)}if(!he){const K=Number.isInteger(H.color)&&H.color>=0&&H.color<=16777215?H.color:15964831,te=String(H.name||"Visitante").slice(0,18),fe=Qc(te,K,H.character);i.add(fe),fe.position.set(yt.clamp(H.x,-37,An.x),0,yt.clamp(H.z,-39,An.z)),he={group:fe,name:te,destination:fe.position.clone(),yaw:0,headY:1.65,pitch:0,hands:null,seq:-1},u.set(le,he)}he.seq=Number.isSafeInteger(H.seq)?H.seq:he.seq,he.lastSeen=performance.now(),d.delete(le);const ye=Number.isFinite(H.elevation)?yt.clamp(H.elevation,0,8):0;he.destination.set(yt.clamp(H.x,-37,An.x),ye,yt.clamp(H.z,-39,An.z)),he.yaw=H.yaw,he.headY=Number.isFinite(H.headY)?yt.clamp(H.headY,.9,2.25):1.65,he.pitch=Number.isFinite(H.pitch)?yt.clamp(H.pitch,-1.4,1.4):0,he.hands=Array.isArray(H.hands)&&H.hands.length===2?H.hands.map(K=>Array.isArray(K)&&K.length===3&&K.every(te=>Number.isFinite(te)&&Math.abs(te)<=90)?K:null):null,m.textContent=String(u.size+1)}async function X(H,le=!1){const he=H.trim().toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);if(!he){_.textContent="Escribe el código de sala.";return}const ye=++R;r.release();const K=W();for(const fe of u.keys())C(fe);d.clear(),T=he,E=performance.now(),localStorage.setItem("oseoverse-name",h.value.trim().slice(0,18)),g.value=T;const te=new URL(location.href);te.searchParams.set("room",T),history.replaceState(null,"",te),U();try{if(await K,ye!==R)return;const fe=ZM({appId:"oseoverse-campus-v3",relayConfig:{redundancy:3}},T,{onJoinError:He=>{ye===R&&(d.add(He.peerId),U(),_.textContent="Una conexión no pudo completarse. Intentando rutas entre participantes; también puedes pulsar Reconectar.")}});y=fe,v=fe.makeAction("pose");const Pe=fe.makeAction("objects"),_e=fe.makeAction("mesh"),Fe=QM({self:Vt,neighbors:()=>Object.keys(fe.getPeers()),send:(He,O)=>{ye===R&&_e.send(He,{target:O}).catch(()=>{})},deliver:(He,O,Je)=>{ye===R&&(He==="pose"?D(O,Je):r.receive(O,Je))}});S=Fe,_e.onMessage=(He,{peerId:O})=>{ye===R&&Fe.receive(He,O)},v.onMessage=(He,{peerId:O})=>{ye===R&&D(He,O)},Pe.onMessage=(He,{peerId:O})=>{ye===R&&r.receive(He,O)},r.setNetwork(He=>(Fe.publish("objects",He),Pe.send(He).catch(()=>{})),le),fe.onPeerJoin=He=>{ye===R&&(d.delete(He),N(He),Fe.publish("objects",r.snapshot()),Pe.send(r.snapshot(),{target:He}).catch(()=>{}),_.textContent=`Sala ${T} · conectada`,U(),o("Se conectó otro participante."))},fe.onPeerLeave=()=>{ye===R&&U()},document.querySelector("#copy-link").hidden=!1,document.querySelector("#reconnect").hidden=!1,_.textContent=`Sala ${T}. Comparte el enlace; la lista muestra a quienes recibes.`,s.open=!1,U(),le?o("Restableciendo la conexión de la sala…"):a.show(T)}catch(fe){++R,W(),r.setNetwork(null,le),_.textContent=`No se pudo conectar: ${fe.message}`,U()}}function Q(){T&&navigator.onLine&&(!y||performance.now()-E>3e3)&&X(T,!0)}document.querySelector("#join-room").addEventListener("click",()=>X(g.value)),document.querySelector("#create-room").addEventListener("click",()=>X(Math.random().toString(36).slice(2,8))),document.querySelector("#reconnect").addEventListener("click",Q),g.addEventListener("keydown",H=>{H.key==="Enter"&&X(g.value)}),document.querySelector("#copy-link").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),_.textContent="Enlace copiado."}catch{_.textContent=location.href}}),window.addEventListener("pagehide",()=>{r.release(),++R,W()}),window.addEventListener("pageshow",H=>{H.persisted&&Q()}),window.addEventListener("online",Q),window.addEventListener("offline",U),document.addEventListener("visibilitychange",()=>{document.hidden?(I=performance.now(),r.release()):(I&&performance.now()-I>1e4?Q():N(void 0,!0),I=0)}),setInterval(()=>{if(y){N(void 0,!0);for(const[H,le]of u)performance.now()-le.lastSeen>2e4&&(C(H),r.peerLeft(H));U()}},1e3);const k=new URLSearchParams(location.search).get("room");return k?X(k):a.show("OSEOVERSE"),{peers:u,sessionStarted:()=>{a.show(T||"OSEOVERSE"),N(void 0,!0)},update:()=>{y&&performance.now()-M>150&&(N(),M=performance.now())}}}function tS(i,e,t){const n=document.querySelector("#welcome"),r=document.querySelector("#welcome-room"),s=document.createElement("canvas");s.width=1024,s.height=320;const o=s.getContext("2d"),a=new Sr(s);a.colorSpace=_t;const c=new Ye(new $n(1.5,.47),new wt({map:a,transparent:!0,depthTest:!1,depthWrite:!1}));c.renderOrder=100,c.visible=!1,i.add(c);let l=0,f="OSEOVERSE";function u(h=f){f=h,l=performance.now()+5e3,r.textContent=h,n.hidden=!1,o.fillStyle="#102e3cf2",o.fillRect(0,0,1024,320),o.textAlign="center",o.fillStyle="#8ff0d5",o.font="bold 48px Arial",o.fillText("BIENVENIDO A LA SALA",512,85),o.fillStyle="#fff",o.font="bold 70px Arial",o.fillText(h,512,182,950),o.font="32px Arial",o.fillText("Explora · participa · comparte",512,260),a.needsUpdate=!0}function d(){const h=l-performance.now(),g=Math.min(1,Math.max(0,h/600));if(n.hidden=h<=0||e.xr.isPresenting,n.style.opacity=g,c.visible=h>0&&e.xr.isPresenting,c.visible){const _=e.xr.getCamera();_.getWorldPosition(c.position),_.getWorldQuaternion(c.quaternion),c.position.add(new F(0,.25,-2).applyQuaternion(c.quaternion)),c.material.opacity=g}}return{show:u,update:d}}function nS(i,e,t,n=.24){const r=(a,c)=>t.some(l=>a>l.minX-n&&a<l.maxX+n&&c>l.minZ-n&&c<l.maxZ+n),s=r(e.x,i.z)?i.x:e.x,o=r(s,e.z)?i.z:e.z;return{x:s,z:o}}function iS(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new Pt;let l=0;for(let f=0;f<i.length;++f){const u=i[f];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in u.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(u.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in u.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(u.morphAttributes[h])}if(e){let h;if(t)h=u.index.count;else if(u.attributes.position!==void 0)h=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,f),l+=h}}if(t){let f=0;const u=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let g=0;g<h.count;++g)u.push(h.getX(g)+f);f+=i[d].attributes.position.count}c.setIndex(u)}for(const f in s){const u=Hf(s[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(const f in o){const u=o[f][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let d=0;d<u;++d){const h=[];for(let _=0;_<o[f].length;++_)h.push(o[f][_][d]);const g=Hf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(g)}}return c}function Hf(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const f=i[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const o=new e(s),a=new Ut(o,t,n);let c=0;for(let l=0;l<i.length;++l){const f=i[l];if(f.isInterleavedBufferAttribute){const u=c/t;for(let d=0,h=f.count;d<h;d++)for(let g=0;g<t;g++){const _=f.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(f.array,c);c+=f.count*t}return r!==void 0&&(a.gpuType=r),a}function Vf(i,e){if(e===mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zc||e===cd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===zc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function rS(i){const e=new ln;e.name="Dermagatos Campus Original",i.add(e);let t=72831;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0)/4294967296;function r(_){const m=document.createElement("canvas");m.width=m.height=512;const p=m.getContext("2d");if(_==="wood"){p.fillStyle="#b59370",p.fillRect(0,0,512,512);for(let y=0;y<8;y++){const v=y%2*128;for(let S=-1;S<3;S++){const T=S*256+v,R=y*64;p.fillStyle=`hsl(31 28% ${54+n()*12}%)`,p.fillRect(T+1,R+1,254,62);for(let A=0;A<28;A++){p.strokeStyle=`rgba(65,40,20,${.025+n()*.08})`,p.beginPath();const M=R+n()*62;p.moveTo(T+3,M),p.bezierCurveTo(T+90,M-3,T+160,M+4,T+250,M),p.stroke()}}}}else{p.fillStyle="#bacbd3",p.fillRect(0,0,512,512);for(let y=0;y<5200;y++)p.fillStyle=["#b5c5cd","#d5e0e5","#bccbd2","#a7bbc5"][Math.floor(n()*4)],p.beginPath(),p.ellipse(n()*512,n()*512,.5+n()*2,.5+n()*3,n()*6,0,Math.PI*2),p.fill();p.strokeStyle="#92a9b3",p.lineWidth=3,p.strokeRect(1,1,510,510)}const x=new Sr(m);return x.colorSpace=_t,x.wrapS=x.wrapT=Ni,x.anisotropy=4,x}const s={wall:new Et({color:14937844,roughness:.6}),dark:new Et({color:1586249,roughness:.42,metalness:.35}),wood:new Et({map:r("wood"),roughness:.85}),stone:new Et({map:r("stone"),roughness:.48,metalness:.12}),teal:new Et({color:2918792,roughness:.7}),light:new wt({color:15335416}),neon:new wt({color:5627125}),metal:new Et({color:7638698,roughness:.35,metalness:.5}),ceiling:new wt({color:14280431}),leaf:new Et({color:4353104,roughness:1})},o=new Map,a=[];function c(_,m,p,x,y,v,S,T=!1){const R=new cn(y,v,S);if(_==="wood"||_==="stone"){const M=R.attributes.position,E=R.attributes.normal,I=R.attributes.uv;for(let B=0;B<M.count;B++){const W=Math.abs(E.getY(B))>.5?[M.getX(B),M.getZ(B)]:Math.abs(E.getX(B))>.5?[M.getZ(B),M.getY(B)]:[M.getX(B),M.getY(B)];I.setXY(B,W[0]/3,W[1]/3)}}R.translate(m,p,x);const A=_+(p>3.8?":roof":"");o.has(A)||o.set(A,[]),o.get(A).push(R),T&&a.push({minX:m-y/2,maxX:m+y/2,minZ:x-S/2,maxZ:x+S/2})}function l(_,m,p,x,y=4,v="#24484c"){const S=document.createElement("canvas");S.width=1024,S.height=192;const T=S.getContext("2d");T.fillStyle=v,T.fillRect(0,0,1024,192),T.fillStyle="#f2faf4",T.font="bold 58px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText(_,512,96,940);const R=new Sr(S);R.colorSpace=_t;const A=new Ye(new $n(y,y*.11),new wt({map:R,side:qt}));A.position.set(m,p,x),e.add(A)}c("stone",0,-.13,0,76,.25,80);for(const _ of[-20,20])c("ceiling",_,4.85,-12,34,.18,52);for(const _ of[-3,3])c("metal",_,4.9,-12,.18,.25,52),c("neon",_,4.69,-12,.055,.035,52);for(let _=-36;_<=12;_+=4)c("metal",0,4.9,_,6,.15,.1);for(const _ of[0,-20]){c("wood",0,.015,_,68,.025,7);for(const m of[-20,20])c("ceiling",m,4.45,_,34,.2,8);for(const m of[-30,-18,-6,6,18,30])c("light",m,4.32,_,5.5,.025,.13);for(const m of[-1,1])c("neon",0,.05,_+m*3.25,68,.02,.045);for(let m=-32;m<=32;m+=4)Math.abs(m)>3&&c("metal",m,4.31,_,.055,.1,7.6)}for(const _ of[-34,0,34])if(c("wood",_,.035,-13,_===0?7:4,.025,33),_!==0&&c("ceiling",_,4.5,-14,5,.15,35),_===0)for(const m of[-1,1])c("neon",m*3.25,.07,-13,.045,.025,33);const f=[];for(const _ of[-9.2,-30])for(const m of[-24,-12,12,24]){f.push({x:m,z:_}),c("wood",m,.06,_,10,.05,8.8),c("wall",m-5,2.1,_,.22,4.2,8.8,!0),c("wall",m+5,2.1,_,.22,4.2,8.8,!0),c("wall",m,2.1,_-4.4,10,4.2,.22,!0),c("wood",m,.8,_-4.26,9.75,1.5,.04),c("dark",m,.13,_-4.23,9.75,.12,.04),c("ceiling",m,4.24,_,10.2,.18,8.9);for(const x of[-1,1])c("dark",m+x*4.85,2.1,_+4.4,.26,4.2,.26,!0);c("dark",m,3.94,_+4.4,10,.45,.28),c("light",m,4.12,_,5,.025,.2);for(const x of[-1,1])c("neon",m+x*4.7,4.08,_,.06,.04,8.3),c("metal",m+x*4.72,2.1,_-4.24,.18,3.8,.06),c("neon",m+x*4.72,2.1,_-4.19,.035,3.5,.025);for(let x=-3;x<=3;x+=1.5)c("metal",m+x,4.12,_,.025,.025,8.3);l(_===-9.2?m===-12?"LABORATORIO INTERACTIVO":m===12?"EQUIPO VETERINARIO":"SALA DE EXPOSICIÓN":m===-24?"PROCONVET":m===24?"EXPERIENCIAS":"SALA DE ENCUENTRO",m,3.88,_+4.57,5.5)}c("wood",0,.56,.4,3.6,1.12,1.25,!0),c("ceiling",0,1.14,.4,4,.12,1.55),c("teal",0,.6,1.04,3.3,.65,.035),l("DERMAGATOS",0,.67,1.065,2.8);for(const _ of[-1.8,1.8]){const m=new Ye(new mi(.63,.63,1.1,24),s.wood);m.position.set(_,.55,.4),e.add(m)}for(const _ of[-5.3,5.3])c("ceiling",_,4.65,5.3,4.4,.2,15);const u=new Ye(new Er(2.7,.045,8,56),s.light);u.rotation.x=Math.PI/2,u.position.set(0,4.3,1),e.add(u),u.userData.fallRoof=!0;const d=new Ye(new Er(2.95,.025,8,56),s.neon);d.rotation.x=Math.PI/2,d.position.set(0,4.35,1),d.userData.fallRoof=!0,e.add(d);const h=new Ye(new Uo(.65,0),new wt({color:6217727,wireframe:!0}));h.position.set(0,2.25,-1.5),e.add(h),c("dark",0,.5,-1.5,1.1,1,1.1,!0),c("neon",0,1.02,-1.5,1.15,.04,1.15),l("CAMPUS VETERINARIO · EXPLORA Y PARTICIPA",0,3.1,-3.7,6);for(const _ of[-6,6])for(const m of[5,-19])c("dark",_,.2,m,2.9,.38,.8,!0),c("wood",_,.43,m,3.1,.12,.95),c("wall",_,.78,m-.38,3.1,.65,.12);c("wall",0,2.45,-38,74,4.9,.3,!0);for(const _ of[-37,37])c("wall",_,2.45,-12,.3,4.9,52,!0);c("wall",0,1,14,74,2,.3,!0);for(const _ of[-7,7,-32,32])for(const m of[9,-22]){c("dark",_,.3,m,.9,.6,.9,!0);const p=new Ye(new Uo(.7,1),s.leaf);p.scale.y=1.35,p.position.set(_,1.2,m),e.add(p)}for(const[_,m]of o){const p=iS(m,!1);m.forEach(y=>y.dispose());const x=new Ye(p,s[_.split(":")[0]]);x.receiveShadow=!0,x.userData.fallRoof=_.endsWith(":roof"),e.add(x)}const g=new Ye(new Wn(150,32,16),new jn({side:zt,depthWrite:!1,vertexShader:"varying vec3 vDirection; void main(){ vDirection=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vDirection;
      void main(){ vec3 d=normalize(vDirection); float h=max(d.y,0.0);
        vec3 color=mix(vec3(0.76,0.88,0.96),vec3(0.12,0.34,0.64),pow(h,0.65));
        float sun=pow(max(dot(d,normalize(vec3(-0.5,0.6,0.35))),0.0),180.0);
        float clouds=smoothstep(0.67,0.95,sin(d.x*19.0+sin(d.z*11.0))*sin(d.z*23.0+d.y*8.0));
        color=mix(color,vec3(0.92,0.97,1.0),clouds*smoothstep(0.05,0.3,h)*0.28);
        gl_FragColor=vec4(color+vec3(1.0,0.86,0.63)*sun*0.6,1.0);
        #include <colorspace_fragment>
      }`}));return g.renderOrder=-10,i.add(g),i.userData.updateCampus=_=>{h.rotation.y+=_*.25},{group:e,walls:a,rooms:f}}class sS extends Nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new TS(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=as.extractUrlBase(e);o=as.resolveURL(l,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Pd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Eh){try{o[Ke.KHR_BINARY_GLTF]=new bS(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new BS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const u=this.pluginCallbacks[f](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const u=s.extensionsUsed[f],d=s.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new cS;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new wS(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new AS;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new RS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function oS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aS{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const f=new Oe(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],Wt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ld(f),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qm(f),l.distance=u;break;case"spot":l=new Wm(f),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class cS{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){const r=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class dS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class pS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class mS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class _S{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class xS{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class vS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Un}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class yS{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class MS{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class SS{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class ES{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,f=r.count,u=r.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,u,d,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(f*u);return o.decodeGltfBuffer(new Uint8Array(h),f,u,d,r.mode,r.filter),h})})}else return null}}class TS{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==nn.TRIANGLES&&l.mode!==nn.TRIANGLE_STRIP&&l.mode!==nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(f=>(c[l]=f,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const f=l.pop(),u=f.isGroup?f.children:[f],d=l[0].count,h=[];for(const g of u){const _=new Ge,m=new F,p=new Ln,x=new F(1,1,1),y=new Td(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in c)if(v==="_COLOR_0"){const S=c[v];y.instanceColor=new Vc(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ht.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),h.push(y)}return f.isGroup?(f.clear(),f.add(...h),f):h[0]}))}}const Eh="glTF",es=12,Gf={JSON:1313821514,BIN:5130562};class bS{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-es,s=new DataView(e,es);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Gf.JSON){const l=new Uint8Array(e,es+o,a);this.content=n.decode(l)}else if(c===Gf.BIN){const l=es+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const f in o){const u=el[f]||f.toLowerCase();a[u]=o[f]}for(const f in e.attributes){const u=el[f]||f.toLowerCase();if(o[f]!==void 0){const d=n.accessors[e.attributes[f]],h=mr[d.componentType];l[u]=h.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(u,d){r.decodeDracoFile(f,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(h)},a,l,Wt,d)})})}}class AS{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class RS{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Th extends Ls{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,f=r-t,u=(n-t)/f,d=u*u,h=d*u,g=e*l,_=g-l,m=-2*h+3*d,p=h-d,x=1-m,y=p-d+u;for(let v=0;v!==a;v++){const S=o[_+v+a],T=o[_+v+c]*f,R=o[g+v+a],A=o[g+v]*f;s[v]=x*S+y*T+m*R+p*A}return s}}const CS=new Ln;class PS extends Th{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return CS.fromArray(s).normalize().toArray(s),s}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wf={9728:Ht,9729:Zt,9984:ed,9985:xo,9986:ns,9987:Gn},Xf={33071:oi,33648:Ro,10497:Ni},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},el={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LS={CUBICSPLINE:void 0,LINEAR:xs,STEP:_s},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function bi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DS(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,f=e.length;l<f;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,f=e.length;l<f;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const f=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function US(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NS(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Za(t.attributes):e=i.indices+":"+Za(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Za(i.targets[n]);return e}function Za(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function tl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const FS=new Ge;class BS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Hm(this.options.manager):this.textureLoader=new jm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return bi(s,a,r),En(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,f]of o.children.entries())s(f,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(as.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ka[r.type],a=mr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Ut(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ka[r.type],l=mr[r.componentType],f=l.BYTES_PER_ELEMENT,u=f*c,d=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(h&&h!==u){const p=Math.floor(d/h),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(x);y||(_=new l(a,p*h,r.count*h/f),y=new vd(_,h/f),t.cache.add(x,y)),m=new Ms(y,c,d%h/f,g)}else a===null?_=new l(r.count*c):_=new l(a,d,r.count*c),m=new Ut(_,c,g);if(r.sparse!==void 0){const p=Ka.SCALAR,x=mr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,S=new x(o[1],y,r.sparse.count*p),T=new l(o[2],v,r.sparse.count*c);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,A=S.length;R<A;R++){const M=S[R];if(m.setX(M,T[R*c]),c>=2&&m.setY(M,T[R*c+1]),c>=3&&m.setZ(M,T[R*c+2]),c>=4&&m.setW(M,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return f.magFilter=Wf[d.magFilter]||Zt,f.minFilter=Wf[d.minFilter]||Gn,f.wrapS=Xf[d.wrapS]||Ni,f.wrapT=Xf[d.wrapT]||Ni,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Ht&&f.minFilter!==Zt,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(u){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new At(_);m.needsUpdate=!0,d(m)}),t.load(as.resolveURL(u,s.path),g,void 0,h)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),En(u,o),u.userData.mimeType=o.mimeType||OS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bd,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new yl,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Et}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=r[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,_t)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=qt);const f=s.alphaMode||$a.OPAQUE;if(f===$a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===$a.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==wt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==wt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==wt){const u=s.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&o!==wt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,_t)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),En(u,s),t.associations.set(u,{materials:e}),s.extensions&&bi(r,u,s),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return qf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],f=NS(l),u=r[f];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=qf(new Pt,l,t),r[f]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const f=o[c].material===void 0?IS(this.cache):this.getDependency("material",o[c].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),f=c[c.length-1],u=[];for(let h=0,g=f.length;h<g;h++){const _=f[h],m=o[h];let p;const x=l[h];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new _m(_,x):new Ye(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?p.geometry=Vf(p.geometry,cd):m.mode===nn.TRIANGLE_FAN&&(p.geometry=Vf(p.geometry,zc));else if(m.mode===nn.LINES)p=new Em(_,x);else if(m.mode===nn.LINE_STRIP)p=new Go(_,x);else if(m.mode===nn.LINE_LOOP)p=new Tm(_,x);else if(m.mode===nn.POINTS)p=new bm(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&US(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),En(p,s),m.extensions&&bi(r,p,m),t.assignFinalMaterial(p),u.push(p)}for(let h=0,g=u.length;h<g;h++)t.associations.set(u[h],{meshes:e,primitives:h});if(u.length===1)return s.extensions&&bi(r,u[0],s),u[0];const d=new ln;s.extensions&&bi(r,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=u.length;h<g;h++)d.add(u[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(yt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new bl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,f=o.length;l<f;l++){const u=o[l];if(u){a.push(u);const d=new Ge;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xl(a,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],f=[];for(let u=0,d=r.channels.length;u<d;u++){const h=r.channels[u],g=r.samplers[h.sampler],_=h.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),f.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(f)]).then(function(u){const d=u[0],h=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const S=d[y],T=h[y],R=g[y],A=_[y],M=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,T,R,A,M);if(E)for(let I=0;I<E.length;I++)p.push(E[I])}const x=new Um(s,void 0,p);return En(x,r),x})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,f=a.length;l<f;l++)o.push(n.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const f=l[0],u=l[1],d=l[2];d!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(d,FS)});for(let h=0,g=u.length;h<g;h++)f.add(u[h]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let f;if(s.isBone===!0?f=new Sd:l.length>1?f=new ln:l.length===1?f=l[0]:f=new ht,f!==l[0])for(let u=0,d=l.length;u<d;u++)f.add(l[u]);if(s.name&&(f.userData.name=s.name,f.name=o),En(f,s),s.extensions&&bi(n,f,s),s.matrix!==void 0){const u=new Ge;u.fromArray(s.matrix),f.applyMatrix4(u)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!r.associations.has(f))r.associations.set(f,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(f);r.associations.set(f,{...u})}return r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ln;n.name&&(s.name=r.createUniqueName(n.name)),En(s,n),n.extensions&&bi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let f=0,u=c.length;f<u;f++)s.add(c[f]);const l=f=>{const u=new Map;for(const[d,h]of r.associations)(d instanceof xn||d instanceof At)&&u.set(d,h);return f.traverse(d=>{const h=r.associations.get(d);h!=null&&u.set(d,h)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];ri[s.path]===ri.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ri[s.path]){case ri.weights:l=Tr;break;case ri.rotation:l=br;break;case ri.translation:case ri.scale:l=wr;break;default:n.itemSize===1?l=Tr:l=wr;break}const f=r.interpolation!==void 0?LS[r.interpolation]:xs,u=this._getArrayFromAccessor(n);for(let d=0,h=c.length;d<h;d++){const g=new l(c[d]+"."+ri[s.path],t.array,u,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=tl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof br?PS:Th;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kS(i,e,t){const n=e.attributes,r=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){const f=tl(mr[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,c=new F;for(let l=0,f=s.length;l<f;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=tl(mr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function qf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=el[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),En(i,e),kS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?DS(i,e.targets,t):i})}function nl(i,e=3,t="#0e394b"){const n=document.createElement("canvas");n.width=1024,n.height=160;const r=n.getContext("2d");r.fillStyle=t,r.fillRect(0,0,1024,160),r.fillStyle="#ffffff",r.font="bold 58px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText(i,512,80,970);const s=new Sr(n);return s.colorSpace=_t,new Ye(new $n(e,e*160/1024),new wt({map:s,side:qt}))}async function zS(i,e,t){const n=new Ye(new mi(1.1,1.2,.16,32),new Et({color:2311772}));n.position.set(bn.x,.08,bn.z),i.add(n);for(const a of[-1.5,0,1.5]){const c=new Ye(new mi(.55,.62,.75,20),new Et({color:15791346}));c.position.set(Tn.x+a,.375,Tn.z),c.receiveShadow=!0,i.add(c)}const r=nl("TOCA LAS FIGURAS PARA AGARRAR",3.8);r.position.set(Tn.x,.12,Tn.z+1.4),r.rotation.x=-Math.PI/2,i.add(r);const s=nl("VR: gatillo = tomar/soltar · joystick derecho = tamaño",3.8);s.position.set(Tn.x,2.8,Tn.z-1),i.add(s);const o=rS(i);i.userData.campusWalls=o.walls,t("Campus Dermagatos listo. Cargando stands…");try{const a=await new sS().loadAsync("./models/stand.glb");a.scene.traverse(u=>{if(u.isMesh){u.castShadow=!1,u.receiveShadow=!0;for(const d of Array.isArray(u.material)?u.material:[u.material])d.map&&(d.map.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()))}});const c=new ln;c.add(a.scene),a.scene.scale.setScalar(.03),c.updateMatrixWorld(!0);const l=new In().setFromObject(c),f=l.getCenter(new F);a.scene.position.set(-f.x,-l.min.y,-f.z);for(const{x:u,z:d,name:h,color:g}of ec){const _=c.clone(!0);_.rotation.y=Math.PI,_.position.set(u,.11,d),i.add(_)}document.querySelector("#load-state").textContent="Dermagatos · campus original · 8 salas · 2 stands",t("Stands listos. Explora, responde y mueve los objetos.")}catch(a){document.querySelector("#load-state").textContent="No se pudo cargar el modelo",t("El modelo no pudo cargar. Recarga para volver a intentarlo."),console.error("Carga de stand:",a)}}function HS(i,e){const n=new wt({side:qt,transparent:!0,depthWrite:!1}),r=new Td(new $n(.07,.12),n,84);r.frustumCulled=!1,r.visible=!1,i.add(r);const s=new ht,o=Array.from({length:84},()=>({p:new F,v:new F,r:new F,spin:new F})),a=new Ye(new El(.85,.89,48),new wt({color:5963694,transparent:!0,depthWrite:!1,side:qt}));a.position.copy(e).add(new F(0,0,.04)),a.visible=!1,i.add(a);let c=3,l=!0;function f(d){c=0,l=d,r.count=d?84:28,r.visible=!0,a.visible=!0,a.material.color.set(d?5963694:16740990);const h=d?[5566394,16766828,16748500,7264767,15988991]:[16739453,16759148];o.forEach((g,_)=>{const m=_%2?1:-1;g.p.copy(e).add(new F(m*1.2,-.85,.2)),g.v.set(m*(.2+Math.random()*.8),d?2.4+Math.random()*2:.7+Math.random()*1.4,.2+Math.random()*.7),g.r.set(Math.random()*6,Math.random()*6,Math.random()*6),g.spin.set(Math.random()*7,Math.random()*9,Math.random()*6),r.setColorAt(_,new Oe(h[_%h.length]))}),r.instanceColor.needsUpdate=!0,u(0)}function u(d){if(c>2.5)return;c+=d;const h=l?2.2:1.3;if(c>=h){r.visible=!1,a.visible=!1;return}for(let g=0;g<r.count;g++){const _=o[g];_.v.y-=2.8*d,_.p.addScaledVector(_.v,d),_.r.addScaledVector(_.spin,d),s.position.copy(_.p),s.rotation.set(_.r.x,_.r.y,_.r.z),s.scale.setScalar(Math.min(1,(h-c)*2.5)),s.updateMatrix(),r.setMatrixAt(g,s.matrix)}r.instanceMatrix.needsUpdate=!0,n.opacity=Math.min(1,(h-c)*1.6),a.scale.setScalar(.5+c*1.8),a.material.opacity=Math.max(0,.7-c*1.6)}return{burst:f,update:u}}const Ja=[{prompt:"¿Cuál producto de Proconvet cuida la higiene oral?",options:["PeroxyPROC","NaturPROC oral","HepatoPET"],correct:1},{prompt:"¿Cuál es un champú antiséptico y antiseborreico?",options:["PeroxyPROC","NaturPROC oral","GastroPET"],correct:0},{prompt:"¿Cuál es un champú dermatológico antifúngico?",options:["MiclorPROC","HepatoPET","NaturPROC oral"],correct:0}],wi=new F(Ao.x,1.95,Ao.z),_o=[430,555,680],Qa=96;function VS({scene:i,camera:e,renderer:t,status:n,onWrong:r=()=>{}}){const s=document.createElement("canvas");s.width=900,s.height=960;const o=s.getContext("2d"),a=new Sr(s);a.colorSpace=_t,a.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy());const c=new Ye(new $n(2.7,2.88),new wt({map:a,transparent:!0}));c.position.copy(wi),c.name="Preguntas Proconvet",i.add(c);const l=new Ye(new cn(2.82,3,.12),new Et({color:1587271,roughness:.5}));l.position.copy(wi).add(new F(0,0,-.08)),i.add(l);const f=new Ye(new mi(.12,.16,.55,12),new Et({color:1587271}));f.position.set(wi.x,.275,wi.z),i.add(f);const u=HS(i,wi),d=new Is;let h=0,g=0,_=null,m=-1,p=-1,x=0,y=-1/0,v=performance.now(),S;const T=document.querySelector("#quiz-progress");function R(L,N){const D=[];let X="";for(const Q of L.split(" ")){const k=X?`${X} ${Q}`:Q;X&&o.measureText(k).width>N?(D.push(X),X=Q):X=k}return X&&D.push(X),D}function A(){o.fillStyle="#092932",o.fillRect(0,0,900,960),o.strokeStyle=_==="correct"?"#66ffc0":_==="wrong"?"#ff7a90":"#72dfe7",o.lineWidth=12,o.strokeRect(10,10,880,940),o.fillStyle="#39bdcb",o.fillRect(22,22,856,115),o.fillStyle="#062e36",o.font="bold 50px Arial",o.fillText("PROCONVET",55,95),o.fillStyle="#baf4e6",o.font="28px Arial",o.fillText(`${Math.min(h+1,3)} / 3    ·    ${g} puntos de prueba`,55,185),o.fillStyle="#fff",o.font="bold 48px Arial",R(h<3?Ja[h].prompt:"¡Completaste el reto!",780).forEach((N,D)=>o.fillText(N,55,260+D*58)),h<3?Ja[h].options.forEach((N,D)=>{o.fillStyle=D===m?_==="correct"?"#236d51":"#782f45":D===p?"#27758b":"#173f4d",o.fillRect(50,_o[D],800,Qa),o.strokeStyle=D===p?"#fff":"#70c5d0",o.lineWidth=3,o.strokeRect(50,_o[D],800,Qa),o.fillStyle="#fff",o.font="bold 43px Arial",o.fillText(`${"ABC"[D]}. ${N}`,78,_o[D]+62,750)}):(o.fillStyle="#a4ffce",o.font="bold 64px Arial",o.fillText(`${g} puntos`,55,540)),o.fillStyle=_==="wrong"?"#ffabbc":"#aaf4cc",o.font="bold 31px Arial";const L=_==="wrong"?"Inténtalo otra vez":_==="correct"?"¡Correcto! +10 puntos":h<3?"Toca una opción · VR: gatillo":"Recarga para repetir la prueba";o.fillText(L,55,855,790),o.fillStyle="#b1c8ce",o.font="24px Arial",o.fillText("Explora · descubre · responde",55,913),a.needsUpdate=!0,T.textContent=`${Math.min(h+(_==="correct"?1:0),3)}/3 · ${g} pts`}function M(L){try{S||=new(window.AudioContext||window.webkitAudioContext),S.state==="suspended"&&S.resume(),(L?[523,659,784,1046]:[330,247]).forEach((N,D)=>{const X=S.createOscillator(),Q=S.createGain(),k=S.currentTime+D*.09;X.type=L?"sine":"triangle",X.frequency.setValueAtTime(N,k),Q.gain.setValueAtTime(1e-4,k),Q.gain.exponentialRampToValueAtTime(.08,k+.015),Q.gain.exponentialRampToValueAtTime(1e-4,k+.22),X.connect(Q).connect(S.destination),X.start(k),X.stop(k+.23)})}catch{}}function E(){return(t.xr.isPresenting?t.xr.getCamera():e).getWorldPosition(new F).distanceTo(wi)<6.5}function I(L){return c.updateWorldMatrix(!0,!1),d.ray.copy(L),d.far=18,d.intersectObject(c)[0]||null}function B(L){if(!L)return-1;const N=L.uv.x*900,D=(1-L.uv.y)*960;return N>=50&&N<=850?_o.findIndex(X=>D>=X&&D<=X+Qa):-1}function W(L){const N=I(L);if(!N)return!1;if(!E())return n.textContent="Acércate al panel para responder.",!0;const D=B(N),X=performance.now();if(h>=3||x||D<0||X-y<550)return!0;const Q=D===Ja[h].correct;return m=D,_=Q?"correct":"wrong",y=X,Q&&(g+=10,x=X+1900),n.textContent=Q?"¡Correcto! +10 puntos de prueba.":"Incorrecto. Puedes volver a intentarlo.",M(Q),u.burst(Q),A(),Q||r(),!0}function C(L){const N=E()&&h<3&&!x?B(I(L)):-1;N!==p&&(p=N,A())}function U(L){const N=performance.now();x&&N>=x&&(h++,x=0,_=null,m=-1,v=N,A());const D=(N-y)/1e3,X=Math.min(1,(N-v)/450);c.material.opacity=.4+.6*X,c.scale.setScalar(1-(1-X)*.06+(_==="correct"&&D<.6?Math.sin(D*Math.PI/.6)*.022:0)),c.position.x=wi.x+(_==="wrong"&&D<.4?Math.sin(D*55)*(.4-D)*.1:0),u.update(L)}return A(),{hit:I,answerFromRay:W,hoverRay:C,update:U}}function GS(i,e){let t=Bo(localStorage.getItem("oseoverse-character"));const n=[],r=[],s=new Is;for(const[c,l,f]of[["cat",-1.05,"Gato veterinario"],["dog",1.05,"Perro veterinario"]]){const u=Qc(f,void 0,c);u.position.set(bn.x+l,.1,bn.z),u.rotation.y=Math.PI,i.add(u);const d=nl(`ELEGIR ${c==="cat"?"GATO":"PERRO"}`,1.65);d.position.set(bn.x+l,.34,bn.z+.62),d.userData.kind=c,i.add(d),r.push(d);const h=new Ye(new Er(.65,.035,8,40),new wt({color:6614994}));h.rotation.x=-Math.PI/2,h.position.set(bn.x+l,.12,bn.z),i.add(h),u.traverse(g=>{g.isMesh&&(g.userData.kind=c,r.push(g))}),n.push({avatar:u,ring:h,kind:c})}function o(){document.querySelectorAll("[data-character]").forEach(c=>c.setAttribute("aria-pressed",String(c.dataset.character===t))),document.querySelector("#selected-character").textContent=t==="cat"?"Gato veterinario":"Perro veterinario",n.forEach(c=>{c.ring.visible=c.kind===t})}function a(c){t=Bo(c),localStorage.setItem("oseoverse-character",t),o(),e(`Tu personaje: ${t==="cat"?"gato":"perro"} veterinario con bata blanca.`),document.querySelector("#character-picker").hidden=!0}return document.querySelectorAll("[data-character]").forEach(c=>c.addEventListener("click",()=>a(c.dataset.character))),document.querySelector("#close-characters").addEventListener("click",()=>{document.querySelector("#character-picker").hidden=!0}),o(),{selected:()=>t,hit:c=>(s.ray.copy(c),s.far=6,r.forEach(l=>l.updateWorldMatrix(!0,!1)),s.intersectObjects(r,!1)[0]),chooseHit:c=>a(c.object.userData.kind),update:c=>n.forEach(l=>l.avatar.userData.animate(c))}}const WS=["cube","ball","ring"];function XS(i){return i&&WS.includes(i.id)&&Array.isArray(i.p)&&i.p.length===3&&i.p.every(Number.isFinite)&&Math.abs(i.p[0])<=An.x&&i.p[1]>=0&&i.p[1]<=6&&Math.abs(i.p[2])<=An.z&&Number.isFinite(i.r)&&Math.abs(i.r)<1e3&&Number.isFinite(i.s)&&i.s>=.4&&i.s<=2.5&&(i.owner===null||typeof i.owner=="string"&&i.owner.length<=100)&&Number.isSafeInteger(i.clock)&&i.clock>=0&&typeof i.actor=="string"&&i.actor.length<=100}function qS(i,e){return i.clock>e.clock||i.clock===e.clock&&i.actor>e.actor}function YS(i,e,t,n=!1){return!XS(e)||!n&&e.actor!==t?i:qS(e,i)?structuredClone(e):i}function jS({radius:i,fov:e,width:t,height:n,top:r,bottom:s}){const o=Math.max(0,r),a=Math.max(o+40,s),c=Math.tan(e*Math.PI/360),l=Math.min(c*t/n*.78,c*(a-o)/n*.78);return{distance:Math.max(1.9,i/Math.sin(Math.atan(l))+.18),ndcY:1-(o+a)/n}}const KS=2.35;function $S(i){const e=Math.max(0,Math.min(1,i/KS)),t=Math.max(0,Math.min(1,(e-.12)/.76));return{height:8*(1-t*t),motion:Math.sin(Math.PI*t),done:e>=1}}function ZS({scene:i,camera:e,renderer:t,status:n,actor:r}){const s=document.querySelector("#object-tools"),o=document.querySelector("#held-name"),a=document.querySelector("#held-scale"),c=[new cn(.62,.62,.62),new Wn(.36,24,16),new Er(.3,.1,10,28)],l=["cube","ball","ring"].map((L,N)=>{const D=new Ye(c[N],new Et({color:[4443104,16423852,16764770][N],metalness:.16,roughness:.28,emissive:0}));D.castShadow=!0,D.name=["Cubo","Esfera","Aro"][N];const X={id:L,p:[Tn.x+(N-1)*1.5,1.18,Tn.z],r:0,s:1,owner:null,clock:0,actor:""};return D.position.fromArray(X.p),i.add(D),{id:L,mesh:D,initial:X,state:structuredClone(X),seenAt:0}});let f=null,u=null,d=null,h=0,g=0,_=0;const m=new Is,p=new F,x=new F;function y(){s.hidden=!f||t.xr.isPresenting,document.body.classList.toggle("holding",!!f),f&&(o.textContent=f.mesh.name,a.textContent=`${f.state.s.toFixed(2)}×`)}function v(L){L.state.clock=++h,L.state.actor=r,L.seenAt=performance.now(),d&&d({kind:"update",states:[structuredClone(L.state)]})}function S(L,N=!1,D=.1){const X=N?1:Math.min(1,D*15);L.mesh.position.lerp(p.fromArray(L.state.p),X),L.mesh.scale.lerp(new F().setScalar(L.state.s),X),L.mesh.rotation.y+=(yt.euclideanModulo(L.state.r-L.mesh.rotation.y+Math.PI,Math.PI*2)-Math.PI)*X,L.mesh.material.emissive.set(L===f?1193010:L.state.owner?3347743:0)}function T(L){return m.ray.copy(L),m.far=6,l.forEach(N=>N.mesh.updateWorldMatrix(!0,!1)),m.intersectObjects(l.map(N=>N.mesh))[0]||null}function R(L=!1){if(!f)return;const N=f;L&&(N.state.p=[...N.initial.p],N.state.s=1,N.state.r=0),N.state.owner=null,v(N),f=null,u=null,S(N,!0),y(),n.textContent=L?"Objeto devuelto a su pedestal.":"Objeto colocado. Los demás ven su posición y tamaño."}function A(L,N=null){if(f)return R(),!0;if(!L)return!1;const D=l.find(X=>X.mesh===L.object);return D?D.state.owner&&D.state.owner!==r&&performance.now()-D.seenAt<4e3?(n.textContent="Otra persona tiene ese objeto. Espera a que lo suelte.",!0):(f=D,u=N,_=D.state.r,D.state.owner=r,v(D),y(),n.textContent=`Sostienes ${D.mesh.name}. Mueve la vista; usa +/− para el tamaño y Soltar para colocarlo.`,!0):!1}function M(L){f&&(f.state.s=yt.clamp(f.state.s*L,.4,2.5),S(f,!0),y())}function E(L=Math.PI/6){f&&(_+=L,f.state.r+=L,S(f,!0))}document.querySelector("#scale-up").addEventListener("click",()=>M(1.15)),document.querySelector("#scale-down").addEventListener("click",()=>M(1/1.15)),document.querySelector("#rotate-object").addEventListener("click",()=>E()),document.querySelector("#release-object").addEventListener("click",()=>R()),document.querySelector("#reset-object").addEventListener("click",()=>R(!0));function I(L,N){if(!(!L||!["update","snapshot"].includes(L.kind)||!Array.isArray(L.states)||L.states.length>3))for(const D of L.states){const X=l.find(k=>k.id===D?.id);if(!X)continue;const Q=YS(X.state,D,N,L.kind==="snapshot");Q!==X.state&&(X.state=Q,h=Math.max(h,Q.clock),X.seenAt=performance.now(),f===X&&X.state.owner!==r&&(f=null,u=null,y(),n.textContent="Otra persona tomó el objeto primero."))}}function B(){return{kind:"snapshot",states:l.map(L=>structuredClone(L.state))}}function W(L,N=!1){f=null,u=null,d=L,h=0,l.forEach(D=>{N||(D.state=structuredClone(D.initial),D.seenAt=0),h=Math.max(h,D.state.clock),S(D,!0)}),y()}function C(L){for(const N of l)N.state.owner===L&&(N.state.owner=null,v(N))}function U(L){if(f){const N=u||(t.xr.isPresenting?t.xr.getCamera():e);N.getWorldPosition(p),x.set(0,0,-1).applyQuaternion(N.getWorldQuaternion(new Ln));const D=.54*f.state.s;let X=.65+D*1.15;if(!t.xr.isPresenting){const Q=document.querySelector("#topbar").getBoundingClientRect().bottom+18,k=s.getBoundingClientRect().top-22,H=jS({radius:D,fov:e.fov,width:innerWidth,height:innerHeight,top:Q,bottom:k});e.updateWorldMatrix(!0,!1),x.set(0,H.ndcY,.5).unproject(e).sub(p).normalize(),X=H.distance}p.addScaledVector(x,X),p.x=yt.clamp(p.x,-37,An.x),p.z=yt.clamp(p.z,-39,An.z),p.y=yt.clamp(p.y,D+.1,5),f.state.p=p.toArray(),f.state.r=Math.atan2(-x.x,-x.z)+_,f.state.r=yt.euclideanModulo(f.state.r,Math.PI*2),performance.now()-g>100&&(v(f),g=performance.now())}for(const N of l)S(N,N===f,L);y()}return{hit:T,grab:A,release:R,scaleBy:M,rotate:E,receive:I,snapshot:B,setNetwork:W,peerLeft:C,update:U,isHolding:()=>!!f,heldBy:()=>u}}function JS(){const i=document.querySelector("#ambient-toggle");let e=!0,t,n;try{e=localStorage.getItem("oseo-ambience")!=="off"}catch{}function r(){i.textContent=`Sonido ambiente: ${e?"activado":"apagado"}`,i.setAttribute("aria-pressed",String(e))}function s(){n&&n.gain.setTargetAtTime(e&&!document.hidden?.045:0,t.currentTime,.4)}function o(){if(e)try{t||(t=new(window.AudioContext||window.webkitAudioContext),n=t.createGain(),n.gain.value=0,n.connect(t.destination),[130.81,196,261.63,293.66,392].forEach((a,c)=>{const l=t.createOscillator(),f=t.createGain(),u=t.createOscillator(),d=t.createGain();l.frequency.value=a,l.type="sine",f.gain.value=.12,u.frequency.value=.035+c*.011,d.gain.value=.07,u.connect(d).connect(f.gain),l.connect(f).connect(n),l.start(),u.start()})),t.state==="suspended"&&t.resume().catch(()=>{}),s()}catch{i.textContent="Sonido no disponible"}}return i.addEventListener("click",()=>{e=!e;try{localStorage.setItem("oseo-ambience",e?"on":"off")}catch{}r(),e&&o(),s()}),window.addEventListener("pointerdown",o),window.addEventListener("keydown",o),document.addEventListener("visibilitychange",s),r(),{unlock:o}}function QS({scene:i,player:e,camera:t,renderer:n,onStart:r}){const s=document.querySelector("#fall-toggle"),o=document.querySelector("#fall-overlay");let a=!0,c=null;try{a=localStorage.getItem("oseo-fall")!=="off"}catch{}const l=new ln;l.visible=!1,i.add(l);const f=new wt({color:10153983,transparent:!0,opacity:.5,depthWrite:!1}),u=new mi(.009,.009,1,4);for(let m=0;m<28;m++){const p=new Ye(u,f),x=m*Math.PI*2/28;p.position.set(Math.cos(x)*2.2,m%7-3,Math.sin(x)*2.2),l.add(p)}function d(){s.textContent=`Caída al fallar: ${a?"activada":"apagada"}`,s.setAttribute("aria-pressed",String(a))}function h(){if(c){e.position.copy(c.position),n.xr.isPresenting||(t.rotation.x=c.pitch),t.fov=c.fov,t.updateProjectionMatrix();for(const[m,p]of c.roofs)m.visible=p;c=null,l.visible=!1,o.hidden=!0}}s.addEventListener("click",()=>{a=!a,a||h(),d();try{localStorage.setItem("oseo-fall",a?"on":"off")}catch{}});function g(){if(!a||c)return;r();const m=[];i.traverse(p=>{p.userData.fallRoof&&(m.push([p,p.visible]),p.visible=!1)}),c={age:0,position:e.position.clone(),pitch:t.rotation.x,fov:t.fov,roofs:m},l.visible=!0,_(0)}function _(m){if(!c)return;c.age+=m;const p=$S(c.age);if(p.done){h();return}e.position.copy(c.position),e.position.y+=p.height;const x=n.xr.isPresenting;if(o.hidden=x,o.style.opacity=String(.2+p.motion*.65),!x){const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;t.rotation.x=yt.clamp(c.pitch-(v?0:p.motion*.6),-1.3,1.3),t.fov=c.fov+(v?0:p.motion*14),t.updateProjectionMatrix()}const y=(x?n.xr.getCamera():t).getWorldPosition(new F);l.position.copy(y),f.opacity=.35*p.motion,l.children.forEach((v,S)=>{v.position.y=(c.age*8+S*.37)%6-3,v.scale.y=.5+p.motion*1.5})}return n.xr.addEventListener("sessionstart",h),n.xr.addEventListener("sessionend",h),document.addEventListener("visibilitychange",()=>{document.hidden&&h()}),d(),{start:g,update:_,cancel:h,active:()=>!!c}}const gr=document.querySelector("#status"),$o=document.querySelector("#menu");let Yf;new MutationObserver(()=>{gr.classList.add("visible"),clearTimeout(Yf),Yf=setTimeout(()=>gr.classList.remove("visible"),4200)}).observe(gr,{childList:!0});const Vi=i=>{gr.textContent=i},qe=new Vv({antialias:!0,powerPreference:"high-performance"});qe.setPixelRatio(Math.min(devicePixelRatio||1,1.5));qe.setSize(innerWidth,innerHeight);qe.outputColorSpace=_t;qe.shadowMap.enabled=!0;qe.shadowMap.type=Zf;qe.xr.enabled=!0;document.querySelector("#app").appendChild(qe.domElement);const ko=Ar.createButton(qe);document.body.appendChild(ko);const bh=()=>ko.classList.toggle("unsupported",ko.textContent.includes("NOT SUPPORTED"));new MutationObserver(bh).observe(ko,{childList:!0,subtree:!0,characterData:!0});bh();const Gt=new pm;Gt.background=new Oe(10994900);Gt.fog=new _l(10994900,90,180);const St=new ln;St.position.set(Math.random()*2-1,0,10);Gt.add(St);const Tt=new Bt(70,innerWidth/innerHeight,.05,220);Tt.position.y=1.65;Tt.rotation.order="YXZ";St.add(Tt);const wh=tS(Gt,qe),Ah=[...Vt].reduce((i,e)=>i*31+e.charCodeAt(0)>>>0,0)%12,il=(Ah%4-1.5)*1.1,rl=Math.floor(Ah/4)*1.2;St.position.set(il,0,4.8+rl*.4);Gt.add(new Vm(15792895,9142128,2.3));const Br=new Ld(16774631,2.1);Br.position.set(-8,15,9);Br.castShadow=!0;Br.shadow.mapSize.set(1024,1024);Object.assign(Br.shadow.camera,{left:-17,right:17,top:17,bottom:-17});Br.shadow.bias=-5e-4;Gt.add(Br);zS(Gt,qe,Vi);const ut=ZS({scene:Gt,camera:Tt,renderer:qe,status:gr,actor:Vt}),Ol=JS(),pi=QS({scene:Gt,player:St,camera:Tt,renderer:qe,onStart:()=>{ut.release(),Vi("¡Caída! Regresas al mismo punto para intentarlo otra vez.")}}),fs=VS({scene:Gt,camera:Tt,renderer:qe,status:gr,onWrong:pi.start}),zo=GS(Gt,Vi);function Ns(i,e,t=0){pi.cancel(),ut.release(),St.position.set(i+il*.65,0,e+rl*.4),St.rotation.y=t+Math.atan2(il*.65,4.6+rl*.4),Tt.rotation.x=0,$o.open=!1}document.querySelector("#go-stand").addEventListener("click",()=>{Ns(Ao.x,Ao.z+4.6),Vi("Toca directamente una respuesta del panel.")});document.querySelector("#go-objects").addEventListener("click",()=>{Ns(Tn.x,Tn.z+4.6),Vi("Toca una figura para tomarla. Mueve la vista y usa +/− o la rueda.")});document.querySelector("#go-lobby").addEventListener("click",()=>Ns(0,5.5));document.querySelector("#go-second").addEventListener("click",()=>Ns(ec[1].x,ec[1].z+7.6));document.querySelector("#go-characters").addEventListener("click",()=>{Ns(bn.x,bn.z+4.6),document.querySelector("#character-picker").hidden=!1});document.querySelector("#lock-pointer").addEventListener("click",()=>{$o.open=!1,qe.domElement.requestPointerLock()});const Fl=[qe.xr.getController(0),qe.xr.getController(1)],Rh=[15964831,9886184,12954864,16764033,10674108][Math.floor(Math.random()*5)],Bl=eS({scene:Gt,renderer:qe,camera:Tt,controllers:Fl,objects:ut,menu:$o,say:Vi,welcome:wh,myColor:Rh,getCharacter:zo.selected,getElevation:()=>St.position.y}),eE=Bl.peers,wo=new Ne(0,0),Ho=new Is,jf=new Is;function Zo(i,e){const t=qe.domElement.getBoundingClientRect();return document.pointerLockElement===qe.domElement||i===void 0?wo.set(0,0):wo.set((i-t.left)/t.width*2-1,-(e-t.top)/t.height*2+1),Tt.updateWorldMatrix(!0,!1),Ho.setFromCamera(wo,Tt),Ho.ray}function Jo(i,e=null){if(Ol.unlock(),pi.active())return;if(ut.isHolding()){ut.release();return}const t=ut.hit(i),n=fs.hit(i),r=zo.hit(i);if(r&&(!t||r.distance<t.distance)&&(!n||r.distance<n.distance)){zo.chooseHit(r);return}t&&(!n||t.distance<n.distance)?ut.grab(t,e):n?fs.answerFromRay(i):Vi("Acércate y apunta al panel o a una de las tres figuras.")}document.querySelector("#interact").addEventListener("click",()=>Jo(Zo()));const ci=new Set;window.addEventListener("keydown",i=>{i.target.matches("input, textarea")||(ci.add(i.code),!i.repeat&&(i.code==="KeyE"&&Jo(Zo()),(i.code==="Equal"||i.code==="NumpadAdd")&&ut.scaleBy(1.15),(i.code==="Minus"||i.code==="NumpadSubtract")&&ut.scaleBy(1/1.15),i.code==="KeyR"&&ut.rotate()))});window.addEventListener("keyup",i=>ci.delete(i.code));window.addEventListener("blur",()=>{ci.clear(),Lh()});qe.domElement.addEventListener("wheel",i=>{ut.isHolding()&&(i.preventDefault(),ut.scaleBy(Math.exp(-i.deltaY*.001)))},{passive:!1});const Ui=new Map;let ds=0;qe.domElement.addEventListener("pointerdown",i=>{Ui.set(i.pointerId,{x:i.clientX,y:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1}),qe.domElement.setPointerCapture(i.pointerId)});qe.domElement.addEventListener("pointermove",i=>{if(qe.xr.isPresenting||pi.active())return;const e=Ui.get(i.pointerId);if(document.pointerLockElement===qe.domElement){St.rotation.y-=i.movementX*.0025,Tt.rotation.x=yt.clamp(Tt.rotation.x-i.movementY*.0025,-1.3,1.3);return}if(!e){Zo(i.clientX,i.clientY);return}const t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,e.moved||=Math.hypot(e.x-e.startX,e.y-e.startY)>8,Ui.size===2&&ut.isHolding()){const[r,s]=[...Ui.values()];r.moved=s.moved=!0;const o=Math.hypot(r.x-s.x,r.y-s.y);ds>0&&ut.scaleBy(o/ds),ds=o}else e.moved&&(St.rotation.y-=t*.004,Tt.rotation.x=yt.clamp(Tt.rotation.x-n*.004,-1.3,1.3))});qe.domElement.addEventListener("pointerup",i=>{const e=Ui.get(i.pointerId);Ui.delete(i.pointerId),ds=0,e&&!e.moved&&!qe.xr.isPresenting&&Jo(Zo(i.clientX,i.clientY))});qe.domElement.addEventListener("pointercancel",i=>{Ui.delete(i.pointerId),ds=0});const li={x:0,y:0},Lr=document.querySelector("#move-pad"),Ch=document.querySelector("#move-knob");function Ph(i){const e=Lr.getBoundingClientRect(),t=e.width*.34,n=i.clientX-e.left-e.width/2,r=i.clientY-e.top-e.height/2,s=Math.max(1,Math.hypot(n,r)/t);li.x=n/t/s,li.y=r/t/s,Ch.style.transform=`translate(${li.x*t}px, ${li.y*t}px)`}function Lh(){li.x=li.y=0,Ch.style.transform=""}Lr.addEventListener("pointerdown",i=>{Lr.setPointerCapture(i.pointerId),Ph(i)});Lr.addEventListener("pointermove",i=>{Lr.hasPointerCapture(i.pointerId)&&Ph(i)});["pointerup","pointercancel","lostpointercapture"].forEach(i=>Lr.addEventListener(i,Lh));function sl(i){return i.updateWorldMatrix(!0,!1),jf.set(i.getWorldPosition(new F),new F(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Ln))),jf.ray}for(const i of Fl){St.add(i);const e=new Ye(new Wn(.07,12,8),new Et({color:Rh}));i.add(e);const t=new Go(new Pt().setFromPoints([new F,new F(0,0,-6)]),new yl({color:9105112,transparent:!0,opacity:.6}));i.add(t),i.addEventListener("connected",n=>{i.userData.handedness=n.data.handedness,i.userData.connected=!0}),i.addEventListener("disconnected",()=>{ut.heldBy()===i&&ut.release(),i.userData.connected=!1}),i.addEventListener("selectstart",()=>Jo(sl(i),i)),i.addEventListener("squeezestart",()=>{Ol.unlock(),!pi.active()&&!ut.isHolding()&&ut.grab(ut.hit(sl(i)),i)}),i.addEventListener("squeezeend",()=>{ut.heldBy()===i&&ut.release()})}qe.xr.addEventListener("sessionstart",()=>{Ol.unlock(),document.body.classList.add("in-vr"),$o.open=!1,ci.clear(),Bl.sessionStarted()});qe.xr.addEventListener("sessionend",()=>{ut.release(),document.body.classList.remove("in-vr"),Tt.rotation.x=0});const tE=new $m;let ts=0,Kf=0;qe.setAnimationLoop(()=>{const i=Math.min(tE.getDelta(),.05);ts+=i;let e=Number(ci.has("KeyD"))-Number(ci.has("KeyA"))+li.x,t=Number(ci.has("KeyS"))-Number(ci.has("KeyW"))+li.y;if(qe.xr.isPresenting)for(const c of qe.xr.getSession()?.inputSources||[]){const l=c.gamepad?.axes;if(!l)continue;const f=l.length>=4?l[2]:l[0],u=l.length>=4?l[3]:l[1];c.handedness==="right"?ut.isHolding()?(Math.abs(u)>.2&&ut.scaleBy(Math.exp(-u*i)),Math.abs(f)>.2&&ut.rotate(f*i*1.5)):!pi.active()&&Math.abs(f)>.6&&ts-Kf>.3&&(St.rotation.y-=Math.sign(f)*Math.PI/6,Kf=ts):(e+=Math.abs(f)>.18?f:0,t+=Math.abs(u)>.18?u:0)}const n=Math.max(1,Math.hypot(e,t));e/=n,t/=n;const r=(qe.xr.isPresenting?qe.xr.getCamera():Tt).getWorldDirection(new F);r.y=0,r.normalize();const s={x:St.position.x,z:St.position.z},o=pi.active()?0:4.2;St.position.addScaledVector(new F(-r.z,0,r.x),e*o*i).addScaledVector(r,-t*o*i);const a=nS(s,St.position,Gt.userData.campusWalls||[]);St.position.x=a.x,St.position.z=a.z,St.position.x=yt.clamp(St.position.x,-37,An.x),St.position.z=yt.clamp(St.position.z,-39,An.z);for(const c of eE.values()){const l=c.group.position.distanceTo(c.destination);c.group.position.lerp(c.destination,Math.min(1,i*10));const f=(qe.xr.isPresenting?qe.xr.getCamera():Tt).getWorldPosition(new F);c.group.userData.proximity(Math.hypot(c.group.position.x-f.x,c.group.position.z-f.z));const u=yt.euclideanModulo(c.yaw-c.group.rotation.y+Math.PI,Math.PI*2)-Math.PI;c.group.rotation.y+=u*Math.min(1,i*12),c.group.updateWorldMatrix(!0,!1),c.group.userData.animate(ts,Math.min(l*8,1),c.hands,c.headY,c.pitch)}if(pi.update(i),Gt.userData.updateCampus?.(i),zo.update(ts),Bl.update(),!qe.xr.isPresenting)Tt.updateWorldMatrix(!0,!1),Ho.setFromCamera(document.pointerLockElement?new Ne:wo,Tt),fs.hoverRay(Ho.ray);else{const c=Fl.find(l=>l.userData.handedness==="right"&&l.userData.connected);c&&fs.hoverRay(sl(c))}fs.update(i),ut.update(i),wh.update(),document.querySelector("#interact").textContent=ut.isHolding()?"Soltar":"Agarrar",qe.render(Gt,Tt)});window.addEventListener("resize",()=>{Tt.aspect=innerWidth/innerHeight,Tt.updateProjectionMatrix(),qe.setSize(innerWidth,innerHeight)});

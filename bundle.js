(()=>{"use strict";var e={752:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var c=u(n(860)),l=s(n(582)),f=s(n(506)),p=s(n(671)),h=s(n(289)),d=s(n(94)),y=s(n(466)),b=s(n(922)),v=function(){function e(e){this.app=(0,c.default)(),this.settings(),this.midlewares(),this.routes()}return e.prototype.settings=function(){this.app.set("port",process.env.PORT||3e3)},e.prototype.midlewares=function(){this.app.use((0,l.default)()),this.app.use((0,c.json)()),this.app.use((0,c.urlencoded)({extended:!1}))},e.prototype.routes=function(){this.app.get("/",(function(e,t){t.send(process.env.USERNAME)})),this.app.use("/login",f.default),this.app.use("/personaunica",p.default),this.app.use("/genero",h.default),this.app.use("/tipodocumento",d.default),this.app.use("/tipopersona",y.default),this.app.use("/empresas",b.default)},e.prototype.listen=function(){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.app.listen(this.app.get("port"))];case 1:return e.sent(),console.log("server on port: ",this.app.get("port")),[2]}}))}))},e}();t.App=v},220:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.EmpresasController=void 0;var u=n(471),i=function(){function e(){}return e.prototype.GetAll=function(e,t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,r.sent().request().query("select * from VW_PU_Empresas")];case 2:return e=r.sent(),t.send(e.recordset),[3,4];case 3:return n=r.sent(),console.error(n),t.send({error:!0,mensaje:n.message}),[3,4];case 4:return[2]}}))}))},e}();t.EmpresasController=i},847:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GeneroController=void 0;var u=n(471),i=function(){function e(){}return e.prototype.getAll=function(e,t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,r.sent().request().query("SELECT id, genero FROM PU_Generos")];case 2:return e=r.sent(),t.send(e.recordset),[3,4];case 3:return n=r.sent(),console.error(n),t.send({error:!0,mensaje:n.message}),[3,4];case 4:return[2]}}))}))},e}();t.GeneroController=i},878:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.LoginController=void 0;var i=n(471),a=n(424),s=n(432),c=function(){function e(){}return e.prototype.login=function(e,t){return o(this,void 0,void 0,(function(){var n,o,c,l;return u(this,(function(u){switch(u.label){case 0:return n=new s.Token,[4,(0,i.GetPool)()];case 1:return[4,u.sent().request().input("user",(0,a.VarChar)(50),e.body.username).input("pass",(0,a.VarChar)(50),e.body.password).query("SELECT idCobrador, estado, CoNombre as nombre, CoApellido as apellido FROM IC_Cobrador WHERE Usuario = @user AND Password = CAST(@pass AS binary)")];case 2:return(o=u.sent()).rowsAffected[0]>0?(c=o.recordset[0],[4,n.crearToken(c)]):[3,4];case 3:return l=u.sent(),t.send(r({token:l},c)),[3,5];case 4:t.send({token:null}),u.label=5;case 5:return[2]}}))}))},e.prototype.hex=function(e,t){return o(this,void 0,void 0,(function(){var n,r,o;return u(this,(function(u){switch(u.label){case 0:e.body.email,u.label=1;case 1:return u.trys.push([1,4,,5]),[4,(0,i.GetPool)()];case 2:return[4,u.sent().request().input("user",a.VarChar,e.body.email).input("password",a.Binary,e.body.password).query("select * from IC_Cobrador where Password = @password")];case 3:return n=u.sent(),r=Buffer.from(n.recordset.Password,"hex"),t.send(r),[3,5];case 4:return o=u.sent(),console.error(o),t.send({error:!0,mensaje:o.message}),[3,5];case 5:return[2]}}))}))},e}();t.LoginController=c},200:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PersonaUnicaController=void 0;var u=n(471),i=function(){function e(){}return e.prototype.getOne=function(e,t){return r(this,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,o.sent().request().input("id",e.params.id).query("SELECT id, nombre_ejecutivo, respuesta_json, fecha_creacion FROM VW_PU_Formularios WHERE id = @id")];case 2:return n=o.sent(),t.send(n.recordset[0]),[3,4];case 3:return r=o.sent(),console.error(r),t.send({error:!0,mensaje:r.message}),[3,4];case 4:return[2]}}))}))},e.prototype.getAll=function(e,t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,r.sent().request().query("SELECT id, nombre_ejecutivo, respuesta_json, fecha_creacion FROM VW_PU_Formularios")];case 2:return e=r.sent(),t.send(e.recordset),[3,4];case 3:return n=r.sent(),console.error(n),t.send({error:!0,mensaje:n.message}),[3,4];case 4:return[2]}}))}))},e.prototype.postData=function(e,t){return r(this,void 0,void 0,(function(){var n,r,i,a;return o(this,(function(o){switch(o.label){case 0:n=e.body,r="INSERT INTO PU_FormularioPersonaUnica (nombre_ejecutivo, respuesta_json) VALUES (@user, @json)",i=JSON.stringify(n),o.label=1;case 1:return o.trys.push([1,4,,5]),[4,(0,u.GetPool)()];case 2:return[4,o.sent().request().input("json",i).input("user",n.nombreEjecutivo).query(r)];case 3:return o.sent(),t.send({error:!1,mensaje:"respuesta ingresada"}),[3,5];case 4:return a=o.sent(),console.error(a),t.send({error:!0,mensaje:a.message}),[3,5];case 5:return[2]}}))}))},e}();t.PersonaUnicaController=i},502:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.TipoDocumentoController=void 0;var u=n(471),i=function(){function e(){}return e.prototype.getAll=function(e,t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,r.sent().request().query("SELECT id, tipo_documento FROM PU_TipoDocumento")];case 2:return e=r.sent(),t.send(e.recordset),[3,4];case 3:return n=r.sent(),console.error(n),t.send({error:!0,mensaje:n.message}),[3,4];case 4:return[2]}}))}))},e}();t.TipoDocumentoController=i},478:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.TipoPersonaController=void 0;var u=n(471),i=function(){function e(){}return e.prototype.getAll=function(e,t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,(0,u.GetPool)()];case 1:return[4,r.sent().request().query("SELECT id, tipo_persona FROM PU_TipoPersona")];case 2:return e=r.sent(),t.send(e.recordset),[3,4];case 3:return n=r.sent(),console.error(n),t.send({error:!0,mensaje:n.message}),[3,4];case 4:return[2]}}))}))},e}();t.TipoPersonaController=i},471:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GetPool=void 0;var u=n(424),i={server:"192.168.8.8",database:"InteligenciaDB_Fase2",user:"ddonis",password:"Temporal/2021",port:1433,options:{encrypt:!1,trustedConnection:!0}};t.GetPool=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,new u.ConnectionPool(i).connect()];case 1:return[2,e.sent()]}}))}))}},922:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(220),u=(0,r.Router)(),i=new o.EmpresasController;u.get("/",i.GetAll),t.default=u},289:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(847),u=n(432),i=(0,r.Router)(),a=new o.GeneroController,s=new u.Token;i.get("/",s.verifyToken,a.getAll),t.default=i},506:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(878),u=(0,r.Router)(),i=new o.LoginController;u.post("/",i.login),t.default=u},671:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(200),u=n(432),i=(0,r.Router)(),a=new o.PersonaUnicaController,s=new u.Token;i.get("/",s.verifyToken,a.getAll),i.get("/:id",s.verifyToken,a.getOne),i.post("/",s.verifyToken,a.postData),t.default=i},94:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(502),u=n(432),i=(0,r.Router)(),a=new o.TipoDocumentoController,s=new u.Token;i.get("/",s.verifyToken,a.getAll),t.default=i},466:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(860),o=n(478),u=n(432),i=(0,r.Router)(),a=new o.TipoPersonaController,s=new u.Token;i.get("/",s.verifyToken,a.getAll),t.default=i},432:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function a(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Token=void 0;var i=u(n(344)),a=function(){function e(){}return e.prototype.verifyToken=function(e,t,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){return e.headers.authorization?(n(),[2]):[2,t.status(401).send({auth:!1,message:"token no valido"})]}))}))},e.prototype.crearToken=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,i.default.sign(e,"secret")];case 1:return[2,t.sent()]}}))}))},e}();t.Token=a},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")},344:e=>{e.exports=require("jsonwebtoken")},424:e=>{e.exports=require("mssql")}},t={};(new(function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}(752).App)).listen()})();
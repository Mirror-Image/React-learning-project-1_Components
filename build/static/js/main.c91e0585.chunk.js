(this.webpackJsonppractice_1_react_quiz=this.webpackJsonppractice_1_react_quiz||[]).push([[0],{25:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__wR3bc",close:"Drawer_close__1h6ce",active:"Drawer_active__2bSyB"}},27:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__3MRcr",open:"MenuToggle_open__2XDUn"}},31:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__204TN",QuizWrapper:"Quiz_QuizWrapper__1Vkp6"}},32:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__1vE3X",Question:"ActiveQuiz_Question__1HF9D"}},33:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3TGtK",success:"AnswerItem_success__2puvx",error:"AnswerItem_error__3O_VT"}},34:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__2bP4V",success:"FinishedQuiz_success__1ZX88",error:"FinishedQuiz_error__2cEyp"}},35:function(e,t,n){e.exports={Button:"Button_Button__E4TKQ",error:"Button_error__3TJFH",success:"Button_success__1SvpX",primary:"Button_primary__1CK4E"}},36:function(e,t,n){e.exports={Input:"Input_Input__2VoRF",invalid:"Input_invalid__kyDeu"}},37:function(e,t,n){e.exports={Auth:"Auth_Auth__2Y0SJ",AuthForm:"Auth_AuthForm__3wS8W"}},48:function(e,t,n){e.exports={Layout:"Layout_Layout__2lECz"}},49:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2e-GX"}},52:function(e,t,n){},53:function(e,t,n){e.exports={Loader:"Loader_Loader__nczS6","lds-ring":"Loader_lds-ring__MxPgW"}},54:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__3D9l3"}},55:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__3xpaK"}},56:function(e,t,n){e.exports={Select:"Select_Select__sQgj_"}},59:function(e,t,n){e.exports=n(88)},64:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),u=(n(64),n(3)),s=n(4),c=n(7),l=n(5),p=n(8),d=n(48),m=n.n(d),h=n(27),v=n.n(h),f=function(e){var t=[v.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(v.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},E=n(25),_=n.n(E),b=n(49),g=n.n(b),O=function(e){return r.a.createElement("div",{className:g.a.Backdrop,onClick:e.onClick})},z=n(14),C=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(){n.props.onClose()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(z.c,{to:e.to,exact:e.exact,activeClassName:_.a.active,onClick:t.clickHandler},e.label))}))}},{key:"render",value:function(){var e=[_.a.Drawer];this.props.isOpen||e.push(_.a.close);var t=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0}];return console.log("AUTH",this.props.isAuthenticated),this.props.isAuthenticated?(t.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),t.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):t.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks(t))),this.props.isOpen?r.a.createElement(O,{onClick:this.props.onClose}):null)}}]),t}(a.Component),y=n(6),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.toggleMenuHandler=function(){n.setState({menu:!n.state.menu})},n.menuCloseHandler=function(){n.setState({menu:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},r.a.createElement(C,{isOpen:this.state.menu,onClose:this.menuCloseHandler,isAuthenticated:this.props.isAuthenticated}),r.a.createElement(f,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),t}(a.Component);var j=Object(y.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(w),k=n(17),Q=n(31),S=n.n(Q),q=n(32),I=n.n(q),A=n(52),T=n.n(A),x=n(33),U=n.n(x),H=function(e){var t=[U.a.AnswerItem];return e.state&&t.push(U.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},F=function(e){return console.log("List ",e),r.a.createElement("ul",{className:T.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(H,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},N=function(e){return r.a.createElement("div",{className:I.a.ActiveQuiz},r.a.createElement("p",{className:I.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.questionNumber,"."),"\xa0",e.question),r.a.createElement("small",null,e.questionNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(F,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},D=n(34),L=n.n(D),M=n(35),R=n.n(M),Z=function(e){var t=[R.a.Button,R.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},B=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:L.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",L.a[e.results[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1),".\xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(Z,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(z.b,{to:"/"},r.a.createElement(Z,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},V=n(53),X=n.n(V),W=function(e){return r.a.createElement("div",{className:X.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},G=n(21),P=n(13),Y=n.n(P),J=n(18),K=n(24),$=n.n(K),ee=$.a.create({baseURL:"https://react-quiz-a73ba.firebaseio.com/"});function te(e){return{type:"FETCH_QUIZ_SUCCESS",quiz:e}}function ne(e){return{type:"FETCH_QUIZES_SUCCESS",quizes:e}}function ae(e){return{type:"FETCH_QUIZES_ERROR",error:e}}function re(e,t){return{type:"QUIZ_SET_STATE",answerState:e,results:t}}var ie=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuizById(this.props.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return console.log(this.props.quiz),r.a.createElement("div",{className:S.a.Quiz},r.a.createElement("div",{className:S.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.props.loading||!this.props.quiz?r.a.createElement(W,null):this.props.isFinished?r.a.createElement(B,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):r.a.createElement(N,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.quizAnswerClick,quizLength:this.props.quiz.length,questionNumber:this.props.activeQuestion+1,state:this.props.answerState})))}}]),t}(a.Component);var oe=Object(y.b)((function(e){return{results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(J.a)(Y.a.mark((function e(t){var a,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,ee.get("quizes/".concat(n,".json"));case 4:a=e.sent,r=a.data,t(te(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(ae(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quiz;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var i=a.quiz[a.activeQuestion],o=a.results;if(i.rightAnswerId===e){o[i.id]||(o[i.id]="success"),t(re(Object(G.a)({},e,"success"),o));var u=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quiz.length}(a)?(console.log(a.activeQuestion+1),t({type:"QUIZ_NEXT_QUESTION",number:a.activeQuestion+1})):t({type:"FINISH_QUIZ"}),window.clearTimeout(u)}),1e3)}else o[i.id]="error",t(re(Object(G.a)({},e,"error"),o))}}(t))},retryQuiz:function(){return e({type:"QUIZ_RETRY"})}}}))(ie),ue=n(54),se=n.n(ue),ce=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(z.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:se.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.props.loading&&0!==this.props.quizes.length?r.a.createElement(W,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),t}(a.Component);var le=Object(y.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(J.a)(Y.a.mark((function e(t){var n,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,ee.get("quizes.json");case 4:n=e.sent,a=[],Object.keys(n.data).forEach((function(e,t){a.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(ne(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(ae(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(ce),pe=n(2),de=n(55),me=n.n(de),he=n(36),ve=n.n(he);function fe(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Ee=function(e){var t=e.type||"text",n=[ve.a.Input],a="".concat(t,"-").concat(Math.random());return fe(e)&&n.push(ve.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),fe(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)},_e=n(56),be=n.n(_e),ge=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:be.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function Oe(e,t){return Object(pe.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function Ce(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var ye=function(e){return e.children};function we(e){return Oe({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function je(){return{question:Oe({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:we(1),option2:we(2),option3:we(3),option4:we(4)}}var ke=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,rightAnswerId:1,formControls:je()},n.submitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t=n.state.formControls,a=t.question,r=t.option1,i=t.option2,o=t.option3,u=t.option4,s={question:a.value,id:n.props.quiz.length+1,rightAnswerId:n.state.rightAnswerId,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};n.props.createQuizQuestion(s),n.setState({isFormValid:!1,rightAnswerId:1,formControls:je()})},n.createQuizHandler=function(e){e.preventDefault(),n.setState({isFormValid:!1,rightAnswerId:1,formControls:je()}),n.props.finishCreateQuiz()},n.changeHandler=function(e,t){var a=Object(pe.a)({},n.state.formControls),r=Object(pe.a)({},a[t]);r.touched=!0,r.value=e,r.valid=ze(r.value,r.validation),a[t]=r,n.setState({formControls:a,isFormValid:Ce(a)})},n.selectChangeHandler=function(e){n.setState({rightAnswerId:+e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(ye,{key:t+n},r.a.createElement(Ee,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(ge,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:me.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement(Z,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(Z,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component);var Qe=Object(y.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"CREATE_QUIZ_ACTION",item:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(J.a)(Y.a.mark((function e(t,n){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.post("quizes.json",n().create.quiz);case 2:t({type:"RESET_QUIZ_CREATION"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(ke),Se=n(37),qe=n.n(Se);function Ie(e){return function(t){setTimeout((function(){t(Ae())}),1e3*e)}}function Ae(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}function Te(e){return{type:"AUTH_SUCCESS",token:e}}var xe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.loginHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!0)},n.registerHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!1)},n.submitHandler=function(e){e.preventDefault()},n.onChangeHandler=function(e,t){var a=Object(pe.a)({},n.state.formControls),r=Object(pe.a)({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:i})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(Ee,{key:t+n,type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,shouldValidate:!!a.validation,errorMesage:a.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:qe.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandler,className:qe.a.AuthForm},this.renderInputs(),r.a.createElement(Z,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(Z,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),t}(a.Component);var Ue=Object(y.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(J.a)(Y.a.mark((function a(r){var i,o,u,s,c;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuLBpqnpExC0cZ74DkUfUQMXvxYpz8G-I",n&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBuLBpqnpExC0cZ74DkUfUQMXvxYpz8G-I"),a.next=5,$.a.post(o,i);case 5:u=a.sent,s=u.data,c=new Date((new Date).getTime()+1e3*s.expiresIn),localStorage.setItem("token",s.idToken),localStorage.setItem("userId",s.localId),localStorage.setItem("expirationDate",c),r(Te(s.idToken)),r(Ie(s.expiresIn));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(xe),He=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(k.a,{to:"/"})}}]),t}(a.Component);var Fe=Object(y.b)(null,(function(e){return{logout:function(){return e(Ae())}}}))(He),Ne=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/auth",component:Ue}),r.a.createElement(k.b,{path:"/quiz/:id",component:oe}),r.a.createElement(k.b,{path:"/",exact:!0,component:le}),r.a.createElement(k.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/quiz-creator",component:Qe}),r.a.createElement(k.b,{path:"/quiz/:id",component:oe}),r.a.createElement(k.b,{path:"/logout",component:Fe}),r.a.createElement(k.b,{path:"/",exact:!0,component:le}),r.a.createElement(k.a,{to:"/"}))),r.a.createElement(j,null,e)}}]),t}(a.Component);var De=Object(k.g)(Object(y.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Ae()):(e(Te(t)),e(Ie((n.getTime()-(new Date).getTime())/1e3)))}else e(Ae())}))}}}))(Ne));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=n(16),Me={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Re=n(58),Ze={quiz:[]};var Be={token:null};var Ve=Object(Le.c)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZES_START":return Object(pe.a)({},e,{loading:!0});case"FETCH_QUIZES_SUCCESS":return Object(pe.a)({},e,{loading:!1,quizes:t.quizes});case"FETCH_QUIZES_ERROR":return Object(pe.a)({},e,{loading:!1,error:t.error});case"FETCH_QUIZ_SUCCESS":return Object(pe.a)({},e,{loading:!1,quiz:t.quiz});case"QUIZ_SET_STATE":return Object(pe.a)({},e,{answerState:t.answerState,results:t.results});case"FINISH_QUIZ":return Object(pe.a)({},e,{isFinished:!0});case"QUIZ_NEXT_QUESTION":return Object(pe.a)({},e,{answerState:null,activeQuestion:t.number});case"QUIZ_RETRY":return Object(pe.a)({},e,{activeQuestion:0,answerState:null,isFinished:!1,results:{}});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ_ACTION":return Object(pe.a)({},e,{quiz:[].concat(Object(Re.a)(e.quiz),[t.item])});case"RESET_QUIZ_CREATION":return Object(pe.a)({},e,{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(pe.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(pe.a)({},e,{token:null});default:return e}}}),Xe=n(57),We="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Le.d,Ge=Object(Le.e)(Ve,We(Object(Le.a)(Xe.a))),Pe=r.a.createElement(y.a,{store:Ge},r.a.createElement(z.a,null,r.a.createElement(De,null)));o.a.render(Pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.c91e0585.chunk.js.map
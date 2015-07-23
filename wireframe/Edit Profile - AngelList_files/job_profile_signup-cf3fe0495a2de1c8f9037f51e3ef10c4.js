(function(){var e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e},t={}.hasOwnProperty;define(["jquery","backbone","mixpanel","lib/form","lib/partials","lib/social_networks","lib/associations","models/new_tagging","lib/talent_form"],function(t,n,i,r,o,a,s,l,u){var c;return c=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.initialize=function(){return u.showSectionToggle(this.$el,".js-show-section"),n.__super__.initialize.apply(this,arguments)},n}(u.PartialForm),{single_step_form:function(t,n){var i;return new(i=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.initialize=function(){return this._withPartials(function(e){return function(t,n){return e.listenTo(t,"primaryRoleChanged",function(e){return n.setPrimaryRole(e)})}}(this))},n.prototype._form=function(){return this.$(".js-step-form")},n.prototype._handleSuccess=function(e){return window.location.href=e.next_url},n.prototype._submit=function(){return this._withPartials(function(){return function(e,t){return e.removeErrors(),t.removeErrors()}}(this)),n.__super__._submit.apply(this,arguments)},n.prototype._handleError=function(e){return n.__super__._handleError.apply(this,arguments),this._withPartials(function(){return function(t,n){return t.handleErrors(e),n.handleErrors(e),t.scrollToErrors()||n.scrollToErrors()}}(this))},n.prototype._withPartials=function(e){var t,n;return n=this.$(o.selector("job_profile_signup/looking_for")),t=this.$(o.selector("job_profile_signup/about_you")),o["with"](n,function(){return function(n){return o["with"](t,function(t){return e(n,t)})}}(this))},n}(u.FormContainer))({el:n})},multi_step_form:function(n,i){var r;return new(r=function(n){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,n),i.prototype.events=function(){return _.extend(i.__super__.events.apply(this,arguments),{"click .js-back":function(e){return function(){return e._showStep(e.currentStepIndex-1)}}(this),"click .js-next":function(e){return function(){return e._showStep(e.currentStepIndex+1)}}(this),"click .js-finish-flow":function(){return function(e){return u.setLoading(t(e.target))}}(this)})},i.prototype.initialize=function(){return this.currentStepIndex=0},i.prototype._submit=function(){return this._withCurrentPartial(function(){return function(e){return e.removeErrors()}}(this)),i.__super__._submit.apply(this,arguments)},i.prototype._form=function(){return this._currentStep().find(".js-step-form")},i.prototype._handleSuccess=function(){return i.__super__._handleSuccess.apply(this,arguments),this._showStep(this.currentStepIndex+1)},i.prototype._handleError=function(e){return i.__super__._handleError.apply(this,arguments),this._withCurrentPartial(function(){return function(t){return t.handleErrors(e),t.scrollToErrors()}}(this))},i.prototype._currentStep=function(){return this.$(".js-step-"+this.currentStepIndex)},i.prototype._withCurrentPartial=function(e){var t;return t=this._currentStep().data("partial"),o["with"](this.$(o.selector(t)),function(){return function(t){return e(t)}}(this))},i.prototype._showStep=function(e){return this.currentStepIndex!==e?(this._currentStep().hide(),this.$(".js-step-header.u-bgGray").removeClass("u-bgGray"),this.currentStepIndex=e,this._currentStep().show(),t(this.$(".js-step-header")[e]).addClass("u-bgGray"),t("html, body").animate({scrollTop:this.$el.offset().top},200)):void 0},i}(u.FormContainer))({el:i})},looking_for:function(i,r){var o,a;return o=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,t),i.prototype.initialize=function(e){var t,r,o;return this.collection=new n.Collection(function(){var e,n,i,r;for(i=this.$el.data("existing"),r=[],e=0,n=i.length;n>e;e++)t=i[e],r.push(new l(t));return r}.call(this)),i.__super__.initialize.call(this,_.extend({tag_type:"LocationTag",new_taggable_field:"tags_"+this.$el.data("field"),new_taggable_type:"User",new_taggable_id:this.$el.data("id"),container:this.$(".js-association-container")},e)),this.$(this.input()).attr("autocomplete","country chromehack"),(r=this.$el.data("max"))?(o=function(e){return function(t){var n;return n=e.$(e.input()),e.collection.length<r?(n.show(),t?n.focus():void 0):n.hide()}}(this),o(),this.listenTo(this.collection,"add remove",o)):void 0},i}(s.NewTaggingField),new(a=function(n){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,n),i.prototype.events=function(){return{"click .js-show-roles":"_showRoles","change .js-toggle-looking-for":"_toggleLookingFor","change .js-primary-role":"_setRoleVisibility","change .js-primary-looking-for":"_setLookingForVisibility","change .currency-codes":"_toggleCurrency"}},i.prototype.initialize=function(){var e,t,n,r,a;for(i.__super__.initialize.apply(this,arguments),this.$(".js-toggle-looking-for").prop("disabled",!1),this._setRoleVisibility(),this._setLookingForVisibility(),r=this.$(".js-location-tagger"),t=0,n=r.length;n>t;t++)e=r[t],a=new o({el:this.$(e)}),this.listenTo(a.collection,"add",function(e){return function(){return e.$(".fieldWithErrors").find("."+e.VALIDATION_ERROR_CLASS).remove()}}(this));return TipTip.init(this.$el)},i.prototype.handleErrors=function(e){var t,n,r;return r=e.expected_salary,delete e.expected_salary,n=i.__super__.handleErrors.apply(this,arguments),r&&(t=this.$(".js-salary-container"),this._setInputError(t,r[0]),n.push("expected_salary")),n},i.prototype._showRoles=function(e){return t(e.target).hide(),this.$(".js-roles").slideDown()},i.prototype._showMoreLinks=function(e){return t(e.target).hide(),this.$(".js-link").show()},i.prototype._setRoleVisibility=function(){var e,n,i,r,o,a,s;for(s=this.$(".js-primary-role").val(),this.trigger("primaryRoleChanged",s),o=this.$(".js-role-options"),a=[],n=0,i=o.length;i>n;n++)r=o[n],e=t(r),a.push(e.toggle(e.find("input").val()!==s));return a},i.prototype._setLookingForVisibility=function(){var e,n,i,r,o,a,s;for(s=this.$(".js-primary-looking-for").val(),o=this.$(".js-looking-for-options"),a=[],n=0,i=o.length;i>n;n++)r=o[n],e=t(r),a.push(e.toggle(e.find("input").val()!==s));return a},i.prototype._toggleLookingFor=function(){return this.$(".js-looking-for").slideToggle("fast",function(e){return function(){return e.$(".js-looking-for").is(":visible")?void 0:e.$('.js-looking-for input[type="checkbox"]').prop("checked",!1)}}(this))},i.prototype._toggleCurrency=function(){return this.$(".salary-symbol").text(this.$(".currency-codes option:selected").attr("symbol"))},i}(c))({el:r})},about_you:function(n,i){var a;return new(a=function(n){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,n),i.prototype.events=function(){return{"click .js-show-more-links":"_showMoreLinks"}},i.prototype.initialize=function(){return i.__super__.initialize.apply(this,arguments),this._initializeCounters()},i.prototype.removeErrors=function(){return i.__super__.removeErrors.apply(this,arguments),o["with"](this.$(o.selector("job_profile_signup/user_photo")),function(e){return e.removeErrors()})},i.prototype.handleErrors=function(e){var t;return t=i.__super__.handleErrors.apply(this,arguments),e.urls&&(this._appendError(this.$(".js-urls-error"),e.urls[0]),t.push("urls")),t},i.prototype.setPrimaryRole=function(e){var t,n;return t=this.$(".js-bio").data("placeholders"),n=t[e]||t.developer,this.$(".js-bio").attr("placeholder","e.g. "+n)},i.prototype._showMoreLinks=function(e){return t(e.target).hide(),this.$(".js-link").show()},i.prototype._initializeCounters=function(){var e,n,i,o,a,s,l;for(s=this.$("textarea"),l=[],o=0,a=s.length;a>o;o++)i=s[o],e=t(i),n=e.next(".character_counter"),l.push(new r.CharacterCounter({el:i,max:n.data("max"),container:n}));return l},i}(c))({el:i})},user_photo:function(n,i){var r;return new(r=function(n){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,n),i.prototype.BUTTON_SELECTOR=".js-upload-photo > .c-button",i.prototype.events=function(){var e;return e={"change .js-upload-photo-input":"_uploadPhoto"},e["click "+this.BUTTON_SELECTOR]=function(e){return function(){return e.$(".js-upload-photo-input").click()}}(this),e},i.prototype._uploadPhoto=function(){var e,n;if(!_.isEmpty(this.$(".js-upload-photo-input").val()))return this.removeErrors(),e=this.$(this.BUTTON_SELECTOR),u.setLoading(e,!0),n=new FormData,n.append("photo",this.$(".js-upload-photo-input")[0].files[0]),t.ajax({url:this.$el.data("upload-url"),data:n,processData:!1,contentType:!1,type:"POST",success:function(t){return function(n){return u.setLoading(e,!1),n.success?t._changePhoto(n.photo_url):t._appendError(t.$(".js-photo-error"),n.errors[0])}}(this)})},i.prototype._changePhoto=function(e){return this.$(".js-photo-container").show().find("img").attr("src",e),this.$(".js-upload-photo--upload").hide(),this.$(".js-upload-photo--change").show()},i}(c))({el:i})},resume_button:function(e){var n,o,a;return n=e("form.resume_form"),o=e(".js-resume-error"),a=r.loadingOptions(n,{dataType:"json",beforeSubmit:function(){return o.hide(),t.facybox.loading()},success:function(t){return e(".file_name").hide(),i.track("job_profile: resume downloaded"),window.location.href=t.next_url},error:function(e){var n;return i.track("job_profile: resume error"),n=e.responseJSON,t.facybox.close(),o.empty().append(n.errors),o.fadeIn()}}),e(".button").click(function(){return i.track("job_profile: resume clicked"),e(".resume_file").click()}),e(".resume_file").change(function(){return""!==e(this).val()?n.ajaxSubmit(a):void 0})},facebook_button:function(r,o){var s;return new(s=function(n){function r(){return r.__super__.constructor.apply(this,arguments)}return e(r,n),r.prototype.initialize=function(){return this.social=new a(!1),this.button=this.$el.find(".facebook-dl-button"),a.on("connect_social_network_end",function(e){return function(){return e.social.update()}}(this)),a.on("connected_networks_updated",function(e){return function(){return e.social.isConnected("facebook")?e.download_from_facebook():e.button.removeClass("c-button--loading")}}(this))},r.prototype.events={"click .facebook-dl-button":function(){return this.button.hasClass("c-button--loading")?void 0:(i.track("job_profile: facebook_button clicked"),this.button.addClass("c-button--loading"),this.social.isConnected("facebook")?this.download_from_facebook():this.social.connect("facebook"))}},r.prototype.download_from_facebook=function(){return t.ajax({url:"/job_profiles/download_from_facebook",type:"post",success:function(){return function(e){return i.track("job_profile: facebook_button downloaded"),window.location.href=e.next_url}}(this)})},r}(n.View))({el:o})},experience_and_education:function(e){return o["with"](e(o.selector("new_taggings/startup_role_tagger")),function(t){return t.on("totalExperienceChanged",function(t){return e(".combined-experience").html(t)})})}}})}).call(this);
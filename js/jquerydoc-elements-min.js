function applyNavigationElementCSS(obj,elementId)
{if(obj.menuType==2&&$("#"+elementId).find('ul.internal-menu').length>0&&$(window).width()>=768)
{var rightOffset=($(window).width()-($("#"+elementId+' ul.customVerticalMenu').offset().left+$("#"+elementId+' ul.customVerticalMenu').outerWidth()));var maxWidthSubmenu=0;$("#"+elementId).find('ul.internal-menu').each(function(i,obj)
{if(maxWidthSubmenu<$(this).outerWidth())
maxWidthSubmenu=$(this).outerWidth()});if(maxWidthSubmenu>rightOffset)
{$("#"+elementId+" .leftOpen").addClass('rightOpen').removeClass('leftOpen');$("#"+elementId+" .caret-right").addClass('caret-left').removeClass('caret-right')}}
else if($(window).width()<768)
$("#"+elementId+" .caret-right").addClass('caret').removeClass('caret-right');$('#stylesheet_'+elementId).remove();obj.menuBackGroundColor=(obj.menuBackGroundColor!=undefined&&obj.menuBackGroundColor!='')?obj.menuBackGroundColor:'transparent';obj.subMenuBackGroundColor=(obj.subMenuBackGroundColor!=undefined&&obj.subMenuBackGroundColor!='')?obj.subMenuBackGroundColor:'transparent';var stylesheet='<style type="text/css" id="stylesheet_'+elementId+'">'+((obj.menuType!=2)?'.menufont_'+elementId+':hover  {\n\
                            color: '+obj.menuFontColorOnHover+' !important;\n\
                            background-color: '+obj.menuBackGroundColorOnHover+' !important;\n\
                        }\n\
                        .menufont_'+elementId+':hover i {\n\
                                color: '+obj.menuIconHoverColor+' !important;\n\
                            }\n\
                        .menufont_'+elementId+' {\n\
                            background-color: '+obj.menuBackGroundColor+' !important;\n\
                        }\n\
 		        .submenu_'+elementId+' {\n\
                                    background-color: '+obj.subMenuBackGroundColor+' !important;\n\
                         }\n\
                        .submenufont_'+elementId+':hover {\n\
                            color: '+obj.subMenuFontColorOnHover+' !important;\n\
                            background-color: '+obj.subMenuBackGroundColorOnHover+' !important;\n\
                        }\n\
                        .submenufont_'+elementId+':hover i {\n\
                                color: '+obj.subMenuIconHoverColor+' !important;\n\
                            }\n\
                        .submenufont_'+elementId+' {\n\
                            background-color: '+obj.subMenuBackGroundColor+' !important;\n\
                        }\n\
                        #'+elementId+' .icon-bar {\n\
                                background-color: '+obj.toggleButtonColor+' !important;\n\
                        }':'#'+elementId+' ul.customVerticalMenu > li > a.menuItem:hover{\n\
                            color: '+obj.menuFontColorOnHover+' !important;\n\
                            background-color: '+obj.menuBackGroundColorOnHover+' !important;\n\
                        }\n\
                        #'+elementId+' ul.customVerticalMenu > li > a.menuItem:hover i{\n\
                            color: '+obj.menuFontColorOnHover+' !important;\n\
                        }\n\
                        #'+elementId+' ul.customVerticalMenu > li > ul.internal-menu > li > a:hover{\n\
                            color: '+obj.subMenuFontColorOnHover+' !important;\n\
                            background-color: '+obj.subMenuBackGroundColorOnHover+' !important;\n\
                        }\n\
                        #'+elementId+' ul.customVerticalMenu > li > ul.internal-menu > li > a:hover i{\n\
                            color: '+obj.subMenuIconHoverColor+' !important;\n\
                        }\n\
                        ')+'</style>';$('body').append(stylesheet)};var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;$(document).on('click, mouseenter'+(iOS?', touch':''),'.navigationelement_cl nav ul.navbar-nav li.dropdown',function()
{var currentLI=$(this);setTimeout(function()
{currentLI.addClass("open")})});$(document).on('mouseleave','.navigationelement_cl nav ul.navbar-nav li.dropdown.open',function()
{$(this).removeClass('open')});$(document).on('mouseenter'+(iOS?', touch':''),'.navigationelement_cl ul.customVerticalMenu > li',function()
{var currentLI=$(this);setTimeout(function()
{currentLI.addClass("open")})});$(document).on('click','.navigationelement_cl ul.customVerticalMenu > li',function()
{$(this).toggleClass("open")});$(document).on('mouseleave','.navigationelement_cl ul.customVerticalMenu > li.open',function()
{$(this).removeClass('open')});function applyTextElementCSS(obj,elementId)
{if(elementId!=undefined)
{$('#stylesheet_'+elementId).remove();var stylesheet='<style type="text/css" id="stylesheet_'+elementId+'">\n\
                                #'+elementId+'.textelement_cl .headlines a  { color: '+obj.linkColor+'; }\n\
                                @media (max-width: 767px) { \n\
                                    div#'+elementId+' * { font-size: '+obj.fontsizemobile+'px !important; }\n\
                                } \n\
                            </style>';$('body').append(stylesheet)}};videoResize=function(id)
{setTimeout(function()
{var iframe=$('#'+id+' iframe');var player=new Vimeo.Player(iframe);iframe.css('width','100.2%');player.on('play',function()
{iframe.css('width','100%')})},1000)};videoResizeYoutube=function(elementid)
{var iframe=$('#'+elementid).find('iframe');var newWidth=$('#'+elementid).find('.videoOverlay').width()+1;if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Mac')!=-1&&navigator.userAgent.indexOf('Chrome')==-1&&navigator.userAgent.match(/iPad/i)==null)
{newWidth=newWidth+1}
var newHeight=Math.ceil(newWidth/(16/9));if(navigator.userAgent.toLowerCase().indexOf('msie')>=0||navigator.appVersion.toLowerCase().indexOf('trident/')>-1)
{}
var height=((iframe.attr('height')&&!isNaN(parseInt(iframe.attr('height'),10))))?parseInt(iframe.attr('height'),10):iframe.height(),width=!isNaN(parseInt(iframe.attr('width'),10))?parseInt(iframe.attr('width'),10):iframe.width(),aspectRatio=height/width;iframe.width(newWidth).height(newHeight);$('#'+elementid).find('.videoOverlay').css('padding-bottom',(aspectRatio*100)+'%')};function applyButtonElementCSS(obj,elementId)
{$('#stylesheet_'+elementId).remove();var backgroundGradientString=createGradientColorString(obj.backgroundHoverColor,obj.backgroundHoverColorEnd,obj.backgroundHoverGradientDirection);var backgroundImagePathTemp=$('#'+elementId+' a').css('background');var backgroundImagePath=backgroundImagePathTemp.substring(backgroundImagePathTemp.lastIndexOf("url(\"")+5,backgroundImagePathTemp.lastIndexOf("\")"));var buttonBackgroundString=backgroundGradientString+', '+((obj.buttonbackgroundImage!="")?"url('"+backgroundImagePath+"')":"url()");var stylesheet='<style type="text/css" id="stylesheet_'+elementId+'">\n\
                            #'+elementId+' a:hover {\n\
                                background: -webkit-linear-gradient'+buttonBackgroundString+' !important;\n\
                                background: -o-linear-gradient'+buttonBackgroundString+' !important;\n\
                                background: linear-gradient'+buttonBackgroundString+' !important;\n\
                                background-size: '+obj.backgroundSize+' !important;\n\
                                background-repeat: '+obj.backgroundRepeat+' !important;\n\
                                background-position: '+obj.backgroundPosition+' !important;\n\
                                border-color: '+obj.borderHoverColor+' !important;\n\
                            }\n\
                            #'+elementId+' a:hover span {\n\
                                color: '+obj.textHoverColor+' !important;\n\
                            }\n\
                            #'+elementId+' a:hover i {\n\
                                color: '+obj.buttonCustomIconHoverColor+' !important;\n\
                            }\n\
                            #'+elementId+' a:hover div {\n\
                                color: '+obj.subTextHoverColor+' !important;\n\
                            }\n\
                            .'+elementId+' .modal-content {\n\
                                background-color: '+obj.modalBackgroundColor+' !important;\n\
                                font-family: '+obj.modalFontFamily+' !important;\n\
                                font-size: '+obj.messageFontSize+'px !important;\n\
                                color: '+obj.messageFontColor+' !important;\n\
                            }\n\
                            .'+elementId+' .modal-content .btn {\n\
                                background-color: '+obj.closeButtonBackground+' !important;\n\
                                border-color: '+obj.closeButtonBackground+' !important;\n\
                                color: '+obj.closeButtonTextColor+' !important;\n\
                            }\n\
                        </style>';$('body').append(stylesheet);window['submitted_'+elementId]=!1};function createGradientColorString(backgroundStart,backgroundEnd,gradientDirection)
{var gradientString='(0deg, rgba(0,0,0,0), rgba(0,0,0,0))';gradientDirection=(gradientDirection!==undefined&&gradientDirection!==null&&gradientDirection!=='')?gradientDirection+'deg':'90deg';backgroundStart=(backgroundStart!==undefined&&backgroundStart!==null&&backgroundStart!=='')?backgroundStart:'';backgroundEnd=(backgroundEnd!==undefined&&backgroundEnd!==null&&backgroundEnd!=='')?backgroundEnd:'';if(backgroundStart=='')
{gradientString='('+gradientDirection+', rgba(0,0,0,0), rgba(0,0,0,0))'}
else if(backgroundEnd=='')
{gradientString='('+gradientDirection+', '+backgroundStart+', '+backgroundStart+')'}
else{gradientString='('+gradientDirection+', '+backgroundStart+', '+backgroundEnd+')'}
return gradientString};$(document).on('click','.formSubmitButton',function(e)
{var LIST_NOT_AVAILABLE_ERROR="Incomplete Form: Email list not available.";var EMAIL_FIELD_BINDING_REQUIRED="Input field for email should be selected.";var URL_NOT_AVAILABLE_ERROR="You have chosen 'Redirect to Page' option but you have not provided any link for redirection.";var CURRENT_BUTTON=$(this);var buttonId=CURRENT_BUTTON.parent().attr('id');var listId=CURRENT_BUTTON.data('listid');var integrationAppId=CURRENT_BUTTON.data('integrationappid');var webinarDataPass=CURRENT_BUTTON.data('webinardatapass');var appListType=CURRENT_BUTTON.data('applisttype');var authenticatedAppId=CURRENT_BUTTON.data('authenticatedappid');var successAction=CURRENT_BUTTON.attr('data-successaction');var successMessage=CURRENT_BUTTON.attr('data-successmessage');var successOkMessage=CURRENT_BUTTON.attr('data-successokmessage');var useKickpagesForLeads=CURRENT_BUTTON.hasClass('useKickpagesForLeads');var formFields=($('#'+buttonId+' .formButtonArray').length>0&&$('#'+buttonId+' .formButtonArray').val()!=="")?JSON.parse($('#'+buttonId+' .formButtonArray').val()):[];var customFormFields=($('#'+buttonId+' .formCustomButtonArray').length>0&&$('#'+buttonId+' .formCustomButtonArray').val()!=="")?JSON.parse($('#'+buttonId+' .formCustomButtonArray').val()):[];var url=CURRENT_BUTTON.attr('data-redirectionurl');var BUTTON_SUBMITTING_TEXT='<span style="margin-right: 10px;">'+CURRENT_BUTTON.attr('data-buttonsubmittext')+'</span><i class="fa-spin '+CURRENT_BUTTON.attr('data-buttonsubmiticon')+'"></i>';var BUTTON_SUCCESS_TEXT='<span style="vertical-align:middle">'+CURRENT_BUTTON.attr('data-buttonsuccessmessage')+'</span>';var btnHeight=CURRENT_BUTTON.outerHeight();var saveKickpagesApps=CURRENT_BUTTON.attr('data-savekickpagesapps');var saveKickpagesCustomAction=CURRENT_BUTTON.attr('data-savekickpagescustomaction');CURRENT_BUTTON.css('height',btnHeight);if(window['submitted_'+buttonId]===!1)
{if(window['text_'+buttonId]===undefined)
window['text_'+buttonId]=CURRENT_BUTTON.html();var CURRENT_BUTTON_TEXT=window['text_'+buttonId];var ajaxUrl=APPS_URL+'processSaveFormData';if(formFields!==undefined&&formFields!==null&&formFields.length>0&&(listId!=""||useKickpagesForLeads))
{var emailFieldExists=!1;var errorExists=0;var submitFields=[];var emailPattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;for(var i=0;i<formFields.length;i++)
{if(formFields[i].forminput_id!==""&&typeof(formFields[i].forminput_id)=='string')
{if(formFields[i].isEmail)
emailFieldExists=!0;var fieldName=$('#'+formFields[i].forminput_id).attr('data-name');var fieldLabel=$('#'+formFields[i].forminput_id).attr('data-label');var fieldType=$('#'+formFields[i].forminput_id).attr('data-type');var fieldValue="";if(fieldType=="5")
{fieldValue=[];$.each($('#'+formFields[i].forminput_id+' [name='+fieldName+']:checked'),function()
{fieldValue.push($(this).val())});fieldValue=fieldValue.join(', ')}
else{fieldValue=$('#'+formFields[i].forminput_id+' [name='+fieldName+']'+((fieldType=="4")?':checked':'')).val()}
if($('#'+formFields[i].forminput_id).hasClass('required')||formFields[i].isEmail)
{var parentLeft=$('#'+formFields[i].forminput_id+' .formInputField').closest('.columnData').offset().left;var fieldLeft=0;if($('#'+formFields[i].forminput_id+' .formInputField').hasClass('selectpicker'))
{fieldLeft=$('#'+formFields[i].forminput_id+' .formInputField .btn').offset().left}
else if($('#'+formFields[i].forminput_id+' .formInputField').parent().hasClass('input-group'))
{fieldLeft=$('#'+formFields[i].forminput_id+' .input-group').offset().left}
else{fieldLeft=$('#'+formFields[i].forminput_id+' .formInputField').offset().left}
var errorLeft=fieldLeft-parentLeft;var errorTop=0;if($('#'+formFields[i].forminput_id+' .customElementCss').hasClass('form-horizontal'))
{errorTop=$('#'+formFields[i].forminput_id+' .extraHorizontalDiv').height()}
if(fieldValue===undefined||fieldValue==="")
{$('#'+formFields[i].forminput_id+' .input_error').show();errorExists++}
else if(formFields[i].isEmail&&!emailPattern.test(fieldValue))
{errorExists++;$('#'+formFields[i].forminput_id+' .input_error').hide();$('#'+formFields[i].forminput_id+' .email_error').show()}
else{$('#'+formFields[i].forminput_id+' .input_error').hide();$('#'+formFields[i].forminput_id+' .email_error').hide()}}
formFields[i].value=fieldValue;formFields[i].submitName=fieldName;if(formFields[i].type=='custom')
{formFields[i].name=fieldName;formFields[i].label=fieldLabel}
submitFields.push(formFields[i])}}
if(!emailFieldExists&&integrationAppId!=11)
{showFormBootstrapDialog(buttonId,EMAIL_FIELD_BINDING_REQUIRED,successOkMessage);return!1}
if(errorExists==0)
{var dataToPost={buttonId:buttonId,formFields:submitFields,page:(DOWNLOAD_FLAG==2)?"published":'downloaded',integrationAppId:integrationAppId,appListType:appListType,authenticatedAppId:authenticatedAppId,listId:listId,webinarDataPass:webinarDataPass,saveKickpagesApps:saveKickpagesApps,saveKickpagesCustomAction:saveKickpagesCustomAction,kickpagesCustomLead:useKickpagesForLeads,pageId:$('#pageId').val(),};CURRENT_BUTTON.html(BUTTON_SUBMITTING_TEXT);window['submitted_'+buttonId]=!0;$.ajax({url:ajaxUrl,type:"post",dataType:"json",data:JSON.stringify(dataToPost),success:function(response)
{window['submitted_'+buttonId]=!1;if(response.FLAG==1||(response.FLAG==2&&integrationAppId==4))
{CURRENT_BUTTON.html(BUTTON_SUCCESS_TEXT);CURRENT_BUTTON.removeClass('formSubmitButton');CURRENT_BUTTON.attr('href','javascript:void(0);');if(successAction==1)
{showFormBootstrapDialog(buttonId,successMessage,successOkMessage)}
else if(successAction==2)
{if(url!==undefined&&url!=="#"&&url!=="javascript:void(0);"&&url!=="")
{if(webinarDataPass!=undefined&&webinarDataPass==!0)
{if(response.DATA!=undefined&&response.DATA!='')
{var query_params=jQuery.param(response.DATA);if(detectQueryString(url)==!0)
{url=url+'&'+query_params}
else{url=url+'?'+query_params}}}
window.location=url}
else{showFormBootstrapDialog(buttonId,URL_NOT_AVAILABLE_ERROR,successOkMessage)}}}
else{CURRENT_BUTTON.html(CURRENT_BUTTON_TEXT);showFormBootstrapDialog(buttonId,response.MSG,successOkMessage)}},error:function()
{window['submitted_'+buttonId]=!1;CURRENT_BUTTON.html(CURRENT_BUTTON_TEXT);showFormBootstrapDialog(buttonId,ERR_AJAX,successOkMessage)}})}
return!1}
else if(CURRENT_BUTTON.hasClass('useKickpagesForCustomAction')&&customFormFields!=undefined&&customFormFields!=null&&customFormFields.length>0)
{var errorExists=0;var submitFields={};var custFields=[];for(var i=0;i<customFormFields.length;i++)
{if(customFormFields[i].id!==""&&typeof(customFormFields[i].id)=='string')
{var fieldName=$('#'+customFormFields[i].id).attr('data-name');var fieldLabel=$('#'+customFormFields[i].id).attr('data-label');var fieldType=$('#'+customFormFields[i].id).attr('data-type');var fieldValue="";fieldValue=$('#'+customFormFields[i].id+' [name='+fieldName+']'+((fieldType=="4")?':checked':'')).val();if($('#'+customFormFields[i].id).hasClass('required')||customFormFields[i].isEmail)
{var parentLeft=$('#'+customFormFields[i].id+' .formInputField').closest('.columnData').offset().left;var fieldLeft=0;if($('#'+customFormFields[i].id+' .formInputField').hasClass('selectpicker'))
{fieldLeft=$('#'+customFormFields[i].id+' .formInputField .btn').offset().left}
else if($('#'+customFormFields[i].id+' .formInputField').parent().hasClass('input-group'))
{fieldLeft=$('#'+customFormFields[i].id+' .input-group').offset().left}
else{fieldLeft=$('#'+customFormFields[i].id+' .formInputField').offset().left}
var errorLeft=fieldLeft-parentLeft;var errorTop=0;if($('#'+customFormFields[i].id+' .customElementCss').hasClass('form-horizontal'))
{errorTop=$('#'+customFormFields[i].id+' .extraHorizontalDiv').height()}
if(fieldValue===undefined||fieldValue==="")
{$('#'+customFormFields[i].id+' .input_error').show();errorExists++}
else if(customFormFields[i].isEmail&&!emailPattern.test(fieldValue))
{errorExists++;$('#'+customFormFields[i].id+' .input_error').hide();$('#'+customFormFields[i].id+' .email_error').show()}
else{$('#'+customFormFields[i].id+' .input_error').hide();$('#'+customFormFields[i].id+' .email_error').hide()}}
customFormFields[i].value=fieldValue;customFormFields[i].submitName=fieldName;customFormFields[i].type=fieldType;if(customFormFields[i].type=='custom')
{customFormFields[i].name=fieldName;customFormFields[i].label=fieldLabel}
submitFields[fieldName]=fieldValue;custFields.push(customFormFields[i])}}
var endpointURL=CURRENT_BUTTON.data('customformaction');var formMethod=CURRENT_BUTTON.data('customformmethod');if(errorExists==0&&endpointURL!=undefined&&endpointURL!='')
{CURRENT_BUTTON.html(BUTTON_SUBMITTING_TEXT);window['submitted_'+buttonId]=!0;$.ajax({url:endpointURL,type:formMethod,dataType:"json",data:submitFields,success:function(response)
{var erromMsg='';if(response.error!=undefined&&response.error!=''&&response.error!=!1&&response.error!=0)
{erromMsg=response.error;if(response.message!=undefined&&response.message!=''&&response.message!=!1)
{erromMsg=response.message}
window['submitted_'+buttonId]=!1;CURRENT_BUTTON.html(CURRENT_BUTTON_TEXT);showFormBootstrapDialog(buttonId,erromMsg,successOkMessage);return!1}
window['submitted_'+buttonId]=!1;CURRENT_BUTTON.html(BUTTON_SUCCESS_TEXT);CURRENT_BUTTON.removeClass('formSubmitButton');CURRENT_BUTTON.attr('href','javascript:void(0);');if(successAction==1)
{showFormBootstrapDialog(buttonId,successMessage,successOkMessage)}
else if(successAction==2)
{if(url!==undefined&&url!=="#"&&url!=="javascript:void(0);"&&url!=="")
{window.location=url}
else{showFormBootstrapDialog(buttonId,URL_NOT_AVAILABLE_ERROR,successOkMessage)}}
if(saveKickpagesCustomAction=="true"||saveKickpagesCustomAction=="1")
{var dataToPost={buttonId:buttonId,formFields:custFields,page:"preview",integrationAppId:integrationAppId,appListType:appListType,authenticatedAppId:authenticatedAppId,listId:listId,kickpagesCustomLead:useKickpagesForLeads,saveKickpagesCustomAction:saveKickpagesCustomAction,saveKickpagesApps:saveKickpagesApps,webinarDataPass:webinarDataPass,pageId:$('#pageId').val(),};$.ajax({url:ajaxUrl,type:"post",dataType:"json",data:JSON.stringify(dataToPost),success:function(response)
{if(response.FLAG==1)
{}
else{console.log('Kickpage data save issue:'+buttonId+':'+response.MSG)}},error:function()
{console.log('Kickpage data save issue:'+ERR_AJAX)}})}},error:function(requestObject,error,errorThrown)
{var erromMsg=ERR_AJAX;if(requestObject.responseText!=undefined&&typeof requestObject.responseText==='string'&&requestObject.responseText!='')
{erromMsg=requestObject.responseText}
else if(requestObject.statusText!=undefined&&typeof requestObject.statusText==='string'&&requestObject.statusText!='')
{erromMsg=requestObject.statusText}
window['submitted_'+buttonId]=!1;CURRENT_BUTTON.html(CURRENT_BUTTON_TEXT);showFormBootstrapDialog(buttonId,erromMsg,successOkMessage)}})}
return!1}
else{showFormBootstrapDialog(buttonId,LIST_NOT_AVAILABLE_ERROR,successOkMessage)}}
return!1});function detectQueryString(url)
{var currentUrl=url;var pattern=new RegExp(/\?+/g);return pattern.test(currentUrl)};function showFormBootstrapDialog(buttonId,message,okMessage)
{if((typeof(BootstrapDialog)!=='undefined'))
{BootstrapDialog.show({message:message,cssClass:"customPreviewModal "+buttonId,buttons:[{label:okMessage,cssClass:'btn-primary',action:function(dialog)
{dialog.close()}},]})}};$(document).on("shown.bs.modal",".bootstrap-dialog",function(event)
{$('.customPreviewModal .bootstrap-dialog-footer-buttons .btn').focus()});$(document).ready(function()
{$('.formSubmitButton').each(function()
{var buttonId=$(this).parent().attr('id');var formFields=($('#'+buttonId+' .formButtonArray').val()!=="")?JSON.parse($('#'+buttonId+' .formButtonArray').val()):[];if(formFields!==undefined&&formFields!==null&&formFields.length>0)
{for(var i=0;i<formFields.length;i++)
{if(formFields[i].forminput_id!=="")
{$('#'+formFields[i].forminput_id).attr('buttonId',buttonId)}}}})});function applyBulletListElementCSS(obj,elementId)
{if(elementId!=undefined)
{$('#stylesheet_'+elementId).remove();var stylesheet='<style type="text/css" id="stylesheet_'+elementId+'">\n\
                                @media (max-width: 767px) { \n\
                                    div#'+elementId+' * { font-size: '+obj.fontsizemobile+'px !important; }\n\
                                } \n\
                            </style>';$('body').append(stylesheet)}};$(document).ready(function()
{$('.swipebox-image').swipebox()});applyParagraphElementCSS=function(obj,elementId)
{$('#stylesheet_'+elementId).remove();var stylesheet='<style type="text/css" id="stylesheet_'+elementId+'">\n\
                            @media (max-width: 767px) { \n\
                                div#'+elementId+' * { font-size: '+obj.fontsizemobile+'px !important; }\n\
                            } \n\
                        </style>';$('body').append(stylesheet)}
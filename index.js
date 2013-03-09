var settings;

exports.loadSettings = function (hook, context)
{
  settings = {};
  settings.stickyWidth = '185px';
  settings.normalWidth = '180px';
  settings.normalHeight = '180px';
  
  if(context.settings.ep_resizeChat)
  {
    if(context.settings.ep_resizeChat.stickyWidth)
      settings.stickyWidth = context.settings.ep_resizeChat.stickyWidth;
    if(context.settings.ep_resizeChat.normalWidth)
      settings.normalWidth = context.settings.ep_resizeChat.normalWidth;
    if(context.settings.ep_resizeChat.normalHeight)
      settings.normalHeight = context.settings.ep_resizeChat.normalHeight;
  }
}

exports.eejsBlock_styles = function (hook, context)
{
  var resizeChat = '<style type="text/css">\n';
  resizeChat += '.stickyChat { width: ' + settings.stickyWidth + ' !important; }\n';
  resizeChat += '#chatbox\n{\n';
  resizeChat += 'width: ' + settings.normalWidth + ';\n';
  resizeChat += 'Height: ' + settings.normalHeight + ';\n}\n';
  resizeChat += '#editorcontainerbox { left: 0px; right: 65px; width: auto; }'
  resizeChat += '</style>\n';
  
  context.content = context.content + resizeChat;
}

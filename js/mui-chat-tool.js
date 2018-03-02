/** 
* @Name : chatTool mui聊天界面操作
* @Author : zhujunxi
*/
let chatTool = {
    init(options) { 
        let chatBox = document.querySelector('.chat-box')
        let chatBoxPaddingLeft = getStyle(chatBox, 'padding-left')

        let magList = options.el.parentNode
        
        let msgWidth = options.el.clientWidth
        let msgPaddingLeft = getStyle(options.el, 'padding-left')
        let chatToolsWidth = 100

        let chatToolsWrap = document.createElement('div');
        chatToolsWrap.className = 'chat-tools-wrap'
        chatToolsWrap.innerHTML = `
        <div class="chat-tools">
            <span class='tool-copy'>复制</span>
            <span class='tool-del'>删除</span>
        </div>
        `
        magList.parentNode.appendChild(chatToolsWrap)
        let chatTools = document.querySelector('.chat-tools')

        chatTools.style.left = Math.max(
            msgPaddingLeft + chatBoxPaddingLeft, 
            msgWidth / 2 + msgPaddingLeft + chatBoxPaddingLeft - (chatToolsWidth / 2)
        ) + 'px'

        chatTools.style.top = magList.offsetTop + magList.offsetHeight + 'px'

        this.addEvent(options.el, options.copy, options.del)
    },
    addEvent(el, copy, del) {
        let self = this
        let toolCopy = document.querySelector('.tool-copy')
        let toolDel = document.querySelector('.tool-del')
        let Mask = document.querySelector('.chat-tools-wrap')

        toolCopy.addEventListener('tap',function(e) {
            e.cancelBubble = true
            typeof copy == "function" && copy(el.innerHTML)
            self.removeTools()
        }, false)
        toolDel.addEventListener('tap',function(e) {
            e.cancelBubble = true
            typeof del == "function" && del(el)
            self.removeTools()
        }, false)
        Mask.addEventListener('tap',function() {
            self.removeTools()
        }, false)
    },
    removeTools() {
        // 移除chat-tool
        let parent = document.querySelector('.chat-box')
        let chatTool = parent.querySelector('.chat-tools-wrap')
        parent.removeChild(chatTool)
    }
}
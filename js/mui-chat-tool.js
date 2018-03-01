/** 
        * @Name : chatTool mui聊天界面操作
        * @Author : zhujunxi
        */
       let chatTool = {
        init: function(options) {
            this.add(options.el)
            this.addEvent(options.copy, options.del)
        },
        addEvent(copy, del) {
            let self = this
            let toolCopy = document.querySelector('.tool-copy')
        
            mui('.chat-tools').on('tap','.tool-copy', function() {
                typeof copy == "function" && copy()
            })
            mui('.chat-tools').on('tap','.tool-del', function() {
                typeof del == "function" && del()
                self.removeMask()
            })
        },
        add(charMsg) {
            let msgListPadding = getStyle(charMsg.parentNode, 'padding')
    
            let msgWidth = charMsg.clientWidth
            let msgTools = document.createElement('div');
            msgTools.className = 'chat-tools'
            msgTools.innerHTML = `
                <span class='tool-copy'>复制</span>
                <span class='tool-del'>删除</span>
            `
            msgTools.style.left = Math.max(
                `${msgListPadding}`, 
                `${(msgWidth / 2) + msgListPadding - 48}`
            ) + 'px'
            charMsg.parentNode.appendChild(msgTools)

            let mask = document.createElement('div')
            mask.className = 'mask'
            charMsg.parentNode.parentNode.appendChild(mask)
        },
        removeMask() {
            let chatBox = document.querySelector('.chat-box')
            let mask = document.querySelector('.mask')

            chatBox.removeChild(mask)
        }
    }
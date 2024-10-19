AFRAME .registerComponent('page_controls', {
    schema:{
        pages:{
            type:'array',default:[
                {
                    page:"1",
                    color:"#0a0a0a"
                },
                {
                    page:"2",
                    color:"#0a0a0a"
                },
                {
                    page:"3",
                    color:"#0a0a0a"
                },
                {
                    page:"4",
                    color:"#0a0a0a"
                },
                {
                    page:"5",
                    color:"#0a0a0a"
                },
                {
                    page:"6",
                    color:"#0a0a0a"
                },
                {
                    page:"7",
                    color:"#0a0a0a"
                },
                {
                    page:"8",
                    color:"#0a0a0a"
                },
                {
                    page:"9",
                    color:"#0a0a0a"
                }
            ]
        },
        pageIndex:{type:
            'int', default:0
        }
    },
    init:function(){
        var pageEl=this.pageEl=document.querySelector('[layer]');
        pageEl.object3D.position.set(0,1.8,-2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener("keydown",(a)=>{
            if(a.key=="ArrowRight" & pageIndex<8){
                pageIndex+=1;
                this.turnPage(pageIndex)

            }
            if(a.key=="ArrowLeft" & pageIndex>0){
                pageIndex-=1;
                this.turnPage(pageIndex)
                
            }
        })
    },
    turnPage:function(pageIndex){
        var pages=this.data.pages;
        var pageId=pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageEl.setAttribute('layer','src','#'+pageId);
        this.el.sceneEl.setAttribute('background','color',color);
    }
})
/**
 * Created by siobhan on 15/08/29.
 */

    window.Object.defineProperty( Element.prototype, 'documentOffsetTop', {
        get: function () {
            return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
        }
    } );

    window.Object.defineProperty( Element.prototype, 'documentOffsetLeft', {
        get: function () {
            return this.offsetLeft + ( this.offsetParent ? this.offsetParent.documentOffsetLeft : 0 );
        }
    } );

    function cursorPositionInCanvas(canvas, event) {

        var canoffsetLeft = canvas.documentOffsetLeft;
        var canoffsetTop = canvas.documentOffsetTop;

        var x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(canoffsetLeft);
        var y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(canoffsetTop) + 1;

        return [x,y];
    }
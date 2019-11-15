import Easycanvas from 'src/index';
import constants from 'karma/case.constant.js';

var $canvas = document.createElement('canvas');
$canvas.width = 888;
$canvas.height = 888;

var $Painter = new Easycanvas.Painter();
$Painter.register($canvas);
$Painter.start();

var sprite1, obj;
Easycanvas.ImgLoader(constants.png10px, function (img) {
    obj = {
        name: 'root',
        content: {
            img: img,
        },
        style: {
            locate: 'lt',
            cutLeft: 0,
            left: undefined, top: 77,
        },
    };
    sprite1 = $Painter.add(obj);
});

describe('Featrue.add Test.', function () {
    it('Default value correctly.', function (done) {
        setTimeout(() => {
            let children = $Painter.children;
            expect(children.length).toBe(1);
            expect(children[0].style.left).toBe(0);
            expect(children[0].style.top).toBe(77);
            expect(children[0].style.opacity).toBe(1);
            expect(children[0].style.rotate).toBe(undefined);
            expect(children[0].style.zIndex).toBe(0);
            expect(children[0].events.eIndex).toBe(undefined);
            // expect(children[0].inherit.indexOf('tx') >= 0).toBe(true);
            expect(children[0].content.img.width).toBe(10);
            done();
        }, constants.waitForUpdateTime);
    });

    it('Children to $children fine.', function (done) {
        setTimeout(() => {
            let $children = $Painter.$children
            expect($children.length).toBe(1);
            expect($children[0].type).toBe('img');
            expect($children[0].props.img.tagName).toBe('IMG');
            expect($children[0].props.img.width).toBe(10);
            expect($children[0].props.width).toBe(10);
            expect($children[0].props.left).toBe(0);
            expect($children[0].props.top).toBe(77);
            done();
        }, constants.waitForUpdateTime);
    });

    it('Add function return the same sprite in children.', function (done) {
        setTimeout(() => {
            expect($Painter.children.indexOf(sprite1) > -1).toBe(true);
            done();
        }, constants.waitForUpdateTime);
    });
});

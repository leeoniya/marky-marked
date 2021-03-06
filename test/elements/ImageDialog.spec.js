import test from 'tape';
import ImageDialog from '../../src/elements/ImageDialog';

test('ImageDialog > creates an image dialog', (t) => {
  const imageDialog = new ImageDialog('image-dialog', 'Image Dialog');

  t.true(imageDialog.element instanceof HTMLElement);
  t.equal(imageDialog.element.title, 'Image Dialog');
  t.ok(imageDialog.element.querySelector('#image-dialog-image-form'));
  t.ok(imageDialog.element.querySelector('.image-source-input'));
  t.ok(imageDialog.element.querySelector('.image-alt-input'));
  t.ok(imageDialog.element.querySelector('.insert-image'));
  t.end();
});

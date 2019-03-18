$(function(){
  var $length = $('#length'),
      $width = $('#width'),
      $btnCal = $('#btnCal'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    /*
    var w = Number($length.val()),
        h = Number($width.val());

    var p = 2*(w+h),
        a = w * h;
    $perimeter.val(p);
    $area.val(a);
    */
    var rect=rectangle();
    $perimeter.val(rect.perimeter($width.val(), $length.val()));
    $area.val(rect.area($width.val(), $length.val()));
  });
});

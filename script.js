window.onload = function() {
    var _buttonlar = document.getElementsByTagName("button");
    var _uzunluk = _buttonlar.length;
    var _sonuç = document.getElementById("sonuç");
  
    for (var i = 0; i < _uzunluk; i++) {
      _buttonlar[i].addEventListener("click", hesapla);
    }
  
    document.getElementById("sil").addEventListener("click", function() {
      _sonuç.value = "";
    });
  
    function hesapla() {
      var _deger = this.innerHTML;
      if (_deger === "=") {
        try {
          _sonuç.value = eval(_sonuç.value);
        } catch (e) {
          _sonuç.value = "0";
        }
        return;
      }
      _sonuç.value += _deger;
    }
  };
//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {

        var $tryit;

        var io = new extIO({
            functions: {
                js: 'evenLast',
                python: 'checkio'
            },
            animation: function($expl, data){
                if (!data.ext) {
                    return;
                }
                $expl.html(data.ext.explanation);
            },
            tryit:function (this_e) {
                $tryit = this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')).find(".tryit-content");
            


                $tryit.find('.bn-check').click(function (e) {
                    e.preventDefault();
                    var $input = $tryit.find(".tool .input-numbers");
                    var raw = $input.val().match(/-?\d+/g);
                    var data = raw.map(Number);
                    $input.val(data.join(" "));
                    this_e.extSendToConsoleCheckiO(data);
                    e.stopPropagation();
                    return false;
                });

                $tryit.find('.bn-random').click(function (e) {
                    e.preventDefault();
                    var quantity = Math.floor(Math.random() * 10) + 1;
                    var data = [];
                    for (var i = 0; i < quantity; i++) {
                        data.push(Math.floor(Math.random() * 200) - 100);
                    }
                    $tryit.find(".tool .input-numbers").val(data.join(" "));
                    return false;
                });

            },
            retConsole: function (ret) {
                try {
                    ret = JSON.parse(ret);
                } catch (err) {}
                $tryit.find(".checkio-result").html("Your Result<br>" + ret);
            }
        });
        io.start();


    }
);

<script>
(function($) {
    $(document).on('click', '#auth_btn', function(e) {
        e.preventDefault();

        if ($('#auth_first_line').val() == '' || $('#auth_second_line').val() == '') {
            alert('Please enter your code');
            return;
        }

        $.blockUI({css: { border: 'none', padding: '15px', backgroundColor: '#000', '-webkit-border-radius': '10px', '-moz-border-radius': '10px', opacity: .5, color: '#fff'}});
        var params = $('#auth_form').serialize();

        $.post('/auth', params, function(res) {
            $.unblockUI();
            var msg = '<div style="text-align: center"><h2 style="color: #5cb85c">Your code is valid</h2></div><br><br>';
            if (res.result == 'false') {
                msg = '<div style="text-align: center"><h2 style="color: #d9534f">Your code is invalid</h2><br>Please contact our authorize sellers</div>';
            }

            if (res.result == 'true' && res.count > 3) {
                msg = '<div style="text-align: center"><h2 style="color: #d9534f">Warning this item has been checked</h2><br>Please contact our authorize sellers. (High risk fake product)</div>';
            }

            bootbox.dialog({
                title: 'Result',
                message: msg
            });
        });
    });
})(jQuery);
</script>
/**
 * Created by Techsevin.
 */
var datepicker1 = $('#datepicker1');
var datepicker4 = $('#datepicker4');

function get_date($date) {
    var date = $date;
    var d = new Date(date.split("-").reverse().join("-"));
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();
    var newdate = yy + "/" + mm + "/" + dd;
    return newdate;
}

datepicker4.on('change', function () {
    var date_from = datepicker1.val();
    var one_date = get_date(date_from);
    var new_date_from = new Date(one_date);
    var date_to = datepicker4.val();
    var second_date = get_date(date_to);
    var new_date_to = new Date(second_date);


    if (date_from > date_to) {
        alert('To Date cannot be smaller than From Date');
        datepicker4.val('');
    } else {
        var timeDiff = Math.abs(new_date_to.getTime() - new_date_from.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (diffDays == 0) {
            var time_from = one_date + ' ' + $('#timepicker1').val() + ':00';
            var time_to = second_date + ' ' + $('#timepicker4').val() + ':00';
            console.log(time_from);
            console.log(time_to);

            var diff = moment.duration(moment(time_to).diff(moment(time_from)));
            console.log(diff);
            diff = diff / 3600 / 1000;
            console.log(diff);
            if (diff <= 4) {
                $('#total_days').val('Half day leave');
            } else if (diff > 4) {
                $('#total_days').val('Full day leave');
            }
        } else {
            if (diffDays > 0) {
                diffDays = diffDays + 1;
                console.log(toWords(diffDays));
                $('#total_days').val(toWords(diffDays) + 'days leave');
            } else {
                console.log(toWords(diffDays));
                $('#total_days').val(toWords(diffDays) + 'day leave');
            }
        }
    }
});

datepicker1.on('change', function () {
    var date_from = datepicker1.val();
    var one_date = get_date(date_from);
    var new_date_from = new Date(one_date);
    var date_to = datepicker4.val();
    var second_date = get_date(date_to);
    var new_date_to = new Date(second_date);
    var timeDiff = Math.abs(new_date_to.getTime() - new_date_from.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // if (diffDays == 1) {
    //     diffDays = 2;
    // }

    // console.log(new_date_from);
    // console.log(new_date_to);

    if (diffDays == 0) {
        var time_from = one_date + ' ' + $('#timepicker1').val() + ':00';
        var time_to = second_date + ' ' + $('#timepicker4').val() + ':00';

        var diff = moment.duration(moment(time_to).diff(moment(time_from)));
        diff = diff / 3600 / 1000;
        if (diff <= 5) {
            $('#total_days').val('Half day leave');
        } else if (diff > 5) {
            $('#total_days').val('Full day leave');
        }
    } else {
        if (diffDays > 0) {
            diffDays = diffDays + 1;
            $('#total_days').val(toWords(diffDays) + 'days leave');
        } else {
            $('#total_days').val(toWords(diffDays) + 'day leave');
        }
    }
    //}
});

$('#timepicker4').on('change', function () {
    var date_from = datepicker1.val();
    var one_date = get_date(date_from);
    var new_date_from = new Date(one_date);
    var date_to = datepicker4.val();
    var second_date = get_date(date_to);
    var new_date_to = new Date(second_date);
    var timeDiff = Math.abs(new_date_to.getTime() - new_date_from.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays == 1) {
        diffDays = 2;
    }
    if (diffDays == 0) {
        var time_from = one_date + ' ' + $('#timepicker1').val() + ':00';
        var time_to = second_date + ' ' + $('#timepicker4').val() + ':00';

        var diff = moment.duration(moment(time_to).diff(moment(time_from)));
        diff = diff / 3600 / 1000;
        if (diff <= 3.5) {
            $('#total_days').val('First half leave');
        } else if (diff > 3.5 && diff < 5) {
            $('#total_days').val('Second half leave');
        } else if (diff > 5) {
            $('#total_days').val(toWords(diffDays) + 'days leave');
        }
    } else {
        if (diffDays > 1) {
            $('#total_days').val(toWords(diffDays) + 'days leave');
        } else {
            $('#total_days').val(toWords(diffDays) + 'day leave');
        }
    }
});


// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['', 'thousand', 'million', 'billion', 'trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'Please select both days ';
    var x = s.indexOf('.');
    if (x == -1) x = s.length;
    if (x > 15) return 'too big';
    var n = s.split('');
    var str = '';
    var sk = 0;
    for (var i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) {
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk) str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ');
}


$(document).on('change', '.leave_type', function () {
    var showLeaveCount = $('#show-leave-count');
    var leaveTypeId = $('.leave_type').val();
    var token = $('#token').val();
    var userId = $('#user_id').val();
    $.post('/get-leave-count', {
        'leaveTypeId': leaveTypeId,
        '_token': token,
        'userId': userId
    }, function (data) {
        parsed = JSON.parse(data);
        showLeaveCount.empty();
        var html = "<div class=' col-md-5 alert alert-dark center-block '>Leaves &nbsp Remaining : " + parsed + "</div>";
        showLeaveCount.append(html);

    });

});

$('.approveClick').click(function () {
    alert("s");
    var leaveId = $(this).data('id');
    var type = $(this).data('name');
    var token = $('#token').val();
    $('#leave_id').val(leaveId);
    $('#type').val(type);
    $('#remarkModal').modal('show');

});

$('#proceed-button').click(function () {
    $('#loader').removeClass('hidden');
    console.log('please wait processing...');
    var remarks = $('#remark-text').val();
    var type = $('#type').val();
    console.log('remarks ' + remarks);
    var leave_id = $('#leave_id').val();
    var token = $('#token').val();
    var message = '';
    var divClass = 'alert-success';
    var url = '/approve-leave';
    var buttonText = 'Approved';
    var buttonClass = 'btn-success';
    var buttonIcon = 'fa-check';

    if (type == 'approve') {
        message = 'Successfully Approved';
    } else {
        message = 'Leave Rejected';
        divClass = 'alert-danger';
        url = '/disapprove-leave';
        buttonText = 'Disapproved';
        buttonClass = 'btn-danger';
        buttonIcon = 'fa-times';
    }

    $.post(url, {
        'leaveId': leave_id,
        'remarks': remarks,
        '_token': token
    }, function (data) {
        var parsed = JSON.parse(data);
        console.log(data);
        if (parsed === 'success') {
            $('#loader').addClass('hidden');
            var statusmessage = $('#status-message');
            statusmessage.append("<div class='alert " + divClass + "'>" + message + "</div>");
            statusmessage.removeClass('hidden');
            var remarks_div = $('#remark-' + leave_id);
            remarks_div.append(remarks);
            var leavebutton = $('#button-' + leave_id);
            leavebutton.empty();
            leavebutton.append("<button type='button' class='btn " + buttonClass + " br2 btn-xs fs12' aria-expanded='false'><i class='fa " + buttonIcon + "'>" + buttonText + "</i> </button>");
            setTimeout(function () {
                $('#remarkModal').modal('hide');
            }, 4000);


        }
    });

});

$('.disapproveClick').click(function () {
    var leaveId = $(this).data('id');
    var token = $('#token').val();
    $('#leave_id').val(leaveId);
    $('#remarkModal').modal('show');

});


/*$('#proceed-button').click(function(){
 $('#loader').removeClass('hidden');
 console.log('please wait processing...');
 var remarks = $('#remark-text').val();
 console.log('remarks ' + remarks);
 var leave_id = $('#leave_id').val();
 var token = $('#token').val();

 console.log('leave id ' + leave_id);
 $.post('/disapprove-leave', {'leaveId': leave_id, 'remarks' : remarks, '_token' : token}, function(data)
 {
 var parsed = JSON.parse(data);
 if(parsed === 'success')
 {
 $('#loader').addClass('hidden');
 $('#status-message2').removeClass('hidden');
 var remarks_div = $('#remark-'+leave_id);
 remarks_div.append(remarks);
 var leave_button = $('#button-'+leave_id);
 leave_button.empty();
 leave_button.append("<button type='button' class='btn btn-success br2 btn-xs fs12' aria-expanded='false'><i class='fa fa-check'> Disapproved </i> </button>");
 setTimeout(function() {
 $('#remarkModal2').modal('hide');
 },4000);


 }
 });
 });*/


$('#passwordForm').submit(function (event) {
    event.preventDefault();
    var old_password = $('#old_password').val();
    var new_password = $('#new_password').val();
    var confirm_password = $('#confirm_password').val();

    if (new_password != confirm_password) {
        alert('New password and confirm password does not match');
        return false;
    }
    document.getElementById("passwordForm").submit();

});

$('#create-event').click(function () {
    $('#status-section').removeClass('hidden');
    var name = $('#event_name').val();
    var coordinator = $('#event_cordinater').val();
    var attendees = $('#event_attendees').val();
    var date = $('#date_time').val();
    var message = $('#event_description').val();
    var token = $('#token').val();

    $.post('create-event', {
        'name': name,
        'coordinator': coordinator,
        'attendees': attendees,
        'date': date,
        'message': message,
        '_token': token
    }, function (data) {
        $('#status-section').addClass('hidden');
        $('#message-section').removeClass('hidden');
        var parsed = JSON.parse(data);

        if (parsed === 'success') {
            alert(parsed);
        }
    });

});

$('#create-meeting').click(function () {
    $('#status-section').removeClass('hidden');
    var name = $('#meeting_name').val();
    var coordinator = $('#meeting_cordinater').val();
    var attendees = $('#meeting_attendees').val();
    var date = $('#date_time').val();
    var message = $('#meeting_description').val();
    var token = $('#token').val();

    $.post('create-meeting', {
        'name': name,
        'coordinator': coordinator,
        'attendees': attendees,
        'date': date,
        'message': message,
        '_token': token
    }, function (data) {
        $('#status-section').addClass('hidden');
        $('#message-section').removeClass('hidden');
        var parsed = JSON.parse(data);
        if (parsed === 'success') {
            alert(parsed);
        }
    });

});

$(document).on('change', '#qualification', function () {
    var value = $('.qualification_select').val();
    if (value == 'Other') {
        $('.qualification_text').removeClass('hidden');
    } else if (value != 'Other') {
        $('.qualification_text').addClass('hidden');
    }
});

$(document).on('change', '#probation_period', function () {
    var value = $('.probation_select').val();
    if (value == 'Other') {
        $('.probation_text').removeClass('hidden');
    } else if (value != 'Other') {
        $('.probation_text').addClass('hidden');
    }
});


function DropDownChanged(oDDL) {
    var oTextbox = oDDL.form.elements["qualification_text"];
    if (oTextbox) {
        oTextbox.style.display = (oDDL.value == "") ? "" : "none";
        if (oDDL.value == "")
            oTextbox.focus();
    }
}

function FormSubmit(oForm) {
    var oHidden = oForm.elements["qualification"];
    var oDDL = oForm.elements["qualification_list"];
    var oTextbox = oForm.elements["qualification_text"];
    if (oHidden && oDDL && oTextbox)
        oHidden.value = (oDDL.value == "") ? oTextbox.value : oDDL.value;
}


/*
 var number = 10;

 function doStuff() {
 number = number +10;
 $('.progress-bar').attr('aria-valuenow', number).css('width',number);
 }*/


$('.showModal').click(function () {
    var info = $(this).data('info');
    var employee_id = info[0];
    var employee_name = info[1];
    var bank_name = info[2];
    var account_number = info[3];
    var ifsc_code = info[4];
    var pf_account_number = info[5];

    $('#employee_name').val(employee_name);
    $('#bank_name').val(bank_name);
    $('#account_number').val(account_number);
    $('#ifsc_code').val(ifsc_code);
    $('#pf_account_number').val(pf_account_number);
    $('#emp_id').val(employee_id);
    $('#bankModal').modal('show');
});

$('#update-bank-account-details').click(function () {
    swal(
        "Please wait while we process your request"
    );

    var employee_id = $('#emp_id').val();
    var employee_name = $('#employee_name').val();
    var bank_name = $('#bank_name').val();
    var account_number = $('#account_number').val();
    var ifsc_code = $('#ifsc_code').val();
    var pf_account_number = $('#pf_account_number').val();
    var token = $('#token').val();

    console.log(account_number)

    $.post('/update-account-details', {
        'employee_id': employee_id,
        'employee_name': employee_name,
        'bank_name': bank_name,
        'account_number': account_number,
        'ifsc_code': ifsc_code,
        'pf_account_number': pf_account_number,
        '_token': token
    }, function (data) {
        var parsed = JSON.parse(data);

        if (parsed == 'success') {
            swal({
                    title: "Success!",
                    text: "Bank Details Successfully updated!",
                    type: "success",
                    confirmButtonText: "OK",
                    allowEscapeKey: true,
                    allowOutsideClick: true
                },
                function () {
                    location.reload(true);
                });
        } else {
            swal({
                    title: "Error!",
                    text: "Sorry, details not update!",
                    type: "error",
                    confirmButtonText: "",
                    allowEscapeKey: true,
                    allowOutsideClick: true
                },
                function () {
                    location.reload(true);
                });
        }
    });
});

$(document).on('change', '#promotion_emp_id', function () {

    var oldDesignation = $('#old_designation');
    var oldSalary = $('#old_salary');
    var emp_id = $('#promotion_emp_id').val();
    var token = $('#token').val();

    $.post('/get-promotion-data', {
        'employee_id': emp_id,
        '_token': token
    }, function (data) {
        var parsed = JSON.parse(data);
        if (parsed.status == 'success') {
            oldDesignation.val('');
            oldDesignation.val(parsed.data.designation);
            oldSalary.val('');
            oldSalary.val(parsed.data.salary);
        } else {

        }
    });
});

$('#post-update').click(function () {
    var postUpdate = $('#post-update');
    $('#post-button').css('padding-left', '80%');
    postUpdate.val('Posting...');
    var status = $('#status').val();
    var token = $('meta[name=csrf_token]').attr("content");
    $.post('/status-update', {
        'status': status,
        '_token': token
    }, function (data) {
        var parsed = JSON.parse(data);
        if (parsed.status) {
            $('.append-post').prepend(parsed.html);
        }
        $('#post-button').css('padding-left', '90%');
        postUpdate.val('Post');
    });
});

$('.post-reply').click(function () {
    var postId = $(this).data('post_id');
    var postUpdate = $('.post-reply');
    $('.reply-button').css('padding-left', '75%');
    postUpdate.val('Replying...');
    var reply = $('.reply');
    var token = $('meta[name=csrf_token]').attr("content");
    $.post('/post-reply', {
        'reply': reply.val(),
        'post_id': postId,
        '_token': token
    }, function (data) {
        var parsed = JSON.parse(data);
        if (parsed.status) {
            $('.container-for-reply-' + postId).append(parsed.html);
        }
        reply.val('');
        $('.reply-button').css('padding-left', '80%');
        postUpdate.val('Reply');
    });
});


$('#code').blur(function () {
    var code = $(this).val();
    var codeGroup = $('.code-group');

    $.get('/validate-code/' + code, function (data) {
        var parsed = JSON.parse(data);
        if (parsed.status) {
            $('.btn-info').removeAttr('disabled');
            codeGroup.removeClass('has-error');
            codeGroup.addClass('has-success');
        } else {
            $('.save-client').attr('disabled', 'disabled');
            codeGroup.removeClass('has-success');
            codeGroup.addClass('has-error');
        }
    });
});



$(document).ready(function () {
    $('#get_emp').on('keyup', function () {
        var value = $(this).val();
        $.ajax({
            url: "/search",
            type: "GET",
            data: {
                'name': value
            },
            success: function (data) {
                $("#emp_list").html(data)
            }
        });

    });

    $('#get_emp1').on('keyup', function () {
        var value = $(this).val();
        $.ajax({
            url: "/search-employee",
            type: "GET",
            data: {
                'name': value
            },
            success: function (data) {
                console.log(data);
                $("#emp_list1").html(data)
            }
        });

    });



    $("#datepicker9").on("change", function () {
        var selected = $(this).val();
        console.log(selected);

        $("#notice_date").change(function () {
            let days = $(this).val();
            var myInt = parseInt(days);
            console.log(myInt);
            var one_date = get_date(selected);
            console.log(one_date);
            var newdate = new Date(one_date);
            console.log(newdate);
            newdate.setDate(newdate.getDate() + myInt);

            var dd = newdate.getDate();
            var mm = newdate.getMonth() + 1;
            var y = newdate.getFullYear();
            var someFormattedDate = dd + '-' + mm + '-' + y;
            console.log(someFormattedDate);

            $("#date1").val(someFormattedDate);


        });
    });

    $("#datepicker9").on("change", function () {
        var selected = $(this).val();
        var second_date = get_date(selected);

        let days = $('#notice_date').val();
        var myInt = parseInt(days);
        var newdate = new Date(second_date);
        newdate.setDate(newdate.getDate() + myInt);

        var dd = newdate.getDate();
        var mm = newdate.getMonth() + 1;
        var y = newdate.getFullYear();
        var someFormattedDate = dd + '-' + mm + '-' + y;
        // console.log(someFormattedDate);

        $("#date1").val(someFormattedDate);
    });

});

$(document).on('click', '#emp_list li', function () {
    var value = $(this).text();
    $('#get_emp').val(value);
    $("#emp_list").html("")
});

$(document).on('click', '#emp_list1 li', function () {
    var value = $(this).text();
    $('#get_emp1').val(value);
    $("#emp_list1").html("")
});


$(document).change(function () {
    $(document).on('click', 'li', function () {
        var value = $(this).text();
        // console.log(value);

        if (value == "") {
            var value = $("#get_emp").val();
        }
        $.ajax({
            url: "/search1",
            type: "GET",
            data: {
                'name': value
            },
            success: function (data) {
                var obj = jQuery.parseJSON(data);
                $("#emp_design").val(obj.role);
                $("#emp_email").val(obj.email);
                $("#emp_id").val(obj.id);

            }
        });

    });
});


// $("#datepicker9").on("change", function () {
//     var selected = $(this).val();
//     var second_date = moment(selected).format('DD/MM/YYYY');


//     $("#notice_date").change(function () {
//         let days = $(this).val();
//         var myInt = parseInt(days);

//         var newdate = new Date(second_date);
//         // console.log(newdate);

//         newdate.setDate(newdate.getDate() + myInt);

//         var dd = newdate.getDate();
//         var mm = newdate.getMonth() + 1;
//         var y = newdate.getFullYear();
//         var someFormattedDate = dd + '-' + mm + '-' + y;
//         // console.log(someFormattedDate);

//         $("#date1").val(someFormattedDate);


//     });
// });


$("#datepicker9").datepicker({
    prevText: '<i class="fa fa-chevron-left"></i>',
    nextText: '<i class="fa fa-chevron-right"></i>',
    showButtonPanel: false,
    dateFormat: 'dd-mm-yy',
    beforeShow: function (input, inst) {
        var newclass = 'allcp-form';
        var themeClass = $(this).parents('.allcp-form').attr('class');
        var smartpikr = inst.dpDiv.parent();
        if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
        }
    }
});

$("#date1").datepicker({
    prevText: '<i class="fa fa-chevron-left"></i>',
    nextText: '<i class="fa fa-chevron-right"></i>',
    showButtonPanel: false,
    dateFormat: 'dd-mm-yy',
    beforeShow: function (input, inst) {
        var newclass = 'allcp-form';
        var themeClass = $(this).parents('.allcp-form').attr('class');
        var smartpikr = inst.dpDiv.parent();
        if (!smartpikr.hasClass(themeClass)) {
            inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
        }
    }
});




$('#program').on('click', function () {
    var value = $(this).val();
    console.log(value);
    $.ajax({
        url: "/search_program",
        type: "GET",
        data: {
            'name': value
        },
        success: function (data) {
            console.log(data);
            var obj = jQuery.parseJSON(data);
            console.log(obj.date_from);
            $("#description").val(obj.description);
            $("#datepicker1").val(obj.date_from);
            $("#datepicker4").val(obj.date_to);

        }
    });

});

$(document).on('change', '#lecture', function () {

    var value = $('#lecture').val();
    console.log(value);
    if (value == 'single') {
        $("#days").css({
            "display": "none"
        });
        $("#date_to").css({
            "display": "none"
        });
        $("#done").removeAttr('required');
        $("#datepicker4").removeAttr('required');

    }
    if (value == 'weekly') {
        $("#days").css({
            "display": "block"
        });
        $("#date_to").css({
            "display": "block"
        });
        $("#done").attr('required', true);
        $("#datepicker4").attr('required', true);

    }
});



$('.addvalue').on('click', function () {
    var item = $(this).closest("tr") // Finds the closest row <tr> 
        .find("#name") // Gets a descendent with class="nr"
        .text();
    var value = $(this).closest("tr") // Finds the closest row <tr> 
        .find(".number") // Gets a descendent with class="nr"
        .val();
    $.ajax({
        url: "/add-employees-leaves",
        type: "GET",
        data: {
            'name': item,
            'value': value,
            'button': 'add'
        },
        success: function (data) {
            console.log(data);
            window.location.reload();
        }
    });

});

$('.reset').on('click', function () {
    var item = $(this).closest("tr") // Finds the closest row <tr> 
        .find("#name") // Gets a descendent with class="nr"
        .text();
    $.ajax({
        url: "/add-employees-leaves",
        type: "GET",
        data: {
            'name': item
        },
        success: function (data) {
            console.log(data);
            window.location.reload();
        }
    });

});


$('#leavetype').on('click', function () {
    var value = $(this).val();
    // console.log(value);
    datepicker1.on('change', function () {
        var date = $(this).val();
        console.log(date);

        $.ajax({
            url: "/search_leaves_type",
            type: "GET",
            data: {
                'name': value,
                'date': date
            },
            success: function (data) {
                console.log(data);
                var obj = jQuery.parseJSON(data);
                console.log(obj.date_from);
                $("#datepicker4").val(obj.data);
                $("#total_days").val(obj.description);
                // $("#datepicker4").val(data);
                // $('#total_days').val('one hundred eighty one days leave');
            }
        });
    });
});


$("#leavetype").on("change", function () {
    $("#datepicker1").val("");
    $("#datepicker4").val("");
    $("#total_days").val("");
    $("#textarea1").val("");
});



$(document).ready(function () {
    const togglePassword = document.querySelector("#toggle1");
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    });
});
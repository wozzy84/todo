document.addEventListener('DOMContentLoaded', function () {
    let counter = 1;

    $(".btn_add").on("click", function () {
        const newTask = $(".text_input").val();
        const template = `<li class="list_element">
     <div class="list_element_left">
        <span class="list_nth">${counter}</span><p class="editable_par"> ${newTask}</p>
     </div>
     <div class="icon_container">
        <button class="btn_icon edit"><i class="fa fa-pencil ico_edit" aria-hidden="true"></i></button>
        <button class="btn_icon delete"><i class="fa fa-trash ico_delete" aria-hidden="true"></i></button>
     </div></li>`
        if (newTask == "") {
            $(".text_input").focus()
        } else {
            counter++
            $('.task_list').append(template);
            $(".text_input").val('');
        }

    })

    $(".btn_remove").on("click", function () {
        $('.list_element').last().remove();
        counter = $(".list_element").length + 1

    })

    $(".btn_clear").on("click", function () {
        $('.task_list').children().remove();
        $(".text_input").val('');
        counter = 1;
    })

    $('.task_list').on("click", ".edit", function (e) {
        if ($(this).find('.ico_edit').hasClass('fa-pencil')) {
            $(this).closest('li').find('p').attr('contentEditable', true);
            $(this).closest('li').find('p').css('background', 'white');
            $(this).closest('li').find('p').css('color', 'dodgerblue');
            $(this).find('.ico_edit').removeClass('fa-pencil');
            $(this).find('.ico_edit').addClass('fa-floppy-o')
        } else {
            $(this).closest('li').find('p').attr('contentEditable', false);
            $(this).closest('li').find('p').css('background', 'dodgerblue');
            $(this).closest('li').find('p').css('color', 'white');
            $(this).find('.ico_edit').removeClass('fa-floppy-o');
            $(this).find('.ico_edit').addClass('fa-pencil')
        }

    })

    $(".task_list").on('click', ".delete", function () {
        $(this).closest('li').remove();
        counter--;
        $(".list_element").toArray().map(function (el, index) {
            $(el).find(".list_nth").text(index + 1);
        })

    })

});
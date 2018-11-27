<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
        <div id="vue-app"></div>



        <script>
            window.localStorage.setItem('passportToken', JSON.stringify({!! session('passportToken') !!}));
            window.myToken =  <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>

            console.log(window.localStorage.getItem('passportToken'))
        </script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>

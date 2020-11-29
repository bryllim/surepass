<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Surepass | Landing Page</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">



  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"> 

  <!-- Template Main CSS File -->
  <link href="{{ asset('/surepass/vendor/fontawesome-free/css/font-awesome.min.css') }}" rel="stylesheet">
  <link href="{{ asset('/surepass/vendor/landing/ionicons/css/ionicons.min.css') }}" rel="stylesheet">
  <link href="{{ asset('/surepass/vendor/landing/css/style.css') }}" rel="stylesheet"> 
  <link href="{{ asset('/surepass/css/sb-admin-2.min.css') }}" rel="stylesheet">

</head>
<body>
    <div id="root"></div>

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

    <!-- Vendor JS Files -->
    <script src="{{ asset('/surepass/vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('/surepass/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('/surepass/vendor/jquery-easing/jquery.easing.min.js') }}"></script>
    <script src="{{ asset('/surepass/vendor/landing/isotope-layout/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('/surepass/vendor/landing/counterup/counterup.min.js') }}"></script>
    <script src="{{ asset('/surepass/vendor/landing/waypoints/jquery.waypoints.min.js') }}"></script>

    <!-- Main JS File -->
    <script src="{{ asset('js/app.js') }}"></script>
    
    <!-- Landing JS File -->
    <script src="{{ asset('/surepass/vendor/landing/js/main.js') }}"></script>

    <script type="text/javascript"  src=" https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script> 
    <script>
      $(document).ready(function() {
        $('#example').DataTable({
          "processing": true,
          "serverSide": true,
          buttons: [
          { extend: 'copy', text: 'Copy to clipboard' }
      ]
      });
  } );
    </script>

</body>
</html>

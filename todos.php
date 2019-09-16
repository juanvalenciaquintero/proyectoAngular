<?php

$conex = mysqli_connect('localhost', 'estadis3_juan', '42180200', 'estadis3_1');

if (isset($_GET['valor']) && $_GET['valor']==='1')
{

  //$sql = mysqli_query($conex,'SELECT id as userId, ugc as id, nuhsa as title, "false" as completed FROM datos_visitas_paliativos');
  $sql = mysqli_query($conex,'SELECT *  FROM datos_visitas_paliativos');

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }
  // $datos = trim($datos,',');
  // $datos .= ']';


  //echo $_GET['valor']*23;
  // $datos = '[
  //   {
  //     "userId": 23,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "userId": 24,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 3,
  //     "title": "fugiat veniam minus",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 6,
  //     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 7,
  //     "title": "illo expedita consequatur quia in",
  //     "completed": false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 8,
  //     "title": "quo adipisci enim quam ut ab",
  //     "completed": true
  //   },
  //   {
  //     "userId": 1,
  //     "id": 9,
  //     "title": "molestiae perspiciatis ipsa",
  //     "completed": false
  //   }
  // ]';

  //var_dump(json_decode($datos));

   //$salida =json_decode($datos);
   //var_dump($datos);
   echo json_encode($datos);
   //echo $datos;
  }
  
  if (isset($_GET['valor']) && $_GET['valor']==='2')
{

  //$sql = mysqli_query($conex,'SELECT id as userId, ugc as id, nuhsa as title, "false" as completed FROM datos_visitas_paliativos');
  $sql = mysqli_query($conex,'SELECT *  FROM datos_visitas_epoc');

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }
  echo json_encode($datos);
  
}

 if ((isset($_GET['epoc']) ) && ($_GET['epoc']==='1'))
{

  //$sql = mysqli_query($conex,'SELECT id as userId, ugc as id, nuhsa as title, "false" as completed FROM datos_visitas_paliativos');
  $sql = mysqli_query($conex,'SELECT *  FROM datos_visitas_epoc WHERE id=' . $_GET['id']);

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }
  echo json_encode($datos);
  
}

if (isset($_GET['paliativo']) && ($_GET['paliativo']==='1'))
{
    $sql = mysqli_query($conex,'SELECT *  FROM datos_visitas_paliativos WHERE id=' . $_GET['id']);

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }
  echo json_encode($datos);
  
}




  ?>
<?php

$conex = mysqli_connect('fdb26.awardspace.net', '3249384_estadisticas', '42180200Az', '3249384_estadisticas');

$datosPUT = fopen("php://input", "r");


if ($_SERVER['REQUEST_METHOD']==='PUT') {
  echo json_encode($datosPUT);
}

if (isset($_GET['valor']) && $_GET['valor']==='1')
{

  //$sql = mysqli_query($conex,'SELECT id as userId, ugc as id, nuhsa as title, "false" as completed FROM datos_visitas_paliativos');
  $sql = mysqli_query($conex,'SELECT DVP.id, DVP.nuhsa, DVP.fecha_visita, UGC.nombre as ugc, DVP.paliativo
                              FROM datos_visitas_paliativos DVP, ugc UGC
                              WHERE DVP.ugc = UGC.id');

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }

  //var_dump(json_decode($datos));

   //$salida =json_decode($datos);
   //var_dump($datos);
   echo json_encode($datos);
   //echo $datos;
  }

  if (isset($_GET['valor']) && $_GET['valor']==='2')
{

  //$sql = mysqli_query($conex,'SELECT id as userId, ugc as id, nuhsa as title, "false" as completed FROM datos_visitas_paliativos');
  $sql = mysqli_query($conex,'SELECT DVE.id, DVE.nuhsa, DVE.fecha_visita, UGC.nombre as ugc, DVE.tipo_epoc
                              FROM datos_visitas_epoc DVE, ugc UGC
                              WHERE DVE.ugc = UGC.id');

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
  $sql = mysqli_query($conex,'SELECT DVE.id, DVE.nuhsa, DVE.fecha_visita, UGC.nombre as ugc, DVE.tipo_epoc
                              FROM datos_visitas_epoc DVE, ugc UGC
                              WHERE id=' . $_GET['id'] .
                              ' AND DVE.ugc = UGC.id');

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
    $sql = mysqli_query($conex,'SELECT DVP.id, DVP.nuhsa, DVP.fecha_visita, UGC.nombre as ugc, DVP.paliativo
                                 FROM datos_visitas_paliativos DVP, ugc UGC
                                 WHERE id=' . $_GET['id'] .
                               ' AND DVP.ugc = UGC.id');

  $datos=array();
  while($fila =mysqli_fetch_object($sql) )
  {
   // $datos  .= '{"userId":' .  $fila->id . ',"id":' . $fila->enfermera . ',"title":"' . $fila->nuhsa . '",completed:false},';
   array_push($datos,$fila);
  }
  echo json_encode($datos);

}


  ?>

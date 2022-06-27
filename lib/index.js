import jp from 'jsonpath'

// TRAE EL ÚLTIMO DATO DE LA TEMPORALIDAD DE LA VELA SELECCIONADA

function GetLastDataCandle(json, id_market, candle){
    var path;
    var data_array;
    var data_length;
    var data;
  
    path = jp.query(json, "$..id_market")
  
    if(id_market == path){
      data_length = jp.query(json, "$.."+candle+".max_length");
      data_array = jp.query(json, "$.."+candle+".data_array[-1:]");
      data = {data_length: data_length[0], data_array}
      return data;
    }
    else{
      return "No se encontró el id_market";
    }
}
  
// TRAE EL DATO QUE DESEE DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
  
function GetOneDataCandle(json, id_market, candle, index){
    var path;
    var data_array;
    var data_length;
    var data;
  
    path = jp.query(json, "$..id_market")
  
    if(id_market == path){
      data_length = jp.query(json, "$.."+candle+".max_length");
      data_array = jp.query(json, "$.."+candle+".data_array["+index+"]");
      data = {data_length: data_length[0], data_array}
      return data;
    }
    else{
      return "No se encontró el id_market";
    }
}
  
// TRAE EL DATO ESPECÍFICO QUE DESEE DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
  
function GetDataAttrCandle(json, id_market, candle, index, name){
    var path;
    var data_array;
    var data_length;
    var ohlc;
  
    path = jp.query(json, "$..id_market")
  
    if(id_market == path){
      data_length = jp.query(json, "$.."+candle+".max_length");
      data_array = jp.query(json, "$.."+candle+".data_array["+index+"]."+name);
      ohlc = jp.query(json, "$.."+candle+".data_array["+index+"].ohlc."+name);
      if(data_array[0] == null){
        if(ohlc[0] != null){
          return ohlc;
        }
        else{
          return "No se encontró el dato en la temporalidad en la vela"
        }
      }
      else{
        return data_array;
      }
    }
    else{
      return "No se encontró el id_market";
    }
}
  
// TRAE EL DATO ESPECÍFICO DE LA ÚLTIMA VELA QUE DESEE DE LA TEMPORALIDAD
  
function GetLastDataAttrCandle(json, id_market, candle, name){
    var path;
    var data_array;
    var data_length;
    var ohlc;
  
    path = jp.query(json, "$..id_market")
  
    if(id_market == path){
      data_length = jp.query(json, "$.."+candle+".max_length");
      data_array = jp.query(json, "$.."+candle+".data_array[-1:]."+name);
      ohlc = jp.query(json, "$.."+candle+".data_array[-1:].ohlc."+name);
      if(data_array[0] == null){
        if(ohlc[0] != null){
          return ohlc;
        }
        else{
          return "No se encontró el dato en la temporalidad en la vela"
        }
      }
      else{
        return data_array;
      }
    }
    else{
      return "No se encontró el id_market";
    }
}
  
// TRAE LOS ÚLTIMOS 3 DATOS DE LA TEMPORALIDAD DE LA VELA SELECCIONADA
  
function GetThreeLastDataCandle(json, id_market, candle){
    var path;
    var data_array;
    var data_length;
    var data;
  
    path = jp.query(json, "$..id_market")
  
    if(id_market == path){
      data_length = jp.query(json, "$.."+candle+".max_length");
      data_array = jp.query(json, "$.."+candle+".data_array[-3:]");
      data = {data_length: data_length[0], data_array}
      return data;
    }
    else{
      return "No se encontró el id_market";
    }
}
const pool = require("../Index");

class DatabaseValue 
{

 
   DataRow  = async () => {
     
      try {
      
       const { rowCount } =await pool.query(
              
       "select distinct customer_name from ion_route_store_level irsl where route_env_id= 070164"
      
       );
      
       console.log(rowCount)
       return rowCount
    
     
      } catch (error) {
      
       console.error("error", error);
      
       throw new Error(error.message);
      
    }
      
      }

      Growth_Freshness  = async () => {

          try {
         
           const result=await pool.query(
                       
            "select growth from (select growth ,ROW_NUMBER ( )   OVER (  PARTITION BY route_env_id  order by load_fiscal_week_id desc ) as row1    from ion_route_level where route_env_id= '070164' ) as t where row1 =1"
            
            
           );       

           
           //console.log("Print     ",JSON.stringify(result.rows).charAt(12).concat('%')) ;
           //console.log("Print    --------------------- ", result.rows[0]['growth'].charAt(0)) ;
           
           console.log ( result.rows[0]['growth'].charAt(0).concat('%'))
           return result.rows[0]['growth'].charAt(0).concat('%')
         
         
          } catch (error) {
        
           console.error("error", error);
         
           throw new Error(error.message);
         
        }
         
          }
   
}

exports.DatabaseValue =new DatabaseValue() ;
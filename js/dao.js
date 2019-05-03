var dao = {
    createDataBaseIfNotExists  : ()=>{
        return new Promise((resolve,reject)=>{
            try{
                const sql_create = "CREATE localStorage DATABASE IF NOT EXISTS sales_management;";
                const sql_attach = "ATTACH localStorage DATABASE sales_management;";
                const sql_use = "USE sales_management;";
                alasql(sql_create);
                alasql(sql_attach);
                alasql(sql_use);
                resolve();
            }catch(e){
                reject(e)
            }
        })
        
        
    },
    createTablesIfNotExist : ()=>{
        return new Promise((resolve,reject)=>{
            try{
                const sql_create_products =
                "CREATE TABLE IF NOT EXISTS t_products (id INT, product_name STRING, price STRING)"
        
                const sql_create_order_info =
                "CREATE TABLE IF NOT EXISTS t_order_info(order_num INT, order_date DATE, total_amount INT," +
                " client_name STRING, post STRING, address STRING, tel STRING)"
        
                const sql_create_order_detail = 
                "CREATE TABLE IF NOT EXISTS t_order_detail(detail_id INT, order_num INT, product_id INT, quantity INT)"
        
                alasql(sql_create_products);
                alasql(sql_create_order_info);
                alasql(sql_create_order_detail);        
                resolve();
            }catch(e){
                reject(e)
            }
        })
    },
    insertProductsMasterDataIfNotExists : ()=>{
        return new Promise((resolve,reject)=>{
            try{
                const master_data = [
                    [{id:1,product_name:"PC",price:100000}],
                    [{id:2,product_name:"Printer",price:30000}]
                ]
                const sql_insert = "INSERT INTO t_products VALUES ?";
                for (var i = 0; i < master_data.length;i++){
                    alasql(sql_insert,master_data[i]);
                }
                              
                resolve();
            }catch(e){
                reject(e)
            }
        })
    },
    dropDatabase : ()=>{
        return new Promise((resolve,reject)=>{
            try{
                const sql_drop = "DROP localStorage DATABASE sales_management";
                alasql(sql_drop);
                resolve();
            }catch(e){
                reject(e)
            }
        })
    }
}
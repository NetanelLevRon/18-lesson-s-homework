using BOL;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace DAL
{
    public static class DbManager
    {

        private static string GetSqlConnection()
        {

            string connectionString = "Data Source=.;Initial Catalog=Northwind;Integrated Security=True";

            return connectionString;
        }

        public static List<Prodact> GetDbResults()
        {
            List<Prodact> resList = new List<Prodact>();


            try
            {
                using (SqlConnection sql = new SqlConnection(GetSqlConnection()))
                {
                    sql.Open();

                    SqlCommand query = new SqlCommand("SELECT * FROM Products AS P JOIN Categories AS C ON P.CategoryID = C.CategoryID", sql);
                    SqlDataReader reader = query.ExecuteReader();

                    while (reader.Read())
                    {
                        resList.Add(new Prodact
                        {
                            ProductIdD = (int) reader[0],
                            ProductName = reader[1].ToString(),
                            SupplierID = (Nullable<int>)Convert.ToInt16(reader[2]),
                            CutegoryID = (Nullable<int>)Convert.ToInt16(reader[3]),
                            QuantityPerUnit = reader[4].ToString(),
                            UnitPrice = (Nullable<decimal>)Convert.ToInt16(reader[5]),
                            UnitsInStock = (Nullable<int>)Convert.ToInt16(reader[6]),
                            UnitsOnOrder = (Nullable<int>)Convert.ToInt16(reader[7]),
                            ReorderLevel = (Nullable<int>)Convert.ToInt16(reader[8]),
                            Discontinued = (Nullable<bool>)Convert.ToBoolean(reader[9]),
                            CategoryName = reader[11].ToString()

                        });
                    }

                }

            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return resList;
        }



        //public static List<Category> GetDbResultsCat()
        //{
        //    List<Category> resListCat = new List<Category>();

        //    try
        //    {
        //        using (SqlConnection sql = new SqlConnection(GetSqlConnection()))
        //        {
        //            SqlCommand query = new SqlCommand("SELECT CategoryName FROM Categories", sql);
        //            SqlDataReader reader = query.ExecuteReader();

        //            while (reader.Read())
        //            {
        //                resListCat.Add(new Category
        //                {
        //                    CategortName = reader[0].ToString()
        //                });
        //            }
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        Console.WriteLine(ex.Message);
        //    }

        //    return resListCat;
        //}

    }
}

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

                    SqlCommand query = new SqlCommand("SELECT * FROM Prodacts", sql);
                    SqlDataReader reader = query.ExecuteReader();

                    while (reader.Read())
                    {
                        resList.Add(new Prodact
                        {
                            ProductIdD = (int)reader[0],
                            ProductName = reader[1].ToString(),
                            SupplierID = (int)reader[2],
                            CutegoryID = (int)reader[3],
                            QuantityPerUnit = reader[4].ToString(),
                            UnitPrice = (decimal)reader[5],
                            UnitsInStock = (int)reader[6],
                            UnitsOnOrder = (int)reader[7],
                            ReorderLevel = (int)reader[8],
                            Discontinued = (bool)reader[9]

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



        public static List<Category> GetDbResultsCat()
        {
            List<Category> resListCat = new List<Category>();

            try
            {
                using (SqlConnection sql = new SqlConnection(GetSqlConnection()))
                {
                    SqlCommand query = new SqlCommand("SELECT CategoryName FROM Categories", sql);
                    SqlDataReader reader = query.ExecuteReader();

                    while (reader.Read())
                    {
                        resListCat.Add(new Category
                        {
                            CategortName = reader[0].ToString()
                        });
                    }
                }
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return resListCat;
        }

    }
}

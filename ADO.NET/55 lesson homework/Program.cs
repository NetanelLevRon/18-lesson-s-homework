using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Customers
{
    class Program
    {
        static void Main(string[] args)
        {

            try
            {
                string connectionString = "Data Source=.;Initial Catalog=Northwind;Integrated Security=True";

                using (SqlConnection sql = new SqlConnection(connectionString))
                {
                    sql.Open();

                    SqlCommand command = new SqlCommand("SELECT CustomerId, CompanyName, Address, City, Region, Country  FROM Customers", sql);

                    SqlDataReader dataReader = command.ExecuteReader();

                    List<dynamic> listArr = new List<dynamic>();  // איך יוצרים מערך אנונימי 

                    while (dataReader.Read())
                    {
                        listArr.Add($" {dataReader[0]} {dataReader[1]} {dataReader[2]} {dataReader[3]} {dataReader[4]} {dataReader[5]}");
                    }

                    listArr.ToArray();

                    //foreach (var item in listArr)     
                    //{
                    //    Console.WriteLine(item);
                    //}
                }
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

        }
    }
}

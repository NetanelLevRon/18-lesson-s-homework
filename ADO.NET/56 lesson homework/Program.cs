using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddToArrWithWHERE
{
    class Program
    {
        static void Main(string[] args)
        {
           

            try
            {
                using (NorthwindEntities sql = new NorthwindEntities())
                {
                    var a = sql.Customers.Where(p => p.ContactName.ToLower().Contains("a"));

                    foreach (var item in a)
                    {
                        Console.WriteLine($"costomerID: {item.CustomerID},CompanyName: {item.CompanyName}, Address: {item.Address}, City: {item.City}, Region: {item.Region}, Country: {item.Country}");
                    }

                }


            }

            catch(Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}

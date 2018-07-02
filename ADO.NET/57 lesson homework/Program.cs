using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdateInDB;

namespace UpdateInDB
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                using(NorthwindEntities ef=new NorthwindEntities())
                {
                    var catEquProd = ef.Categories.Join(ef.Products,
                        equal => equal.CategoryID,
                        equalTo => equalTo.ProductID,
                        (eqal, equalTo) => new { Equal = equalTo, EqualTo = equalTo });

                    foreach (var item in catEquProd)
                    {
                        if (item.Equal.ProductName.Count() == item.EqualTo.Category.CategoryName.Count())
                        {
                            item.Equal.UnitPrice *= 0.9M;
                        }
                        ef.SaveChanges();
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}

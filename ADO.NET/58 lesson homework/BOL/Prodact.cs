using System;

namespace BOL
{
    public class Prodact
    {
        public int ProductIdD { get; set; }

        public string ProductName { get; set; }

        public Nullable<int> SupplierID { get; set; }

        public Nullable<int> CutegoryID { get; set; }

        public string QuantityPerUnit { get; set; }

        public Nullable<decimal> UnitPrice { get; set; }

        public  Nullable<int> UnitsInStock { get; set; }

        public Nullable<int> UnitsOnOrder { get; set; }

        public Nullable<int> ReorderLevel { get; set; }

        public Nullable<bool> Discontinued { get; set; }

        public string CategoryName { get; set; }


        public override string ToString()
        {
            return $"ProductIdD: {ProductIdD}, ProductName: {ProductName}, SupplierID: {SupplierID}, CutegoryID: {CutegoryID}, QuantityPerUnit: {QuantityPerUnit}, UnitPrice: {UnitPrice}, UnitsInStock: {UnitsInStock}, UnitsOnOrder: {UnitsOnOrder}, ReorderLevel: {ReorderLevel}, Discontinued: {Discontinued}";
        }

    }


}

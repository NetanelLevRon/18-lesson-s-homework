namespace BOL
{
    public class Prodact
    {
        public int ProductIdD { get; set; }

        public string ProductName { get; set; }

        public int SupplierID { get; set; }

        public int CutegoryID { get; set; }

        public string QuantityPerUnit { get; set; }

        public decimal UnitPrice { get; set; }

        public int UnitsInStock { get; set; }

        public int UnitsOnOrder { get; set; }

        public int ReorderLevel { get; set; }

        public bool Discontinued { get; set; }


        public override string ToString()
        {
            return $"ProductIdD: {ProductIdD}, ProductName: {ProductName}, SupplierID: {SupplierID}, CutegoryID: {CutegoryID}, QuantityPerUnit: {QuantityPerUnit}, UnitPrice: {UnitPrice}, UnitsInStock: {UnitsInStock}, UnitsOnOrder: {UnitsOnOrder}, ReorderLevel: {ReorderLevel}, Discontinued: {Discontinued}";
        }

    }


}

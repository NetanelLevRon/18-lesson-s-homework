namespace ShapeLib
{
    public abstract class Shape
    {
        #region PROPERTIES
        #region X Axis Position
        private double xAxisPosition;

        public double XAxisPosition
        {
            get { return xAxisPosition; }
            set { xAxisPosition = value; }
        }
        #endregion

        #region Y Axis Position
        private double yAxisPosition;

        public double YAxisPosition
        {
            get { return yAxisPosition; }
            set { yAxisPosition = value; }
        }
        #endregion

        #region Color
        private string color;

        public string Color
        {
            get { return color; }
            set { color = value; }
        }
        #endregion 
        #endregion

        #region FUNCTIONS
        #region Get Detales
        public virtual string GetDetales()
        {
            return $"X Axis Position: {XAxisPosition}\nY Axis Position: {YAxisPosition}\nColor: {Color}\n";
        }
        #endregion

        #region Abstract Functions
        public abstract double GetArea();

        public abstract double GetPerimeter();
        #endregion 
        #endregion

        #region Ctor
        public Shape()
        {

        }
        #endregion

    }
}

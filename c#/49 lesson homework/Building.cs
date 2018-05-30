namespace Construction
{
    abstract class Building
    {
        #region Ctor 
        // אם הבנתי נכון כשביקשת ליצור קונסטרקטור שמקבל ערכים ומצד שני שהיורש שלו לא מקבל ערכים
        public Building(int numOfFloorsArg = 11, bool isHaveElevatorArg = true)
        {
            NumOfFloors = numOfFloorsArg;
            IsHaveElevator = isHaveElevatorArg;
        }
        #endregion

        #region Number Of Floors
        private int numOfFloors;

        public int NumOfFloors
        {
            get { return numOfFloors; }
            set { numOfFloors = value; }
        }
        #endregion

        #region Is Have Elevator
        private bool isHaveElevator;

        public bool IsHaveElevator
        {
            get { return isHaveElevator; }
            set { isHaveElevator = value; }
        }
        #endregion

        #region Get Details Func
        public virtual string GetDetails()
        {
            return $"Number Of Floors: {NumOfFloors}.\nIs have An Elevator? {IsHaveElevator}.\n";
        } 
        #endregion

    }
}

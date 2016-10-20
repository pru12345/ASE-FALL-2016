import static org.junit.Assert.assertEquals;
public class foottest {
	
	
	foot f=new foot();
	int sum1=f.calfoot(100);
	int testsum1=300;
	public void testsum()
	{
		
		
		System.out.println("@calfoot:()"+sum1+ "=" +testsum1);
		assertEquals(sum1,testsum1);
	}
	

}

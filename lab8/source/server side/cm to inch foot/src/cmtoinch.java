/**
 * @author ry6d3
 *
 */
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;
 
@Path("/ftocservice")
public class FtoCService {
 

	  @Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertFtoCfromInput(@PathParam("f") double f) throws JSONException {
 
		JSONObject jsonObject = new JSONObject();
		double kg,gram;
		kg=(f*0.45);
		gram=(f*453.592);
		jsonObject.put("pounds",f);
		jsonObject.put("kgs",kg);
		jsonObject.put("Grams", gram);
		String result =  ""+ jsonObject;
		return Response.status(200).entity(result).build();
	  }
}
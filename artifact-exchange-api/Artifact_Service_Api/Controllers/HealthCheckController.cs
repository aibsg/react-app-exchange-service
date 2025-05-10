using Microsoft.AspNetCore.Mvc;

namespace Artifact_Service_Api.Controllers
{
    [ApiController]
    [Route("/")]
    public class HealthCheckController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new 
            {
                status = "API is running",
                timestamp = DateTime.UtcNow,
                environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development"
            });
        }
    }
}
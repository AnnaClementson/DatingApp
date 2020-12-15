using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        //Contract between itself and any class that impliments it
        string CreateToken(AppUser user);
    }
}
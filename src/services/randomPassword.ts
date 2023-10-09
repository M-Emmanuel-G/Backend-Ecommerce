import randomstring from 'randomstring'

export abstract class RandomPassword{
    static Generate(){
        return randomstring.generate(6)
    }
}
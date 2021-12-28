import { gql } from '@apollo/client';

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: Int!) {
    pokemons(filters: { pokemonId: { eq: $id } }) {
      data {
        id
        attributes {
          pokemonId
          name
          genus
          description
          weight
          height
          officialImage {
            data {
              attributes {
                url
              }
            }
          }
          status {
            hp
            attack
            defense
            speed
            specialAttack
            specialDefense
          }
          types {
            data {
              attributes {
                name
              }
            }
          }
          evolution_chain {
            data {
              attributes {
                fistStage {
                  pokemon {
                    data {
                      attributes {
                        pokemonId
                        name
                        types {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                        frontImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
                secondStage {
                  pokemon {
                    data {
                      attributes {
                        pokemonId
                        name
                        types {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                        frontImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
                thirdStage {
                  pokemon {
                    data {
                      attributes {
                        pokemonId
                        name
                        types {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                        frontImage {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
